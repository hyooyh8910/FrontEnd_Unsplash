import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// React-icons
import { RiKakaoTalkFill } from 'react-icons/ri';

// elements & components
import Grid from '../elements/Grid';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    useremail: "",
    username: "",
    password: "",
  });

  const { fullname, useremail, username, password } = userInfo;

  // **** Ref **** //
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const pwRef = useRef(null);


  // **** 유효성 검사 **** //
  /*
  유효성 검사
  '시작을'  0~9 사이 숫자 or a-z A-Z 알바펫 아무거나로 시작하고  /  중간에 - _  . 같은 문자가 있을수도 있고 없을수도 있으며 / 
  그 후에 0~9 사이 숫자 or a-z A-Z 알바펫중 하나의 문자가 없거나 연달아 나올수 있으며 /  @ 가 반드시 존재하고  / 
  0-9a-zA-Z 여기서 하나가 있고  /  중간에 - _  . 같은 문자가 있을수도 있고 없을수도 있으며 / 그 후에 0~9 사이 숫자 or a-z A-Z 알바펫중 하나의 
  문자가 없거나 연달아 나올수 있으며 /  반드시  .  이 존재하고  / [a-zA-Z] 의 문자가 2개나 3개가 존재 /   이 모든것은 대소문자 구분안함 
  */
  const emailRegEx = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  // 유효성 검사 :최소 8 자, 최소 하나의 문자 및 하나의 숫자
  const pwRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  console.log(userInfo);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const clickJoin = (e) => {
    e.preventDefault();
    // console.log(useremail);
    // if (emailRegEx.test(useremail)) {
    //   if (pwRegEx.test(password)) {
    //     // console.log(response);
    //     console.log(userInfo);
    //     // axios.post("http://13.125.251.80/user/signup", userInfo);
    //     alert("WELCOME");
    //     window.location.href = "/user/login"
    //   }
    //   else {
    //     alert("Invalid email or password.");
    //     pwRef.current.focus();
    //   }
    // }
    // else {
    //   emailRef.current.focus();
    //   alert("Invalid email or password.");
    // }

    if(!emailRegEx.test(useremail)){
      emailRef.current.focus();
      alert("Invalid email or password.");
    }
    if(!pwRegEx.test(password)){
      alert("Invalid email or password.");
      pwRef.current.focus();
    }

    axios({
      method: "post",
      url: "http://13.125.251.80/user/signup",
      data: {
        userInfo
      },
    })
      .then((response) => {
        console.log(response);
        // console.log("data.token:", response.data.token);
      
        alert("Welcome");
        // navigate("/main")
      })
      .catch(function (error) {

        if (error.response) {
          // console.log("res", response);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log("에러1");
      
        } else if (error.request) {
          console.log(error.request);
          console.log("에러2");
        } else if (error.message) {
          console.log("Error", error.message);
          console.log("에러3");
        } else {
          console.log(error.config);
          console.log("에러4")
        }
        alert("다시 확인해주세요.");
      });

    // then/catch

  };


  return (
    <>
      <Container>
        <JoinLeft>
          <JoinContent>
            <div>
              <div>
                <JoinLogo
                  onClick={() => {
                    window.location.href = "/"
                  }}
                  src="https://unsplash.com/assets/core/logo-white-8962708214629a3e8f9fbf5b87b70c3ace41c4175cbcc267f7fbb8449ac45bdd.svg"
                ></JoinLogo>
              </div>
            </div>
            <TextBox>
              <p className="join-title">Creation starts here</p>
              <p className="join-desc">Access 3,972,576 free, high-resolution photos you can’t find anywhere else</p>
            </TextBox>
            <TextBox>
              <p className="image-info">Uploaded about 13 hours ago by Lucas Andrade</p>
            </TextBox>
          </JoinContent>
        </JoinLeft>


        <JoinRight>
          <form onSubmit={clickJoin}>
            <Grid height="auto">
              <Grid height="auto" padding="0 0 60px">
                <JoinTitle>Join Unsplash</JoinTitle>
                <p size="15px" margin="16px 0" align="center">
                  Already have an account?&nbsp;
                  <NotiLink>
                    Login
                  </NotiLink>
                </p>
              </Grid>
              <Grid height="auto">
                <SocialLogin onClick={() => {
                  window.location.href = "https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A8080%252Fuser%252Fsignin%252Fkakao%26client_id%3D366bf4df105f7d1fb0c91cb6b4faeba0"
                }}
                ><RiKakaoTalkFill size="30" />
                  Join using KakaoTalk
                </SocialLogin>
              </Grid>
              <Grid height="auto">
                <FormSeperator>OR</FormSeperator>
              </Grid>
              <Grid height="auto">
                <FormGroup>
                  <label className="form-label">Full name</label>
                  <input className="form-input"
                    onChange={handleChange}
                    ref={fullnameRef}
                    defaultValue={fullname}
                    name="fullname"
                    autoComplete="on"
                    required
                  ></input>
                </FormGroup>
                <FormGroup>
                  <label className="form-label">Email</label>
                  <input className="form-input"
                    onChange={handleChange}
                    ref={emailRef}
                    defaultValue={useremail}
                    name="useremail"
                    autoComplete="on"
                    required
                  ></input>
                </FormGroup>
                <FormGroup>
                  <label className="form-label">User name</label>
                  <input className="form-input"
                    placeholder="only letters, numbers, and underscores"
                    onChange={handleChange}
                    ref={usernameRef}
                    defaultValue={username}
                    name="username"
                    autoComplete="on"
                required
                  ></input>
                </FormGroup>
                <FormGroup>
                  <label className="form-label">Password</label>
                  <input className="form-input"
                    type="password"
                    placeholder="min. 8 char"
                    onChange={handleChange}
                    ref={pwRef}
                    defaultValue={password}
                    name="password"
                    autoComplete="on"
                required
                  ></input>
                </FormGroup>
              </Grid>
              <Grid height="44px" margin="0 0 24px 0">
                <JoinBtn type="submit"
                  //  onClick ={() => {
                  //   window.location.href = "/user/login"
                  // }}
                  onClick={clickJoin}>
                  Join
                </JoinBtn>
              </Grid>
              <Grid height="auto" margin="0 0 24px 0" align="center">
                <Notification>
                  By joining, you agree to the Term and Privacy Policy.
                </Notification>
              </Grid>
            </Grid>

          </form>
        </JoinRight>

      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  z-index: -1;
  margin: 0;
  position: absolute;
`
const JoinLeft = styled.div`
  width: 55%;
  background-image: url(https://images.unsplash.com/photo-1655389410212-20c4929d546e?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #111;
  margin: -8px;

`

const JoinContent = styled.div`
  padding: 8% 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  height: 100%;
  overflow-y: scroll;
`
const JoinLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-bottom: 24px;
  vertical-align: middle;
  cursor: pointer;
`

const TextBox = styled.div`
  color: #fff;
  margin: 0;

  .join-title {
    font-weight: 700;
    font-size: 48px;
    line-height: 1;
    margin: 0 0 16px 0;
  }

  .join-desc {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.35;
    margin: 0 0 30px 0;
  }

  .image-info {
    font-weight: 500;
    margin: 16px 4px 60px;
    justify-content: center;
  }
`

const JoinRight = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0 8%;
  display: flex;
  flex-basis: 60%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .has-error {
    .form-label {
      color: #e25c3d;
    }
    .form-input {
      border: 1px solid #e25c3d;
      &:focus {
        border: 1px solid #e25c3d;
      }
    }
  }
`

const JoinTitle = styled.h1`
  font-size: 46px;
  font-weight: 900;
  margin: 0 0 16px;
  line-height: 1.2;
  text-align: center;

`

const SocialLogin = styled.a`
height: 28px;
border-radius: 4px;
font-weight: 500;
border: 1px solid transparent;
color: ##22211a;
background-color: #fee501;

padding: 9px 0;
display: inline-flex;
width: 525px;

justify-content: center;
align-items: center;

cursor: pointer;
transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, color 0.1s ease-in-out;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: #ffdd00;
  }
`

const FormSeperator = styled.p`
  display: block;
  margin: auto;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  margin: 24px 0;
`

const FormGroup = styled.div`
  margin-bottom: 24px;

  .form-label {
    display: inline-flex;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    max-width: 100%;
    margin-bottom: 6px;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    font-weight: 400;
  }

  .form-input {
    height: 28px;
    display: block;
    width: 94%;
    margin-left: 5px;
    padding: 6px 12px;
    background-color: transparent;
    background-image: none;
    border: 1px solid #767676;
    justify-content: space-around;
    border-radius: 4px;
    -webkit-transition: border-color ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s;
    cursor: text;

    &:focus {
      border: 1px solid #111111;
      outline: none;
    }
  }
`

const Validation = styled.p`
  font-size: 12px;
  color: #767676;
  cursor: text;
  margin: 0 0 6px 0;
`

const JoinBtn = styled.button`
  height: 44px;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  border: 1px solid transparent;
  color: #ffffff;
  background-color: #111111;

  padding: 9px 0;
  display: inline-flex;
  width: 528px;


  justify-content: center;
  align-items: center;

  touch-action: manipulation;
  cursor: pointer;

  :disabled {
    opacity: 0.7;
    cursor: pointer;
    pointer-events: none;
  }
`

const Notification = styled.p`
  display: inline-block;
  font-size: 13px;
  color: #767676;
  margin: 0;
`

const NotiLink = styled.a`
  color: #767676;
  font-size: 13px;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out, opacity 0.1s ease-in-out;
  text-decoration: underline;

  &:hover {
    color: #111111;
  }
`
export default SignUp