
document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) =>{
        square.addEventListener('click', handleClick);
    })


})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert(resultado());
            }, 10);

    };
    updateSquare(position);
}
function resultado(){
    if (playerTime === 0){
        return "O jogo Acabou - O vencedor foi escudo";
    }else
        return "O jogo Acabou - O vencedor foi espada";
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}



