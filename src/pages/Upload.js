import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../shared/firebase";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileImage } from "react-icons/ai";
// **** pages**** //
import Grid from '../elements/Grid'



function Upload() {
    const [imageSrc, setImageSrc] = useState('')
    const image_ref = useState(null)
    const image_link_ref = useState(null)
    const title_ref = useState(null)
    const des_ref = useState(null)
    const token = localStorage.getItem("jwt-token");
    const navigate = useNavigate();
    const [post, setPost] = React.useState({
        title: "",
        description: ""
    });

    //이미지 미리보기
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    }

    const handleForm = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    // firebase코드 시작
    //CREATE
    //axios post 요청  정보 생성
    const uploadFB = async () => {
        if (title_ref === "") {
            window.alert("!")
        }

        else {
            console.log(image_ref.current.files)
            const uploaded_file = await uploadBytes(ref(storage, `images/${image_ref.current.files[0].name}`),
                image_ref.current.files[0]
            )
            console.log(uploaded_file)

            const file_url = await getDownloadURL(uploaded_file.ref)
            console.log(file_url)
            image_link_ref.current = { url: file_url }

            axios.post("http://54.180.105.56/posts/post",
                {
                    "image": image_link_ref.current?.url,
                    "title": title_ref.current.value,
                    "description": des_ref.current.value
                }, { headers: { 'Authorization': `Bearer ${token}` }, }
            )
                .then(function (response) {
                    alert("Create a new post!")
                    navigate('/');
                    console.log(response)

                })
                .catch(function (error) {
                    console.log(error.response.data.message);
                })
        }
    }

    return (
        <>
            <Title>
                <strong>Submit to Unsplash</strong>
                <a target="_blank"
                    href="https://help.unsplash.com/contributing-to-unsplash/upload-a-photo-to-unsplash"
                > Need help?</a>
            </Title>
            <Box>
                <div className='border'>
                    <div className='upload'>
                        <div className='uploadBox'>

                            <input type='file' ref={image_ref}
                                    onChange={(e) => {
                                        encodeFileToBase64(e.target.files[0]);
                                    }}
                                accept='image/jpg,image/png,image/jpeg,image/gif'
                                id='profile_img_upload' />
                            <label for='profile_img_upload'>
                            <AiOutlineFileImage /></label>

                            <div className="picture">
                                {imageSrc && <img src={imageSrc}
                                    alt="preview-img"
                                />}
                            </div>
                        </div>
                    </div>

                    <Grid margin="20px -3px" height="auto" width="405px">
                        <Input>
                            <input ref={title_ref}
                            onChange={handleForm}
                                className="title"
                                placeholder='Add a tag'
                            />
                        </Input>
                        <Input>
                            <input ref={des_ref}
                            onChange={handleForm}
                                className='description'
                                placeholder='Add a description (optional)'
                            />
                        </Input>
                    </Grid>

                    <Grid margin="0 0 5px 0" >
                        <Notification>
                            <ul className="info-list"  >
                                <li className="info-list-item">
                                    <span className="bold">
                                        High quality photos</span>
                                    (at least <span className="bold">5MP</span>)
                                </li>
                                <li className="info-list-item">
                                    Photos are
                                    <span className="bold">
                                        clear & original</span>
                                </li>
                            </ul>
                        </Notification>
                        <Notification>
                            <ul className="info-list">
                                <li className="info-list-item">
                                    Only upload photos you
                                    <span className="bold">
                                        own the rights to</span>
                                </li>
                                <li className="info-list-item">
                                    Zero tolerance for nudity, violence or hate</li>
                            </ul>
                        </Notification>
                        <Notification>
                            <ul className="info-list">
                                <li className="info-list-item">
                                    Respect the intellectual property of others</li>
                                <li className="info-list-item">
                                    Read the{' '}
                                    <span>
                                        <a className="link"
                                            href
                                            onClick={() => {
                                                window.alert('준비중입니다.')
                                            }}
                                        > Unsplash Terms
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </Notification>
                    </Grid>
                </div>
            </Box >
            <UploadFooter>
                <div>
                    <a href className="unsplash-license">
                        Read the Unsplash License
                    </a>
                </div>
                <div className='btn'>
                    <button onClick={() => { navigate('/') }}>Cancel</button>
                    <button onClick={uploadFB}>Submit to Unsplash</button>
                </div>
            </UploadFooter>
        </>
    )
}

const Title = styled.div`
display: flex;
justify-content: space-between;
align-tiems: center;
margin-bottom: 10px;

strong {
    margin-left: 13px;
}

a {
    margin-right: 14px;
}
`;

const Box = styled.div`
border: 2px dashed lightgray;
margin-left: 12px;
margin-right: 12px;

.border{
align-items: center;
border: 2px dashed #0000;
border-radius: 2px;
color: #767676;
display: flex;
flex-direction: column;
padding: 20px 5px;
}

.uploadBox {
display: flex;
align-items: center;

border: 1px solid lightgray;
padding: 0 1em;

width: 370px;
height: 480px;

margin-top: 10px;
margin-bottom: 12px;

img {
  width: 100%;
  height: 100%;
}

input {
  margin-top: 6px;
}

.picture {
  width: 250px;
  height: 300px;
}

button {
    margin-left: 400px;
}

#profile_img_upload{
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

#profile_img_upload + label {
    border: 1px solid #d9e1e8;
    background-color: #fff;
    color: #2b90d9;
    border-radius: 3px;
    padding: 8px 17px 8px 17px;
    font-weight: 520;
    font-size: 15px;
    box-shadow: 1px 2px 3px 0px #f2f2f2;
    outline: none;
    margin-bottom: 400px;
}

#profile_img_upload:focus + label,
#profile_img_upload + label:hover {
    cursor: pointer;
}


`;

const Input = styled.div`
margin-bottom: 16px;
width: 100%;

input {
    height: 30px;
    display: block;
    width: 400px;;
    padding: 6px 1px;

::placeholder {
  padding-left: 6px;
}
}

.description {
    height: 60px;
}
`;

const Notification = styled.div`
display: inline-block;
margin-left: 85px;

.bold {
 font-weight: bolder;
}
`;

const UploadFooter = styled.div`
height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 35px;

  a {
      margin-left: 12px;
      color: gray;
  }

button {
   &:hover { 
        border: 1.3px solid black;
    }
    height: 30px;
    margin-right: 20px;
    width: 140px;
    color: black;
    cursor: pointer;
    background-color: #fff;
      border: 1.5px solid #d1d1d1;
      border-radius: 5px;
  }
`;

export default Upload
