import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsInDB = {
    title: 'Productos en base de datos',
    color: 'success', 
    cuantity: 20,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalCategories = {
    title:' Total de categorías', 
    color:'danger', 
    cuantity: '6',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let usersQuantity = {
    title:'Cantidad de usuarios' ,
    color:'secondary',
    cuantity:'6',
    icon:'fa-user-check'
}

let cartProps = [productsInDB, totalCategories, usersQuantity];

function ContentRowProyect(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProyect;