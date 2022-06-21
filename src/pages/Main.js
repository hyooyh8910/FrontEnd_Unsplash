import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios"
import data from "../redux/modules/data"
import { useNavigate } from "react-router-dom";

//components
import Header from "../components/Header"
import Container from '../components/Container'
import Modal from '../components/Modal';
import { ImageList } from '@mui/material'
import { ImageListItem } from '@mui/material'
import { style } from '@mui/system'


const Main = () => {

  // const [state, setState] = useState(data)
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

 const state = {
   images: []
 }

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

  return (
    <>
      <Header />
      <Section>
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
      </Section>
      <div className="container"> 
        <div className="row">
          {/* <Container state={state[0]}/> */}
        
      </div>
      
      </div>
      {openModal && <Modal closeModal={setOpenModal}/>}

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
}

img {
  object-fit: fill;
  width:100%;
  height:100%;
}

.text {
  position: absolute;
  padding-bottom: 134px;
  padding-top: 144px;
  margin-left: 350px;
}

.title{
 color: white;
 
}

`;


export default Main
