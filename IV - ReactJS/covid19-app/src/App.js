import './App.css';
import {useState, useEffect, useCallback} from 'react'
import Api from '../src/api.js'
import '../src/bootstrap/bootstrap.min.css'
import {Casos, Testes, MortesHoje, CasosHoje, MortesPorMilhao, Mortes} from '../src/components/cards.js'


function App() {

  const [data, setData] = useState({})
  const [country, setCountry] = useState('argentina')
  
  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {    
    getCovidData(country)
  }, [getCovidData, country])

  function Nav(){
    let hoje = new Date()
    let dia = hoje.getDate()
    let mes = hoje.getMonth()+1
    let ano = hoje.getYear()+1900
    return(
      <nav class="navbar navbar-light">
        <h1>Dados Covid-19 dia {dia}/0{mes}/{ano}</h1>
      </nav>
    )
  }

  function Pais(){
    return(
      <div className= 'pais-select'>
        <select 
        onChange={(e) => {setCountry(e.target.value)}}
        
        className='form-select'>
          <option value={'world'} >World</option>
          <option value={'argentina'}>Argentina</option>
          <option value={'brazil'}>Brazil</option>
          <option value={'USA'}>USA</option>
          <option value={'italy'}>Italy</option>
          <option value={'germany'}>Germany</option>
          <option value={'UK'}>UK</option>
          <option value={'Russia'}>Russia</option>
          <option value={'Canada'}>Canada</option>
          
        </select>
      </div>
    )
  }

  function Cards(props){
    return(
      <div className='Cards'>
        <div className='row'>
          <div className='col-sm-6'>
            <Casos data={data}/>
            <Mortes data={data}/>
            <MortesPorMilhao data={data}/>
          </div>
          <div className='col-sm-6'>
            <CasosHoje data={data}/>
            <MortesHoje data={data}/>
            <Testes data={data}/>
          </div>
        </div>
      </div>
    )
 }

  return (
    <div className="App">
      <Nav />
      <div className='container'>
        <Pais />
        <h1>{data.country}</h1>
        <Cards data={data}/>
      </div>  
    </div>
  );
}

export default App;
