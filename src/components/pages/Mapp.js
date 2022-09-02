import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Mapp = () => {
  const [productsList, setProduct] = useState();
  useEffect(() => {
    console.log(productsList);
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setProduct(response.data)
      })
      .catch((error) => {
        console.error();
      })


  }, [])

  if (!productsList) return null;
  console.log(productsList);
  const { products,title, total, skip, limit, images } = productsList;
  return (
    <div>
      {products.map((data) => {
        console.log(data);
        return (<>
          <div key={data.id}>
            <p>{data.title}</p>
            <p>{data.description}</p>
            {images.map((image)=>(
              <img src={image} alt={title} key={image.id}/>
            ))}
          </div></>
        );

      })}
    </div>
  );
};

export default Mapp;