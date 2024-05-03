import { useState } from "react";

function Contador(){
    
    //USE STATE: retorna uma lista com 2 parâmetros/itens = 
    //1° Item: variável criada
    //2° Item: atualizar a variável e a tela do HTML
    //Toda vez que chama um SET de alguma coisa, o HTML inteiro é reconstruído
    //o "0" dentro do "useState" é o valor inicial da variável
    const [numero, setNumero] = useState(0);

    function contar(){
        setNumero(numero+1);
        console.log(numero);
    }

    function zerarNumero(){
        setNumero(0);
    }
    
    return (
        <>
            <button onClick={contar}>Contar</button>
            <button onClick={zerarNumero}>Zerar Número</button>
            { //com as chaves da para escrever JS dentro do HTML
                numero
            }
        </>
    )
}

export default Contador;