import React, {Component} from "react"
import Comment from "./Comment";

class FilmList extends Component {
    render(){
        const commentNodes = this.props.data.map(comment => {
            return (
                <Comment author={comment.author} Key={comment.id}>
                    {comment.text}
                </Comment>
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