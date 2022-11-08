import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import ContentRowProyect from './ContentRowProyect';
import NotFound from './NotFound';
import About from './About';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path='/' element={<ContentWrapper />} />
          <Route path='/about' element={<About />} />
          <Route path='/categories' element={<CategoriesInDb />} />
          <Route path='/products' element={<ContentRowProyect />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
