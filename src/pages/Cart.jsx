import React, { useState } from 'react'

const Cart = () => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems([...items, product]);
  };

  const removeFromCart = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  
  const totalItems = items.length;

  return (
    <div>
      <div className="korzinka">
        <h3>Главная <span>-</span> Корзина</h3>
        <h5>Ваш заказ</h5>
        //заказ

        {totalItems === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}

        <div className="order">
          <h5>Оформление заказа</h5>
          <h3>Персональные данные:</h3>
        <div className="order-emails">
        <div className='name'>
            <input type="name"  placeholder='Ваше имя*' required/>
         
            <input type="name"  placeholder='Ваша фамилия*'/>
          </div>
          <div className="email">
          <input type="email" placeholder='Ваш e-mail*' />
          
          <input type="phone" name="" id="" placeholder='Ваш телефон*'/>
          </div>
        </div>
        <div className="delivery">
          <h3>Способ доставки:</h3>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Cart