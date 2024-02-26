import React, { useContext } from 'react'
import { CalcContext } from '../context/calcContext'
// import TextFit from 'react-textfit'
const Screen = () => {
    const {calc}=useContext(CalcContext)
  return (
    // <TextFit className='screen' mode="single" max={70}>{calc.num?calc.num:calc.res}</TextFit>
    <h1 className='screen'>{calc.num?calc.num:calc.res}</h1>
  )
}

export default Screen