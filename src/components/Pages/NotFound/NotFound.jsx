import React from 'react'
import { Title } from '../../Ui/Title/Title'
import pageNotFound from '../../../assets/Images/Page_not_found.png'

export const NotFound = () => {
  return (
    <div className='mt-2 flex justify-center text-center'>
      <Title content="I'm Page Not Found" src={pageNotFound} styleH='text-4xl text-cyan-600' />
    </div>
  )
}
