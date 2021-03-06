import React from 'react';
import { Component } from 'react';
import api from './api';


class App extends Component{

state={
  Acoes:[],
}

async componentDidMount(){
  const response = await api.get('');
  //console.log(response.data);
  this.setState({Acoes: [response.data]});
}

  render(){

    const { Acoes } = this.state;
    
    if(Acoes.length>0){
      
    const obj = Acoes[0]
    const time = Object.values(obj)[1]
    const cota =Object.values(time) 

    const item = {
      open: Object.values(cota[0])[0],
      high: Object.values(cota[0])[1],
      low: Object.values(cota[0])[2],
      close: Object.values(cota[0])[3],
      volume: Object.values(cota[0])[4]
    }

    return (

      <div>
      <h1>Lista de Ações</h1>
     
      <ul>  
        <h2>
              Valores Atualizados a cada 5 minutos: 
        </h2>
         
            <li className="">
              <p>open:{item.open}</p>
              <p>high:{item.high}</p>
              <p>low:{item.low}</p>
              <p>close:{item.close}</p>
              <p>volume:{item.volume}</p> 
            </li>
      </ul>
      </div>
    );

    }else {
      return (<p>Carregando</p>)
    }

    }
  };
export default App;