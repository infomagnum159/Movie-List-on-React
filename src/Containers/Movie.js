import React, {Component} from 'react';
import {nanoid} from 'nanoid';


class Movie extends Component {
    state = {
        movieName:'',
        movieList: []
    };


    createMovieName = e => {
        this.setState({movieName: e.target.value});
    };

    addMovieName = e => {
        e.preventDefault();

        // const movieList = [...this.state.movieList];
        // const movie = {id: nanoid(), text: this.state.movieName};
        // movieList.push(movie);
        this.setState({movieName: ''});
        this.setState({movieList: [...this.state.movieList, {id: nanoid(), text: this.state.movieName}]});

    };

    changeMovieName = (e, id) => {
        const index = this.state.movieList.findIndex(p => p.id === id);
        const movieList = [...this.state.movieList];
        const movie = {...movieList[index]};
        movie.text = e.target.value;
        movieList[index] = movie;

        this.setState({movieList});
    };
    // changeMovBan = (id) => {
    //     const copyMovie = state.movieList.map(mov => (
    //         ...mov,
    //
    //     ))
    // }

    // removeMovieName = id => {
    //     const index = this.state.movieList.findIndex(p => p.id === id);
    //     const movieList = [...this.state.movieList];
    //     movieList.splice(index, 1);
    //     this.setState({movieList});
    // };
    // removeMov = (id) => {
    //     //     const copyMovie = state.movieList.map(mov => (
    //     //         ...mov,
    //     //
    //     //     ))
    //     // }
    //
    // }

    render() {
        return (
            <div className="movie">
              
            </div>
        );
    }
}

export default Movie;