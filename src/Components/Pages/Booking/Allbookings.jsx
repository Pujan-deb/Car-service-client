import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../Authentication/Authuser/Authinfo"
import SmallBanner from "../Shared/SmallBanner"
import Bookingcard from "./Bookingcard"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"

export default function Allbookings() {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    console.log(user)
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("Car-doctor-token")}`
            }
        })
            .then(res => res.json()).then(data => {
                setLoading(false)
                setBookings(data)

            })
    }, [user])
    const HandleDeleteBooking = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE",
                }).then(res => res.json()).then(data => {
                    console.log(data)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    const remining = bookings.filter(item => item.serviceId !== id)
                    if (remining) {
                        setBookings(remining)
                    }

                })
            }
        })
    }
    const HandleConfirmBookings = (id) => {

        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirm" })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (bookings.modifiedCount > 0) {
                const remaining = bookings.filter(item => item.serviceId !== id)
                const updated = bookings.find(item => item.serviceId === id)
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings)
            }
        })

    }
    return (
        <div>
            <SmallBanner>Your bookings</SmallBanner>
            <div>
                {loading ?
                    <div className="flex justify-center items-center">
                        <span className="loading loading-ring loading-lg "></span>
                    </div>
                    : <div className="space-y-4">
                        {bookings.length > 0 ? bookings.map(item => <Bookingcard key={item.serviceId} bookings={item} HandleDeleteBooking={HandleDeleteBooking} HandleConfirmBookings={HandleConfirmBookings}></Bookingcard>) : <p className="text-center font-bold text=xl capitalize text-cyan-800">Book any service.</p>
                        }
                    </div>}
            </div>


        </div>
    )
}
