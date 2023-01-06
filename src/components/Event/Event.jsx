import { Link } from "react-router-dom"

import './Event.css'
const Event = ({data}) => {
    console.log(data)
  return (
    <div className="EventItem">
        <section className="teamSect">
            <div>
                <h4>{data.equipo1}</h4>
                <h4>{data.equipo2}</h4>
            </div>
            {data.fecha}
        </section>
        <Link to={`/${data.id}`}>
            Ver horarios
        </Link>
    </div>
  )
}

export default Event