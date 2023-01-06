import Event from '../Event/Event'

import './EventsContainer.css'
const EventsContainer = ({data}) => {
    console.log(data)
  return (
    <section className='EventsSection'>
        <h1>Calendario de partidos</h1>
        <section className='mainEvents'>
            {data.map((e,i)=>{
                return(
                    <Event data={e} key={i}/>
                )
            })}

        </section>
    </section>
  )
}

export default EventsContainer