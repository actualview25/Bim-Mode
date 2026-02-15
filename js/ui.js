// إعداد واجهة المستخدم
document.addEventListener('DOMContentLoaded', function() {
  
  // أزرار الطبقات
  document.querySelectorAll('.layer-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const layer = this.getAttribute('data-layer');
      toggleLayer(layer);
    });
  });
  
  // زر قائمة المشاهد
  const sceneListToggle = document.getElementById('sceneListToggle');
  if (sceneListToggle) {
    sceneListToggle.addEventListener('click', toggleSceneList);
  }
  
  // زر التشغيل التلقائي
  const autorotateToggle = document.getElementById('autorotateToggle');
  if (autorotateToggle) {
    autorotateToggle.addEventListener('click', toggleAutorotate);
  }
  
  // زر ملء الشاشة
  const fullscreenToggle = document.getElementById('fullscreenToggle');
  if (fullscreenToggle && screenfull.enabled) {
    fullscreenToggle.addEventListener('click', () => {
      screenfull.toggle();
    });
  }
  
  // تحسين التفاعل مع SVG
  document.querySelectorAll('#overlay svg').forEach(svg => {
    svg.addEventListener('click', (e) => {
      if (e.target === svg) {
        // نقر على الخلفية - إخفاء اللوحة
        document.getElementById('data-panel').classList.remove('visible');
      }
    });
  });
});

function toggleSceneList() {
  const list = document.getElementById('sceneList');
  list.classList.toggle('visible');
}

function toggleAutorotate() {
  // سيتم تنفيذها لاحقاً
  console.log('Autorotate toggle');
}