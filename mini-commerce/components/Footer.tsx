import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>© 2023 E-Shop. All rights reserved.</p>
      <div className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </div>
    </div>
  )
}

export default Footer