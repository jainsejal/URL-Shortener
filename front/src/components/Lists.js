import React from 'react'
import styled from 'styled-components'

const StyledLists = styled.div`
  width: 100%;
  padding: 0px 20px;
`
const ListItem = styled.li`
  list-style: none;
  display: block;
`
const ListHeader = styled.h4`
  margin-bottom: 10px;
`

export default function ({ urls = [] }) {
  return (
    <StyledLists>
      <ListHeader>History</ListHeader>
      {!urls.length && <p>No records found</p>}
      <ul>
        {urls.map((url) => (
          <ListItem key={url.id}>
            <a

              href={url.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {url.hash}
            </a>
          </ListItem>
        ))}
      </ul>
    </StyledLists>
  )
}
