import { NavLink, useLoaderData } from "react-router-dom"
import SmallBanner from "../Shared/SmallBanner"

export default function Booknow() {
    const bookeditem = useLoaderData()
    console.log(bookeditem)
    return (
        <div>
            <SmallBanner>Book now</SmallBanner>
            {bookeditem ? <div className="text-center space-y-4">
                <h1 className="font-bold text-[25px] text-[#FF3811]">{bookeditem.title}</h1>
                <img src={bookeditem.img} alt="" className="rounded-md mx-auto" />
                <h3>{bookeditem.description}</h3>
                <NavLink to={`/checkout/${bookeditem._id}`} className='btn bg-[#FF3811] border-none w-2/3 mx-auto text-white hover:text-black'>Book now</NavLink>
            </div> : <span className="loading loading-spinner loading-lg"></span>}

        </div>

    )
}
