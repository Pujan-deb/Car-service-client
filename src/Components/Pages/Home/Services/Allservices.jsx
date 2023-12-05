import { useEffect, useRef, useState } from "react"
import ServiceCard from "./ServiceCard"
import { useNavigate } from "react-router-dom"
import SmallBanner from "../../Shared/SmallBanner"

export default function Allservices() {
    const navigate = useNavigate()
    const [service, setService] = useState([])
    const [loading, setLoading] = useState(true);
    const searchRef = useRef(null)
    const [search, setSearch] = useState(' ')
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}`)
            .then(res => res.json()).then(data => {
                setLoading(false)
                setService(data)
            })
    }, [search])
    const HandleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)

    }
    return (
        <div>
            <SmallBanner>Services</SmallBanner>
            <div className="flex justify-center">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" onChange={HandleSearch} ref={searchRef} placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square" onClick={HandleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {loading ?
                <div className="flex justify-center items-center">
                    <span className="loading loading-ring loading-lg "></span>
                </div>
                :
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center sm:gap-2 lg:gap-[50px] py-4 mx-auto">
                    {service.map(item => <ServiceCard key={item._id} service={item}></ServiceCard>)}
                </div>
            }

            <div className="flex justify-center">
                <button className='btn bg-[#FF3811] border-none mx-auto text-white hover:text-black capitalize' onClick={() => navigate(`/`)}>go Back</button>
            </div>
        </div>
    )
}
