import { Link } from "react-router-dom"

import './Event.css'
const Event = ({data}) => {
  return (
    <div className="EventItem">
        <section className="teamSect">
            <div>
                <h4>
                    <img src={require(`../../assets/img/logos/${data.equipo1}.webp`)} alt={`${data.equipo1} logo`} />
                    {data.equipo1}
                </h4>
                <h4>
                    <img src={require(`../../assets/img/logos/${data.equipo2}.webp`)} alt={`${data.equipo2} logo`} />
                    {data.equipo2}
                </h4>
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