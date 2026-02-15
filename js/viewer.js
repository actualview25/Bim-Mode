// ملف viewer.js المعدل
let viewer;
let currentScene;
let scenes = [];
let appData;

function initBIMViewer() {
  // التحقق من وجود البيانات
  if (typeof APP_DATA === 'undefined') {
    console.error('APP_DATA غير موجود');
    return;
  }
  
  appData = APP_DATA;
  
  // تهيئة المشاهد
  initScenes();
  
  // إضافة مستمع لتغيير المشهد
  window.addEventListener('sceneChanged', function(e) {
    onSceneChanged(e.detail.scene);
  });
}

function initScenes() {
  const viewerElement = document.getElementById('viewer');
  viewer = new Marzipano.Viewer(viewerElement, {
    controls: {
      mouseViewMode: appData.settings ? appData.settings.mouseViewMode : 'drag'
    }
  });

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

    // إضافة نقاط الربط
    data.linkHotspots.forEach(function(hotspot) {
      const element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // إضافة نقاط المعلومات (BIM)
    data.infoHotspots.forEach(function(hotspot) {
      const element = createBIMHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  // عرض المشهد الأول
  if (scenes.length > 0) {
    switchToScene(scenes[0]);
  }

  // إعداد قائمة المشاهد
  populateSceneList();
}

function switchToScene(scene) {
  if (currentScene) {
    currentScene.scene.stopAnimation();
  }
  
  scene.scene.switchTo();
  currentScene = scene;
  
  // تحديث واجهة المستخدم
  document.querySelectorAll('#sceneList li').forEach(li => {
    li.classList.remove('current');
    if (li.getAttribute('data-id') === scene.data.id) {
      li.classList.add('current');
    }
  });
  
  // إرسال حدث تغيير المشهد
  window.dispatchEvent(new CustomEvent('sceneChanged', { detail: { scene: scene } }));
}

function createLinkHotspotElement(hotspot) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('hotspot', 'link-hotspot');

  const icon = document.createElement('img');
  icon.src = 'img/link.png';
  icon.classList.add('link-hotspot-icon');
  
  wrapper.appendChild(icon);
  
  wrapper.addEventListener('click', function() {
    const targetScene = scenes.find(s => s.data.id === hotspot.target);
    if (targetScene) {
      switchToScene(targetScene);
    }
  });

  return wrapper;
}

function createBIMHotspotElement(hotspot) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('hotspot', 'info-hotspot');
  
  const icon = document.createElement('img');
  icon.src = 'img/info.png';
  icon.classList.add('info-hotspot-icon');
  
  wrapper.appendChild(icon);
  
  wrapper.addEventListener('click', function() {
    showBIMData(hotspot);
  });

  return wrapper;
}

function populateSceneList() {
  const list = document.getElementById('scenesList');
  list.innerHTML = '';
  
  scenes.forEach(scene => {
    const li = document.createElement('li');
    li.textContent = scene.data.name;
    li.setAttribute('data-id', scene.data.id);
    li.addEventListener('click', () => switchToScene(scene));
    list.appendChild(li);
  });
}

function onSceneChanged(scene) {
  // تحديث طبقات BIM عند تغيير المشهد
  if (typeof loadLayersForScene === 'function') {
    loadLayersForScene(scene.data.id);
  }
}