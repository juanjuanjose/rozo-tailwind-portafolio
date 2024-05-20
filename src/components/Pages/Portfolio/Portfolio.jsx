import React from 'react'
import { Title } from '../../Ui/Title/Title'
import portfolio from "../../../assets/Images/portfolio.png";
export const Portfolio = () => {
  return (
    <div className='mt-2 flex justify-center text-center'>
      <Title content="ejercicio 3" src={portfolio} styleH='text-4xl text-purple-600'/>
    </div>
  )
}
