import React from 'react'

const OrderBy = ({setPostPerPage}) => {

  const show48 = ()=>{
    return setPostPerPage(48)
  }
  const show24 = ()=>{
    return setPostPerPage(24)
  }
  const showTwelve = ()=>{
    return setPostPerPage(12)
  }
  const showSix = ()=>{
    return setPostPerPage(6)
  }
  return (
   <>
               <div className="row ">
              <div className="col-md-6 ">
                <h3>Todos los productos</h3>
              </div>
              <div className="col-md-6 d-flex justify-content-end">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle border"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mostrar
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item" onClick={()=>showSix()}>
                        Mostar 6
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={()=>showTwelve()} >
                        Mostar 12
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={()=>show24()} >
                        Mostar 24
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={()=>show48()} >
                        Mostar 48
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
   </>
  )
}

export default OrderBy