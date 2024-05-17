import React from 'react'
import contactme from '../../../assets/Images/contactme.png'
import { Title } from '../../Ui/Title/Title'

export const ContactMe = () => {
  return (
    <div className='mt-2 flex justify-center text-center'>
      <Title content="I'm Contactme" src={contactme} styleH='text-4xl text-cyan-600'/>
    </div>
  )
}
