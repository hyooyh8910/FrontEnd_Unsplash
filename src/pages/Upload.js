import { Container, style } from '@mui/system'
import axios from 'axios'
import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { addPostDB } from '../redux/modules/post'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../shared/firebase";
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';


const Upload = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [imageSrc, setImageSrc] = useState('')
  const image_ref = useState(null)
  const image_link_ref = useState(null)
  const title_ref = useState(null)
  const des_ref = useState(null)


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

  // 리덕스
  // const upload = async () => {
  //   let file = image_ref.current.files[0];
  //   console.log(file);
  //   dispatch(
  //     addPostDB({
  //       title: title_ref.current.value,
  //       description: des_ref.current.value,
  //       image: file
  //     })
  //   );
  //   window.location.href("/");
  // };


  // 서버로 연결
  // const upload = () => {
  //   const formData = new FormData();
  //   formData.append('image', image_ref.current.files[0]);
  //   formData.append('title', title_ref.current.value);
  //   formData.append('description', des_ref.current.value);

  // formData.append('title', title);
  // formData.append('description', imgDes);
  // formData.append('image', imageSrc);


  //   console.log("data => ", formData);

  //   axios.post(" http://localhost:5001/posts", {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       data: formData
  //       // Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(function (response) {
  //       alert("작성이 완료되었습니다!")
  //       // navigate('/');
  //       console.log(response)

  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data.Message);
  //     })

  // }

  const uploadFB = async (e) => {
    if (title_ref === "") {
      window.alert("텍스트를 입력하세요")
    }

    else {
      console.log(e.target.files);
      const uploaded_file = await uploadBytes(
        ref(storage, `images/${image_ref.current.files[0].name}`),
        image_ref.current.files[0]
      )
      console.log(uploaded_file)
      //Ref를 가지고온것은 중요, 이 Ref로 다운로드 URL을 가지고올것

      const file_url = await getDownloadURL(uploaded_file.ref)
      console.log(file_url)
      image_link_ref.current = { url: file_url }

      axios.post("http://localhost:5001/posts",
        {
          "image": image_ref.current?.url,
          "title": title_ref.current.value,
          "des": des_ref.current.value
        }, 
        // { headers: { 'Authorization': `Bearer ${token}` }, }
      )
        .then(function (response) {
          alert("작성이 완료되었습니다!")
          navigate('/');
          console.log(response)

        })
        .catch(function (error) {
          alert('nope')
        })
    }

  }

  return (
    <>
    
        <div className='title'>
          <p>Submit to Unsplash</p>
        </div>
      <Box>
      <div className='border'>
        <UploadBox>
          <div className='upload'>
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
      </div>
     
    </Box> 
    <div className='footer'>
        <button onClick={() => { props.closeModal(false) }}>Cancel</button>
        <button onClick={uploadFB}>Submit to Unsplash</button>
      </div>
    </>
  )
}

const Box = styled.div`

.title {
  
}

.border{
  align-items: center;
    border: 2px dashed #0000;
    border-radius: 2px;
    color: #767676;
    display: flex;
    flex-direction: column;
    padding: 24px 16px;
}

`;

const UploadBox = styled.div`
display: flex;
align-items: center;

border: 1px solid lightgray;
padding: 0 1em;

width: 250px;
height: 400px;

.border {
  
}

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
`;

export default Upload
