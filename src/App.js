import React from 'react';
import Apresentacao from 'Apresentacao';



function App() {
  const {tela, alteratela}=React.useState(null);

  if(tela == null){
    alteratela (<Apresentacao alteratela ={alteratela}/>)


  }
    return (

      <div>

      {tela}

      </div>
  );
}

export default App;
