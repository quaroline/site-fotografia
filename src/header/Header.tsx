import './Header.css';

const Header = () => {
  const onScroll = () => {
    const carouselItems = document.getElementById('carousel-items') as HTMLElement;

    if (!carouselItems) return;

    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const className = 'scrolled';

    const header = document.getElementById('header') as HTMLElement;

    if (!header) return;

    const height = carouselItems.getBoundingClientRect().bottom - carouselItems.getBoundingClientRect().top - header.offsetHeight;

    if (scrollTop > height)
      header.classList.add(className);
    else 
      header.classList.remove(className);
  }

  window.addEventListener('scroll', onScroll);

  return (
    <>
      <div id="header">
        <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 802 115" xmlSpace="preserve">
          <path opacity="1.000000" stroke="none" 
            d="
            M337.959839,88.993134 
            C336.105316,88.350319 334.645599,87.703247 332.412415,86.713318 
            C326.176727,90.645363 319.377441,93.402161 311.607605,86.385300 
            C304.184143,79.681213 308.379486,71.750710 307.865143,62.663040 
            C301.973602,68.621788 296.946381,73.523132 292.137207,78.629837 
            C288.455475,82.539360 286.736176,89.133606 279.242523,87.526169 
            C278.937866,87.460823 278.410065,88.039009 278.108337,88.415276 
            C271.850037,96.218819 261.080505,100.111855 258.546417,111.335930 
            C258.246796,112.662994 253.979797,114.036758 251.808151,113.706078 
            C250.011246,113.432465 247.701202,110.908829 247.189285,108.967842 
            C246.069962,104.723633 248.193146,101.365868 251.915558,99.000793 
            C256.481079,96.100052 258.582184,91.808266 259.073853,86.293877 
            C253.304260,85.164772 246.746857,90.363007 242.509140,83.365479 
            C232.693878,89.521706 227.797989,91.233528 217.528839,80.191368 
            C211.634109,86.541283 208.346176,80.352852 203.957016,76.762932 
            C201.838730,83.946884 196.854324,87.974731 190.291290,89.771889 
            C181.049347,92.302612 178.949356,91.233452 174.813049,83.947037 
            C168.753143,85.339066 163.020279,87.228226 157.153290,87.848167 
            C150.862518,88.512871 147.458969,85.113533 147.056808,78.824432 
            C146.785248,74.577789 147.005020,70.299736 147.005020,65.598351 
            C145.299118,65.208862 143.147659,64.717644 140.481506,64.108910 
            C139.740677,65.833870 139.171661,67.870239 138.067505,69.556122 
            C136.565674,71.849197 134.646454,73.867645 132.922882,76.017227 
            C131.917755,77.270805 130.926804,78.536858 129.969269,79.826836 
            C129.686447,80.207825 129.583450,80.718010 129.323456,81.120842 
            C124.073875,89.254112 110.489601,92.780075 102.501373,87.615631 
            C100.175797,86.112137 98.881042,86.534676 96.901711,87.532074 
            C91.745697,90.130234 86.585709,92.035973 80.484291,90.283592 
            C77.193565,89.338463 76.238167,87.446495 76.041512,84.717819 
            C75.560944,78.050003 76.071449,71.771606 80.844681,66.229736 
            C85.528244,60.791962 89.176521,54.355080 96.659042,52.175514 
            C101.258553,50.835739 107.024010,48.875320 109.865349,53.311768 
            C112.089218,56.784130 111.805367,62.360672 111.379959,66.884224 
            C110.994957,70.978180 108.790504,74.877396 107.612022,78.927582 
            C106.599335,82.407951 108.979584,84.967079 112.382965,83.751656 
            C116.470787,82.291786 120.308212,80.127106 124.242783,78.244034 
            C125.390137,77.694916 126.498985,77.065308 126.795906,76.909081 
            C128.640381,70.925972 130.245682,65.488121 131.996048,60.097378 
            C134.348633,52.851940 136.856720,45.657009 139.210861,38.412060 
            C140.343842,34.925289 143.236969,34.042179 145.808029,35.289906 
            C147.429352,36.076725 148.660690,39.027599 148.838684,41.112595 
            C149.112885,44.324570 148.209259,47.620880 148.060806,50.893005 
            C148.000458,52.223011 148.609985,53.583408 148.880219,54.777523 
            C149.797073,54.777523 150.195953,54.902073 150.430161,54.758324 
            C152.862320,53.265411 155.634247,50.066074 158.087494,53.041809 
            C159.568420,54.838139 159.104492,58.645344 158.753342,61.453831 
            C158.150879,66.272087 156.382797,70.989662 156.161896,75.798111 
            C155.933258,80.775085 159.287537,82.566910 163.843246,80.568581 
            C166.083740,79.585808 168.413879,78.570953 170.278870,77.049995 
            C171.563705,76.002167 172.698273,74.134346 172.905426,72.506454 
            C174.043808,63.560097 182.357697,53.548294 191.078278,50.902161 
            C192.627457,50.432087 194.032013,49.499451 195.525848,48.830654 
            C202.168701,45.856625 208.821182,50.133755 208.999786,57.480412 
            C209.291748,69.489723 209.334183,69.682266 213.242035,74.617477 
            C213.950867,72.891525 214.739716,71.660027 214.956924,70.334839 
            C217.041656,57.614872 218.427490,44.744965 221.223129,32.187294 
            C223.782791,20.689547 233.626434,15.485726 243.426163,11.180246 
            C247.260529,9.495625 249.766953,12.049977 249.985901,16.683903 
            C250.438416,26.261192 246.762894,34.680698 241.876663,42.485645 
            C236.432800,51.181305 230.502823,59.590923 224.439148,67.872215 
            C221.596115,71.755035 224.190170,74.431488 225.815063,77.113998 
            C227.578354,80.024971 230.386673,81.828453 234.107605,79.935310 
            C237.088943,78.418442 240.170578,77.655968 240.285034,72.874680 
            C240.435928,66.570778 241.623459,60.197018 243.195755,54.066265 
            C243.868469,51.443192 246.184586,48.162769 248.543579,47.271877 
            C253.717102,45.318062 257.373230,50.058632 255.575851,55.877850 
            C253.751129,61.785549 251.711029,67.626427 249.818466,73.513680 
            C249.390778,74.844109 249.183151,76.245285 248.556015,79.023842 
            C250.923569,77.624748 252.178284,77.072342 253.210526,76.243027 
            C260.699707,70.226189 263.873718,61.679081 267.132385,53.045254 
            C270.233002,44.830322 274.799561,40.144344 282.776520,42.831131 
            C281.382874,48.129799 280.213043,53.609619 278.484070,58.906929 
            C275.941772,66.696114 273.000336,74.355019 269.878815,83.043808 
            C276.419037,80.859215 280.429138,78.206062 282.718567,72.872169 
            C285.160339,67.183327 288.140167,61.679504 291.364014,56.386612 
            C294.008545,52.044800 297.806702,52.049564 300.324371,55.375366 
            C305.867126,53.578667 311.162048,51.627773 316.605927,50.277458 
            C317.828918,49.974098 320.257385,51.413712 320.916779,52.682098 
            C321.917450,54.607029 322.679596,57.337734 322.082825,59.276703 
            C320.606110,64.074440 318.132843,68.555008 316.384155,73.282913 
            C315.088440,76.786072 315.876526,80.268478 318.657745,82.759628 
            C321.356720,85.177101 324.003723,83.269302 326.801178,82.133774 
            C333.592896,79.376907 338.988403,75.578110 341.083496,68.034149 
            C341.813751,65.404564 343.311584,62.897793 344.863556,60.609398 
            C346.851166,57.678631 348.683044,53.141277 353.211731,58.181515 
            C353.507263,58.510395 354.877747,58.045486 355.661682,57.732861 
            C358.651245,56.540638 361.511414,54.782585 364.604553,54.173252 
            C366.795563,53.741631 370.598480,54.073891 371.343079,55.389160 
            C372.581177,57.576210 372.578003,60.980625 371.943848,63.592205 
            C370.993591,67.505623 368.681335,71.081215 367.656921,74.986351 
            C367.039154,77.341240 367.222168,80.232895 368.014069,82.552650 
            C369.141144,85.854202 371.875702,86.863548 375.091400,84.955772 
            C378.318542,83.041191 381.454437,80.972794 385.094177,78.679558 
            C381.548584,71.308571 383.251923,63.831898 385.033325,56.362755 
            C386.998199,48.124275 394.707733,43.242058 402.870422,45.042259 
            C406.761414,45.900379 409.227966,49.991631 407.721558,54.348549 
            C406.142181,58.916546 403.842834,63.246479 401.709991,67.608017 
            C400.493347,70.096069 398.826508,72.367622 397.659332,74.874916 
            C396.954895,76.388107 396.107391,79.354767 396.551544,79.621048 
            C398.538300,80.812134 401.179504,82.240135 403.193298,81.798637 
            C408.400726,80.657005 413.413086,78.606331 418.479156,76.848976 
            C420.402161,76.181908 422.258972,75.324142 424.412323,74.444473 
            C426.398163,81.411186 421.269989,83.677773 417.646667,85.481987 
            C408.507629,90.032700 398.927216,92.066147 389.322052,85.991753 
            C388.376831,85.393990 386.436005,85.922180 385.138733,86.410179 
            C380.483643,88.161278 376.047211,91.007027 371.262817,91.765358 
            C365.811829,92.629356 359.156219,85.457901 359.018250,79.863960 
            C358.924347,76.058014 359.000305,72.247879 359.000305,67.653419 
            C357.574188,68.559158 356.504150,68.936272 355.878174,69.684731 
            C351.354858,75.093239 346.982269,80.628685 342.413940,85.997978 
            C341.353699,87.244125 339.722900,88.004814 337.959839,88.993134 
            M184.761856,83.913795 
            C189.412445,84.109123 192.351501,81.198792 194.499985,77.774330 
            C196.150101,75.144173 198.258621,71.532127 197.606873,69.020004 
            C196.588150,65.093529 193.407654,61.727913 190.071289,56.419495 
            C188.658005,58.586983 187.663116,60.539249 186.279770,62.159916 
            C180.526230,68.900406 179.529129,77.905228 184.761856,83.913795 
            M101.553391,63.940125 
            C101.408180,60.797237 98.946541,59.815277 95.736115,61.859268 
            C89.565300,65.788055 85.377663,71.082413 83.665543,78.452614 
            C82.855614,81.939064 84.776047,82.980118 86.936119,82.813301 
            C89.331810,82.628281 92.673462,81.707596 93.753563,79.962456 
            C96.721031,75.167847 98.719879,69.773743 101.553391,63.940125 
            M235.470459,33.032364 
            C235.997314,31.581005 236.524170,30.129648 237.051025,28.678291 
            C236.472244,28.435001 235.893478,28.191711 235.314713,27.948421 
            C231.883652,34.924541 228.452591,41.900661 225.021515,48.876781 
            C225.826935,49.273102 226.632355,49.669426 227.437775,50.065750 
            C229.980042,44.602013 232.522308,39.138271 235.470459,33.032364 
            M394.524811,64.973907 
            C395.457031,62.497944 396.389282,60.021984 397.321503,57.546021 
            C396.566467,57.259109 395.811401,56.972195 395.056366,56.685280 
            C393.558624,60.240501 392.060883,63.795723 390.563141,67.350945 
            C391.043091,67.635017 391.523041,67.919090 392.002960,68.203163 
            C392.695648,67.336571 393.388336,66.469978 394.524811,64.973907 
          z"/>
          <path opacity="1.000000" stroke="none" 
            d="
          M529.240723,88.717194 
            C524.229675,78.671234 528.304565,70.635208 534.335327,63.333843 
            C537.351868,59.681705 540.973145,56.265179 544.951416,53.732594 
            C551.065186,49.840611 558.696960,49.706532 561.485046,53.148529 
            C565.727844,58.386436 564.034485,64.165245 562.068359,69.865097 
            C560.858398,73.373032 559.746460,76.965744 559.185669,80.611931 
            C559.039978,81.559219 561.104919,83.805130 562.193481,83.831192 
            C570.539490,84.031013 576.210388,78.771423 577.001526,70.563896 
            C578.055847,59.626713 589.913269,48.273357 600.707336,48.031025 
            C605.141968,47.931461 607.849487,45.591625 610.013489,42.028252 
            C616.279541,31.710291 622.629944,21.443382 628.984680,11.179606 
            C629.667908,10.076191 630.410034,8.808495 631.461792,8.188063 
            C632.609741,7.510807 634.299500,7.010448 635.466248,7.368263 
            C636.238098,7.604960 636.794983,9.451116 636.949402,10.641427 
            C637.780701,17.049341 635.518372,22.699104 631.783203,27.632063 
            C623.720947,38.279549 617.288391,49.756306 614.114258,62.749294 
            C612.957092,67.486313 612.916626,72.631966 613.272949,77.525208 
            C613.389160,79.121902 616.664246,81.980934 617.996582,81.719948 
            C622.173279,80.901749 626.430786,79.361427 629.978333,77.056450 
            C631.289612,76.204483 630.637207,72.436890 631.017395,70.020592 
            C631.599060,66.323418 632.091980,62.592117 633.013184,58.974766 
            C633.788452,55.930241 638.085388,54.835411 642.002441,56.544350 
            C644.950989,57.830769 647.197571,59.483353 645.320251,63.370014 
            C643.842529,66.429314 642.028198,69.651443 641.810425,72.898285 
            C641.610535,75.878571 642.745789,79.367775 644.377319,81.946541 
            C646.469666,85.253448 649.391846,83.387108 651.891235,81.659569 
            C652.827148,81.012718 653.944763,80.631721 654.894531,80.001442 
            C657.963074,77.965080 660.211060,76.465179 659.412354,71.338448 
            C658.435120,65.065208 659.992981,58.280132 661.108887,51.829559 
            C662.297729,44.957062 664.130554,38.185268 665.898193,31.426004 
            C668.740784,20.555901 678.020203,16.010597 686.742615,11.309384 
            C690.674683,9.190042 693.621216,11.770823 693.998230,16.466328 
            C694.683044,24.995308 691.045898,32.318348 687.769165,39.826199 
            C683.312805,50.036758 675.929810,58.189240 669.490601,67.021248 
            C666.850830,70.641960 668.574890,77.388237 672.567200,79.850868 
            C675.620178,81.734077 682.393555,79.317047 683.851318,75.233803 
            C686.186707,68.692291 687.914551,61.933998 689.902405,55.268276 
            C693.618774,42.806881 697.137939,30.280411 701.208191,17.935659 
            C702.119507,15.171884 704.543091,12.344644 707.047302,10.837719 
            C709.233704,9.522089 712.860352,9.132938 715.188599,10.037831 
            C716.730347,10.637074 717.691528,14.189361 717.902588,16.511427 
            C719.086243,29.535540 711.306335,39.362843 705.538147,49.884277 
            C704.701172,51.410961 703.666931,52.829494 702.418884,54.773224 
            C704.094543,55.319542 705.109497,55.842644 706.170593,55.965111 
            C712.941650,56.746597 714.660217,58.879532 715.085693,65.804512 
            C715.323181,69.669922 716.101562,73.581123 717.225830,77.293129 
            C718.650269,81.996597 721.358276,83.009857 726.873413,80.476936 
            C731.820007,78.205116 736.242676,75.412872 739.233765,70.094345 
            C742.321899,64.603172 746.841980,59.746883 751.413513,55.311508 
            C755.451904,51.393353 761.082458,50.454926 766.601074,51.108204 
            C772.090576,51.758026 774.710571,58.170589 772.650635,65.665833 
            C771.494446,69.872894 769.723572,73.908241 768.491150,78.097916 
            C767.171692,82.583641 769.455383,84.782280 774.022278,83.434273 
            C776.804199,82.613144 779.543884,81.535988 782.148865,80.260231 
            C784.690247,79.015671 787.036255,77.372185 790.570862,75.237915 
            C790.570862,77.920570 791.062683,79.643555 790.482605,80.851952 
            C788.377380,85.237236 774.139221,92.051964 769.743713,89.815117 
            C762.689819,86.225372 756.564880,87.462425 749.968506,90.391678 
            C747.992554,91.269150 745.325012,91.278557 743.141418,90.844620 
            C739.481201,90.117218 735.869873,88.789238 736.866577,84.560577 
            C731.576111,85.693695 726.238342,87.411232 720.796326,87.858124 
            C713.887756,88.425430 710.190613,85.509262 708.085938,78.743385 
            C706.702942,74.297386 705.892395,69.673302 704.731384,64.728233 
            C696.821289,69.538635 693.274231,76.625244 690.938232,84.672989 
            C689.050659,91.175896 688.070007,91.398239 682.246582,87.833786 
            C681.480469,87.364838 680.263428,86.931267 679.535828,87.211021 
            C673.477905,89.540512 668.650146,87.629753 664.187256,82.688934 
            C654.282410,91.067940 644.058105,93.356956 633.692932,83.264618 
            C627.921204,87.427490 621.297668,89.456375 614.467468,88.578522 
            C606.585510,87.565506 603.705200,81.161186 602.663513,72.773048 
            C597.641235,79.722549 593.704102,86.010536 585.964050,87.445801 
            C583.847839,87.838219 580.862793,88.053146 579.468323,86.903641 
            C576.442627,84.409592 574.579529,85.449081 572.022888,87.363777 
            C566.196777,91.726974 560.104248,91.601936 554.083252,87.598396 
            C552.184753,86.336014 550.861816,86.275063 548.506897,87.565346 
            C542.591980,90.806221 536.196289,93.251274 529.240723,88.717194 
            M745.351440,74.172318 
            C745.394165,77.027519 744.410278,80.580734 745.751404,82.553139 
            C747.271179,84.788330 753.482605,82.049065 755.735535,78.598930 
            C756.179504,77.919022 756.538513,77.173851 756.861328,76.426193 
            C758.890259,71.726898 760.897766,67.018394 763.005432,62.095688 
            C759.604309,60.132828 756.752014,60.802452 754.613708,63.041668 
            C751.467529,66.336327 748.755981,70.045937 745.351440,74.172318 
            M546.158264,62.366566 
            C541.282654,65.817253 537.356201,70.108383 535.694153,75.919472 
            C535.129211,77.894928 535.838318,80.234779 535.965210,82.408119 
            C538.467468,82.208008 541.091125,82.392159 543.423584,81.654854 
            C544.698120,81.251968 545.745056,79.419617 546.436462,78.007591 
            C549.006592,72.758583 551.386719,67.416534 554.539917,60.590466 
            C551.010742,61.253113 548.931763,61.643471 546.158264,62.366566 
            M598.531006,64.946663 
            C600.310791,62.024612 602.090576,59.102558 604.416809,55.283394 
            C594.825439,54.857613 591.308105,61.477959 587.056458,66.615829 
            C584.087891,70.203163 583.726746,74.548134 585.990173,80.039650 
            C590.378479,74.723495 594.199158,70.095016 598.531006,64.946663 
            M677.551208,37.943050 
            C678.663513,35.087063 679.775879,32.231075 680.888184,29.375086 
            C674.791321,35.236877 671.437744,42.272072 669.912048,50.133636 
            C670.314026,50.325565 670.716003,50.517494 671.117981,50.709423 
            C673.107971,46.660179 675.098022,42.610935 677.551208,37.943050 
          z"/>
          <path opacity="1.000000" stroke="none" 
            d="
            M533.023193,41.898705 
            C529.094421,47.549942 526.144592,53.972546 521.200195,57.854691 
            C511.579590,65.408409 501.293762,72.659454 487.963867,71.982399 
            C484.044281,71.783325 481.378143,73.194923 479.960999,77.020256 
            C478.550812,80.826782 477.215149,84.740074 475.153259,88.192322 
            C474.135193,89.896942 471.554779,90.668449 469.681274,91.862183 
            C468.456635,89.550537 465.924591,87.008095 466.283325,84.975952 
            C466.999573,80.918488 469.324921,77.150612 470.933899,73.241814 
            C471.411835,72.080833 471.716766,70.848648 472.309113,68.999146 
            C468.824860,68.999146 465.831177,69.333458 462.967560,68.867912 
            C461.368866,68.608009 459.167419,67.297256 458.712952,65.959015 
            C458.141693,64.276978 458.374359,61.415768 459.494781,60.229378 
            C463.405731,56.088161 468.638733,54.305984 474.255920,55.139481 
            C477.226471,55.580265 478.369049,54.573811 479.369385,52.199734 
            C482.951202,43.698921 486.619965,35.234749 490.757996,25.585804 
            C488.467651,26.277460 487.288208,26.510803 486.214874,26.984587 
            C484.272400,27.842035 482.481018,29.268625 480.467010,29.684019 
            C477.458862,30.304443 473.733795,31.138691 472.258118,27.293343 
            C470.886475,23.719061 473.106628,21.079662 476.378021,19.994396 
            C482.959686,17.810961 489.140289,14.215180 496.565002,14.922973 
            C503.785614,15.611304 511.113403,15.267932 518.307739,16.113253 
            C525.482910,16.956327 531.178650,21.168226 534.891663,27.153461 
            C537.862793,31.942865 535.684937,36.963150 533.023193,41.898705 
            M490.508728,51.991047 
            C489.479767,54.032349 488.337677,56.026802 487.465454,58.132992 
            C486.962341,59.347836 486.895020,60.743149 486.631561,62.057240 
            C488.184052,62.329693 489.966583,63.240391 491.253723,62.776520 
            C505.170776,57.760834 516.916992,49.877575 524.099487,36.464622 
            C527.129150,30.806757 525.194031,26.132427 519.006470,24.612341 
            C514.920898,23.608654 510.621094,23.207623 506.402802,23.099182 
            C503.038330,23.012693 499.488403,24.167957 499.143005,28.144318 
            C498.403778,36.653614 493.853333,43.690693 490.508728,51.991047 
          z"/>
          <path opacity="1.000000" stroke="none" 
            d="
            M64.658707,74.710495 
            C67.225349,75.442123 71.240707,76.233353 71.329842,77.340652 
            C71.537155,79.915924 70.395493,83.026596 68.835648,85.240517 
            C63.262238,93.150963 46.901230,97.397629 37.957699,93.420921 
            C28.507406,89.218887 24.886614,81.228760 23.961845,71.438507 
            C23.060711,61.898426 28.077042,54.518211 32.560074,46.976498 
            C36.123264,40.982208 39.685158,34.902878 44.003723,29.461365 
            C50.701706,21.021706 58.975235,14.107847 69.904472,12.315764 
            C74.617699,11.542931 80.430481,11.815182 83.860748,16.517694 
            C86.785629,20.527378 86.361137,25.156609 84.105339,29.393253 
            C82.174164,33.020199 79.958778,36.526867 77.561600,39.865971 
            C75.130051,43.252934 70.755394,44.407982 67.848022,42.573639 
            C64.530457,40.480495 62.499409,36.295261 60.058807,32.911350 
            C59.589020,32.259987 59.810322,31.110182 59.530788,28.473234 
            C54.565891,34.395420 49.684372,38.755894 46.667366,44.157730 
            C42.079617,52.371922 38.471111,61.186642 35.061520,69.984573 
            C33.104710,75.033821 35.811562,82.192657 39.577126,84.846237 
            C43.707027,87.756577 49.301617,87.561508 54.583706,83.625877 
            C57.195362,81.679962 59.028233,78.713654 61.365482,76.359985 
            C62.096111,75.624237 63.323601,75.381889 64.658707,74.710495 
          z"/>
          <path opacity="1.000000" stroke="none" 
            d="
            M654.499023,34.029003 
            C655.423157,35.369595 656.692566,37.526081 656.321411,37.860195 
            C654.837646,39.195915 652.841553,40.712555 651.039856,40.706501 
            C649.613403,40.701710 647.970581,38.731331 646.928650,37.273094 
            C646.667969,36.908237 648.130859,34.594929 649.194641,34.176479 
            C650.627075,33.613018 652.440430,34.018013 654.499023,34.029003 
          z"/>
        </svg>
      </div>
    </>
  );
}

export default Header;