
    let pcnum = Math.floor(Math.random() * 10 + 1) ;
    let tries = 0;

document.getElementById("playBtn").onclick = function(){

    let number = Number(document.getElementById("numimput").value);

    if (number>10 || number<1){
        document.getElementById("lose").innerHTML = "Give a number between 1 and 10 please";
    }else{
        if(number == pcnum){
            document.getElementById("win").innerHTML = `You won with ${tries} tries`;
            document.getElementById("lose").innerHTML = "";
        }
        else if(number>pcnum){
                document.getElementById("lose").innerHTML = "Lower";
                tries++;
        }
        else{
                document.getElementById("lose").innerHTML = "Higher";
                tries++;
            }       
    }

};
document.getElementById("replayBtn").onclick = function(){
     pcnum = Math.floor(Math.random() * 10 + 1) ;
     tries = 0;
     document.getElementById("win").innerHTML = "";
    play();
};
