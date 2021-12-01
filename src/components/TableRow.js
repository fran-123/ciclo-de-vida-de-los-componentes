import React from 'react';

const Tablerow = ({title,length,rating,genre,awards}) => {
    return (

        <tr>
            <td>{title}</td>
            <td>{length}</td>
            <td>{rating}</td>
            {
                genre ? <td>{genre.name}</td>: <td>no tiene genero</td>
            }
            <td>{awards}</td>
        </tr>
    );
}

Tablerow.defaultProps = {
    genre : "no tiene un genero"
}

export default Tablerow;
