var APP_DATA = {
  "scenes": [
    {
      "id": "0-startpoint",
      "name": "StartPoint",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.09854376418617505,
        "pitch": 0.08682102996124996,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7536675703458187,
          "pitch": 0.24653091029344942,
          "rotation": 0,
          "target": "1-outercourtyard"
        },
        {
          "yaw": -0.18506597521933266,
          "pitch": 0.32859424233573264,
          "rotation": 0,
          "target": "2-entrance-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-outercourtyard",
      "name": "OuterCourtyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5450587338763775,
        "pitch": 0.33505361073452633,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5804040897726424,
          "pitch": 0.09174119027606054,
          "rotation": 0,
          "target": "0-startpoint"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance-ground-floor",
      "name": "Entrance-Ground-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.363006773840734,
          "pitch": 0.3438373205875447,
          "rotation": 0,
          "target": "0-startpoint"
        },
        {
          "yaw": -1.7159828076695192,
          "pitch": 0.3122878302997272,
          "rotation": 12.566370614359176,
          "target": "3-pool-view-1"
        },
        {
          "yaw": 0.07572904326281815,
          "pitch": 0.5054782050411468,
          "rotation": 0,
          "target": "5-hall-ground-view1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pool-view-1",
      "name": "Pool-View-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.4752564997881823,
        "pitch": 0.018306903487093962,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4510968198704415,
          "pitch": 0.2492795634538698,
          "rotation": 1.5707963267948966,
          "target": "4-pool-view-2"
        },
        {
          "yaw": -1.7791193774263654,
          "pitch": 0.3221026615168707,
          "rotation": 0,
          "target": "2-entrance-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pool-view-2",
      "name": "Pool-View-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.07716605472485583,
        "pitch": 0.1381681188395305,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9713830488588258,
          "pitch": 0.30571961653234325,
          "rotation": 0.7853981633974483,
          "target": "3-pool-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hall-ground-view1",
      "name": "Hall-Ground-View1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22392774351213163,
          "pitch": 0.35072353045748983,
          "rotation": 0,
          "target": "6-hall-ground-view2"
        },
        {
          "yaw": 2.829497514541213,
          "pitch": 0.49954372084674503,
          "rotation": 0,
          "target": "2-entrance-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hall-ground-view2",
      "name": "Hall-Ground-View2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.2712572502840551,
        "pitch": 0.11932462460677229,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2684273903434171,
          "pitch": 0.3059492567326618,
          "rotation": 0,
          "target": "7-hall-ground-view3"
        },
        {
          "yaw": -1.2299454406971755,
          "pitch": 0.4472920532183249,
          "rotation": 0,
          "target": "10-corridor1-ground"
        },
        {
          "yaw": -2.308312540576681,
          "pitch": 0.3470448369103849,
          "rotation": 0,
          "target": "5-hall-ground-view1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hall-ground-view3",
      "name": "Hall-Ground-View3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.07711503060111369,
        "pitch": 0.12399490121140033,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.19765405898791855,
          "pitch": 0.15848779637282995,
          "rotation": 0,
          "target": "6-hall-ground-view2"
        },
        {
          "yaw": 1.041267707766055,
          "pitch": 0.2794797553216597,
          "rotation": 0,
          "target": "8-kitchin-ground-view1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchin-ground-view1",
      "name": "kitchin-Ground-View1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.27208599309776993,
        "pitch": 0.1621949911794367,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.150511584827443,
          "pitch": 0.36406357709565995,
          "rotation": 0,
          "target": "7-hall-ground-view3"
        },
        {
          "yaw": -0.6139474635676834,
          "pitch": 0.5466911038731972,
          "rotation": 0,
          "target": "9-kitchin-ground-view2"
        },
        {
          "yaw": 1.0016095356871588,
          "pitch": 0.5056219905214707,
          "rotation": 0,
          "target": "12-livingroom-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kitchin-ground-view2",
      "name": "Kitchin-Ground-View2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.4779970809063183,
        "pitch": 0.2810112854885123,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1105769914327475,
          "pitch": 0.7039524167282636,
          "rotation": 0,
          "target": "8-kitchin-ground-view1"
        },
        {
          "yaw": 0.7804954272741718,
          "pitch": 0.5530499854617297,
          "rotation": 0,
          "target": "10-corridor1-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-corridor1-ground",
      "name": "Corridor1-Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.8296971860501152,
        "pitch": 0.17316634963842503,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7040164344788504,
          "pitch": 0.6177709655291608,
          "rotation": 0,
          "target": "9-kitchin-ground-view2"
        },
        {
          "yaw": 2.2582438264454625,
          "pitch": 0.4901692578275032,
          "rotation": 0,
          "target": "6-hall-ground-view2"
        },
        {
          "yaw": -0.9237466207888225,
          "pitch": 0.43659349178611606,
          "rotation": 0,
          "target": "11-corridor2-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-corridor2-ground",
      "name": "Corridor2-Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.007093346111339827,
        "pitch": -0.07323059538108723,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5292770342581186,
          "pitch": 0.4909694668682789,
          "rotation": 0,
          "target": "10-corridor1-ground"
        },
        {
          "yaw": 1.5869483651628524,
          "pitch": 0.49868846000914857,
          "rotation": 0,
          "target": "12-livingroom-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-livingroom-ground",
      "name": "LivingRoom-Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9464315986053577,
          "pitch": 0.4726824316816156,
          "rotation": 0,
          "target": "11-corridor2-ground"
        },
        {
          "yaw": 0.4291932956093518,
          "pitch": 0.32289743644539115,
          "rotation": 0,
          "target": "8-kitchin-ground-view1"
        },
        {
          "yaw": -1.1869927454745266,
          "pitch": 0.3811653658367824,
          "rotation": 0,
          "target": "13-corridor3-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-corridor3-ground",
      "name": "Corridor3-Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9643638033019766,
          "pitch": 0.41269918886333024,
          "rotation": 0,
          "target": "12-livingroom-ground"
        },
        {
          "yaw": 0.12510215330624064,
          "pitch": 0.4378915022507677,
          "rotation": 0,
          "target": "17-corridor5-ground-floor"
        },
        {
          "yaw": 1.7251695925234962,
          "pitch": 0.7266535419298403,
          "rotation": 0,
          "target": "24-stair-to-basement"
        },
        {
          "yaw": -1.3683551052195302,
          "pitch": 0.2460311159989068,
          "rotation": 0,
          "target": "14-corridor4-ground"
        },
        {
          "yaw": 1.311412462099172,
          "pitch": -0.05737910911386379,
          "rotation": 0,
          "target": "31-stair-to-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-corridor4-ground",
      "name": "Corridor4-Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9881834414783714,
          "pitch": 0.31662184343668187,
          "rotation": 0,
          "target": "13-corridor3-ground"
        },
        {
          "yaw": -2.249949303566492,
          "pitch": 0.41399757405987714,
          "rotation": 0,
          "target": "15-room1-ground-floor"
        },
        {
          "yaw": -0.19571274298841956,
          "pitch": 0.3483801673439402,
          "rotation": 0,
          "target": "16-atirum-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-room1-ground-floor",
      "name": "Room1-Ground-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7601063337797793,
          "pitch": 0.4010798629790777,
          "rotation": 0,
          "target": "14-corridor4-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-atirum-ground-floor",
      "name": "Atirum-Ground-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13506339306390736,
          "pitch": 0.29105230721167175,
          "rotation": 0,
          "target": "14-corridor4-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-corridor5-ground-floor",
      "name": "Corridor5-Ground-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9712382918937337,
          "pitch": 0.7165167534565953,
          "rotation": 5.497787143782138,
          "target": "13-corridor3-ground"
        },
        {
          "yaw": -1.5335438467398586,
          "pitch": 0.48479711705571127,
          "rotation": 0,
          "target": "20-bath-room-ground"
        },
        {
          "yaw": 0.06332426565530724,
          "pitch": 0.48599149745973236,
          "rotation": 0,
          "target": "19-room3-ground-floor"
        },
        {
          "yaw": 0.3743059875563688,
          "pitch": 0.6463347160523316,
          "rotation": 7.853981633974483,
          "target": "18-room2-ground-floor"
        },
        {
          "yaw": -0.23367355887470964,
          "pitch": 0.6055442450260564,
          "rotation": 4.71238898038469,
          "target": "21-landury-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-room2-ground-floor",
      "name": "Room2-Ground-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7465746782196376,
        "pitch": 0.3203838547922686,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7964928470485493,
          "pitch": 0.49191448717481023,
          "rotation": 0,
          "target": "17-corridor5-ground-floor"
        },
        {
          "yaw": 2.469502721603991,
          "pitch": 0.557939051892987,
          "rotation": 0,
          "target": "23-bath-room-room2-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-room3-ground-floor",
      "name": "Room3-Ground-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0715259017781733,
          "pitch": 0.5579655708477773,
          "rotation": 1.5707963267948966,
          "target": "17-corridor5-ground-floor"
        },
        {
          "yaw": 1.2486178397431278,
          "pitch": 0.5119164235415319,
          "rotation": 0,
          "target": "22-bath-room-room3-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bath-room-ground",
      "name": "BatH-Room-Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6768734453059384,
          "pitch": 0.4768365849290497,
          "rotation": 0,
          "target": "17-corridor5-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-landury-ground-floor",
      "name": "Landury-Ground-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13338809366690185,
          "pitch": 0.6332334289555135,
          "rotation": 0,
          "target": "17-corridor5-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bath-room-room3-ground",
      "name": "Bath-Room-Room3-Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.9955570688396236,
        "pitch": 0.1974884273388362,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.004690488011101834,
          "pitch": 0.5425435135180461,
          "rotation": 0,
          "target": "19-room3-ground-floor"
        },
        {
          "yaw": -2.882748822120922,
          "pitch": 0.336095666132886,
          "rotation": 1.5707963267948966,
          "target": "23-bath-room-room2-ground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bath-room-room2-ground",
      "name": "Bath-Room-Room2-Ground",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2052567291221017,
        "pitch": 0.17527838117523942,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.41597056291688794,
          "pitch": 0.4519312281287,
          "rotation": 4.71238898038469,
          "target": "22-bath-room-room3-ground"
        },
        {
          "yaw": 2.879663427855231,
          "pitch": 0.6492678751604029,
          "rotation": 0,
          "target": "18-room2-ground-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-stair-to-basement",
      "name": "Stair to Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.284966955616369,
          "pitch": -0.07477945025082988,
          "rotation": 0,
          "target": "13-corridor3-ground"
        },
        {
          "yaw": 0.42815845813610665,
          "pitch": 0.6196031648781712,
          "rotation": 0,
          "target": "25-corridor1-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-corridor1-basement",
      "name": "Corridor1-Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9881654769942259,
          "pitch": 0.0402106362325938,
          "rotation": 0,
          "target": "24-stair-to-basement"
        },
        {
          "yaw": -0.43755174322887846,
          "pitch": 0.5500161851872694,
          "rotation": 0,
          "target": "26-livingroom-basement"
        },
        {
          "yaw": 0.8963270042991933,
          "pitch": 0.5491092504067776,
          "rotation": 0,
          "target": "27-br-basement"
        },
        {
          "yaw": -2.2951500983063404,
          "pitch": 0.37397213734298695,
          "rotation": 0,
          "target": "28-corridor2-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-livingroom-basement",
      "name": "LivingRoom-Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4400500403700764,
          "pitch": 0.3349233726858003,
          "rotation": 0,
          "target": "25-corridor1-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-br-basement",
      "name": "B.R-Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.36885109245125847,
        "pitch": 0.1266060144300969,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18863948518386486,
          "pitch": 0.43167794707865426,
          "rotation": 0,
          "target": "25-corridor1-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-corridor2-basement",
      "name": "Corridor2-Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.979305278014901,
          "pitch": 0.3728040636834642,
          "rotation": 0,
          "target": "25-corridor1-basement"
        },
        {
          "yaw": 1.1624864414468217,
          "pitch": 0.4971509514668888,
          "rotation": 0,
          "target": "29-atirum-basement-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-atirum-basement-1",
      "name": "Atirum-Basement-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0402719622483385,
          "pitch": 0.35369908067112377,
          "rotation": 0,
          "target": "28-corridor2-basement"
        },
        {
          "yaw": 0.191826379515728,
          "pitch": 0.40288531731080823,
          "rotation": 0,
          "target": "30-atirum-basement-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-atirum-basement-2",
      "name": "Atirum-Basement-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1484295793529817,
          "pitch": 0.30370251817210203,
          "rotation": 0,
          "target": "29-atirum-basement-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-stair-to-first-floor",
      "name": "Stair To First-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2585610433918752,
          "pitch": 0.6070662217556695,
          "rotation": 0,
          "target": "13-corridor3-ground"
        },
        {
          "yaw": 0.7401572377336159,
          "pitch": -0.09269358981981135,
          "rotation": 0,
          "target": "32-corridor1-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-corridor1-first-floor",
      "name": "Corridor1-First-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.2589278323635344,
        "pitch": 0.3262090157884927,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.33875500877658027,
          "pitch": 0.582250144167201,
          "rotation": 0,
          "target": "31-stair-to-first-floor"
        },
        {
          "yaw": 1.3010908711964522,
          "pitch": 0.4447407209152665,
          "rotation": 0,
          "target": "33-corridor2-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-corridor2-first-floor",
      "name": "Corridor2-First-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.6398692950112874,
        "pitch": 0.3177722948823565,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.554439355735866,
          "pitch": 0.35219673241389593,
          "rotation": 0,
          "target": "32-corridor1-first-floor"
        },
        {
          "yaw": -1.6775115783451966,
          "pitch": 0.369210949941877,
          "rotation": 0,
          "target": "34-corridor3-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-corridor3-first-floor",
      "name": "Corridor3-First-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.203523799758333,
        "pitch": 0.1396563119659362,
        "fov": 1.5802512833679294
      },
      "linkHotspots": [
        {
          "yaw": 2.8446427228706597,
          "pitch": 0.3762615706061929,
          "rotation": 0,
          "target": "33-corridor2-first-floor"
        },
        {
          "yaw": -0.7015921048942175,
          "pitch": 0.6860640677800394,
          "rotation": 4.71238898038469,
          "target": "35-corridor4-first-floor"
        },
        {
          "yaw": -0.06413359043634514,
          "pitch": 0.5848377861949725,
          "rotation": 1.5707963267948966,
          "target": "40-outercourtyard1-first"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-corridor4-first-floor",
      "name": "Corridor4-First-Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.4415607954315739,
        "pitch": 0.06865368316977793,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.365190926678645,
          "pitch": 0.6360047773162822,
          "rotation": 1.5707963267948966,
          "target": "34-corridor3-first-floor"
        },
        {
          "yaw": 0.1915997966865728,
          "pitch": 0.37380700262790434,
          "rotation": 0,
          "target": "36-room-view1-firstfloor"
        },
        {
          "yaw": -1.2594814863249866,
          "pitch": 0.49102745503171263,
          "rotation": 0,
          "target": "38-br-firstfloor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-room-view1-firstfloor",
      "name": "Room-View1-FirstFloor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1814392854503044,
          "pitch": 0.514157908927185,
          "rotation": 0,
          "target": "37-room-view2-firstfloor"
        },
        {
          "yaw": -2.0735359620323237,
          "pitch": 0.4524023001432873,
          "rotation": 0,
          "target": "35-corridor4-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-room-view2-firstfloor",
      "name": "Room-View2-FirstFloor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.9648574621329216,
        "pitch": 0.14729335661878906,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1515936516521386,
          "pitch": 0.5235883842533333,
          "rotation": 0,
          "target": "36-room-view1-firstfloor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-br-firstfloor",
      "name": "B.R-FirstFLoor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0151860724337247,
          "pitch": 0.45363550132628916,
          "rotation": 0,
          "target": "35-corridor4-first-floor"
        },
        {
          "yaw": 0.22082861107510787,
          "pitch": 0.47097493671798674,
          "rotation": 0,
          "target": "39-laundry-firstfloor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-laundry-firstfloor",
      "name": "laundry-FirstFloor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.29174803878865774,
          "pitch": 0.49592323599966903,
          "rotation": 0,
          "target": "38-br-firstfloor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-outercourtyard1-first",
      "name": "OuterCourtyard1-First",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4385751962885571,
          "pitch": 0.516930092927252,
          "rotation": 0,
          "target": "41-outercourtyard2-first"
        },
        {
          "yaw": 3.000470159860078,
          "pitch": 0.4316013653919395,
          "rotation": 0,
          "target": "34-corridor3-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-outercourtyard2-first",
      "name": "OuterCourtyard2-First",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8156992113841834,
          "pitch": 0.49092873854199937,
          "rotation": 0,
          "target": "40-outercourtyard1-first"
        },
        {
          "yaw": 0.5145226105702623,
          "pitch": 0.41585298596464604,
          "rotation": 0,
          "target": "42-outercoutyard3-first"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-outercoutyard3-first",
      "name": "OuterCoutyard3-First",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.165812208559693,
        "pitch": 0.30058965288766615,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9623266065283538,
          "pitch": 0.39443778571077104,
          "rotation": 1.5707963267948966,
          "target": "41-outercourtyard2-first"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};