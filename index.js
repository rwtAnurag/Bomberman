var score=0;
            var startGame=true;
            var p=0;
            for(var i=0;i<9;i++)
            {
            var col=document.createElement("DIV"); 
            col.setAttribute("class","grid-class");  
              for(var j=0;j<9;j++)
              {
                  var row=document.createElement("DIV");
                  row.setAttribute("class","grid-item");
                  row.setAttribute("id",`cell_${p+1}`);
                  row.setAttribute("value",`0`);
                  col.appendChild(row);
                  p++;
              }
              document.body.append(col);
            }
        window.random = [];
        var flag=false;
        function myFunction()
        {
            while(window.random.length < 10){
            var r = Math.floor(Math.random() * 81) + 1;
            if(window.random.indexOf(r) === -1) window.random.push(r);
           }
       }
console.log(window.random);
document.querySelectorAll(".grid-item")
.forEach((cell)=>cell.addEventListener("click",handleCellClick));
 function handleCellClick(clickedCellEvent)
  {
  if(score==70){
     document.getElementById("resultDisplay").innerHTML="win";
      startGame=false;
      flag =false;
     }
  if( startGame==true && clickedCellEvent.target.getAttribute("value")==0){
    document.getElementById(clickedCellEvent.target.id).setAttribute("value",`1`);
  console.log(typeof((clickedCellEvent.target.id)));
  for(var i=0;i<10;i++)
  {
     var fc=`cell_${window.random[i]}`;
     console.log(fc,(clickedCellEvent.target.id));
    
     if(fc==(clickedCellEvent.target.getAttribute("id")))
     {
        flag =true;
        startGame=false;
        break;
     }
     else{
        flag= false;
     
     }
  }
  if(flag==true)
     {
        document.getElementById("resultDisplay").innerHTML="game-over";
      for(var j=0;j<window.random.length;j++){
       document.getElementById(`cell_${window.random[j]}`).style.backgroundImage='url("https://img.icons8.com/emoji/48/000000/bomb-emoji.png")';
       document.getElementById(`cell_${window.random[j]}`).style.backgroundColor="red";}
       flag =false;
     }
   else{
        document.getElementById(clickedCellEvent.target.id).style.backgroundColor="green";
        document.getElementById(clickedCellEvent.target.id).innerHTML='1';
        score++;
     }
   {document.getElementById("gameScore").innerHTML=score;}}

}
document.getElementById("resetButton").addEventListener("click",(event)=>

{
    document.getElementById("resultDisplay").innerHTML="";
    for(var i=0;i<81;i++)
    {
        document.getElementById(`cell_${i+1}`).style.backgroundColor="gray";
        document.getElementById(`cell_${i+1}`).style.backgroundImage='';
        document.getElementById(`cell_${i+1}`).setAttribute("value",`0`);
        document.getElementById(`cell_${i+1}`).innerHTML="";
    }
    startGame=true;
    score=0;
    document.getElementById("gameScore").innerHTML=score;
    window.random=[];
    myFunction()
})