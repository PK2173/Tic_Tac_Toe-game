console.log("welcomme to tic tac toe");

let music = new Audio("music.mp3");
let gameturn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let  isgameover = false

//  funtion to change turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

// funtion to check winner
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext")
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    win.forEach(e=>{
      if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = `${boxtexts[e[0]].innerText} Is Win`
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '156px'
        isgameover = true
      }  
    })

}


// maine game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{
    let boxtext = Element.querySelector(".boxtext")
    Element.addEventListener("click", ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn
            turn = changeTurn()
            gameturn.play();
            checkWin()
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerHTML = `Turn for ${turn}`
            }
        }
    })
})
