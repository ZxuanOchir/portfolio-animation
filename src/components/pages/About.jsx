import React from 'react'
import Heading from '../common/Heading'
import { about } from '../data/dummydata'
const About = () => {
  return (
    <div>
      <section className='about'>
            <div className="container flex">
                {about.map((val, i) => (
                    <>
                    <div className="left">
                        <img src={val.cover} alt="pro" data-aos="fade-down-right"/>
                    </div>
                    <div className="right" data-aos="fade-down-left">
                        <Heading title="About Me"/>
                        <p>{val.desc}</p>
                        <p>{val.desc1}</p>
                        <button>Download CV</button>
                        <button className='primaryBtn'>Download CV</button>
                    </div>
                    </>
                ))}
            </div>
        </section>
    </div>
  )
}

export default About
