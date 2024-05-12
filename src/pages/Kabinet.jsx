import React from 'react'

const Kabinet = () => {
  return (
    <div className='personalArea'>
             <h3>Главная <span>-</span> Личный кабинет</h3>
  <div className="areaPersonal">
         <h3>Персональные данные:</h3>     
         <div className='name'>
            <input type="name"  placeholder='Елизаветта' required/>
         
            <input type="name"  placeholder='Станиславчук'/>
          </div>
          <div className="email">
          <input type="email" placeholder='ella.s97@gmail.com' />
          
          <input type="phone" name="" id="" placeholder='+38(067)470 20 66'/>
          </div>
          
          <h3>Адрес доставки:</h3>
          <div className="hero">
          <input type="email" placeholder='Черновцы' />
          <input type="email" placeholder='№4' />
          </div>
     </div>
    </div>
  )
}

export default Kabinet