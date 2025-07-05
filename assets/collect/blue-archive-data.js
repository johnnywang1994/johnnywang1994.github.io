((global) => {
  const data = [
  {
    title: "日奈",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/4/30/330671.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1400/h_927/829/157597/2025/4/29/291700.png",
  },
  {
    title: "日奈（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/4/30/34122.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_692/h_1111/829/157597/2025/4/30/100501.png",
  },
  {
    title: "日奈（礼服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/4/26/492647.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_968/h_1292/829/43637/2025/4/26/608184.png",
  },
  {
    title: "亚子",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/3/355541.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_350/h_1056/829/157597/2025/5/3/394025.png",
  },
  {
    title: "亚子（礼服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/3/472222.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_372/h_1243/829/157597/2025/5/3/299978.png",
  },
  {
    title: "伊织",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/3/475722.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_845/h_1024/829/157597/2025/5/3/715536.png",
  },
  {
    title: "伊织（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/157597/2025/5/4/275250.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_993/h_1286/829/157597/2025/5/4/173930.png",
  },
  {
    title: "伊吕波",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_480/h_540/829/43637/2025/5/9/642181.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_626/h_1120/829/43637/2025/5/9/612744.png",
  },
  {
    title: "伊吹",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/5/10/345004.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_648/h_1041/829/43637/2025/5/10/460912.png",
  },
  {
    title: "伊吹（礼服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/723695.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_483/h_974/829/399789/2024/4/16/117985.png",
  },
  {
    title: "皋月",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/5/10/308927.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_717/h_1500/829/43637/2025/5/10/926496.png",
  },
  {
    title: "千秋",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/5/10/704318.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_736/h_1324/829/43637/2025/5/10/242628.png",
  },
  {
    title: "阿露",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/5/10/757384.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1024/h_1024/829/43637/2025/5/10/198385.png",
  },
  {
    title: "阿露（正月）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_480/h_540/829/43637/2025/5/10/529985.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_707/h_1280/829/43637/2025/5/10/671351.png",
  },
  {
    title: "阿露（礼服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/737047/2025/5/9/1939.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_473/h_1346/829/737047/2025/5/9/983437.png",
  },
  {
    title: "睦月",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/737047/2025/5/10/263379.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1024/h_1024/829/737047/2025/5/10/985471.png",
  },
  {
    title: "睦月（正月）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_480/h_540/829/737047/2025/5/10/812471.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_663/h_1280/829/737047/2025/5/10/796777.png",
  },
  {
    title: "睦月（礼服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/390257.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_532/h_1080/829/399789/2024/4/15/400734.png",
  },
  {
    title: "佳代子",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/737047/2025/5/10/493731.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1024/h_1024/829/737047/2025/5/10/431670.png",
  },
  {
    title: "佳代子（正月）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/9/737635.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_567/h_1304/829/157597/2025/5/9/341970.png",
  },
  {
    title: "佳代子（礼服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/9/840556.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_447/h_1290/829/157597/2025/5/9/20710.png",
  },
  {
    title: "遥香",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/10/548616.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_365/h_1024/829/157597/2025/5/10/120244.png",
  },
  {
    title: "遥香（正月）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/10/608806.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_643/h_1285/829/157597/2025/5/10/463670.png",
  },
  {
    title: "晴奈",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/236746/2025/5/4/886544.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_634/h_1024/829/236746/2025/5/4/281934.png",
  },
  {
    title: "晴奈（体操服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/236746/2025/5/13/68536.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_945/h_1279/829/236746/2025/5/13/716721.png",
  },
  {
    title: "淳子",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/236746/2025/5/13/733822.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_637/h_1024/829/236746/2025/5/13/775426.png",
  },
  {
    title: "枫香（正月）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/11/893199.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_895/h_1280/829/157597/2025/5/11/732758.png",
  },
  {
    title: "枫香（私服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/180322.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1200/h_2600/829/492704/2025/1/26/133808.png",
  },
  {
    title: "濑名",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_480/h_540/829/157597/2025/5/12/329333.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_700/h_1275/829/157597/2025/5/12/521407.png",
  },
  {
    title: "濑名（私服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/12/7746.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1162/h_1600/829/157597/2025/5/12/637050.png",
  },
  {
    title: "霞",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/737047/2025/4/30/692848.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_856/h_1104/829/737047/2025/4/30/194538.png",
  },
  {
    title: "霞（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_469/h_469/829/43637/2025/6/24/522232.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1119/h_1221/829/43637/2025/6/24/693597.png",
  },
  {
    title: "绮良良",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/737047/2025/5/3/754666.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_663/h_1222/829/737047/2025/5/4/130295.png",
  },
  {
    title: "优香",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/737047/2025/5/3/390116.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1024/h_1024/829/737047/2025/5/3/667347.png",
  },
  {
    title: "优香（体操服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/737047/2025/5/4/635144.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_765/h_1215/829/737047/2025/5/4/78853.png",
  },
  {
    title: "优香（睡衣）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/737047/2025/5/4/104163.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_474/h_1192/829/737047/2025/5/4/902162.png",
  },
  {
    title: "诺亚",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/737047/2025/5/4/831181.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_708/h_1280/829/737047/2025/5/4/638418.png",
  },
  {
    title: "诺亚（睡衣）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/737047/2025/5/6/968014.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_421/h_1253/829/737047/2025/5/6/180749.png",
  },
  {
    title: "小雪",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/4/29/283188.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_889/h_1226/829/72324/2025/4/29/95681.png",
  },
  {
    title: "妮露",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/4/848114.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_724/h_1003/829/72324/2025/5/4/275392.png",
  },
  {
    title: "妮露（兔女郎）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/72324/2025/5/5/31079.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_613/h_1026/829/72324/2025/5/5/697139.png",
  },
  {
    title: "妮露（制服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/5/374996.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1200/h_2400/829/72324/2025/5/5/895113.png",
  },
  {
    title: "时（兔女郎）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/10/506617.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_412/h_1422/829/72324/2025/5/10/796934.png",
  },
  {
    title: "琴里（应援团）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/10/414254.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_872/h_1206/829/72324/2025/5/10/939296.png",
  },
  {
    title: "响",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_480/h_540/829/72324/2025/5/11/807603.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_612/h_965/829/72324/2025/5/11/288596.png",
  },
  {
    title: "响（应援团）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/11/935845.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_780/h_1280/829/72324/2025/5/11/33470.png",
  },
  {
    title: "柚子",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/72324/2025/5/11/773638.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_600/h_1095/829/72324/2025/5/11/914391.png",
  },
  {
    title: "桃井",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/11/24704.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_864/h_1002/829/72324/2025/5/11/896357.png",
  },
  {
    title: "绿",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/12/144349.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_773/h_1028/829/72324/2025/5/12/169669.png",
  },
  {
    title: "爱丽丝",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/12/212979.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_916/h_1035/829/72324/2025/5/12/690049.png",
  },
  {
    title: "真纪",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/12/693722.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_729/h_1024/829/72324/2025/5/12/476895.png",
  },
  {
    title: "晴",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/72324/2025/5/12/240768.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1024/h_1024/829/72324/2025/5/12/509072.png",
  },
  {
    title: "晴（野营）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/12/961575.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_428/h_1176/829/72324/2025/5/12/449499.png",
  },
  {
    title: "小玉",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/72324/2025/5/13/390078.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_512/h_1024/829/72324/2025/5/13/427811.png",
  },
  {
    title: "艾米（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/13/470412.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1075/h_1265/829/72324/2025/5/13/574044.png",
  },
  {
    title: "堇",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/13/623797.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_655/h_1024/829/72324/2025/5/13/586211.png",
  },
  {
    title: "堇（打工）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/13/13799.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_794/h_1280/829/72324/2025/5/13/6772.png",
  },
  {
    title: "未花",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/13/956143.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_727/h_1213/829/72324/2025/5/13/585062.png",
  },
  {
    title: "未花（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/6/25/823838.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_598/h_1330/829/43637/2025/6/23/75609.png",
  },
  {
    title: "渚",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/13/122625.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_806/h_1195/829/72324/2025/5/13/455787.png",
  },
  {
    title: "渚（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/6/25/808814.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_953/h_1163/829/43637/2025/6/23/653514.png",
  },
  {
    title: "圣娅",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/72324/2025/5/13/458734.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_850/h_1361/829/72324/2025/5/13/398520.png",
  },
  {
    title: "圣娅（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/408107/2025/6/22/113542.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_534/h_1138/829/43637/2025/6/22/217424.png",
  },
  {
    title: "鹤城（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/72324/2025/5/13/887507.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_953/h_925/829/72324/2025/5/13/293705.png",
  },
  {
    title: "鹤城（礼服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/7557.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_4279/h_2695/829/492704/2024/9/23/915376.png",
  },
  {
    title: "莲见（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/309463/2025/6/22/304885.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_643/h_1429/829/43637/2025/6/23/222658.png",
  },
  {
    title: "真白",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/5/506852.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_886/h_1504/829/86082/2025/5/5/99185.png",
  },
  {
    title: "真白（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/5/756439.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_722/h_997/829/86082/2025/5/5/518538.png",
  },
  {
    title: "一花",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/10/842056.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_796/h_1178/829/86082/2025/5/10/674753.png",
  },
  {
    title: "一花（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/492704/2025/6/22/169326.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_879/h_1300/829/43637/2025/6/23/191403.png",
  },
  {
    title: "樱子",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/10/825493.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_768/h_1395/829/86082/2025/5/10/924817.png",
  },
  {
    title: "樱子（偶像）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/10/884725.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1446/h_2746/829/86082/2025/5/10/730146.png",
  },
  {
    title: "樱子（礼服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2023/0/27/312732.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1060/h_1398/829/191981/2024/6/2/65251.png",
  },
  {
    title: "玛丽（体操服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/10/338747.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_832/h_1293/829/86082/2025/5/10/130391.png",
  },
  {
    title: "玛丽（体操服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/10/338747.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_832/h_1293/829/86082/2025/5/10/130391.png",
  },
  {
    title: "玛丽（体操服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/10/338747.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_832/h_1293/829/86082/2025/5/10/130391.png",
  },
  {
    title: "梓（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/11/582634.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_978/h_1196/829/86082/2025/5/11/183006.png",
  },
  {
    title: "芹娜",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/11/815201.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_495/h_1024/829/86082/2025/5/11/742970.png",
  },
  {
    title: "芹娜（护士装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2022/11/9/191744.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_877/h_2378/829/399789/2024/4/15/983202.png",
  },
  {
    title: "芹娜（圣诞）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/11/486879.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1087/h_1280/829/86082/2025/5/11/566551.png",
  },
  {
    title: "花绘",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/11/980190.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_612/h_978/829/86082/2025/5/11/739899.png",
  },
  {
    title: "日富美",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/11/125459.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_556/h_1024/829/86082/2025/5/11/986457.png",
  },
  {
    title: "日富美（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/11/787692.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1031/h_1220/829/86082/2025/5/11/906062.png",
  },
  {
    title: "梓",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_480/h_540/829/86082/2025/5/11/918852.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_849/h_1128/829/86082/2025/5/11/752412.png",
  },
  {
    title: "梓（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/11/582634.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_978/h_1196/829/86082/2025/5/11/183006.png",
  },
  {
    title: "花子",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/12/456983.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_648/h_1341/829/86082/2025/5/12/719442.png",
  },
  {
    title: "花子（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/12/980146.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_792/h_1294/829/86082/2025/5/12/678950.png",
  },
  {
    title: "小春",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/12/782718.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_700/h_1053/829/86082/2025/5/12/369205.png",
  },
  {
    title: "小春（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/12/286908.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_530/h_1091/829/86082/2025/5/12/844.png",
  },
  {
    title: "夏",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/11/111608.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_323/h_1026/829/86082/2025/5/11/855577.png",
  },
  {
    title: "夏（乐队）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/5/5/411489.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1047/h_2526/829/43637/2025/5/5/105707.png",
  },
  {
    title: "和纱",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/12/872223.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_767/h_1280/829/86082/2025/5/12/118240.png",
  },
  {
    title: "和纱（鬼屋）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/255438.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1209/h_2337/829/492704/2024/9/23/319140.png",
  },
  {
    title: "和纱（乐队）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/12/153159.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_444/h_1383/829/86082/2025/5/12/201630.png",
  },
  {
    title: "好美",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/20/352305.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_497/h_1024/829/86082/2025/5/12/377570.png",
  },
  {
    title: "好美（鬼屋）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/75436.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1103/h_2204/829/492704/2024/9/23/519177.png",
  },
  {
    title: "好美（乐队）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/12/234406.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1047/h_2526/829/86082/2025/5/12/98295.png",
  },
  {
    title: "爱莉（乐队）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/12/105510.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_438/h_1327/829/86082/2025/5/12/541230.png",
  },
  {
    title: "玲纱",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/12/372379.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_570/h_1020/829/86082/2025/5/12/388083.png",
  },
  {
    title: "志美子",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/86082/2025/5/13/399899.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_627/h_970/829/86082/2025/5/13/534395.png",
  },
  {
    title: "纱织（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/13/600932.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_944/h_2712/829/86082/2025/5/13/132177.png",
  },
  {
    title: "日和（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/13/639907.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_764/h_2558/829/86082/2025/5/13/903445.png",
  },
  {
    title: "星野",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/13/613321.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_673/h_1024/829/86082/2025/5/13/909071.png",
  },
  {
    title: "星野（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/86082/2025/5/13/394042.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1134/h_1304/829/86082/2025/5/13/561396.png",
  },
  {
    title: "星野(恐怖)",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/531280.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1191/h_1302/829/399789/2024/6/17/824049.png",
  },
  {
    title: "白子",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/4/29/975205.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1024/h_1024/829/103682/2025/4/29/954525.png",
  },
  {
    title: "白子（骑行）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/103682/2025/5/4/302207.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_764/h_1019/829/103682/2025/5/4/165517.png",
  },
  {
    title: "白子（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/4/974528.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_447/h_1270/829/103682/2025/5/4/520607.png",
  },
  {
    title: "白子*恐怖",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/5/139443.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_2240/h_3033/829/103682/2025/5/5/631142.png",
  },
  {
    title: "野宫",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/5/122623.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_614/h_1024/829/103682/2025/5/5/462099.png",
  },
  {
    title: "野宫（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/103682/2025/5/10/894352.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1332/h_1191/829/103682/2025/5/10/826310.png",
  },
  {
    title: "芹香",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_226/829/103682/2025/5/10/151338.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_532/h_1024/829/103682/2025/5/10/152975.png",
  },
  {
    title: "芹香（正月）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_480/h_540/829/103682/2025/5/10/323137.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_537/h_1304/829/103682/2025/5/10/450770.png",
  },
  {
    title: "芹香（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/10/868954.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_427/h_1119/829/103682/2025/5/10/106704.png",
  },
  {
    title: "芹香（偶像）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/463737.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_977/h_2560/829/399789/2024/9/25/791996.png",
  },
  {
    title: "绫音（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/103682/2025/5/10/94912.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1332/h_1247/829/103682/2025/5/10/284542.png",
  },
  {
    title: "绫音（偶像）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/785745.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1016/h_2490/829/399789/2024/9/23/594852.png",
  },
  {
    title: "光",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/10/580295.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_456/h_1017/829/103682/2025/5/10/525649.png",
  },
  {
    title: "望",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/10/395595.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_526/h_1020/829/103682/2025/5/10/827511.png",
  },
  {
    title: "若藻",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_480/h_540/829/103682/2025/5/11/1874.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_2007/h_2638/829/103682/2025/5/11/129506.png",
  },
  {
    title: "若藻（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/11/677282.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_850/h_1020/829/103682/2025/5/11/300439.png",
  },
  {
    title: "若藻（華服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_252/h_204/829/43637/2022/6/2/100370.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_945/h_1436/829/191981/2024/6/24/482751.png",
  },
  {
    title: "果穗",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/11/986232.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_756/h_1304/829/103682/2025/5/11/696311.png",
  },
  {
    title: "妮娅",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/11/868132.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1233/h_2451/829/103682/2025/5/11/931759.png",
  },
  {
    title: "千世",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/11/646525.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_723/h_1024/829/103682/2025/5/11/309520.png",
  },
  {
    title: "千世（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/11/117841.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_2494/h_2693/829/103682/2025/5/11/272112.png",
  },
  {
    title: "缘里",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2023/10/27/362789.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_384/h_1141/829/191981/2024/6/2/8489.png",
  },
  {
    title: "缘里（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/43637/2025/6/2/814732.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_827/h_1216/829/43637/2025/6/2/152307.png",
  },
  {
    title: "缘里(巫女)",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/711346.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1682/h_2572/829/191981/2024/6/26/154968.png",
  },
  {
    title: "莲华",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/11/389142.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_861/h_1353/829/103682/2025/5/11/601986.png",
  },
  {
    title: "莲华（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/6/4/9525.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_693/h_1215/829/43637/2025/6/7/125285.png",
  },
  {
    title: "桔梗（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/6/2/377844.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_597/h_1325/829/43637/2025/6/2/688054.png",
  },
  {
    title: "满",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_480/h_540/829/103682/2025/5/11/211245.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_788/h_1060/829/103682/2025/5/11/238631.png",
  },
  {
    title: "泉奈",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/12/364665.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_664/h_1119/829/103682/2025/5/12/866960.png",
  },
  {
    title: "泉奈（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/12/953305.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1134/h_1247/829/103682/2025/5/12/591791.png",
  },
  {
    title: "静子",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/103682/2025/5/12/177332.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_701/h_1039/829/103682/2025/5/12/390272.png",
  },
  {
    title: "静子（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/103682/2025/5/12/316710.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_972/h_1219/829/103682/2025/5/12/713149.png",
  },
  {
    title: "菲娜",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/12/235610.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_862/h_1024/829/103682/2025/5/12/388511.png",
  },
  {
    title: "菲娜（导游）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/103682/2025/5/12/948066.webp",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_841/h_2647/829/103682/2025/5/12/825980.png",
  },
  {
    title: "椿",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/12/562723.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_726/h_898/829/103682/2025/5/12/420361.png",
  },
  {
    title: "椿（导游）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/12/795745.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_468/h_1314/829/103682/2025/5/12/363668.png",
  },
  {
    title: "三森",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/12/491164.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_797/h_1277/829/103682/2025/5/12/548215.png",
  },
  {
    title: "三森（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/12/708198.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1460/h_1133/829/103682/2025/5/12/405534.png",
  },
  {
    title: "枫",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/12/35946.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_604/h_1055/829/103682/2025/5/12/669510.png",
  },
  {
    title: "枫（导游）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/899398.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_837/h_2249/829/399789/2024/5/10/767771.png",
  },
  {
    title: "妃咲",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/13/227918.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1028/h_2350/829/103682/2025/5/13/52164.png",
  },
  {
    title: "妃咲（梅花园校服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_195/h_195/829/43637/2025/4/27/852484.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_498/h_1177/829/72324/2024/8/26/615995.png",
  },
  {
    title: "南",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/13/994608.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_648/h_1418/829/103682/2025/5/13/515226.png",
  },
  {
    title: "瞬",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/13/527220.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1024/h_1024/829/103682/2025/5/13/33628.png",
  },
  {
    title: "瞬（小）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/103682/2025/5/13/504735.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_697/h_1032/829/103682/2025/5/13/946430.png",
  },
  {
    title: "心奈",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/103682/2025/5/13/291397.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_706/h_1028/829/103682/2025/5/13/221711.png",
  },
  {
    title: "纱绫",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/103682/2025/5/13/440507.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1024/h_1024/829/103682/2025/5/13/877683.png",
  },
  {
    title: "纱绫（私服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/103682/2025/5/13/832038.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_601/h_783/829/103682/2025/5/13/49259.png",
  },
  {
    title: "切里诺",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/103682/2025/5/13/99976.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_771/h_940/829/103682/2025/5/13/843855.png",
  },
  {
    title: "切里诺（旗袍）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/946169.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_502/h_1096/829/492704/2024/7/21/52059.png",
  },
  {
    title: "巴（旗袍）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43758/2025/5/11/934140.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_422/h_1317/829/43758/2025/5/11/371738.png",
  },
  {
    title: "和香（温泉）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/43758/2025/5/13/185159.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1072/h_1280/829/43758/2025/5/13/832029.png",
  },
  {
    title: "时雨",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43758/2025/5/13/583076.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_567/h_1063/829/43758/2025/5/13/432267.png",
  },
  {
    title: "桐乃（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43758/2025/5/13/798228.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_582/h_1244/829/43758/2025/5/13/479700.png",
  },
  {
    title: "桐乃（偶像）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/265613.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1196/h_2616/829/492704/2024/9/23/601752.png",
  },
  {
    title: "吹雪",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_480/h_540/829/43758/2025/5/13/793269.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_602/h_1044/829/43758/2025/5/13/254108.png",
  },
  {
    title: "吹雪（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43758/2025/5/13/219588.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_718/h_1072/829/43758/2025/5/13/633191.png",
  },
  {
    title: "吹雪（偶像）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/915309.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1061/h_2316/829/492704/2024/9/23/362043.png",
  },
  {
    title: "宫子（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43758/2025/5/16/181572.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_570/h_1226/829/43758/2025/5/16/592921.png",
  },
  {
    title: "咲（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/13/133215.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_605/h_1235/829/157597/2025/5/13/543960.png",
  },
  {
    title: "美游（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/157597/2025/5/13/528377.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_603/h_1133/829/157597/2025/5/13/287415.png",
  },
  {
    title: "初音未来",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_266/h_300/829/43637/2025/5/13/91164.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_912/h_1280/829/43637/2025/5/13/348092.png",
  },
  {
    title: "御坂美琴",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_404/h_456/829/43637/2025/5/13/287346.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_346/h_1137/829/43637/2025/5/13/133555.png",
  },
  {
    title: "惠（泳装）",
    imageUrl: "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_475/h_475/829/43637/2025/6/24/377162.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_695/h_1344/829/43637/2025/6/24/155246.png",
  },
  {
    title: "真琴（礼服）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/271816.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1309/h_2860/829/399789/2024/4/16/877985.png",
  },
  {
    title: "花江（应援团）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2022/11/9/759464.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_737/h_1073/829/399789/2024/4/15/740278.png",
  },
  {
    title: "美咲（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/335332.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_898/h_2601/829/191981/2024/6/22/330078.png",
  },
  {
    title: "名草（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_506/h_408/829/191981/2025/5/25/990919.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1184/h_2711/829/191981/2025/5/25/483400.png",
  },
  {
    title: "新",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2023/10/27/453722.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_470/h_1017/829/191981/2024/6/26/429291.png",
  },
  {
    title: "棕榈",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/967840.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_435/h_967/829/399789/2024/4/16/325255.png",
  },
  {
    title: "虞美人",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/776645.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_509/h_1652/829/399789/2024/4/16/550384.png",
  },
  {
    title: "葛叶",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/263540.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1504/h_2276/829/191981/2024/6/2/455611.png",
  },
  {
    title: "菖蒲",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/27/787849.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_743/h_1426/829/399789/2025/4/21/724873.png",
  },
  {
    title: "浅见",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_204/h_204/829/43637/2025/4/27/608027.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_514/h_1282/829/399789/2025/4/21/474895.png",
  },
  {
    title: "瑠美（小）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/675945.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_375/h_1129/829/399789/2024/8/25/664445.png",
  },
  {
    title: "雪乃",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/27/689031.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_756/h_1550/829/399789/2024/4/14/745879.png",
  },
  {
    title: "妮可",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/27/484917.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_756/h_1398/829/399789/2024/4/14/137962.png",
  },
  {
    title: "胡桃",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/27/945942.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_557/h_1153/829/399789/2024/4/14/990593.png",
  },
  {
    title: "凛",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2023/5/27/994184.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_717/h_1619/829/191981/2024/7/3/456960.png",
  },
  {
    title: "桃香",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_300/h_300/829/43637/2023/5/27/862742.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_601/h_1247/829/191981/2024/10/8/846799.png",
  },
  {
    title: "李",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2023/5/27/580501.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_587/h_1113/829/191981/2024/6/27/199449.png",
  },
  {
    title: "阿洛娜",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/27/754180.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1012/h_2128/829/191981/2024/10/8/315388.png",
  },
  {
    title: "海",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2025/4/22/739075.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1134/h_2739/829/399789/2024/4/15/316025.png",
  },
  {
    title: "未来",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_252/h_204/829/399789/2025/0/20/938527.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_1500/h_2600/829/399789/2025/0/20/357387.png",
  },
  {
    title: "兰舞（泳装）",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_252/h_204/829/399789/2024/5/26/278539.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_834/h_1382/829/399789/2024/5/26/752405.png",
  },
  {
    title: "飙车党首领",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_550/h_550/829/191981/2025/5/9/488221.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_2000/h_3020/829/191981/2025/5/9/46293.png",
  },
  {
    title: "温泉开发部部员",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_252/h_204/829/43637/2023/7/8/923176.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_578/h_1194/829/191981/2024/6/27/39017.png",
  },
  {
    title: "百鬼夜行学生",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_200/h_200/829/43637/2023/10/27/177708.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_327/h_946/829/191981/2024/6/26/463359.png",
  },
  {
    title: "山海经学生1",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_550/h_550/829/43637/2023/10/9/703879.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_408/h_1005/829/191981/2024/6/27/864481.png",
  },
  {
    title: "山海经学生2",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_550/h_550/829/43637/2023/10/9/430199.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_398/h_1164/829/191981/2024/6/27/295299.png",
  },
  {
    title: "女番长1",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_252/h_204/829/43637/2022/6/2/285541.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_360/h_1078/829/191981/2024/6/27/369742.png",
  },
  {
    title: "女番长2",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_252/h_204/829/43637/2022/6/2/518070.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_740/h_1270/829/191981/2024/6/27/228614.png",
  },
  {
    title: "兔女郎卡牌",
    imageUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_252/h_204/829/43637/2023/7/8/121389.png",
    drawUrl:
      "https://cdnimg-v2.gamekee.com/wiki2.0/images/w_612/h_1315/829/332339/2024/6/24/963551.png",
  },
];

  global.__blue_archive_data__ = data
})(window)