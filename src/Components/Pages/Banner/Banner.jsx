import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
export default function Banner() {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img5} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex justify-start gap-4 h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-4 my-auto ml-12'>
                        <h2 className='w-[400px] text-5xl font-bold text-white leading-snug'>
                            Affordable <br /> Price For <br />Car Servicing
                        </h2>
                        <p className='text-[#FFFFFF]'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className='btn bg-[#FF3811]'>Discover more</button>
                            <button className='btn btn-outline text-white'>Latest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle ">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex justify-start gap-4 h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-4 my-auto ml-12'>
                        <h2 className='w-[400px] text-5xl font-bold text-white leading-snug'>
                            Affordable <br /> Price For <br />Car Servicing
                        </h2>
                        <p className='text-[#FFFFFF]'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className='btn bg-[#FF3811] border-none'>Discover more</button>
                            <button className='btn btn-outline text-white border-[#FF3811]'>Latest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex justify-start gap-4 h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-4 my-auto ml-12'>
                        <h2 className='w-[400px] text-5xl font-bold text-white leading-snug'>
                            Affordable <br /> Price For <br />Car Servicing
                        </h2>
                        <p className='text-[#FFFFFF]'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className='btn bg-[#FF3811]'>Discover more</button>
                            <button className='btn btn-outline text-white'>Latest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex justify-start gap-4 h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-4 my-auto ml-12'>
                        <h2 className='w-[400px] text-5xl font-bold text-white leading-snug'>
                            Affordable <br /> Price For <br />Car Servicing
                        </h2>
                        <p className='text-[#FFFFFF]'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className='btn bg-[#FF3811]'>Discover more</button>
                            <button className='btn btn-outline text-white'>Latest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex justify-start gap-4 h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-4 my-auto ml-12'>
                        <h2 className='w-[400px] text-5xl font-bold text-white leading-snug'>
                            Affordable <br /> Price For <br />Car Servicing
                        </h2>
                        <p className='text-[#FFFFFF]'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className='btn bg-[#FF3811]'>Discover more</button>
                            <button className='btn btn-outline text-white'>Latest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-lg" />
                <div className="absolute rounded-lg flex justify-start gap-4 h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-4 my-auto ml-12'>
                        <h2 className='w-[400px] text-5xl font-bold text-white leading-snug'>
                            Affordable <br /> Price For <br />Car Servicing
                        </h2>
                        <p className='text-[#FFFFFF]'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4'>
                            <button className='btn bg-[#FF3811]'>Discover more</button>
                            <button className='btn btn-outline text-white'>Latest project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>)
}
