import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

function Zavtrk(props) {
    return (
        <div className='pas-foot'>
            <h1>Завтраки</h1>
            <div className="container">
                {props.zavtrks.map((zavtrk, index) => {
                    return (
                        <div onClick={() => props.setDetailed(zavtrk)} key={index} className="card">
                            <NavLink to={`/zavtrks/${zavtrk.id}`}>
                                <div className="image">
                                    <img src={zavtrk.img} alt="Error" />
                                </div>
                            </NavLink>
                            <div className="card-foter">
                                <h3>{zavtrk.name.slice(0, 20)}...</h3>
                                <p>{zavtrk.description.slice(0, 60)}...</p>
                                <div className="pas-footer">
                                    <p>{zavtrk.price} ₽</p>
                                    <button onClick={() => props.addToCart(zavtrk)}>Купить</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        // <div className='pas-foot'>
        //     <h1>Завтраки</h1>
        //     <div id='card'>
        //         {props.zavtrks.map((zavtrk, index) => {
        //             return (
        //                 <NavLink to={`/zavtrks/${zavtrk.id}`}>
        //                     <div onClick={() => props.setDetailed(zavtrk)} className="card" key={index}>
        //                         <img src={zavtrk.img} alt="Error" />
        //                         <div className="card-body">
        //                             <h2>{zavtrk.name}</h2>
        //                             <p>{zavtrk.description.slice(0, 40)}</p>
        //                         </div>
        //                         <div className="card-footer">
        //                             <p>{zavtrk.price} ₽</p>
        //                             <button>Купить</button>
        //                         </div>
        //                     </div>
        //                 </NavLink>
        //             )
        //         })}
        //     </div>
        // </div>
    )
}

export default Zavtrk