import { Container, style } from '@mui/system'
import React, { useState, useRef } from 'react'
import styled from 'styled-components'


const Upload = (props) => {
  const [imageSrc, setImageSrc] = useState('')
  const image_ref = useState(null)
  const image_link_ref = useRef(null)
  const title_ref = useState(null)
  const des_ref = useState(null)

  const [post, setPost] = React.useState({
    title: "",
    description: ""
  });

  // computed property names 문법 (키값 동적 할당)
  const handleForm = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

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

  return (
    <>
      <div className='title'>
        <p>Submit to Unsplash</p>
      </div>
      <UploadBox>
        <div className='upload'>
          <div className='photo'>
            <input type="file"
              ref={image_ref}
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }} />
            <div className="picture">
              {imageSrc && <img src={imageSrc}
                alt="preview-img"
              />}
            </div>
          </div>

          <div className='content'>
          </div>

          <div className='content'>
            <input ref={title_ref}
              className="title"
              placeholder='Add a tag'
            />

            <input ref={des_ref}
              className='description'
              placeholder='Add a description (optional)'
            />
          </div>
        </div>

      </UploadBox>
      <div className='footer'>
        <button onClick={() => { props.closeModal(false) }}>Cancel</button>
        <button>Submit to Unsplash</button>
      </div>
    </>



  )
}

const UploadBox = styled.div`
display: flex;
flex-direction: column;
border: 1px solid lightgray;
padding: 0 1em;

width: 250px;
height: 400px;

img {
  width: 100%;
  height: 100%;
}

.picture {
  width: 250px;
  height: 300px;
}

.upload {

}

`;

export default Upload
