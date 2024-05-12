import React from 'react'

const Product = () => {
  return (
    <div>
         <div className="card" style={{width: '18rem'}}> 
            <img src={el.images} className="card-img-top" alt="..."/> 
            <div className="card-body"> 
                <h5 className="card-title">{el.name}</h5> 
                {/* <NavLink to={`/detail/${props.id}`} className="btn btn-primary">More</NavLink>  */}
            </div> 
            </div>
    </div>
  )
}

export default Product