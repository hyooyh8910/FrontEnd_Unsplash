import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

// import { Grid, Button, Image } from '../elements'
import Grid from '../elements/Grid';
import Button from '../elements/Button';
import Image from '../elements/Image';

// import SearchIcon from '@material-ui/icons/Search'
// import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak'
import { IoNotifications } from 'react-icons/io5'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdOutlineCenterFocusWeak } from 'react-icons/md'

const Header2 = () => {
  const user_id = localStorage.getItem('userId')
  const is_login = user_id !== null ? true : false
  const navigate = useNavigate();

  return (
    <Head>
      <Grid padding="0 10px" height="62px" flex="flex; justify-content:space-around;align-items:center">
        <Grid width="50px">
        <Image
                  onClick={() => {
                    window.location.href = "/"
                  }}
                  src="https://unsplash.com/assets/core/logo-white-8962708214629a3e8f9fbf5b87b70c3ace41c4175cbcc267f7fbb8449ac45bdd.svg"
                ></Image>
        </Grid>
        <Grid flex="flex; align-items:center" maxWidth="2400px">
        
        <div className='search'>
        <Button 
        height="40px" 
        width="50px" 
        borderRadius="20px 0px 0px 20px" 
        bg="#eee" 
        color="#767676" 
        text={<BiSearchAlt2 />}></Button>
    
      
        <input type="text"
          className='search-box'
          width="1000px"
          placeholder="Search free high-resolution photos"  />
   
        <Button 
        height="40px" 
        width="50px" 
        borderRadius="20px 0px 0px 20px" 
        bg="#eee" 
        color="#767676" 
        text={<MdOutlineCenterFocusWeak />}></Button>
               </div>
        </Grid>
        <Grid 
        flex="flex; align-items:center; justify-content:center" 
        width="auto" 
        padding="0 6px">
          <NavMenu>Advertise</NavMenu>
          <NavMenu>Blog</NavMenu>
        </Grid>
        <Grid width="1px" bg="#d1d1d1" height="32px" />

        <Grid width="auto" padding="0 6px">
            <NavMenu>Log&nbsp;Out</NavMenu>
            <NavMenu
              onClick={() => {
               navigate('/user/login')
              }}
            >Log&nbsp;in</NavMenu>
        </Grid>
        
        <SubmitBtn>Submit&nbsp;a&nbsp;photo</SubmitBtn>
        <NavIcon>
          <IoNotifications className="header-icon" size="24px"></IoNotifications>
        </NavIcon>
      </Grid>
      <Grid height="55px" flex="flex; align-items:center; justify-content:space-around">
      
        <Grid width="1px" bg="#d1d1d1" height="32px" />
     
      </Grid>
    </Head>

  )
}
const Head = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
  top: 0;
  z-index: 5;
`
const JoinLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-bottom: 24px;
  vertical-align: middle;
  cursor: pointer;
`


const NavMenu = styled.a`
  width: auto;
  padding: 20px 6px;
  font-size: 14px;
  font-weight: 600;
  color: #767676;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
  &:hover {
    color: #111;
  }
`

const NavIcon = styled.button`
  height: 100%;
  padding: 3px 12px;
  .header-icon {
    width: auto;
    cursor: pointer;
    margin: 0;
    color: #767676;
    transition: color 0.1s ease-in-out;
    &:hover {
      color: #111;
    }
  }
`

const NavProfile = styled.div`
  height: 100%;
  padding: 3px 0;
`

const SubmitBtn = styled.button`
  height: 32px;
  padding: 0 11px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  color: #767676;
  font-weight: 600;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: #111;
    border: 1px solid #111;
  }
`
const SearchBox = styled.div`
  width: 100%;
  font-size: 15px;
  line-height: 1.6;
  color: #111111;

  .form-input {
    display: block;
    height: 40px;
    width: 100%;
    margin:'0';
    padding: '6px 12px';
    font-size: 15px;
    line-height: 1.6;
    color: #111111;
    background: #eee;
    border: none;
    border-radius: 1 px;
    -webkit-transition: border-color ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s;
    cursor: text;

    &:focus {
      border: none;
    }
  }
`

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

export default Header2