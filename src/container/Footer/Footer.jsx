import React from 'react';
import {FooterOverlay, Newsletter} from '../../components';
import {FiFaceBook, FiTwitter, FiInstagram} from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">  
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className='app__footer-links_contact'>

        </div>
        <div className="app__footer-links_logo">

        </div>
        <div className="app__footer-links_work">

        </div>
        <div className="footer__copyright">
          <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
        </div>
      </div>
   </div>
);

export default Footer;
