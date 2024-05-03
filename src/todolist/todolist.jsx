import { useRef, useState } from "react";

function TodoList (){
    const [tarefas, setTarefas] = useState([]);
    const descricaoRef = useRef();

    function cadastrar (){
        console.log(descricaoRef.current.value);

        //"descricaoRef.current.value" = 
        const tarefa = {
            id: 1,
            descricao: descricaoRef.current.value,
            finalizado: false
        }
        
        // //PRIMEIRA FORMA
        // //tarefas.push(tarefa);
        // //setTarefas(tarefas.slice); //passando o objeto "tarefa" como parâmetro para a lista "setTarefas"
       
        //SEGUNDA FORMA
        //pega item a item da lista TAREFAS e adiciona numa nova lista
        //"tarefas" é a lista antiga ja com os itens adicionados
        //"tarefa" é o novo item que esta sendo adicionado
        //os colchetes amarelos "[]" são a NOVA LISTA que esta sendo criada com os itens de "tarefas" mais o novo item "tarefa" que vai ser criado
        setTarefas([...tarefas,tarefa]);
        
        
        
        console.log("Cadastrado com SUCESSO!")
    }

    //esta função recebe uma tarefa...
    function nomeMudou(tarefa){ //porém este "tarefa" é apenas um parâmetro, não tem nada a ver
                                //com as variáveis e listas com nome "tarefas" ou "tarefa" do código

        tarefa.finalizado=!tarefa.finalizado;
        console.log(tarefa);
    }

    return ( //retorna um bloco HTML
        <>
            <input type="text" ref={descricaoRef}/>
            <button onClick={cadastrar}>Cadastrar</button>
            <br/>

            {//mostrar uma variável JS no HTML

                //MAP é para mapear a lista TAREFAS
                //Esta transformando cada nome da lista em um parágrafo
                tarefas.map(joao=>{ //MAP recebe a função "joao" (joao é apenas um parâmetro)                    return <p>{joao.descricao}</p>
                          
                    return (
                    <>     
                
                        <input type="checkbox" onChange={() => nomeMudou(joao)}/>
                        <span>{joao.descricao}</span>
                    </>
                    )
                })
            }
        </>
    );
};

export default TodoList;