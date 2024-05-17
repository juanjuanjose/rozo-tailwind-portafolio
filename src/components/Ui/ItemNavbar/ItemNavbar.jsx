import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemNavbar = ({ content, style_i, style_a,route }) => {
    return (
        <li className={style_i}>
            <NavLink  to={route} className={style_a}>{content}</NavLink>
        </li>
    )
}
