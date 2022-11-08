import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';
import axios from 'axios';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsInDB = {
    title: 'Productos en base de datos',
    color: 'success', 
    cuantity: 'JUAMPI',
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


function ContentRowProyect(){
    let cartProps = [productsInDB, totalCategories, usersQuantity];
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get('http://localhost:3000/api/product').then(
            data => setProduct(data.data))
    }, [])
    return (

        <div className="row">
            {
                product?.length
            }
            {cartProps.map((product, i) => {

                return <SmallCard {...product} key={i} />

            })}

        </div>
    )
}

export default ContentRowProyect;