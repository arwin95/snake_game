// let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])

// Get some Context
let ctx = game.getContext('2d')

// Constructor function (JS version of OOP)
// This is a blueprint for a Crawler
function Crawler(x, y, color, width, height) {
  this.x = x
  this.y = y
  this.color = color
  this.width = width
  this.height = height
  this.alive = true
  this.render = function() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

// individual crawler
let snake = new Crawler(20, 20, 'hotpink', 50, 10)
let food = new Crawler(30, 50, 'orange', 10, 10)

let gameLoop = () => {
  // clear the canvas
  ctx.clearRect(0, 0, game.width, game.height)
  // Display relevant Game State Info (display the x, y coordinates of our snake)
  // movementDisplay.innerText = `X: ${snake.x}\nY: ${snake.y}`
  // check if the food is alive
  if (food.alive) {
    // render food
    food.render()
    // check for collision
    detectHit()
  }
  // render snake
  snake.render()
}

let detectHit = () => {
  // write the if statement to end all if statements
  // if snake's right > food's left AND snake's left < food's right
  // if snake's bottom > food's top && snake top < food bottom
  if (
    snake.x + snake.width > food.x &&
    snake.x < food.x + food.width &&
    snake.y < food.y + food.height &&
    snake.y + snake.height > food.y
    ) {
      // game over
      food.alive = false;
      //ADD 🔸 in a new place with .random()
      //ADD var scoreCount
      //ADD Loop for scoreCount++
      // document.querySelector('#scoreCount  > h2').innerText = '1'
      document.querySelector('#btm-right > h2').innerText = '1'
      // document.querySelector('#btm-right > h2').innerText = '🐍 ate 10 🔸'
    } 
}

//ADD a loop in each CASE - for non-stop movement (TRY)
let movementHandler = e => {
  switch(e.key) {
    case 'w':
      // move up
      snake.y -= 10
      break
    case 'a':
      // move left
      snake.x -= 10
      break
    case 's':
      // move down
      snake.y += 10
      break
    case 'd':
      // move right
      snake.x += 10
  }
}

let stop = () => clearInterval(gameInterval)


document.addEventListener('keypress', movementHandler)
let gameInterval = setInterval(gameLoop, 70);