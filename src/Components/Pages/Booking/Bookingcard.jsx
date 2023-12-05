
export default function Bookingcard({ bookings, HandleDeleteBooking, HandleConfirmBookings }) {

    return (
        <div className="flex gap-4 justify-between items-center">
            <div className="flex gap-4 justify-between items-center">
                <i className="fa-solid fa-xmark bg-slate-700 rounded-full text-white p-3 text-xl cursor-pointer" title="Want to delete?" onClick={() => HandleDeleteBooking(bookings.serviceId)}></i>
                <img src={bookings.img} alt="" className="w-[150px] h-[100px] rounded-md" />
                <h1 className="font-bold text-xl">{bookings.service}</h1>
            </div>

            <div className="font-bold text-xl">
                <h1>${bookings.price}</h1>
            </div>

            <div className="font-bold text-xl">
                <h1>{bookings.date}</h1>
            </div>

            <div>
                {
                    bookings.status === 'confirm' ? <span className="font-semibold text-purple-700 text-xl">confirmed</span> :
                        <button className='btn bg-[#FF3811] border-none w-full  mx-auto text-white hover:text-black' onClick={() => HandleConfirmBookings(bookings.serviceId)}>Confirm</button>
                }

            </div>

        </div>
    )
}
