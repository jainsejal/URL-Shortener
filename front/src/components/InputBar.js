import React, { useState } from 'react'
import axios from 'axios'

import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Alert,
  FormText
} from 'reactstrap'

import { string, object } from 'yup'

const validationSchema = object().shape({
  url: string().url('Should be valid URL')
})

export default function ({ fetchURLs }) {
  const [url, setUrl] = useState('') /// initail value of url is ''//
  const [lastEntry, setLastEntry] = useState({})
  const [isSuccessAlertVisible, setSuccessAlertVisibility] = useState(false)
  const [isErrorAlertVisible, setErrorAlertVisibility] = useState(false)
  const [error, setError] = useState(false)
  const [formError, setFormError] = useState(false)

  async function handleSubmit (event) {
    event.preventDefault()
    // url validation
    try {
      await validationSchema.validate({ url })
    } catch (err) {
      setFormError(`${err.errors.join(',')}`)
      return false
    }
    // on validation success!
    try {
      const response = await axios.get('v1/hash',
        { params: { url } })

      if (response.data) {
        setLastEntry(response.data)
        setUrl('')
        setFormError(false)
        setErrorAlertVisibility(false)
        setSuccessAlertVisibility(true)
        fetchURLs()
      }
    } catch (err) {
      // if any server error occurs
      setError(err.message)
      setSuccessAlertVisibility(false)
      setErrorAlertVisibility(true)
    }
  }
  return (
    <>
      <form className='my-5' onSubmit={handleSubmit} noValidate>
        <InputGroup>
          <Input
            value={url}
            onChange={({ target: { value } }) => setUrl(value)}
            placeholder='Enter url to hash'
            type='url'
          />
          <InputGroupAddon addonType='append'>
            <Button color='primary' type='submit'>
              Hash It
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Start url with http:// or https://
        </FormText>
        {formError && (
          <small className='text-danger'>
            {formError}
          </small>
        )}
      </form>
      {isSuccessAlertVisible && (
        <Alert
          color='info'
          isOpen={isSuccessAlertVisible}
          toggle={() => {
            setSuccessAlertVisibility(false)
          }}
        >
          Generated hash:{' '}
          <a href={lastEntry.url} target='_blank' rel='noopener noreferrer'>
            {lastEntry.hash}
          </a>
        </Alert>
      )}

      <Alert
        color='danger'
        isOpen={isErrorAlertVisible}
        toggle={() => {
          setErrorAlertVisibility(false)
        }}
      >
        Error message: {error}
      </Alert>
    </>
  )
}
