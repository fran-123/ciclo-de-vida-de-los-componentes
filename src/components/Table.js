import React, { Component } from 'react';
import Tablerow from './TableRow';

class Table extends Component {

    constructor () {
        super()
        this.state = {
            movies : []
        }
    }

    render() {
        return (
            <div className="container bg-white">
            <table className="table table-bordered"> 
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duracion</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.movies.map((item,index)=>{
                            return <Tablerow
                                key={item.title + index}
                                title = {item.title}
                                rating = {item.rating}
                                genres = {item.genero}
                                awards = {item.awards}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
        );
    }

    async componentDidMount(){
        await this.apiCall("http://localhost:3001/api/movies",this.getMovies);
        console.log(this.state)
    }

    async apiCall(url, handler){
        try {
            let response = await fetch(url);
            let result = await response.json();
            handler(result) 
        } catch (error) {
            console.log(error);
        }
    }

    getMovies = info => {
        this.setState(
            {
                movies : info.data
            }
        )
    }
}

export default Table;
