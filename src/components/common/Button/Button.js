import React from 'react'
import styles from './Button.module.scss'

const Button = (props) => {
  const { onClick, text, className } = props

  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  )
}

export default Button
