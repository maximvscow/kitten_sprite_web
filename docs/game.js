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
    animation: tiles.newImage("sprites/000001/def.png").getAnimation(0, 0, 192, 192, 19),
    x: spriteMargin,
    y: 70,
    w: 192,
    h: 192,
    delay: 3,
  })

  var lick = game.newAnimationObject({
    animation: tiles.newImage("sprites/000001/lick.png").getAnimation(0, 0, 192, 192, 28),
    x: spriteMargin,
    y: 70,
    w: 192,
    h: 192,
    delay: 3,
  })

  var feed = game.newAnimationObject({
    animation: tiles.newImage("sprites/000001/feed.png").getAnimation(0, 0, 192, 192, 29),
    x: spriteMargin,
    y: 70,
    w: 192,
    h: 192,
    delay: 3,
  })

  var clicked = false

  window.addEventListener('resize', function(event) {
    windowInnerWidth = window.innerWidth
    spriteMargin = (windowInnerWidth/2 - 96)
    idel.x = spriteMargin
  }, true);

  document.getElementById('feedCat').addEventListener("click", function() {
    clicked = true });
  
  // Почему анимация еду отрисовывается только по шестому нажатию на кнопку 
  
  
  game.newLoop('myGame', function () { 

    if (clicked == true) {
      feed.draw();
      if (feed.getFrame() == feed.getLastFrame()){
        clicked = false
      }
    } else {
      idel.draw(); 
    }

  });
  
  game.setLoop('myGame');
  game.start();