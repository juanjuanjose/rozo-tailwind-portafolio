import React from 'react'

export const Navbar = ({ children,style }) => {
  return (
    <nav>
      <ul className={style}>
        {children}
      </ul>
    </nav>
  )
}
