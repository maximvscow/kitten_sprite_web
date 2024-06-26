var windowInnerWidth = window.innerWidth
var spriteMargin = (windowInnerWidth/2 - 96)
var overfeed = false

var pjs = new PointJS(192, 242, {
    backgroundColor: '#ffffff'
  });
  
  pjs.system.initFullPage();
  var game = pjs.game;
  var tiles = pjs.tiles;
  var mouse = pjs.mouseControl;
  mouse.initControl();
  
  
  var text_button_feed = game.newTextObject({
    x: spriteMargin,
    y: 340,
    text: "feed",
    size: 30,
    font: 'Comicoro',
    color: "#474646",
  })

  var text_button_drink = game.newTextObject({
    x: spriteMargin + 150,
    y: 340,
    text: "drink",
    size: 30,
    font: 'Comicoro',
    color: "#474646",
  })

  var rect_button_feed = game.newRectObject({
    x: spriteMargin - 30,
    y: 330,
    w: 100,
    h: 50,
    fillColor: "#FFCCCC",
  })

  var rect_button_drink = game.newRectObject({
    x: spriteMargin + 120,
    y: 330,
    w: 100,
    h: 50,
    fillColor: "#FFCCCC",
  })

  
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


  window.addEventListener('resize', function(event) {
    windowInnerWidth = window.innerWidth;
    spriteMargin = (windowInnerWidth/2 - 96);
    idel.x = spriteMargin;
    feed.x = spriteMargin;
    lick.x = spriteMargin;
    text_button_feed.x = spriteMargin;
    rect_button_feed.x = spriteMargin - 30;
    text_button_drink.x = spriteMargin + 150;
    rect_button_drink.x = spriteMargin + 120;
  }, true);

  
  game.newLoop('myGame', function () { 

    rect_button_feed.draw();
    rect_button_drink.draw();
    text_button_feed.draw();
    text_button_drink.draw();
    idel.draw(); 

    if (mouse.isInStatic(rect_button_feed.getStaticBox())) {
      rect_button_feed.fillColor = '#f0b4b4';
    } else {
      rect_button_feed.fillColor = '#FFCCCC';
    }

    if (mouse.isInStatic(rect_button_drink.getStaticBox())) {
      rect_button_drink.fillColor = '#f0b4b4';
    } else {
      rect_button_drink.fillColor = '#FFCCCC';
    }

  });
  
  game.setLoop('myGame');
  game.start();