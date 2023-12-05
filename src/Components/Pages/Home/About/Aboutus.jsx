import pic1 from '../../../../assets/images/about_us/person.jpg'
import pic2 from '../../../../assets/images/about_us/parts.jpg'
export default function Aboutus() {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row gap-7">
                <div className='lg:w-1/2 relative'>
                    <div className=''>
                        <img src={pic1} className="max-w-2/4 rounded-lg shadow-2xl" />
                        <img src={pic2} className="max-w-sm rounded-lg shadow-2xl absolute right-[-15px] bottom-[-30px] border-[15px] border-white" />

                    </div>
                </div>

                <div className='lg:w-1/2'>
                    <h2 className='text-[#FF3811] font-bold text-xl mb-4'>About us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field!</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-2">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn bg-[#FF3811] text-white hover:text-white hover:bg-gray-800 mt-5">Get more info</button>
                </div>
            </div>
        </div>)
}
