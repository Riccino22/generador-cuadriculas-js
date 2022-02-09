var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var spaceSqrHeight = document.getElementById("space-sqr-height");
var colorAlt = document.getElementById("colorAltC");
var spaceSqrWidth = document.getElementById("space-sqr-width");
var colorHor = document.getElementById("colorHorC");
var cH = document.getElementById("cH");
var cW = document.getElementById("cW");

var cubierta = document.getElementById("cubierta");
var container = document.getElementById("container");

var closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", close);

var interlineVert = parseInt(cW.value) / parseInt(spaceSqrHeight.value);


function close(){
    cubierta.style.display = "none";
    container.style.display = "none";
}

function crearCuadricula()
{

    cubierta.style = 
    `
        width: 100%;
        height: 150vh;
        position: fixed;
        background: #00000080;
        margin-top: -20px;
    `

    container.style = `
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
    `

    canvas.style = 
    `
        display: flex;
        background: aliceblue;    
        position: fixed;
        margin-left: calc(50% - ${cW.value/20}px);
        
    `

    closeBtn.style = 
    `
      width: 50px;
      height: 50px;
      color: white;
      border: none;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50px;   
      margin-top: -100vh; 
      font-weight: bold;
      font-size: 20pt;
      margin-left: 10px;  
    `



    canvas.width = cW.value;
    canvas.height = cH.value;


//////////////////////////////////////////////  X

    for(var i = 0; i < 1000; i++)
    {
        ctx.beginPath();
        ctx.strokeStyle = colorAlt.value;
        ctx.moveTo(i * spaceSqrHeight.value, 0);
        ctx.lineTo(i * spaceSqrHeight.value, canvas.height);
        ctx.stroke();
        ctx.closePath();    
    }



    for(var i = 0; i < 1000; i++)
    {
        ctx.beginPath();
        ctx.strokeStyle = colorHor.value;
        ctx.moveTo(0, i * spaceSqrWidth.value);
        ctx.lineTo(canvas.width, i *  spaceSqrWidth.value);
        ctx.stroke();
        ctx.closePath();    
    }



}
