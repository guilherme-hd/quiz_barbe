
import React from "react";
import Quiz from "./Quiz"


const alteratela = props.alteratela;

const[etapa,alteraEtapa]=React.useState(0);

const perguntas = [
        perguntas: "qual a cor do cavalo de napoleão",
        respostas: ["preto","amarelo","branco","azul"]
        correta: 0
];

        const verificarespostas = ()= {

        if(etapa + 1 < perguntas.length){
                alteratela(etapa + 1)
            }else{
                alteratela(<final alteratela={alteratela}/>);
            }
        }  

const Quiz =() => {
    return (
        
            <div>
                    <ul> 
                        <h1>Pergunta</h1>
                    <h1>{perguntas[etapa].perguntas}</h1>

                    perguntas[etapa].respostas.map((r))=>{
                    return <li>{r}</li>  
                    </ul>
                
            </div>

    );
}

export default quiz ;