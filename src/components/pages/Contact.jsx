import React from 'react'
import Heading from '../common/Heading'
import { contact } from '../data/dummydata'

const Contact = () => {
  return (
    <div>
        <div className="contact">
            <div className="container">
                <Heading title={"Keep In Touch"}/>
                <div className="content flexsb">
                    <div className="right">
                        <form>
                            <div className="flex">
                                <input type="text" placeholder='Name' data-aos="zoom-in-down"/>
                                <input type="text" placeholder='Email' data-aos="zoom-in-up"/>
                            </div>
                            <input type="text" placeholder='Subject'data-aos="zoom-in-up"/>
                            <textarea name="" id="" cols='30' rows='10' data-aos="zoom-in-down"></textarea>
                            <button data-aos="zoom-in-down">Submit</button>
                        </form>
                    </div>
                    <div className="left">
                        {contact.map((item) => (
                            <div className="box" data-aos="zoom-in-down">
                                <i>{item.icon}</i>
                                <i>{item.text1}</i>
                                <i>{item.text2}</i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
