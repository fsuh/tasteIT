import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Recipies from './pages/Recipies';
import Addnew from './pages/Addnew';
import NoPage from './pages/NoPage';
import SingleRecipe from './pages/SingleRecipe';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipies" element={<Recipies />} />
        <Route path="recipies/:recipedetails" element={<SingleRecipe />} />
        <Route path="add-new" element={<Addnew />} />
        <Route path="*" element={<NoPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
