import { useEffect, useState } from "react"
import ServiceCard from "./ServiceCard"
import { NavLink } from "react-router-dom"

export default function Services() {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json()).then(data => setService(data))
    })
    return (
        <div>
            <div className="text-center capitalize">
                <h2 className='text-[#FF3811] font-bold text-xl mb-4'>Service</h2>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-3 justify-between gap-[50px] py-4">
                {
                    service.slice(0, 6).map(item => <ServiceCard key={item._id} service={item}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center">
                <NavLink to={`/allservices`} className='btn bg-[#FF3811] border-none mx-auto text-white hover:text-black'>Show all</NavLink>
            </div>
        </div>
    )
}
