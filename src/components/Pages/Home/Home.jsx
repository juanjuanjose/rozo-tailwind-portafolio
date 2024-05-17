import React from 'react'
import { Title } from '../../Ui/Title/Title'
import home from "../../../assets/Images/home.png";

export const Home = () => {
  return (
    <div className='mt-2 flex justify-center text-center'>
      <Title content="I'm Home" src={home} styleH='text-4xl text-cyan-600'/>
    </div>
  )
}