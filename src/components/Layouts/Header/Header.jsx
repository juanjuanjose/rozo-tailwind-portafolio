import React from 'react'
import { Navbar } from '../../Ui/Navbar/Navbar'
import { ItemNavbar } from '../../Ui/ItemNavbar/ItemNavbar'

const style_a ='p-1 text-white';
const style_i ='bg-violet-950 text-violet-400 border border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group'

export const Header = () => {
  return (
    <header className='flex w-full bg-slate-800 justify-around h-20 items-center gap-32  '>
      <h1 className='text-3xl text-white font-bold'>Juanchis</h1>
      <Navbar style='flex gap-5 '>
        <ItemNavbar className='style_a'route='/' content='inicio' style_a={style_a} style_i={style_i}/>
        <ItemNavbar route='/aboutme' content='Acerca de mi' style_a={style_a} style_i={style_i}/>
        <ItemNavbar route='/portfolio' content='Mi Portafolio' style_a={style_a} style_i={style_i}/>
        <ItemNavbar route='/contactme' content='Contactame' style_a={style_a} style_i={style_i}/>
        <ItemNavbar route='/*' content='Fakes Routes' style_a={style_a} style_i={style_i}/>
      </Navbar>
    </header>
  )
}
