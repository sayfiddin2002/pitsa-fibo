import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
  const [count, setCount] = useState(1)
  return (
    <div className='v_korzinu'>
      <div className="corzina_header">
        <div className="item_one">
          <div className="one">
            <p>1</p>
          </div>
          <p className="text">Корзина</p>
        </div>
        <div className='chiziq'>
          <p>
            - - - - - - - - - - 
          </p>
          <p className='chiz'>
             - - - - -
          </p>
        </div>
        <div className="item_two">
          <div className="two">
            <p>2</p>
          </div>
          <p className="text">Оформление заказа</p>
        </div>
        <div className='chiziq'>
          <p>
            - - - - - - - - - - 
          </p>
          <p className='chiz'>
            - - - - -
          </p>
        </div>
        <div className="item_three">
          <div className="three">
            <p>3</p>
          </div>
          <p className="text">Заказ принят</p>
        </div>
      </div>

      <div className='cozinu'>
        <h1 className='text_corzina'>Корзины</h1>
        <div className='wrapper'>
          {props.orders.map((order, index) => {
            return (
              <div key={order.index}>
                <hr />
                <div className="card">
                  <div className="card_header">
                    <img src={order.img} alt="Error" />
                    <div className="text">
                      <p>{order.name}</p>
                      <p>{order.description.slice(1, 100)}</p>
                    </div>
                  </div>
                  <div className="card-body">
                    <p className='price'>{order.price}₽</p>
                    <div className='four'>
                      <div className='minus' onClick={() => setCount(count - 1)}>-</div>
                      <p className='count'>{count}</p>
                      <div className='plus' onClick={() => setCount(count + 1)}>+</div>
                    </div>
                    <div className='circle' onClick={() => props.deleteOrderItem(order.id)}>
                      <p>&times;</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="card-footer">
          <h2>Промокод</h2>
          <div className="footer_wrapper">
            <div className="footer-header">
              <div className="footer_body">
                <input type="text" placeholder='Введите промокод' />
                <button>Применить</button>
              </div>
              <div className="summa">
                <p>Сумма заказа:</p>
                <p>{props.count} ₽</p>
              </div>
            </div>
          </div>
          <div className="magazin">
            <div className="vernutsya">
              <i className="fa-solid fa-chevron-left"></i>
              <p> Вернуться в магазин</p>
            </div>
            <div className="ofor">
              <NavLink to={'/dastavka'}>
                <button>Оформление заказа <i className="fa-solid fa-chevron-right"></i></button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card