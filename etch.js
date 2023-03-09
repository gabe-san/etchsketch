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
    };
};
makeGrid(16,16);

//hover effect event listener 
const hoverChange = [...document.getElementsByClassName('gridboxes')];

hoverChange.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.setAttribute('style', 'background-color: white;')
    });
});