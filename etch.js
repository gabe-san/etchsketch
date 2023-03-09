// defined variables
const container = document.getElementById('container');


// DOM grid manipulation ()
let makeGrid = (rows, cols) => {
    container.style.setProperty('--grid-rows', rows); //CSS grid
    container.style.setProperty('--grid-cols', cols);
    for (let i= 0; i < rows * cols; i++) {      //for loop for total new divs
        let cell = document.createElement('div');
        //cell.innerText = (i + 1);  //check #
        container.appendChild(cell).className = "gridboxes"
        cell.addEventListener('mouseover', () =>{
            cell.style.backgroundColor = "white";
        })
    };
};
makeGrid(16,16);

//hover effect event listener 
var hoverChange = document.getElementsByClassName('gridboxes');

//hoverChange.forEach(cell => {  //bug with spread syntax, wouldnt update new gridbox style
//    cell.addEventListener("mouseover", () => {
 //     cell.setAttribute('style', 'background-color: white;')
//    });
//});

//reset button
let clear = document.querySelector("#btn");

clear.addEventListener('click', () => {
    for (let i=0; i< hoverChange.length; i++) {  //need to call removeAttribute on elements of nodelist
        hoverChange[i].removeAttribute("style");
    };
});

//custom pad size
let custombtn = document.querySelector("#custom");

custombtn.addEventListener('click', () => {
    resetGrid()
});

function resetGrid(){
    for (let i=0; i< hoverChange.length; i++) {
        hoverChange[i].removeAttribute("style");
    };
    do { 
        var a = parseInt(prompt("How many squares per side? (<100)"), 10);
} while (isNaN(a) || a > 100 || a < 1);

    makeGrid(a,a);
};
