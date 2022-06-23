import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
// **** pages**** //
import EditScroll from '../components/EditScroll';
import Grid from '../elements/Grid'
import { Button } from '@mui/material';



const Edit = () => {
  const [post, setPost] = React.useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const postIdx = Number(params.postIdx);

  //READ
  //axios get 요청 params값
  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await axios.get(
          `http://54.180.105.56/posts/${postIdx}`
        );
        setPost(response.data.body)
        // console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPost()
  }, []);


  //UPDATE
  //axios put 요청 게시글 수정사항 put
  const [editInfo, setEditInfo] = useState({
    title: "",
    description: "",
  });
  const ttRef = useRef(null);
  const dcRef = useRef(null);

  console.log(editInfo);
  console.log(localStorage);
  //axios 수정 요청
  const clickEdit =  (e) => {
    e.preventDefault();
    const currentKey = localStorage.getItem("jwt-token");
    axios({
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentKey}`,
      },
      url: `http://54.180.105.56/posts/${postIdx}`,
      data: {
        // EditInfo
        title: ttRef.current.value,
        description: dcRef.current.value
      },
    })
      .then((response) => {

        // localStorage.setItem("jwt-token", response.data.token);
        navigate(`/posts/detail/${postIdx}`)

        console.log(response);
        alert("Enjoy your life");

      })
      .catch(function (error) {
        alert("Not your post.");
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setEditInfo({ ...editInfo, [name]: value });
  };



  return (
    <>
      <form onSubmit={clickEdit}>
        <ModalBody>
          <ModalOverlay>
            {post && (
              <ModalContent className='modal-content'>
                <DetailContainer>
                  <ModalImage>
                    <div>
                      <img src={post.image} />
                    </div>
                  </ModalImage>

                  <div
                    style={{
                      marginLeft: '20px'
                    }}>
                    <EditScroll />
                    <Grid padding="20px 00 20px">

                      <div>
                        Title
                      </div>

                      <Textarea
                        className='form-input'
                        placeholder={post.title}
                        onChange={handleChange}
                        ref={ttRef}
                        nomal />
                      <div>
                        Description
                      </div>
                      <Textarea
                        style={{
                          paddingBottom: '90px'
                        }}
                        className='form-input'
                        placeholder={post.description}
                        onChange={handleChange}
                        ref={dcRef}
                        textarea />
                    </Grid>
                    <FooterBtn>
                      <Button
                        onClick={() => {
                          navigate('/')
                        }}
                        variant="outlined"
                        className="cancel-btn"
                        color='inherit'
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        className="submit-btn"
                        color='inherit'
                        type='submit'
                      >
                        Update info
                      </Button>
                    </FooterBtn>
                  </div>
                </DetailContainer>
              </ModalContent>
            )}

          </ModalOverlay>
        </ModalBody>

      </form>

    </>
  )
}



const ModalBody = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  z-index: 0;
  overflow-y: hidden;
`

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #0009;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
`

const ModalContent = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const DetailContainer = styled.div`
  height: 500px;
  width: 860px;
  cursor: auto;
  display: flex;
  outline: none;
  background-color: #fff;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`
const ModalImage = styled.div`
  img {
    width: 285px;
    height: 500px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px 0px 0px 5px;
  }
`

const FooterBtn = styled.div`
  padding: 80px 0 0 0px;
  margin: 0px 0 200px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 8px;
  .cancel-btn,
  .submit-btn {
    background-color: #fff;
    border: 0.5px solid #d1d1d1;
    padding: 0 9px;
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    border-radius: 4px;
    height: 32px;
    line-height: 30px;
    color: #767676;
    transition: all 0.1s ease-in-out;

    &:hover {
      color: #111;
      border: 0.5px solid #111;
    }
  }
`

const Textarea = styled.textarea`
  width: 95%;
  padding: 10px;
  margin: 10px 0px 13px;
  font-family: 'Noto Sans KR';
  font-size: 13px;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  transition: border 0.1s ease-in-out;
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid #111;
  }
`

export default Edit;