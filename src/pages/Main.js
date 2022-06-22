import React from 'react';
import styled from 'styled-components';
import axios from "axios";
import Header from "../components/Header";

import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { style } from '@mui/system';

//page
import Header2 from '../components/Header2';
import Grid from '../elements/Grid';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Input from '../elements/Input';
import Masonry from '../components/Masonry';
import mainimg from '../static/MainBackground.jpg';

// import SearchIcon from '@material-ui/icons/Search'
import { BiSearchAlt2 } from 'react-icons/bi'


const Main = () => {


  return (
    <>
      <Header />
      <Grid margin="117px 0px 0px 0px" position="relative">
        <Grid margin="0px auto" width="900px" position="relative">
          <Grid  
          marginLeft="90px" position="absolute; top:80px" width="auto">
            <TextHead className="head">
              Unsplash
            </TextHead>
            <Text2 size="25px" color="#fff" bold>
              The internet's source of freely-usable images.
              <br />
              Powered by creators everywhere.
            </Text2>

            <Grid flex="flex; align-items:center" width="650px">
              <SearchBox>
                <SearchInput placeholder="Search free high-resolution photos" width="700px"/>
              </SearchBox>
            </Grid>
          </Grid>
        </Grid>
        <div style={{marginTop: "-120px"}}>
        <ImageFull shape="full"></ImageFull>
        </div>
      </Grid>
      <Grid>
        {/* <Masonry></Masonry> */}
      </Grid>
    </>
  )
}

const Section = styled.div`
background-color: black;
color: #fff;
height: 565px;
width: 100%;

.photobox {
overflow: hidden;
 width: 100%;
 height: 565px;
 margin: -8px -8px -8px -8px;
}

img {
  object-fit: fill;
  width:100%;
  height:100%;
}

`;

const TextHead = styled.p`
  color: white;
  font-size: 45px;
  font-weight: bold;
`
const Text2 = styled.p`
  color: white;
  font-size: 18px;

`

const ImageFull = styled.div`
width: 100%;
height: 530px;
background-image: url(${mainimg});
background-size: cover;
background-position: center;
background-blend-mode: multiply;
margin: -8px;
`

const SearchBox = styled.div`
  width: 100%;
  height: 27px;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 1;
  color: #111111;
`

const SearchInput = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  margin: 0;
  padding: 6px 12px;
  font-size: 15px;
  line-height: 1.6;
  color: #111111;
  background: #eee;
  background-image: url<BiSearchAlt2/>
  border: none;
  border-radius: 1 px;
  -webkit-transition: border-color ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s;
  cursor: text;
  border-radius: 5px;

  &:focus {
    border: none;
  }
}
`
// const [state, setState] = React.useState("")

// React.useEffect(() => {
//   axios
//     .get("") 
//     .then((response) => {
//       setState(response.data.posts);
//       console.log(response.data);
//     })
//     .catch((response) => {
//       console.log(response);
//     });
// }, []);

{/* <Section>
        <div className='background'>
          <div className='photobox'>
            <div className='text'>
               <h1 className='title'>Unsplash</h1>
               <h3>The internet’s source of 
               <a href="/license">freely-usable images</a>
               .</h3>
               <p>Powered by creators everywhere.</p>
               <div className='search'>

               </div>
            </div>
            <img src='https://images.unsplash.com/photo-1654423625682-50ded826c581?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1000&amp;h=1000' />
          </div>

        </div>
      </Section> */}

{/* <ImageList variant="masonry" cols={3} gap={8}>
        {state && state.map((posts, index) => (
          <ImageListItem key={index}>
            <img
              src={`${posts.image}?w=248&fit=crop&auto=format`}
              srcSet={`${posts.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={posts.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}
export default Main
