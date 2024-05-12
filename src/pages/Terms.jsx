import React from 'react'
import TERMS1 from '.././assets/terms-1.png'
import TERMS2 from '.././assets/terms-2.png'
import TERMS3 from '.././assets/terms-3.png'
import TERMS4 from '.././assets/terms-4.png'
import TERMS5 from '.././assets/terms-5.png'
import TERMS6 from '.././assets/terms-6.png'

const Terms = () => {
  return (
    <div className='terms'>
         <h3>Главная <span>-</span> Обмен и воврат</h3>

         <div className="returnTerms">
            <h3>Обмен и воврат</h3>
            <p>Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат</p>
            <p>Обмен и возврат возможен в случае :</p>
         </div>

         <div className="termsCard">
            <div className="card">
                <img src={TERMS1}  alt="" />
                <p>если заказ не был <br /> использован и сохранил товарный <br /> вид(в том числе не <br /> нарушены бирки, <br /> ярлыки, упаковочные <br /> материалы)</p>
            </div>
            <div className="card">
            <img src={TERMS2} alt="" />
                <p>возврат и обмен <br /> осуществляется в <br /> течение двух дней с <br /> момента получения заказa</p>
            </div>
            <div className="card">
            <img src={TERMS3} alt="" />
                <p>возврат и обмен <br /> товара возможен <br /> только при отправке <br /> по Украине</p>
            </div>
            <div className="card">
            <img src={TERMS4} alt="" />
                <p>бланк возврата <br /> присутствует в <br /> каждой посылке </p>
            </div>
            <div className="card">
            <img src={TERMS5} alt="" />
                <p>все расходы по <br /> обмену и возврату <br /> товара несет <br /> покупатель</p>
            </div>
            <div className="card">
            <img src={TERMS6} alt="" />
                <p>после получения <br /> возврата мы делаем <br /> перевод денежных <br /> средств на карту <br /> клиента</p>
            </div>
         </div>
    </div>
  )
}

export default Terms