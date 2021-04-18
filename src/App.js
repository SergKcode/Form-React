  
import React from 'react';
import InputForm from "./components/InputForm";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'



function App() {

  // state de frases
  //const [frase, guardarFrase] = useState({});

  /* 
  ----1st way to get info
  
  const consultarAPI = async () => {
    const api = await fetch('https://v6.exchangerate-api.com/v6/343f756238f4dc54c1685159/latest/USD');
    const frase = await api.json()
    console.log(frase.conversion_rates)
    console.log(frase.base_code)
    //guardarFrase(frase[0]);
  }
 */

  //https://v6.exchangerate-api.com/v6/343f756238f4dc54c1685159/pair/EUR/GBP/100
  // https://v6.exchangerate-api.com/v6/343f756238f4dc54c1685159/latest/USD


  /* const consultarAPI = async () => {
    const api = await fetch('https://v6.exchangerate-api.com/v6/343f756238f4dc54c1685159/pair/EUR/GBP/300');
    const data = await api.json()
    console.log(data)
    
    const exchangeResult = [data.conversion_rate, data.conversion_result]
      
      
    console.log(exchangeResult)
    
  }

  useEffect( () => {
    consultarAPI()
  }, []);  */

  return (
    <div className="InputForm-form">
      <h1>Travel Budger exchanger</h1>
      <InputForm/>
    </div>
  );
}

export default App;
