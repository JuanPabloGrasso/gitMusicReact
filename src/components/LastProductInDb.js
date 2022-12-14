import React from 'react';

function LastProductInDb({product}){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto en base de datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3000/images/products/${product?.imagen}`} alt=" Ludwing Clásica Maple - Bateria "/>
                    </div>
                    <p>
                        {product?.description}
                    </p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={`http://localhost:3000/products/${product?.id}`}>Ver detalles del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
