import React from 'react'
import { social } from '../data/dummydata'

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
            <>
            <i data-aos="zoom-in-left">{item.icon}</i>
            </>
        ))}
        <p data-aos="zoom-in-right">БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН.</p>
      </footer>
    </>
  )
}

export default Footer
