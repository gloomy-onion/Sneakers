import React from 'react'
import styles from './Button.module.scss'
import {getButtonStyle} from '../helpers';
import cn from 'classnames'

const Button = (props) => {
  const { onClick, text,  className } = props


  return (
    <button onClick={onClick} className={cn(styles.button, className)}>
      {text}
    </button>
  )
}

export default Button
