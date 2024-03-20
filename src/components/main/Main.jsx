/* eslint-disable no-unused-vars */
import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolores!4</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Tempora, dolores!4 amet consectetur adipisicing elit. Temp</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Lorem ipsng elit. Tempora, dolores!4um dolor sit amet consectetur adipisici</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>tetur adipisicing elit. TempoLorem ipsum dolor sit amet consecra, dolores!4</p>
                    <img src={assets.code_icon} alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Main