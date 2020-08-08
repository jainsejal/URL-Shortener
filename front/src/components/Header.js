import React from 'react'

import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: #2a60ff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`

const AppName = styled.h3`
  color: white;
`

export default function () {
  return (
    <StyledHeader>
      <AppName>Reduce URL</AppName>
    </StyledHeader>
  )
}
