import React from 'react'
import styled from 'styled-components'

const TagsList = ({ data }) => {
  const List = styled.ul`
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
  const tagStyle = (color: string) => ({
    borderColor: color,
    color: color
  })
  return (
    <List>
      {data.map((tag, index) =>
        <li key={`tag_${index}`} style={tagStyle(tag.color)}>
          {tag.name}
        </li>
      )}
    </List>
  )
}

export default TagsList