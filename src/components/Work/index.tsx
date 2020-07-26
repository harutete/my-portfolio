import React, { useState } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import Modal from 'react-modal';
import myWorks from '../../../content/myWorks.json'

import { detailContentsWrapper } from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'

Modal.setAppElement('#___gatsby')

const WorkContentsWrapper = styled(detailContentsWrapper)`
  background: ${({theme}) => rgba(theme.colors.orange, 0.8)};
`
const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  overflow: hidden;
  background: ${({theme}) => theme.colors.white};
  border-radius: 5px;
  color: #333333;
  width: 280px;
  margin: 30px 0 0 30px;
`
const CardImage = styled.div`
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`
const CardDescription = styled.div`
  padding: 0 15px 15px;
`
const CardTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 15px;
`
const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: -5px;
  li {
    border-radius: 2px;
    border-style: solid;
    border-width: 1px;
    margin: 10px 0 0 5px;
    padding: 2px 5px;
  }
`
const ModalIcon = styled.button`
  cursor: pointer;
  display: inline-block;
  vertical-align: text-bottom;
  position: relative;
  transition: opacity 0.2s;
  background: ${({theme}) => theme.colors.white};
  border: 2px solid #666666;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  margin-left: 5px;
  &:hover {
    opacity: 0.6;
  }
  &:focus {
    outline: none;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${({theme}) => theme.colors.darkGray};
    border-radius: 2px;
  }
  &::before {
    width: 2px;
    height: 10px;
  }
  &::after {
    width: 10px;
    height: 2px;
  }
`
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
const LinkButton = styled.a`
  display: block;
  position: relative;
  background: ${({theme}) => theme.colors.orange};
  border-radius: 4px;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  width: 80%;
  max-width: 300px;
  margin: 30px auto;
  padding: 15px 30px;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%) rotate(45deg);
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    width: 15px;
    height: 15px;
  }
`
const SkillList = styled.dl`
  margin-top: 30px;
  dd {
    margin-top: 10px;
  }
`
const TechList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  li {
    margin: 5px; 0 0 5px;
  }
`
const ModalContentsInner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  img {
    max-width: 100%;
  }
`

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
const Work = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ currentModalContents, setCurrentModalContents ] = useState(null)
  const openModal = (event) => {
    const currentContentId = parseInt(event.currentTarget.getAttribute('data-work-id'), 10)
    const currentContent = myWorks.works.find(work => work.id === currentContentId)
    setCurrentModalContents(currentContent)
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setCurrentModalContents(null)
    setIsModalOpen(false)
  }
  const tagStyle = (color: string) => ({
    borderColor: color,
    color: color
  })
  return (
    <WorkContentsWrapper>
      <PrimaryHeading>Work</PrimaryHeading>
      <CardWrap>
        {myWorks.works.map((work, index) =>
          <Card key={`woprk_${index}`}>
            <CardDescription>
              <CardTitle>
                {work.name}<ModalIcon data-work-id={work.id} onClick={openModal} />
              </CardTitle>
              <TagsList>
                {work.tags.map((tag, index) =>
                  <li key={`tag_${index}`} style={tagStyle(tag.color)}>
                    {tag.name}
                  </li>
                )}
              </TagsList>
            </CardDescription>
            <CardImage><img src={work.top_image} alt="" /></CardImage>
          </Card>
        )}
      </CardWrap>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <CloseModalButton onClick={closeModal} aria-label="閉じる"></CloseModalButton>
        {(isModalOpen && currentModalContents)　&&
          <ModalContentsInner>
            <div>
              <p>{currentModalContents.description}</p>
              <SkillList>
                <dt>[使用言語]</dt>
                <dd>
                  <TechList>
                    {
                      currentModalContents.tags.map((tag, index) =>
                      <li key={`tag_${index}`}>{tag.name}</li>
                    )}
                  </TechList>
                </dd>
              </SkillList>
              {currentModalContents.link && <LinkButton href={currentModalContents.link}>Code on Github</LinkButton>}
            </div>
            <div>
              <img src={currentModalContents.detail_image} alt="" />
            </div>
          </ModalContentsInner>
        }
      </Modal>
    </WorkContentsWrapper>
  )
}

export default Work