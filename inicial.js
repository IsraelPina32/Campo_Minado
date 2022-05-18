function mudar() {
    
    var select = document.getElementById("selecao");
    var value = select.options[select.selectedIndex].value;

    if(value == "F"){
        location.href = "facil.html";
    } else if(value == "N"){
        location.href = "normal.html";
    } else if(value == "D"){
        location.href = "dificil.html";
    } else{
        alert("selecione algo válido")
    }
}