import React from 'react'
import { Title } from '../../Ui/Title/Title'
import logotipo from '../../../assets/Images/aboutme.png'

export const AboutMe = () => {
  return (
    <div className='mt-2 flex justify-center text-center'>
      <Title content="I'm AboutMe" src={logotipo} styleH='text-4xl text-cyan-600'/>
    </div>
  )
}