import React from 'react'
import '../components/Instructions.css'
import Cards from './InstructionCards'


function Instructions() {
  return (
    <section>
      <Cards
      instructions='Create an account'
      image={require('../images/inst1.png')} 
      title='Create/login to an existing
      account to get started'
      details='An account is created with your email
      and a desired password'
      />

<Cards
      instructions='Create an account'
      image={require('../images/inst1.png')} 
      title='Create/login to an existing
      account to get started'
      details='An account is created with your email
      and a desired password'
      />

<Cards
      instructions='Create an account'
      image={require('../images/inst1.png')} 
      title='Create/login to an existing
      account to get started'
      details='An account is created with your email
      and a desired password'
      />
    </section>
  )
}

export default Instructions;


