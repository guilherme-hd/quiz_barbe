import Quiz from "./Quiz";
 
 const Apresentacao = (alteratela) => {


    return (   
        <div>

            <h1>ola seja bem vindo ao quiz da barbie</h1>
            <button onClick={()=>alteratela(<Quiz/>)}>iniciar </button>

        </div>
        
    );
}


export default Apresentacao;
