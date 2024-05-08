var pjs = new PointJS(350, 259, {
    backgroundColor: '#ffffff'
  });
  
  pjs.system.initFullPage(); // развернули игру на полный экран
  var game = pjs.game;
  var tiles = pjs.tiles;
  var key = pjs.keyControl.initControl();
  
  //анимационный персонаж в фазе idel
  var idel = game.newAnimationObject({
    animation: tiles.newImage("sprites/k000002.png").getAnimation(0, 0, 150, 159, 28),
    x: 100,
    y: 100,
    w: 150,
    h: 159,
    delay: 3,
  })
  
  
  // Если количество фаз, задержка, и размер кадров разных фаз персонажа совпадают, можно
  // не создавать два анимационных объекта а менять в параметре animation ссылку на новое изображение
  // На эту тему смотри пример "два способа смены анимацции в одном спрайте"
  
  
  game.newLoop('myGame', function () { 
    idel.draw(); // иначе рисовать idel

  });
  
  game.setLoop('myGame');
  game.start();