var windowInnerWidth = window.innerWidth
var spriteMargin = (windowInnerWidth/2 - 96)

var pjs = new PointJS(192, 242, {
    backgroundColor: '#ffffff'
  });
  
  pjs.system.initFullPage(); // развернули игру на полный экран
  var game = pjs.game;
  var tiles = pjs.tiles;
  var key = pjs.keyControl.initControl();
  
  //анимационный персонаж в фазе idel
  var idel = game.newAnimationObject({
    animation: tiles.newImage("sprites/000001/lick.png").getAnimation(0, 0, 192, 192, 28),
    x: spriteMargin,
    y: 70,
    w: 192,
    h: 192,
    delay: 3,
  })
  
  
  // Если количество фаз, задержка, и размер кадров разных фаз персонажа совпадают, можно
  // не создавать два анимационных объекта а менять в параметре animation ссылку на новое изображение
  // На эту тему смотри пример "два способа смены анимацции в одном спрайте"
  
  
  game.newLoop('myGame', function () { 

    idel.draw(); // иначе рисовать idel

    window.addEventListener('resize', function(event) {
      windowInnerWidth = window.innerWidth
      spriteMargin = (windowInnerWidth/2 - 96)
      idel.x = spriteMargin
    }, true);

  });
  
  game.setLoop('myGame');
  game.start();