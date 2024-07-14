import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [data, setData] = useState([]);
  const [product,setProduct]=useState([])

  const getData = async () => {
    try {
      let record = await axios.get("https://dummyjson.com/products");
      setData(record.data.products);
      fetch('https://dummyjson.com/carts')
      .then(res=>res.json())
      .then(res=>{
        setProduct(res.carts);
      })
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <div>
        <h1 align="center" className="my-4">images</h1>
        <div className="container">
          <div className="row">
            {
              data.map((val) => {
                return (
                  <div className="col-lg-3 mt-5" key={val.id}>
                    <div className="card" style={{ width: '18rem',height:'25rem',textAlign:'justify' }}>
                      <img src={val.thumbnail} className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title"> {val.category}</h5>
                     
                        <a href="#" className="btn btn-success mx-auto d-block"> {val.price}</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div>
        <h1 align="center" className="mt-5">Detailss</h1>
        <div className="container mt-5">
          <div className="row">
<table className="table" style={{border:"3px solid black"}} >
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
     
      <th scope="col">total</th>
    </tr>
  </thead>
  <tbody>
   {
    product.map((val)=>{
      return(
        <tr key={val.id}>
          <td>{val.id}</td>
          <td>{val.products[0].title}</td>
          <td>{val.products[0].price}</td>
         
          <td>{val.products[0].total}</td>
        </tr>
      )
    })
   }
  </tbody>
</table>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
