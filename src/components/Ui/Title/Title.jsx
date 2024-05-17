import React from 'react'

export const Title = ({styleD,styleH,content,styleI,src}) => {
  return (
    <div className={styleD}>
        <h2 className={styleH}>{content}</h2>
        <img className={styleI} src={src} alt="" />
    </div>
  )
}