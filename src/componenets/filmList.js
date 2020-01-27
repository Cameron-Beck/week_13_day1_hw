import React, {Component} from "react"
import Film from "./Film";

class FilmList extends Component {
    render(){
        const filmNodes = this.props.data.map(film => {
            return (
                <Film film={film.name} Key={film.id}>
                    <a href="{film.url}"></a>{film.name}
                </Film>
            )
        })

        return(
            <div className="film-list">
                {filmNodes}
            </div>
        )
    }
}

export default FilmList