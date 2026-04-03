import React from 'react'
import DoSignOut from '../actions'

export default function SignOut() {
  return (
    <form action={DoSignOut}>
      <button type='submit'> Sign Out</button>
    </form>
  )
}
