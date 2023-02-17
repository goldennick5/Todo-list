import React from 'react';
import s from './FilterTItle.module.css';

function FilterTitle({filter}) {
  return (
    <div>
      <h1 className={s.title}>{filter}</h1>
      <div className={s.line}></div>
    </div>
  )
}

export default FilterTitle;
