function  campo(colunas_count,linhas_count,minas){
    let linhas =  [];

    //colocando as minas no campo
    for(let i = 0; i < linhas_count; i++){
        linhas[i] = [];
        for(let c = 0; c < colunas_count;c++){
            if(minas.map(x => JSON.stringify(x)).includes("["+i+","+c+"]")) {
                linhas[i][c] = "*";
            } else{
                linhas[i][c] = 0;
            }
        }
    }
    ///Verificando se tem minas perto
    for(let i = 0; i < linhas_count;i++){
        for(let c = 0; c < colunas_count;c++){
            if(linhas[i][c] != "*" ){
                if(linhas[i - 1] !== undefined && linhas[i - 1][c - 1] === "*" ) linhas[i][c]++;
                if(linhas[i - 1] !== undefined && linhas[i - 1][c    ] === "*" ) linhas[i][c]++;
                if(linhas[i - 1] !== undefined && linhas[i - 1][c + 1] === "*" ) linhas[i][c]++;

                if(linhas[i][c - 1] === "*") linhas[i][c]++;
                if(linhas[i][c + 1] === "*") linhas[i][c]++;
                
                if(linhas[i + 1] !== undefined && linhas[i + 1][c - 1] === "*" ) linhas[i][c]++;
                if(linhas[i + 1] !== undefined && linhas[i + 1][c    ] === "*" ) linhas[i][c]++;
                if(linhas[i + 1] !== undefined && linhas[i + 1][c + 1] === "*" ) linhas[i][c]++;
            }
        }
    }
    return linhas;
}


function clicado(evento){
    if(evento.target.textContent === "*"){
        for(let elemento of document.querySelectorAll("span")){
            elemento.setAttribute('class', '')
        }
        alert("Perdeu ruim")
        let escolha = prompt("deseja jogar novamente: S/N");
        if(escolha == "S"){
            window.location.reload();
        } else{
            location.href = "inicialpag.html"
        }
    } else{
        evento.target.childNodes[0].setAttribute('class', '')
    }
}

//Pegando os Elementos do html e add no JS
function table(linhas){
    let tabela = document.getElementById("campo");
    for(let linha of linhas){
        let tr = document.createElement("tr");
        for(let colunas of linha ){
            let td = document.createElement("td");
            let span = document.createElement("span");
            span.textContent = colunas; //Colocando elementos dentro do spam
            span.setAttribute('class', "visivel"); // Definindo uma classe visivel ao span
            td.appendChild(span); //informando que a td pai da span
            tr.appendChild(td); // mesma coisa
            td.addEventListener('click', clicado)

        }
       tabela.appendChild(tr); // tabela e pai da tr
    }
}

//gerador de minas aleatorio
function geradoDeMinas(quantidade,colunas,linhas){
    let minas = [];
    for(let i = 0; i < quantidade;i++){
        let posicao_linha = parseInt(Math.random() * linhas);
        let posicao_coluna = parseInt(Math.random() * colunas);
        minas.push([posicao_linha,posicao_coluna])
    }
        return minas;
}

// Definindo as minas no campo
let minas = geradoDeMinas(99,22,24)
table(campo(22, 24,minas))