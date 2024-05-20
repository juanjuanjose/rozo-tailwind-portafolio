import React from 'react'
import contactme from '../../../assets/Images/contactme.png'
import { Title } from '../../Ui/Title/Title'

export const ContactMe = () => {
  return (
    <div className='mt-2 flex justify-center text-center'>
      <Title content="Ejercicio 4 " src={contactme} styleH='text-4xl text-purple-600'/>
    </div>
  )
}
