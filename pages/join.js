import Router from 'next/router'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useState } from 'react'

import initFirebase from '../services/firebase'

initFirebase()

const provider = new firebase.auth.GoogleAuthProvider()

export default function Join () {
  const [authorizing, setAuthorizing] = useState(false)

  //   const handleAuthentication = async () => {
  //     setAuthorizing(true)

  //     try {
  //       const result = await firebase.auth().signInWithPopup(provider)

  //       const { user, credentials } = result

  //       console.log(user, credentials)

  //       if (!user) {
  //         throw new Error('there was an issue on authorizing')
  //       }

  //     //   Router.push('/')
  //     } catch (error) {}
  //     setAuthorizing(false)
  //   }
  const handleAuthentication = () => {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      alert('Signed in successfully')// code which runs on success
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      console.log(errorCode)
      alert(errorCode)

      var errorMessage = error.message
      console.log(errorMessage)
      alert(errorMessage)
    })
  }

  return (
    <div>
      <button onClick={handleAuthentication}>
                Join
      </button>
    </div>
  )
}
