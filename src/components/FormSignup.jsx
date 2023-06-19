import { useState } from "react";

const FormSignup = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
        console.log(repeatPassword)
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
                    <div className="mb-3">
                        <label htmlFor="inputRepeatPassword" className="form-label col-form-label-sm">Repeat Password</label>
                        <input type="password" className="form-control" id="inputRepeatPassword" onChange={handleRepeatPassword} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormSignup;