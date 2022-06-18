import React from 'react'
import styled from 'styled-components'

// React-icons
import { RiKakaoTalkFill } from 'react-icons/ri'


// elements & components
import Grid from '../elements/Grid'

const Login = () => {


  return (
    <>
      <Grid height="100vh" overflowY="hidden">
        <Grid maxWidth="1320px" height="100%" margin="0 auto" padding="0 12px">
          <Container>
            <Grid height="590px">
              <Grid maxWidth="550px" margin="0 auto">
                <Grid align="center" height="164px" margin="0 0 32 0">
                  <div>
                    <LoginLogo
                   
                    
                      src="https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg"
                    ></LoginLogo>
                  </div>
                  <LoginTitle>Login</LoginTitle>
                  <p size="15px" margin="0 0 32 0" fontWeight="border">
                    Welcome back.
                  </p>
                </Grid>
                <Grid height="auto">
                  <SocialLogin
                   onClick ={() => {
                    window.location.href = "https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A8080%252Fuser%252Fsignin%252Fkakao%26client_id%3D366bf4df105f7d1fb0c91cb6b4faeba0"
                  }} >
                  <RiKakaoTalkFill size="30" />
                    <p>Login with KakaoTalk</p>
                  </SocialLogin>
                </Grid>
                <Grid height="auto">
                  <FormSeperator>OR</FormSeperator>
                </Grid>
                <Grid margin="20px 0" height="auto">
                  <FormGroup>
                    <label className='form-label'>Email address</label>
                    <input className='form-input' name="email"></input>
                  </FormGroup>
                  <FormGroup>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <label className='form-label'>Password</label>
                    </div>
                    <input className="form-input" type="password" name="password" maxLength="20"></input>
                  </FormGroup>
                  <Grid height="auto" margin="0 0 24px 0">
                    <LoginBtn type='submit'>
                      Login
                    </LoginBtn>
                    <Grid margin="32px 0 0 0" height="auto" align="center">
                      <Question>Don’t have an account? &nbsp;</Question>
                      <JoinLink>
                        Join Unsplash
                      </JoinLink>
                    </Grid>

                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          </Container>

        </Grid>
      </Grid>
    </>
  )
}



// &nbsp; 공백없는 줄바꿈 
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;

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
    .email-validation {
      font-size: 12px;
      color: #e25c3d;
    }
  }
`

const LoginLogo = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 24px;
  vertical-align: middle;
  cursor: pointer;
`

const LoginTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 8px 0;
`

const SocialLogin = styled.a`
  border-radius: 4px;
  display: inline-flex;
  color: ##22211a;
  width: 100%;
  height: 30px;
  background-color: #fee501;
  justify-content: center;
  align-items: center;
  padding: 9px 0;
  font-weight: 500;
  border: 1px solid transparent;
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
  }

  .form-input {
    height: 40px;
    display: block;
    width: 100%;
    padding: 6px 12px;
    background-color: transparent;
    background-image: none;
    box-sizing: ${(props) => props.boxSizing};
    border: 1px solid #767676;
    border-radius: 4px;
    -webkit-transition: border-color ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s;
    cursor: text;
    box-sizing: border-box;

    &:focus {
      border: 1px solid #111111;
      outline: none;
    }
  }
`

const FindPassword = styled.a`
  color: #767676;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out, opacity 0.1s ease-in-out;
  text-decoration: underline;

  &:hover {
    color: #111111;
  }
`

const LoginBtn = styled.button`
  height: 44px;
  font-size: 15px;
  width: 100%;
  color: #ffffff;
  background-color: #111111;
  text-align: center;
  vertical-align: middle;
  padding: 9px 18px;
  border-radius: 4px;
  touch-action: manipulation;

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
    pointer-events: none;
  }
`

const Question = styled.p`
  display: inline-block;
  margin: 0;
`

const JoinLink = styled.a`
  color: #767676;
  transition: color 0.1s ease-in-out, fill 0.1s ease-in-out, opacity 0.1s ease-in-out;
  text-decoration: underline;

  &:hover {
    color: #111111;
  }
`

export default Login;