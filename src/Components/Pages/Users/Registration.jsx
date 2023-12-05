import { NavLink, useNavigate } from 'react-router-dom'
import loginimg from '../../../assets/images/login/login.svg'
import { useContext } from 'react'
import { AuthContext } from '../../../Authentication/Authuser/Authinfo'
export default function Registration() {
    const { Signup } = useContext(AuthContext);
    const navigate = useNavigate()
    const HandleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const Email = form.email.value;
        const password = form.password.value;
        const userinfo = { name, Email, password }
        console.log(userinfo)
        Signup(Email, password).then(() => {
            console.log("user created")
            navigate(`/`)
        }).catch(() => { console.log("error") })
    }
    return (
        <div className="hero min-h-screen mb-6">
            <div className="hero-content flex-col lg:flex-row gap-[90px] ">
                <div className="">
                    <img src={loginimg} alt="" className='w-full mx-auto' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form className="card-body" onSubmit={HandleSubmit}>
                        <h1 className="text-3xl text-center font-bold">Signup now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811]">Signup</button>
                        </div>
                        <span className="text-center text-xs text-gray-500">Already have account?<NavLink to="/login" className="text-[#FF3811] font-bold">Login now!</NavLink></span>
                    </form>
                </div>
            </div>
        </div>)
}
