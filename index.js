document.getElementById("Playbtn").onclick = function(){

    let number = Number(document.getElementById("inputNumber").value);
    let pcnum = Math.floor(Math.random() * 10 + 1) ;

    if( (number <= 10) && (number >= 1)){
        if (number == pcnum){
            document.getElementById("Results").innerHTML = "You won !!!";
        }else {
            document.getElementById("Results").innerHTML = `You lost the right answer is : ${pcnum}`;
        }
        
    } else {
        document.getElementById("Results").innerHTML = `Would you choose a number between 1 and 10 please `;
    }
}
