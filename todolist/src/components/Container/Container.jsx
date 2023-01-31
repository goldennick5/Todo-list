import React from 'react'
import s from './Container.module.css'
function Container(props) {
  return (
    <div className={s.container}>
      {props.children}
    </div>
  )
}

export default Container;
