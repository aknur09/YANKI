import React, { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      setErrorMessage('Вы не заполнили поле e-mail');
    } else {
      alert('Вы подписались на наш канал');
      setErrorMessage('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <div>
       
      <div className="headerLogo">
      <div className='container'> 
        {/* <Header/>  */}
        <div className='headerBlock'> 
        <h2>New collection</h2> 
        <div className='line'></div> 
        {/* <NavLink className='navLink'>Watch new collection</NavLink>  */}
        <h5>Watch new collection</h5>
        </div> 
    </div> 
      </div>
      <div className="hero">
        <h1>Узнайте первым о новинках</h1>
        <form>
          <input
            type="email"
            placeholder="Ваш e-mail*"
            value={email}
            onChange={handleEmailChange}
          />
        </form>
        <button onClick={handleSubscribe}>ПОДПИСАТЬСЯ</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <p>
          Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
          <br />
          персональных данных и ознакомлен(а) с условиями конфиденциальности.
        </p>
      </div>
    </div>
  );
};

export default Hero;
