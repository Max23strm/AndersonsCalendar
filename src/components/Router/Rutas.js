import Header from "../Header/Header"
import EventsContainer from '../EventsContainer/EventsContainer'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Details from "../Details/Details"

const Rutas = ({data}) => {
  return (
    <BrowserRouter basename={"/nfl"}>
        <Header/>
        <Switch>
            <Route
                path={"/"}
                exact
                children={<EventsContainer data={data.partidos}/>}
            />
            <Route
                path={"/:id"}
                exact
                children={<Details partidos={data.partidos}/>}
            />
        </Switch>
    </BrowserRouter>
  )
}

export default Rutas