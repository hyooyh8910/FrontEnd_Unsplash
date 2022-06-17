import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing : border-box;
}

body {
  color: #111;
  font-family: -apple-system,BlinkMacSystemFont,San Francisco,Helvetica Neue,Helvetica,Ubuntu,Roboto,Noto,Segoe UI,Arial,sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
}

input {
  outline: none;
}

input:focus {
  outline: none;
  border: none;
}

button {
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #FFF;
}

a {
  cursor: pointer;
}

`

export default GlobalStyle