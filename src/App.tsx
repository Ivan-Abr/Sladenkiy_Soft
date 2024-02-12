import React, {useEffect, useState} from 'react';

import {Product} from "./components/Product";
import {products} from "./data/products";
import {useProducts} from "./hooks/product";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";


function App() {

    const {loading, error, products} = useProducts()

   return(
       <div className= "container mx-auto max-w-2xl pt-5">
           {loading && <Loader/>}
           {error && <ErrorMessage error={error}/>}
           {products.map((product, index) => <Product product={product} key = {product.id}/>)}
       </div>
   )

}

export default App;
