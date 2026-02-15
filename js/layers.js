// نظام طبقات BIM
let bimLayers = {
  walls: { visible: true, elements: [], svg: null },
  electrical: { visible: true, elements: [], svg: null },
  plumbing: { visible: true, elements: [], svg: null },
  hvac: { visible: true, elements: [], svg: null }
};

let currentSceneId = null;
let bimData = null;

// تحميل البيانات
fetch('data/architectural.json')
  .then(res => res.json())
  .then(data => {
    bimData = data;
    console.log('✅ تم تحميل بيانات BIM:', bimData);
    
    // ربط عناصر SVG
    bimLayers.walls.svg = document.getElementById('walls-layer');
    bimLayers.electrical.svg = document.getElementById('electrical-layer');
    bimLayers.plumbing.svg = document.getElementById('plumbing-layer');
    bimLayers.hvac.svg = document.getElementById('hvac-layer');
    
    // إخفاء كل الطبقات مؤقتاً
    Object.keys(bimLayers).forEach(key => {
      if (bimLayers[key].svg) {
        bimLayers[key].svg.style.display = 'none';
      }
    });
    
    // إذا كان هناك مشهد حالي، حمّل بياناته
    if (currentSceneId) {
      loadLayersForScene(currentSceneId);
    }
  })
  .catch(err => {
    console.error('❌ خطأ في تحميل بيانات BIM:', err);
    // استخدام بيانات تجريبية في حالة الخطأ
    bimData = {
      scenes: {
        "0-startpoint": {
          walls: [
            { id: "demo-wall", name: "جدار تجريبي", path: "M200,200 L600,200 L600,400 L200,400 Z", color: "#ff0000" }
          ],
          electrical: [
            { id: "demo-electrical", name: "كهرباء تجريبي", path: "M300,300 L500,300", color: "#00ff00" }
          ]
        }
      }
    };
    console.log('⚠️ استخدام بيانات تجريبية');
  });

function loadLayersForScene(sceneId) {
  console.log('تحميل طبقات للمشهد:', sceneId);
  currentSceneId = sceneId;
  
  // إخفاء كل الطبقات أولاً
  Object.keys(bimLayers).forEach(key => {
    if (bimLayers[key].svg) {
      bimLayers[key].svg.innerHTML = '';
    }
  });
  
  if (!bimData || !bimData.scenes) {
    console.log('لا توجد بيانات للمشاهد');
    return;
  }
  
  // البحث عن بيانات المشهد
  const sceneData = bimData.scenes[sceneId];
  if (!sceneData) {
    console.log('لا توجد بيانات لهذا المشهد:', sceneId);
    return;
  }
  
  console.log('بيانات المشهد:', sceneData);
  
  // رسم كل طبقة
  renderLayer('walls', sceneData.walls);
  renderLayer('electrical', sceneData.electrical);
  renderLayer('plumbing', sceneData.plumbing);
  renderLayer('hvac', sceneData.hvac);
}

function renderLayer(layerName, elements) {
  if (!elements || !Array.isArray(elements) || elements.length === 0) {
    console.log(`لا توجد عناصر لطبقة ${layerName}`);
    return;
  }
  
  const layer = bimLayers[layerName];
  if (!layer || !layer.svg) {
    console.log(`طبقة ${layerName} غير موجودة`);
    return;
  }
  
  console.log(`رسم ${elements.length} عنصر في طبقة ${layerName}`);
  
  elements.forEach(element => {
    try {
      // إنشاء عنصر SVG
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', element.path);
      path.setAttribute('class', `${layerName}-path`);
      path.setAttribute('data-id', element.id);
      path.setAttribute('stroke', element.color || getDefaultColor(layerName));
      path.setAttribute('stroke-width', '4');
      path.setAttribute('fill', 'none');
      
      // إضافة تأثيرات تفاعلية
      path.addEventListener('mouseenter', (e) => {
        e.target.setAttribute('stroke-width', '6');
        e.target.style.filter = 'drop-shadow(0 0 5px white)';
      });
      
      path.addEventListener('mouseleave', (e) => {
        e.target.setAttribute('stroke-width', '4');
        e.target.style.filter = 'none';
      });
      
      path.addEventListener('click', (e) => {
        e.stopPropagation();
        showElementData(element);
      });
      
      layer.svg.appendChild(path);
      
      // إضافة نص تسمية إذا وجد
      if (element.name) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', getTextPosition(element.path).x);
        text.setAttribute('y', getTextPosition(element.path).y);
        text.setAttribute('fill', 'white');
        text.setAttribute('font-size', '14');
        text.setAttribute('stroke', 'black');
        text.setAttribute('stroke-width', '0.5');
        text.textContent = element.name;
        layer.svg.appendChild(text);
      }
      
    } catch(e) {
      console.warn(`خطأ في رسم عنصر:`, e);
    }
  });
  
  // إظهار الطبقة إذا كانت مفعلة
  if (layer.visible) {
    layer.svg.style.display = 'block';
  }
}

function getDefaultColor(layerName) {
  const colors = {
    walls: '#ff4444',
    electrical: '#44ff44',
    plumbing: '#4444ff',
    hvac: '#ffaa44'
  };
  return colors[layerName] || '#ffffff';
}

function getTextPosition(path) {
  // تحليل بسيط للحصول على موقع النص
  const matches = path.match(/M(\d+),(\d+)/);
  if (matches) {
    return { x: parseInt(matches[1]) + 10, y: parseInt(matches[2]) - 10 };
  }
  return { x: 100, y: 100 };
}

function toggleLayer(layerName) {
  const layer = bimLayers[layerName];
  if (!layer) return;
  
  layer.visible = !layer.visible;
  
  if (layer.svg) {
    layer.svg.style.display = layer.visible ? 'block' : 'none';
    console.log(`طبقة ${layerName} أصبحت ${layer.visible ? 'ظاهرة' : 'مخفية'}`);
  }
  
  // تحديث شكل الزر
  document.querySelectorAll(`[data-layer="${layerName}"]`).forEach(btn => {
    if (layer.visible) {
      btn.classList.add('active');
      btn.style.background = '#0066cc';
    } else {
      btn.classList.remove('active');
      btn.style.background = 'rgba(255,255,255,0.2)';
    }
  });
}

function showElementData(element) {
  const panel = document.getElementById('data-panel');
  const title = document.getElementById('panel-title');
  const content = document.getElementById('panel-content');
  
  title.textContent = element.name || element.id || 'عنصر BIM';
  
  let html = '<table style="width:100%; color:white; border-collapse: collapse;">';
  for (let key in element) {
    if (key !== 'path' && key !== '_el' && key !== 'color') {
      html += `<tr style="border-bottom: 1px solid #333;">`;
      html += `<td style="padding: 8px; font-weight: bold; color: #00ff00;">${key}:</td>`;
      html += `<td style="padding: 8px;">${element[key]}</td>`;
      html += `</tr>`;
    }
  }
  html += '</table>';
  
  content.innerHTML = html;
  panel.classList.add('visible');
}

// الاستماع لتغيير المشهد
window.addEventListener('sceneChanged', function(e) {
  if (e.detail && e.detail.scene) {
    loadLayersForScene(e.detail.scene.data.id);
  }
});

// تعريض الدوال للعالمية
window.toggleLayer = toggleLayer;
window.loadLayersForScene = loadLayersForScene;
