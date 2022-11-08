import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter({lastProduct, categories}){
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb product={lastProduct} />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Categorías in DB -->*/}
            <CategoriesInDb categories={categories}/>

        </div>
    )
}

export default ContentRowCenter;