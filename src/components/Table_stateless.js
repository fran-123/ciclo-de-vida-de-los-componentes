import React from 'react';
import Tablerow from './TableRow';

const Table = () => {

    let data = [
        {
            title : "Billy Elliot",
            length : 123,
            rating : 5,
            genres : ["Drama","Comedia"],
            awards : 2
        },
        {
            title : "Alicia En El Pais De Las Maravillas",
            length : 142,
            rating : 4.8,
            genres : ["drama","Accion","Comedia"],
            awards : 3
        }
    ]

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
                        data.map((item,index)=>{
                            return <Tablerow
                                key={item.title + index}
                                title = {item.title}
                                rating = {item.rating}
                                genres = {item.genres}
                                awards = {item.awards}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
