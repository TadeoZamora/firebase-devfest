import { useState } from 'react'
import firebase from '../services/Firebase'
const FirebaseHook = () =>{
    const [ usuario, setUsuario ] = useState('')
    
    const signIn = async (email,password) =>{
        let response = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(response)
    }

    const logIn = async (email,password) =>{
        try {
            let response = await firebase.auth().signInWithEmailAndPassword(email,password)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    const informacionUsuario = () =>{
        firebase.auth().onAuthStateChanged(user => {
            if(user !== null){
                setUsuario(user.email)
            }else{
                setUsuario('')
            }
        })
    }

    const logOut = async () =>{
        await firebase.auth().signOut()
    }

    return{
        usuario,
        signIn,
        logIn,
        informacionUsuario,
        logOut
    }

}
export default FirebaseHook