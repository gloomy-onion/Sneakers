import React from 'react'
import styles from './Button.module.scss'
import { getButtonStyle } from '../helpers'
import cn from 'classnames'

const Button = (props) => {
  const { onClick, text, type } = props

  const styleType = getButtonStyle(type)
  return (
    <button onClick={onClick} className={cn(styles.button, styles[styleType])}>
      {text}
    </button>
  )
}

export default Button
