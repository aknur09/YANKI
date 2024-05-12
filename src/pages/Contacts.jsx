import React from 'react'
import INSTA from '../assets/insta.png'
import TG from '../assets/TELEGRAM.png'

const Contacts = () => {
  return (
    <div className='contacts'>
        <h3>Главная <span>-</span> Контакты</h3>
        <h5>Связаться с нами</h5>

        <div className="contacts-text">
          <h6>В социальных сетях</h6>
          <h6>По телефону</h6>
          <h6>По почте</h6>
          <h6>Наш офис</h6>
        </div>

        <div className="text-contacts">
            <div className="contacts-icon">
              <img src={INSTA} alt="" />
              <img src={TG} alt="" />
            </div>

            <div className="telephone">
              <h6>+38(067) 158 82 66</h6>
              <h6>+38(073) 226 39 81</h6>
            </div>

            <div className="email-contacts">
              <h6>example@gmail.com</h6>
            </div>

            <div className="adres-contacts">
              <h6>г. Киев, улица Батумская, 18</h6>
            </div>
          </div>
    </div>
  )
}

export default Contacts