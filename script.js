let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")// define o estlo de desenho no caso 2d
let box = 32 //define o tamanho dos quadrados com 32px
let snake = [];
 snake[0] = {
     x: 8 * box,
     y: 8 * box
 }
 let direction = "right";

    function criarBG() {
        context.fillStyle = "lightgreen" //define o estilo do background
        context.fillRect(0, 0, 16 * box, 16 * box)

}
function criarCobrinha(){
    for(i=0; i <snake.length; i++){
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box)

    }
}

function iniciarJogo(){
    criarBG()
    criarCobrinha()

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box; //caso o quadrado va pra direita adiciona um a mais
    if(direction == "left") snakeX -= box;  // caso ela va pra esquerda diminiu um bloco
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        X: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);//passa o intervelalo pra 100ms para tudo ser resetado e iniciar o jogo




