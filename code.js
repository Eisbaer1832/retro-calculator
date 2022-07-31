let sven = "-";
let eins = NaN;
let zwei = NaN;
const operator_comp = ["+=","-=","/=","*=","**","SVEN"];
let rand;
function funktion(){
    rand = Math.floor(Math.random() * 10);
    console.log(rand);
    
    eins = document.getElementById("1").value;
    console.log(eins);

    zwei = document.getElementById("2").value;
    console.log(zwei);
    
    operator = document.getElementById("default_select").value;
    console.log(operator);
    if (operator == 5)
    {
        document.getElementById('dialog-rounded').showModal();

    }
    
    operator = operator_comp[operator];
    console.log(operator);
    
    if (operator == "+=")
    {
        sven = Number(eins) + Number(zwei)
    } 

    if (operator == "-=")
    {
        sven = eins - zwei
    } 

    if (operator == "/=")
    {
        sven = eins / zwei
    } 

    if (operator == "*=")
    {
        sven = eins * zwei
    } 

    if (operator == "**")
    {
        sven = eins ** zwei

        if (sven >= 2 ** 52 - 1)
            sven = "Frechheit 🐸"
    } 

    if (rand < 3)
    {
        document.getElementById("image1").style="display: visibility";  
        document.getElementById("image2").style="display: none";
        document.getElementById("image3").style="display: none";  
        document.getElementById("image4").style="display: none";  


    }


    if (rand > 3 && rand < 6)
    {
        document.getElementById("image1").style="display: visibility";  
        document.getElementById("image2").style="display: visibility";  
        document.getElementById("image3").style="display: none";  
        document.getElementById("image4").style="display: none";  

    }

    if (rand > 6)
    {
        document.getElementById("image1").style="display: visibility";  
        document.getElementById("image2").style="display: visibility";  
        document.getElementById("image3").style="display: visibility";  
        document.getElementById("image4").style="display: none";  

    }


    if (eins == "" || zwei == "")
        sven = "Frechheit 🦆"

    document.getElementById("ph").innerHTML = sven;

    
}


// 