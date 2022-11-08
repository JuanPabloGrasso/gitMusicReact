import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowProyect from './ContentRowProyect';
import Chart from './Chart';

function ContentRowTop({ products, totalProducts, users, totalUsers, categories, totalCategories }) {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Git Music Admin</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<ContentRowProyect
					totalCategories={totalCategories}
					totalProducts={totalProducts}
					totalUsers={totalUsers}
				/>
				<ContentRowCenter lastProduct={products[products?.length-1]} />
				<Chart />

			</div>
			{/*<!--End Content Row Top-->*/}

		</React.Fragment>
	)

}
export default ContentRowTop;