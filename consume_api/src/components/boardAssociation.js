import React, { useState, useEffect } from 'react'
import AssociationService from '../services/association.service'
const BoardAssociation = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    AssociationService.getAssociationBoard().then(
      (response) => {
        setContent(response.data)
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        setContent(_content)
      }
    )
  }, [])
  return (
    <div className='container'>
      <header className='jumbotron'>
        <h3>{content}</h3>
      </header>
    </div>
  )
}
export default BoardAssociation
