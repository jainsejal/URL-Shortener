import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import InputBar from './InputBar'
import Lists from './Lists'

const StyledContent = styled.div`
  max-width: 800px;
  margin: 0px auto;
  align-items: center;
`

export default function () {
  const [urls, setUrls] = useState([])
  async function fetchURLs () {
    try {
      const response = await axios.get('v1/urls')
      if (response.data) {
        setUrls(response.data)
      }
    } catch (err) {}
  }

  useEffect(() => {
    fetchURLs()
  }, [])
  return (
    <StyledContent>
      <InputBar fetchURLs={fetchURLs} />
      <Lists urls={urls} />
    </StyledContent>
  )
}
