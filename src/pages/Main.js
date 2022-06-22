import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import Header from "../components/Header";

import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { style } from '@mui/system';

import { useNavigate } from 'react-router-dom';


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
  const [posts, setPosts] = React.useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get("http://54.180.105.56/posts");
        setPosts(response.data.body);
        // console.log(response.data.body);
      } catch (e) {
        console.log(e);

      }
    };
    fetchBoards();
  }, []);

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
        {/* {posts &&
            posts.map((post, id) => {
              return (
                <div key={id}>
                  <div>{post.postIdx}</div>
                  <div
                    // postIdx={post.postIdx}
                    // title={post.title}
                    // description={post.description}
                    // userName={post.userName}
                    // image={post.image}
                  />
                </div>
              );
            })} */}

       
          {posts &&
            posts.map((post, id) => {
              return (

                <ImageList onClick={() => { navigate('/posts/detail') }}
                variant="masonry" cols={3} gap={8}>
                <ImageListItem key={id}>
                  <img src={post.image} />
                </ImageListItem>
                </ImageList>
              )
             
            })}
      


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
export default Main
