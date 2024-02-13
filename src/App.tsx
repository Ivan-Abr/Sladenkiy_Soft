import React, {useEffect, useState} from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/product";
import {Loader} from "./components/Loader";
import {ErrorMessage} from "./components/ErrorMessage";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";


function App() {

    const {loading, error, products} = useProducts()

   return(
       <div className= "container mx-auto max-w-2xl pt-5">
           {loading && <Loader/>}
           {error && <ErrorMessage error={error}/>}
           {products.map((product, index) => <Product product={product} key = {product.id}/>)}
           <Modal title="Create new product">
               <CreateProduct/>
           </Modal>
       </div>
   )

}

export default App;
