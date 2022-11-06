import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Gibson ES-339 Guitarra Electrica Blueberry Burst ',
        Length: '$3999',
        Categories: ['Guitarras']
    },
    {
        Title: 'DW Collectors 4 piezas',
        Length: '$3999',
        Categories: ['Baterías']
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Categoría</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Precio</th>
                                <th>Categoría</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;