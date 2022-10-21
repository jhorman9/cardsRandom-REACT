import React from 'react';
import users from '../src/users.json'
import { useState } from 'react';

const Users = () => {

    const [index, setIndex] = useState(Math.floor(Math.random() * users.length)); //para que me de un numero aleatorio 
    const nextClick = () =>{
        setIndex(Math.floor(Math.random() * users.length)) // para que cuando le demos al boton otro numero aleatorio7
    }

    const pallet = ["#003049", "#d62828", "#fb5607", "#5f0f40", "#e9d8a6", "#132a13", "#ffbd00"];
    let colorNumber = Math.floor(Math.random() *  pallet.length)
    document.body.style = `background: ${pallet[colorNumber]}`
    return (
        <div className='usersContent'>
            <div className="card center">
                <h1>{users[index].name.title} {users[index].name.first} {users[index].name.last}</h1>
                <img src={users[index].picture.large} alt={users[index].name.first} />
                <ul>
                    <li> <i className="fa-solid fa-envelope"></i> {users[index].email}</li>
                    <li> <i className="fa-solid fa-phone"></i> {users[index].phone}</li>
                    <li> <i className="fa-solid fa-map-location"></i> {users[index].location.country}. {users[index].location.state} - {users[index].location.city}</li>
                </ul>
                <button onClick={nextClick}><i className="fa-solid fa-shuffle"></i></button>
            </div>
        </div>
    );
};

export default Users;