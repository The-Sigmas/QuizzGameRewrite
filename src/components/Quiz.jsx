import React, { useState, useEffect } from 'react';
import '../App.css'
import Button from '../components/Button.jsx'

export default function Quiz( props ) {
  const questions=[
  {
    id: 1,
    question: props.q1 ,
    options: [ props.o11, props.o12, props.o13 ],
    answer: props.a1 ,
  },{
    id: 2,
    question: props.q2,
    options: [ props.o21, props.o22, props.o23 ],
    answer: props.a2,
  },{
    id: 3,
    question: props.q3,
    options: [ props.o31, props.o32, props.o33 ],
    answer: props.a3,
  }]
  return(<>

  </>)
}
