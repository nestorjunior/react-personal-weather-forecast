import { useState } from "react";
import {auth} from '../utils/FirebaseConfig'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const FormSignup = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const [repeatPassword, setRepeatPassword] = useState()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    // const handleRepeatPassword = (e) => {
    //     setRepeatPassword(e.target.value)
    // }

    const handleValidatePassword = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log(res.user)
            })
        .catch(err => (err.message))
        console.log('Usuário cadastrado com sucesso!')  

        // if (email !== '' || password !== '' || repeatPassword !== '') {
        //     console.log('Campo(s) precisa(m) ser(em) preenchido(s)')   

        //     if (password !== repeatPassword) {
        //         console.log('Campos precisam ser iguais')   
        //     } 


        // }else {
        //     console.log('Tudo ok com os dados')   
        // }
        
        // else {
        //     createUserWithEmailAndPassword(auth, email, password, repeatPassword)
        //     .then((res) => {
        //         console.log(res.user)
        //       })
        //     .catch(err => (err.message))
        //     console.log('Usuário cadastrado com sucesso!')  
        // }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        handleValidatePassword()
    }

    return(
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label col-form-label-sm">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" onChange={handleEmail} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label col-form-label-sm">Password</label>
                        <input type="password" className="form-control" id="inputPassword" onChange={handlePassword} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormSignup;