import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

Modal.setAppElement('#___gatsby')

const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(102, 102, 102, 0.4)',
  },
  content: {
    border: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    fontSize: '1.4rem',
    width: '80%',
    maxWidth: '800px',
    padding: '50px 20px 20px'
  }
}

const CloseModalButton = styled.button`
  cursor: pointer;
  position: fixed;
  top: 15px;
  right: 15px;
  border: none;
  background: none;
  width: 30px;
  height: 30px;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateY(-50%);
    background: ${({theme}) => theme.colors.textColor};
    border-radius: 3px;
    width: 2px;
    height: 30px;
  }
  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`

const ModalContentsInner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`

const ModalWindow = (props: any) => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.onClick}
    style={modalStyle}
  >
    <CloseModalButton onClick={props.onClick} aria-label="閉じる"></CloseModalButton>
    <ModalContentsInner>
      {props.children}
    </ModalContentsInner>
  </Modal>
)

export default ModalWindow
