//トップ画像の設定
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
    if (windowwidth > 768){
      var responsiveImage = [//PC用の画像
        { src: 'images/top01.jpg'},
        { src: 'images/top02.jpg'},
        { src: 'images/top03.jpg'}
      ];
    } else {
      var responsiveImage = [
        { src: 'images/m_top01.jpg'},
        { src: 'images/m_top02.jpg'},
        { src: 'images/m_top03.jpg'}
      ];
    }
//Vegas全体の設定
$('#slider').vegas({
    transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
    transitionDuration: 1200,//切り替わりのアニメーション時間をミリ秒単位で設定
    delay: 3500,//スライド間の遅延をミリ秒単位で。
    animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
    animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
    slides: responsiveImage,//画像設定を読む
    timer:false,
  });
//上部へスクロール
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
