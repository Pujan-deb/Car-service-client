import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import loginimg from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Authentication/Authuser/Authinfo';
export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const redirectpage = location?.state?.from?.pathname || "/"
    const HandleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const Email = form.email.value;
        const password = form.password.value;

        login(Email, password).then((result) => {
            navigate(redirectpage)
            const user = result.user;
            const loggeduser = {
                email: user.email
            }
            fetch("http://localhost:5000/jwt", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(loggeduser)
            }).then(res => res.json()).then(data => {
                localStorage.setItem("Car-doctor-token", data.token)
            })
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
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>

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
                            <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811]">Login</button>
                        </div>
                        <span className="text-center text-xs text-gray-500">Don't have account?<NavLink to="/registration" className="text-[#FF3811] font-bold">Signup now!</NavLink></span>
                    </form>
                </div>
            </div>
        </div>)
}
