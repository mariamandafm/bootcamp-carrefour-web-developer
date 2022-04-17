import React from 'react';

function Casos(props){
    return(
      <div className='larg-card card border-primary mb-3'>
        <div className='card-header'>Casos</div>
        <div className="card-body text-primary">
          <div className='card-text'>{props.data.cases}</div>
        </div>
      </div>
    )
  }

  function Mortes(props){
    return(
      <div className='larg-card card border-danger mb-3'>
        <div className='card-header'>Mortes</div>
        <div className="card-body text-danger">
          <div className='card-text'>{props.data.deaths}</div>
        </div>
      </div>
    )
  }

  function MortesPorMilhao(props){
    return(
      <div className='larg-card card border-danger mb-3'>
        <div className='card-header'>Mortes por milhão</div>
        <div className="card-body text-danger">
          <div className='card-text'>{props.data.deathsPerOneMillion}</div>
        </div>
      </div>
    )
  }

  function CasosHoje(props){
    return(
      <div className='larg-card card border-primary mb-3'>
        <div className='card-header'>Casos Hoje</div>
        <div className="card-body text-primary">
          <div className='card-text'>{props.data.todayCases}</div>
        </div>
      </div>
    )
  }

  function MortesHoje(props){
    return(
      <div className='larg-card card border-danger mb-3'>
        <div className='card-header'>Mortes hoje</div>
        <div className="card-body text-danger">
          <div className='card-text'>{props.data.todayDeaths}</div>
        </div>
      </div>
    )
  }

  function Testes(props){
    return(
      <div className='larg-card card border-success mb-3'>
        <div className='card-header'>Testes feitos</div>
        <div className="card-body text-success">
          <div className='card-text'>{props.data.totalTests}</div>
        </div>
      </div>
    )
  }

  

 export {Casos, Testes, MortesHoje, CasosHoje, MortesPorMilhao, Mortes};