cell1=document.getElementById("cell1");
cell2=document.getElementById("cell2");                                     
cell3=document.getElementById("cell3");
cell4=document.getElementById("cell4");
cell5=document.getElementById("cell5");
cell6=document.getElementById("cell6");
cell7=document.getElementById("cell7");
cell8=document.getElementById("cell8");
cell9=document.getElementById("cell9");
turn=document.getElementById("turn-indicator");
player1score=document.getElementById("player1-score");
player2score=document.getElementById("player2-score");
flag = true;

function move(cell){
    if(cell.innerHTML=="" && flag==true){
        cell.innerHTML="X";
        
        flag = false;
        
        turn.innerHTML="2's";
        check(1);
    }else
    if(cell.innerHTML=="" && flag==false){
        cell.innerHTML="O";
        flag = true;
        turn.innerHTML="1's";
         check(2);
    }
}


let allwinconditions=[
    [cell1,cell2,cell3],
 [cell4,cell5,cell6],
 [cell7,cell8,cell9],
 [cell1,cell4,cell7],
    [cell2,cell5,cell8],
    [cell3,cell6,cell9],
     [cell1,cell5,cell9],
    [cell3,cell5,cell7]
]

function check(player){
    for(i=0;i<allwinconditions.length;i++){
        const [a,b,c] = allwinconditions[i];
        if(a.innerHTML==b.innerHTML && b.innerHTML==c.innerHTML && a.innerHTML!=""){
            alert(player+" wins!");
              
            if(player==1){
                player1score.innerHTML=parseInt(player1score.innerHTML)+1;
            }
            else{
                player2score.innerHTML=parseInt(player2score.innerHTML)+1;
            }
           for(j=0;j<allwinconditions.length;j++){
               allwinconditions[j][0].innerHTML="";
               allwinconditions[j][1].innerHTML="";
               allwinconditions[j][2].innerHTML="";
           }
            
          
    }
    else if(cell1.innerHTML!="" && cell2.innerHTML!="" && cell3.innerHTML!="" && cell4.innerHTML!="" && cell5.innerHTML!="" && cell6.innerHTML!="" && cell7.innerHTML!="" && cell8.innerHTML!="" && cell9.innerHTML!=""){
        alert("It's a draw!");
    
}
function reset(){
    player1score.innerHTML=0;
    player2score.innerHTML=0;
    for(j=0;j<allwinconditions.length;j++){
               allwinconditions[j][0].innerHTML="";
               allwinconditions[j][1].innerHTML="";
               allwinconditions[j][2].innerHTML="";
           }
}
    }
}