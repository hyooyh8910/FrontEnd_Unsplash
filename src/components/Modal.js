import React from 'react'
import styled from 'styled-components'
import Upload from '../pages/Upload'

function Modal({ closeModal }) {

  return (
    <ModalBlock>
      <div className='modalBackground'>
        <div className='cancel__btn'>
          <button
            onClick={() => {
              closeModal(false)
            }}
          >
            X</button>
          <div className='modalContainer'>
            <Upload closeModal={closeModal}/>
          </div>
        </div>
      </div>
    </ModalBlock>
  )
}

const ModalBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 70vh;

.modalBackground {
    width: 100vw;
    height: 110vh;
    background-color: rgba(200, 200, 200);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;    
  }
  
  .modalContainer {
    width: 1000px;
    height: 650px;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding-left:10px;
    margin-bottom: 70px;
  }
  
  .title {

   
  }
  
  
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
  }
  
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 150px;
    // height: 45px;
    // margin: 10px;
    // border: none;
    // color: white;
    // border-radius: 8px;
    // font-size: 20px;
    // cursor: pointer;
  }
  
 
`;


export default Modal
