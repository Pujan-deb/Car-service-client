import './Banner.css'
export default function SmallBanner({ children }) {
    return (
        <div className='mb-10 banner rounded-md'>
            <h2 className='p-5 text-white text-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] font-bold text-5xl py-[60px] '>{children}</h2>
        </div>
    )
}
