import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(json => setProducts(json.data.products))
  }, [])
  return  ( 
 <>

    <div className="container">
    <div className="my-5 text-center">
      <h1><i>Products</i></h1>
      <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quos perferendis ipsum neque id culpa.</p>
    </div>


    <div className="container">
      <div className="row">

        {
          products.map((product, key) =>
            <div className="col-md-4" key={key}>
              <Link to={`/products/${product.id}`} className='text-decoration-none'>

               <div className='bg-dark'>
               <Card className='border-dark'>
  <div className='bg-dark'>  <Card.Img variant="top" src={product.thumbnail} /></div>

  <div className='bg-dark'>

  <Card.Body>
    <div className='bg-info'><Card.Title>{product.title}</Card.Title></div>
    <div className='bg-primary'>
    <Card.Text>{product.description}
    </Card.Text>
    </div>
  </Card.Body>
  </div>
</Card>
               </div>
              </Link>
            </div>
          )
        }

      </div>
    </div>
  </div>
 </>
  )
}
