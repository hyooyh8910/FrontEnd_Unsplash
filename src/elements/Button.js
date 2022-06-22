import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  const { boxSizing, textAlign, borderRadius, border, outline, width, height, bg, color, cursor, text, _onClick, _disabled, loginJoin, submit } = props
  const styles = {
    boxSizing: boxSizing,
    textAlign: textAlign,
    borderRadius: borderRadius,
    border: border,
    outline: outline,
    width: width,
    height: height,
    bg: bg,
    color: color,
    cursor: cursor,
  }

  if (submit) {
    return (
      <>
        <SubmitBtn {...styles} onClick={_onClick} disabled={_disabled}>
          {text}
        </SubmitBtn>
      </>
    )
  }

  if (loginJoin) {
    return (
      <>
        <UserBtn {...styles} onClick={_onClick} disabled={_disabled}>
          {text}
        </UserBtn>
      </>
    )
  }

  return (
    <>
      <Btn {...styles}>{text}</Btn>
    </>
  )
}


const SubmitBtn = styled.button`
  boxSizing: 'border-box',
  text-align: 'center',
  border-radius: '4px',
  border: 'none',
  width: '100%',
  background-color: '#111',
  color: '#FFF',
  cursor: 'pointer',

  font-size: 14px;
  height: 32px;
  line-height: 30px;
  padding: 0 11px;
`

const UserBtn = styled.button`
  box-sizing: 'border-box',
  text-align: 'center',
  border-radius: '4px',
  border: 'none',
  width: '100%',
  background-color: '#111',
  color: '#FFF',
  cursor: 'pointer',

  height: 44px;
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  text-decoration: none;
  box-shadow: 0 1px 4px rgb(0 0 0 / 2%), 0 1px 1px rgb(0 0 0 / 6%);
  padding: 10px 19px;
  font-size: 15px;
  line-height: 1.6;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, color 0.1s ease-in-out;
  transition: background-color 0.1s ease-in-out, border-color 0.1s ease-in-out, color 0.1s ease-in-out;
`
const Btn = styled.button`
  box-sizing: 'border-box',
  text-align: 'center',
  border-radius: '4px',
  border: 'none',
  width: '100%',
  height: '',
  background-color: '#111',
  color: '#FFF',
  cursor: 'pointer',
`
export default Button
