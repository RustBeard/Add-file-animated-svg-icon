$(document).ready(function() {
  var s = Snap("#plus-to-ok");

  var plusV = s.rect(47, 10, 6, 80).attr({
    fill: '#000'
  });

  var plusH = s.rect(10, 47, 80, 6).attr({
    fill: '#000'
  });

  var plus = s.group(plusH, plusV);

  var tri1 = [50, 50, 0, 100, 0, 100];
  var tri2 = [50, 50, 0, 100, 0, 0];
  var tri3 = [50, 50, 0, 0, 0, 0];

  var triangleMask = s.polygon(tri1).attr({
    fill: '#fff'
  }).transform('r-45, 50, 50');

  var circle = s.circle(50, 50, 37).attr({
    fillOpacity: 0,
    stroke: "#000",
    strokeWidth: 6,
    mask: triangleMask
  });

  var chk1 = [54, 10, 60, 10, 60, 10, 54, 10, 54, 10, 54, 10];
  var chk2 = [54, 10, 60, 10, 60, 86, 54, 86, 54, 80, 54, 80];
  var chk3 = [54, 10, 60, 10, 60, 86, 25, 86, 25, 80, 54, 80];

  var checkMark = s.polygon(chk1).attr({
    fill: '#000',
  }).transform('r32, 47, 54');

  plusH.animate({
    x: 50,
    y: 47,
    width: 0
  }, 200, mina.easeout);

  //200ms

  function anim2() {
    plusV.animate({
      x: 47,
      y: 90,
      height: 0
    }, 200, mina.easeout, anim3)
  };

  //200+100 timeout

  function anim3() {
    triangleMask.animate({
      points: tri2
    }, 300, mina.easeout);
  };

  //600ms

  function anim4() {
    triangleMask.animate({
      transform: 'r450,50,50'
    }, 1000, mina.easeout, anim5);
  };

  //1000+300 timeout

  function anim5() {
    triangleMask.animate({
      points: tri3
    }, 300, mina.easein);
  };

  //1600ms

  function anim6() {
    checkMark.animate({
      points: chk2
    }, 300, mina.linear, anim7);
  };

  //300+1300 timeout

  function anim7() {
    checkMark.animate({
      points: chk3
    }, 300, mina.easein);
  };

  setTimeout(anim2, 100);
  setTimeout(anim4, 300);
  setTimeout(anim6, 1300);
});