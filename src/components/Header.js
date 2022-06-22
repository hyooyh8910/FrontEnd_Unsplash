import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import SubNav from './SubNav';
import Modal from './Modal';

//page
import Button from '../elements/Button';
//icon
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdOutlineCenterFocusWeak } from 'react-icons/md'

const Header = () => {
  const navigate = useNavigate();
  // const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Nav>
        <div className='navbar'>
          <svg width="32" height="32" class="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false">
            <title id="unsplash-home"
            >Unsplash Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
          <Search>
            <div className='search'>
  
              <input type="text"
                className='search-box'
                placeholder="Search free high-resolution photos" />
                {/* <div className='icone'>
                   <svg viewBox="0 0 32 32" version="1.1" aria-hidden="false">
                <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z">
                </path>
              </svg>
                </div> */}
            </div>
          </Search>
          <ul>
            <li>
              <a className="advertise"
                href="/advertise">
                <div>Advertise</div>
              </a>
            </li>
            <li>
              <a href="https://unsplash.com/blog?utm_source=unsplash&amp;utm_medium=referral"
                rel="nofollow" className="blog">
                <div>Blog</div>
              </a>
            </li>
          </ul>
          <Submit onClick={() =>
           { navigate('/posts/post') }}
           >
            <button
              class="submit" >
              Submit
              <span> a photo</span>
            </button>
          </Submit>
          <Bell>
            <svg width="24" height="24" viewBox="0 0 32 32" version="1.1" aria-hidden="false">
              <path d="M19.1263 28.2c-6.1826 2.1388-11.82761 1.2031-13.03726-2.4062-.40321-1.3368-.26881-2.6735.53762-4.144.40322-.6684.40322-1.7378.13441-2.5398l-.94084-3.0746c-.80643-2.1388-.53762-4.4113.26881-6.28281C6.62666 8.28215 7.5675 7.21273 8.91155 6.277l-.26881-.80206c-.40322-.80206.1344-1.87148.94083-2.13883l1.61283-.53471c.9409-.40103 1.8817.13368 2.1505 1.06942l.2688.80206c1.7473-.13368 3.3601.26735 4.8386 1.20309 1.6129 1.06941 2.8225 2.53985 3.4945 4.54503l1.0753 3.3419c.2688.6684.9408 1.6041 1.7472 1.8715 1.4785.5347 2.5537 1.4704 2.9569 2.8072 1.3441 3.3419-2.4193 7.6195-8.6019 9.7584zm6.0482-8.9564c-.5376-1.4704-4.3009-2.2725-9.4083-.5347s-7.52668 4.8124-6.98906 6.2828c.53762 1.4705 4.30096 2.2725 9.40836.5347s7.5267-4.8123 6.989-6.2828zm-10.0803 5.4808c-1.3441 0-2.4193-.6684-3.2257-1.6041-.1345-.1337-.1345-.4011 0-.5348.9408-.802 2.2848-1.6041 4.4353-2.4061.8064-.2674 1.6129-.5347 2.4193-.6684.2688 0 .4032.1337.4032.2673v.6684c0 1.6041-.9408 3.0746-2.2849 3.743.1344 0-.9408.5347-1.7472.5347z">
              </path>
            </svg>
          </Bell>
        </div >
      </Nav>
      <SubNav />
      {/* {openModal && <Modal closeModal={setOpenModal} />} */}
    </>
  )
}

const Nav = styled.div`
*{
  margin:0;
  
}
position: sticky;
top: 0;


.navbar {
  align-items: center;
    background-color: #fff;
    display: flex;
    height: 62px;
    padding-left: 20px;
    padding-right: 20px;
}

a {
  text-decoration: none; 
}

ul {
  align-items: center;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  list-style: none;
  
}

li {
  *{
    box-sizing: border-box;
  }
  display: list-item;
  text-align: -webkit-match-parent;
}

.advertise {
  align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    padding: 20px 12px;
    text-decoration: none;
}

.blog {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 20px 12px;
  text-decoration: none;
}

`;


const Search = styled.div`
display:flex;
align-items: center;
padding-left: 30px;
padding-right: 630px;

.search {
width: 20px;
height: 20px;
margin-bottom: 18px;
}

.search-box {
  background-color: #eee;
  width: 620px;
  height: 23px;
  border-radius: 30px;
  padding: 9px;
  border: none;
  outline: none;
}

input {
  position: absolute;
}

svg {
  position: relative;
}
`;


const Submit = styled.div`
// background-color: #eee;
  color: #767676;
  cursor: pointer;
  font-size: 14px;
  height: 32px;
  line-height: 30px;
  padding: 0 11px;
  
  button {
  border: none;
  outline: 0;
  height: 30px;
  border-radius: 4px;
  }
`;

const Bell = styled.div`
fill: #767676;
line-height: 17px;
padding: 3px 12px;
position: relative;
transition: all .1s ease-in-out;
background-color: initial;
`;

export default Header
