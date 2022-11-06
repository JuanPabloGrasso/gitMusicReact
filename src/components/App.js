import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';
import ContentRowProyect from './ContentRowProyect';
import NotFound from './NotFound';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path='/' element={<ContentWrapper />} />
          <Route path='/categories' element={<CategoriesInDb />} />
          <Route path='/last-product' element={<LastProductInDb />} />
          <Route path='/products' element={<ContentRowProyect />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
