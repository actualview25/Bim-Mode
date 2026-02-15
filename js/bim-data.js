// بيانات BIM إضافية (يمكنك توسيعها)
const BIM_DATA = {
  scenes: {
    "0-startpoint": {
      walls: [
        {
          id: "wall-main-1",
          name: "جدار رئيسي",
          path: "M100,100 L300,100 L300,300 L100,300 Z",
          color: "#ff4444",
          thickness: "30cm",
          material: "خرسانة مسلحة",
          loadBearing: true
        }
      ],
      electrical: [
        {
          id: "circuit-1",
          name: "الدائرة الرئيسية",
          path: "M150,150 L250,150 L250,250",
          voltage: "220V",
          amperage: "20A",
          color: "#44ff44"
        }
      ],
      plumbing: [
        {
          id: "pipe-1",
          name: "ماسورة مياه",
          path: "M200,200 L200,300",
          diameter: "2inch",
          material: "PVC",
          color: "#4444ff"
        }
      ]
    }
    // أضف بيانات للمشاهد الأخرى هنا
  }
};

// دمج مع البيانات الموجودة
window.addEventListener('load', function() {
  if (!window.bimData) {
    window.bimData = BIM_DATA;
  } else {
    // دمج البيانات
    window.bimData.scenes = { ...BIM_DATA.scenes, ...window.bimData.scenes };
  }
});