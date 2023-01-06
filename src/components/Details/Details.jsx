import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TimeRest from '../TimeRest/TimeRest'
import Volver from '../VolverBtn/Volver'

import './Details.css'


const Details = ({partidos}) => {
    let {id}=useParams()
    const [data, setData] = useState()
    useEffect(()=>{
        setData(partidos.find(e=>e.id==id))
    },[id]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    data && <section className='detailsContainer'>
        <Volver/>
        <div className='detailsTitulo'>
                <h2 className='equipo'>
                    <img src={require(`../../assets/img/logos/${data.equipo1}.webp`)} alt={`${data.equipo2} logo`} />
                    {data.equipo1}
                </h2>
            <h2>vs</h2>
                <h2 className='equipo'>
                    <img src={require(`../../assets/img/logos/${data.equipo2}.webp`)} alt={`${data.equipo2} logo`} />
                    {data.equipo2}
                </h2>

        </div>
        <p className='fecha'>{data.fecha}</p>
        <div className='timeSec'>
            {data.horario.map(e=>{
                return(
                    <div key={e.resto} className="restoTimes">
                        <p className='restoNombre'>{e.resto}:</p>
                        {e.horas.map((e,i)=>{
                            return(
                                <TimeRest data={e} key={i}/>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Details