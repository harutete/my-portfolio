import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal';
import myWorks from '../../../content/myWorks.json'

import { detailContentsWrapper } from '../common/ContentsWrapper'
import PrimaryHeading from '../common/PrimaryHeading'

const WorkContentsWrapper = styled(detailContentsWrapper)`
  background: rgba(255, 205, 159, 0.8);
`
const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  background: #ffffff;
  border-radius: 5px;
  color: #333333;
  width: 280px;
  margin: 30px 0 0 30px;
`
const CardImage = styled.div`
  background: #cccccc;
  height: 200px;
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
  background: #ffffff;
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
    background: #666666;
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
Modal.setAppElement('#___gatsby')
const Work = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
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
            <CardImage></CardImage>
          </Card>
        )}
      </CardWrap>
      <Modal isOpen={isModalOpen}></Modal>
    </WorkContentsWrapper>
  )
}

export default Work