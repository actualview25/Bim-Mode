// ملف viewer.js المعدل
let viewer;
let currentScene = null;
let scenes = [];
let appData;

function initBIMViewer() {
  console.log('بدء تهيئة المشاهد...');
  
  // التحقق من وجود البيانات
  if (typeof APP_DATA === 'undefined') {
    console.error('APP_DATA غير موجود');
    return;
  }
  
  appData = APP_DATA;
  console.log('تم تحميل البيانات:', appData);
  
  // تهيئة المشاهد
  initScenes();
}

function initScenes() {
  const viewerElement = document.getElementById('viewer');
  
  // إعدادات المشاهد
  const viewerOpts = {
    controls: {
      mouseViewMode: appData.settings ? appData.settings.mouseViewMode : 'drag'
    }
  };

  // تهيئة المشاهد
  viewer = new Marzipano.Viewer(viewerElement, viewerOpts);

  // إنشاء المشاهد
  scenes = appData.scenes.map(function(data) {
    const urlPrefix = "tiles";
    const source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" }
    );
    
    const geometry = new Marzipano.CubeGeometry(data.levels);
    const limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    const view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);
    
    const scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // إضافة نقاط الربط (Link Hotspots)
    if (data.linkHotspots && data.linkHotspots.length > 0) {
      data.linkHotspots.forEach(function(hotspot) {
        try {
          const element = createLinkHotspotElement(hotspot);
          scene.hotspotContainer().createHotspot(element, { 
            yaw: hotspot.yaw, 
            pitch: hotspot.pitch 
          });
        } catch(e) {
          console.warn('خطأ في إضافة نقطة ربط:', e);
        }
      });
    }

    // إضافة نقاط المعلومات (Info Hotspots)
    if (data.infoHotspots && data.infoHotspots.length > 0) {
      data.infoHotspots.forEach(function(hotspot) {
        try {
          const element = createInfoHotspotElement(hotspot);
          scene.hotspotContainer().createHotspot(element, { 
            yaw: hotspot.yaw, 
            pitch: hotspot.pitch 
          });
        } catch(e) {
          console.warn('خطأ في إضافة نقطة معلومات:', e);
        }
      });
    }

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  console.log('تم إنشاء ' + scenes.length + ' مشهد');

  // عرض المشهد الأول
  if (scenes.length > 0) {
    switchToScene(scenes[0]);
  }

  // إعداد قائمة المشاهد
  populateSceneList();
  
  // إعداد أزرار التحكم
  setupControlButtons();
}

function switchToScene(scene) {
  if (!scene) return;
  
  console.log('التبديل إلى المشهد:', scene.data.name);
  
  // إيقاف أي حركة حالية
  if (viewer) {
    viewer.stopMovement();
  }
  
  // التبديل إلى المشهد الجديد
  scene.scene.switchTo();
  currentScene = scene;
  
  // تحديث واجهة المستخدم
  document.querySelectorAll('#sceneList li').forEach(li => {
    li.classList.remove('current');
    if (li.getAttribute('data-id') === scene.data.id) {
      li.classList.add('current');
    }
  });
  
  // تحديث اسم المشهد
  const sceneNameElement = document.querySelector('#titleBar .sceneName');
  if (sceneNameElement) {
    sceneNameElement.innerHTML = scene.data.name;
  }
  
  // إرسال حدث تغيير المشهد
  const event = new CustomEvent('sceneChanged', { detail: { scene: scene } });
  window.dispatchEvent(event);
}

function createLinkHotspotElement(hotspot) {
  const wrapper = document.createElement('div');
  wrapper.className = 'hotspot link-hotspot';

  const icon = document.createElement('img');
  icon.src = 'img/link.png';
  icon.className = 'link-hotspot-icon';
  icon.alt = 'انتقال';
  
  // إضافة تأثير الدوران إذا كان موجوداً
  if (hotspot.rotation) {
    icon.style.transform = 'rotate(' + hotspot.rotation + 'rad)';
  }
  
  wrapper.appendChild(icon);
  
  // إضافة اسم الوجهة كتلميح
  const targetScene = scenes.find(s => s.data.id === hotspot.target);
  if (targetScene) {
    wrapper.title = 'انتقال إلى: ' + targetScene.data.name;
  }
  
  wrapper.addEventListener('click', function(e) {
    e.stopPropagation();
    const targetScene = scenes.find(s => s.data.id === hotspot.target);
    if (targetScene) {
      switchToScene(targetScene);
    }
  });

  return wrapper;
}

function createInfoHotspotElement(hotspot) {
  const wrapper = document.createElement('div');
  wrapper.className = 'hotspot info-hotspot';
  
  const icon = document.createElement('img');
  icon.src = 'img/info.png';
  icon.className = 'info-hotspot-icon';
  icon.alt = 'معلومات';
  
  wrapper.appendChild(icon);
  
  if (hotspot.title) {
    wrapper.title = hotspot.title;
  }
  
  wrapper.addEventListener('click', function(e) {
    e.stopPropagation();
    showHotspotInfo(hotspot);
  });

  return wrapper;
}

function populateSceneList() {
  const list = document.getElementById('scenesList');
  if (!list) return;
  
  list.innerHTML = '';
  
  scenes.forEach(scene => {
    const li = document.createElement('li');
    li.textContent = scene.data.name;
    li.setAttribute('data-id', scene.data.id);
    li.addEventListener('click', () => switchToScene(scene));
    list.appendChild(li);
  });
  
  console.log('تم إنشاء قائمة المشاهد');
}

function setupControlButtons() {
  // زر قائمة المشاهد
  const sceneListToggle = document.getElementById('sceneListToggle');
  if (sceneListToggle) {
    sceneListToggle.addEventListener('click', function() {
      document.getElementById('sceneList').classList.toggle('visible');
    });
  }
  
  // زر التشغيل التلقائي
  const autorotateToggle = document.getElementById('autorotateToggle');
  if (autorotateToggle) {
    autorotateToggle.addEventListener('click', function() {
      if (viewer) {
        if (autorotateToggle.classList.contains('enabled')) {
          viewer.stopMovement();
          autorotateToggle.classList.remove('enabled');
        } else {
          startAutorotate();
          autorotateToggle.classList.add('enabled');
        }
      }
    });
  }
}

function startAutorotate() {
  if (!viewer) return;
  
  const autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI/2
  });
  
  viewer.startMovement(autorotate);
  viewer.setIdleMovement(3000, autorotate);
}

function showHotspotInfo(hotspot) {
  const panel = document.getElementById('data-panel');
  const title = document.getElementById('panel-title');
  const content = document.getElementById('panel-content');
  
  title.textContent = hotspot.title || 'معلومات';
  
  let html = '<div style="padding: 10px;">';
  html += '<p>' + (hotspot.text || 'لا توجد معلومات إضافية') + '</p>';
  html += '</div>';
  
  content.innerHTML = html;
  panel.classList.add('visible');
}

// تهيئة عند تحميل الصفحة
window.addEventListener('load', function() {
  if (typeof initBIMViewer === 'function') {
    setTimeout(initBIMViewer, 100); // تأخير بسيط للتأكد من تحميل كل شيء
  }
});
