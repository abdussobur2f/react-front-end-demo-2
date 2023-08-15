import React,{useState} from 'react'
import './Portflio.css'
import Data from '../imgData/Data'
const Portfolio = () => {
  const [items, setitems] = useState(Data)


  
  const filterCategory = (categItem) => {
    const update = Data.filter((curElm) => {
      return curElm.category === categItem;

    })
    setitems(update)
  }

  return (
    <>
      <section className='portfolio '>
        <div className="container-xxl">
          <div className="row  justify-content-center align-items-center g-4">
            <div className="heading">
              <h1 className='text-center pb-2'> My <span className='cng'>Portfolio</span></h1>
            </div>

            <div className="menu d-flex align-items-center justify-content-center flex-wrap gap-3 gap-lg-5 gap-md-4">

              <span className='pragraph' onClick={() => setitems(Data)}>ALL</span>
              <span className='pragraph'  onClick={() => filterCategory("commrece")}>E-Commerce</span>
              <span className='pragraph'  onClick={() => filterCategory("Agency")}>Agency</span>
              <span className='pragraph'  onClick={() => filterCategory("education")}>Education</span>
              <span className='pragraph'>Portfolio</span>
            </div>

          {
            items.map((elm)=>{
              return(
                <div className="col-xxl-3 col-12   d-inline-block" >
                <div>
                  <img src={elm.img} class="img-fluid " alt="" />
  
                </div>
              </div>
              )
            })
          }

          </div>
        </div>

      </section>

    </>
  )
}

export default Portfolio
