import { useLoaderData } from "react-router-dom";
import SmallBanner from "../Shared/SmallBanner";
import { useContext } from "react";
import { AuthContext } from "../../../Authentication/Authuser/Authinfo";
import Swal from 'sweetalert2'

export default function Checkoutpage() {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const HandleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const phone = form.phone.value;
        const date = form.date.value;
        const booking = {
            name, email, phone, date, img: data.img, service: data.title, serviceId: data._id, price: data.price, status: "not confirmed"
        }
        console.log(booking)
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        }).then(res => res.json()).then(data => {
            console.log(data)
            Swal.fire({
                icon: 'success',
                title: 'Your booking is done.',
                text: 'Check your orders.',
                footer: '<a href="">See all bookings</a>'
            })
        })
    }
    return (
        <div className="mb-7">
            <SmallBanner>Checkout</SmallBanner>
            <div className="rounded-md bg-[#F3F3F3] py-[90px] px-[75px]">
                <form action="" className="space-y-6" onSubmit={HandleSubmit}>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-between gap-4">
                        <div>
                            <label htmlFor="name" className="font-semibold mb-3">Name</label>
                            <input type="text" placeholder="Name" name="name" id="" className="rounded-md p-4 sm:w-full" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="font-semibold mb-3">Email</label>
                            <input type="email" placeholder="Email" name="email" id="" className="rounded-md p-4 sm:w-full" defaultValue={user?.email} />
                        </div>

                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-between gap-4">
                        <div>
                            <label htmlFor="Phone" className="font-semibold mb-3">Phone</label>
                            <input type="number" placeholder="Phone" name="phone" id="" className="rounded-md p-4 sm:w-full " required />
                        </div>
                        <div>
                            <label htmlFor="Price" className="font-semibold mb-3">Price</label>
                            <input type="number" placeholder="Message" name="Price" id="" className="rounded-md p-4 sm:w-full" defaultValue={data.price} />
                        </div>


                    </div>

                    <div className="grid sm:grid-cols-1 justify-between gap-4">
                        <div>
                            <label htmlFor="date" className="font-semibold mb-3">Phone</label>
                            <input type="date" placeholder="Enter date" name="date" id="" className="rounded-md p-4 sm:w-full " required />
                        </div>
                    </div>
                    <input type="submit" value="Checkout" className='btn bg-[#FF3811] border-none mx-auto text-white hover:text-black w-full' />

                </form>

            </div>
        </div>
    )
}
