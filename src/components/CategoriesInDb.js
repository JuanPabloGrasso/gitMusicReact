import React, { useState } from "react";


const CategoriesInDb = ({ categories }) => {
  const [overTitle, setOverTitle] = useState(false);

  const handleMouseOver = async () => {
    await setOverTitle({ overTitle: !overTitle });
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 onClick={handleMouseOver} className="m-0 font-weight-bold text-gray-800">
            Categorías en base de datos
          </h5>
        </div>
        <div className={`card-body ${overTitle ? 'bg-secondary' : ''}`}>
          <div className="row">
            {
              categories?.map((item, key) => (
                <div key={key} className="col-lg-6 mb-4">
                  <div className={`card ${key%2?"bg-dark text-white":"bg-info text-dark"} shadow`}>
                    <div className="card-body">
                      {item?.name}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
