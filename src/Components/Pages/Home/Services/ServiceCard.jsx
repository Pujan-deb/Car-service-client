import { NavLink } from "react-router-dom";

export default function ServiceCard({ service }) {
    return (
        <div className="flex flex-col justify-between gap-4 shadow-xl rounded-md p-2 bg-[#FFF] border border-[#ffffffe1]">
            <img src={service.img} alt="" className="h-[200px] rounded-md" />
            <h2 className="font-bold text-[25px]">{service.title}</h2>
            <div className="flex justify-between items-center text-[#FF3811]">
                <h2 className="text-xl font-semibold ">Price: ${service.price}</h2>
                <NavLink to={`/booknow/${service._id}`}>Book now <i className="fa-solid fa-arrow-right-long"></i></NavLink>

            </div>
        </div>
    )
}
