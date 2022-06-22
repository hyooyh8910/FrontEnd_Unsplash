import React from 'react'
import styled from 'styled-components'

const Image = (props) => {
    const { shape, src, size, cursor } = props
  
    const styles = {
      src: src,
      size: size,
      cursor: cursor,
    }
}

Image.defaultProps = {
    shape: 'medium',
    src: 'https://github.com/Leejunmyung/image/blob/master/unsplash_logo.png?raw=true',
    width: '100%',
    height: '170px',
    pointer: 'default',
  }
  
  const ImageSmall = styled.div`
    width: 32px;
    height: 32px;
    background-image: url('${(props) => props.src}');
    background-size: cover;
    background-position: center;
  `
  const ImageMedium = styled.div`
    width: 400px;
    height: 600px;
    background-image: url('${(props) => props.src}');
    background-size: cover;
    background-position: center;
  `
  const ImageBig = styled.div`
    width: 530px;
    height: 800px;
    background-image: url('${(props) => props.src}');
    background-size: cover;
  `
  
  const ImageFull = styled.div`
    width: 100%;
    height: 530px;
    background-image: url('${(props) => props.src}');
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
  `
  const ImageLogo = styled.div`
    width: 50px;
    height: 50px;
    background-image: url('${(props) => props.src}');
    background-size: cover;
    margin: 10px 0;
    cursor: pointer;
  `
  
  const ImageCircle = styled.div`
    --size: ${(props) => props.size};
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
  
    background-image: url('${(props) => props.src}');
    background-size: cover;
    margin: 4px;
    cursor: ${(props) => (props.cursor ? `${props.cursor};` : '')};
  `
  
  export default Image