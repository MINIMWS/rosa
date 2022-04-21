var box

function setup() {
  console.log("sandaçha")
  createCanvas(1000, 1000)

  box = createSprite(200, 200, 30, 30)
  box.shapeColor = "blue"
}

function draw() {
  background(220)
  if (keyDown('LEFT_ARROW')){
    box.x -= 3
    box.shapeColor = "ivory"
  }
   
  
  if (keyDown('RIGHT_ARROW')){
    box.x += 3
    box.shapeColor = "orange"
  }

  if (keyDown("UP_ARROW")){
    box.y -= 1
    box.shapeColor = "pink"
  }

  if (keyDown("DOWN_ARROW")){
    box.y += 1
    box.shapeColor = "red"
    box.scale = 14
  }

  drawSprites()
}
