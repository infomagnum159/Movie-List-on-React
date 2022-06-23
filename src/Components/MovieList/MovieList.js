import React, {Component} from 'react';


class MovieList extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.text !== nextProps.text;
    }

    render() {
        return (
            <div className="movie_list">
                <input className="movie_list_inp" type="text" value={this.props.text} onChange={this.props.changeMovie}/>
                <button className="movie_list_btn" onClick={this.props.removeMovie}>X</button>
            </div>
        );
    }
}

export default MovieList;