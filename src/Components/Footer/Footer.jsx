import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <>
   <div className="footer">
    <div className="container">
        <div className="footer__wrap">
            <h1>Форма заказа билета в будущее</h1>
            <div className="input">
                <input type="name" placeholder='Имя'/>
                <input type="email" placeholder='E-mail'/>
                <input type="number" placeholder='Телефон'/>
                <input type="message" placeholder='Куда я полечу в ближайшее время?'/>
            </div>
            <button>Двигаться к месте!</button>
        </div>
    </div>
   </div>
   <div className="footer1">
    <div className="container">
        <div className="footer1__wrap">
            <h1>© Все мои мечты защищены моим трудолюбием</h1>
        </div>
    </div>
   </div>
   </>
  )
}

export default Footer