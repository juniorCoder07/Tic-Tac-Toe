import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import Style from "@/components/Square/Square.module.css"

interface props {
  value?: string;
  onClick?: any
}
const Square:FC<props> = ({value,onClick}) => {
  return (
    <div className={Style.container} onClick={onClick}>
    <h1>{value}</h1>
    </div>
  )
}

export default Square
