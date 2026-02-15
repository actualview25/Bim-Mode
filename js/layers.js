// نظام طبقات BIM
let bimLayers = {
  walls: { visible: true, elements: [] },
  electrical: { visible: true, elements: [] },
  plumbing: { visible: false, elements: [] },
  hvac: { visible: false, elements: [] }
};

let currentSceneId = null;

// تحميل البيانات من architectural.json
fetch('data/architectural.json')
  .then(res => res.json())
  .then(data => {
    window.bimData = data;
    console.log('BIM data loaded:', data);
  })
  .catch(err => console.error('خطأ في تحميل بيانات BIM:', err));

function loadLayersForScene(sceneId) {
  currentSceneId = sceneId;
  
  if (!window.bimData) return;
  
  // تصفية العناصر حسب المشهد
  const sceneData = window.bimData.scenes ? window.bimData.scenes[sceneId] : null;
  
  if (sceneData) {
    updateLayersFromData(sceneData);
  }
}

function updateLayersFromData(sceneData) {
  // تحديث طبقة الجدران
  if (sceneData.walls) {
    renderWalls(sceneData.walls);
  }
  
  // تحديث طبقة الكهرباء
  if (sceneData.electrical) {
    renderElectrical(sceneData.electrical);
  }
  
  // تحديث طبقة السباكة
  if (sceneData.plumbing) {
    renderPlumbing(sceneData.plumbing);
  }
}

function renderWalls(wallsData) {
  const svg = document.getElementById('walls-layer');
  svg.innerHTML = '';
  
  wallsData.forEach(wall => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', wall.path);
    path.setAttribute('class', 'wall-path');
    path.setAttribute('data-id', wall.id);
    path.setAttribute('stroke', wall.color || '#ff0000');
    path.setAttribute('stroke-width', wall.strokeWidth || '3');
    path.setAttribute('fill', wall.fill || 'none');
    
    // إضافة حدث لعرض البيانات
    path.addEventListener('click', (e) => {
      e.stopPropagation();
      showElementData(wall);
    });
    
    svg.appendChild(path);
  });
}

function renderElectrical(electricalData) {
  const svg = document.getElementById('electrical-layer');
  svg.innerHTML = '';
  
  electricalData.forEach(item => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', item.path);
    path.setAttribute('class', 'electrical-path');
    path.setAttribute('data-id', item.id);
    path.setAttribute('stroke', item.color || '#00ff00');
    
    path.addEventListener('click', (e) => {
      e.stopPropagation();
      showElementData(item);
    });
    
    svg.appendChild(path);
  });
}

function renderPlumbing(plumbingData) {
  const svg = document.getElementById('plumbing-layer');
  svg.innerHTML = '';
  
  plumbingData.forEach(item => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', item.path);
    path.setAttribute('class', 'plumbing-path');
    path.setAttribute('stroke', item.color || '#0000ff');
    
    path.addEventListener('click', (e) => {
      e.stopPropagation();
      showElementData(item);
    });
    
    svg.appendChild(path);
  });
}

function showElementData(element) {
  const panel = document.getElementById('data-panel');
  const title = document.getElementById('panel-title');
  const content = document.getElementById('panel-content');
  
  title.textContent = element.name || element.id || 'عنصر BIM';
  
  let html = '<table style="width:100%; color:white;">';
  for (let key in element) {
    if (key !== 'path' && key !== '_el') {
      html += `<tr><td><strong>${key}:</strong></td><td>${element[key]}</td></tr>`;
    }
  }
  html += '</table>';
  
  content.innerHTML = html;
  panel.classList.add('visible');
}

// دوال التحكم في إظهار/إخفاء الطبقات
function toggleLayer(layerName) {
  const layer = bimLayers[layerName];
  if (layer) {
    layer.visible = !layer.visible;
    const svg = document.getElementById(`${layerName}-layer`);
    if (svg) {
      svg.style.display = layer.visible ? 'block' : 'none';
    }
    
    // تحديث حالة الزر
    document.querySelectorAll(`[data-layer="${layerName}"]`).forEach(btn => {
      if (layer.visible) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
}

// تعريض الدوال للعالمية
window.toggleLayer = toggleLayer;
window.loadLayersForScene = loadLayersForScene;