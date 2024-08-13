import React from 'react';

function Navbar() {
    return (
        <nav className="bg-white flex justify-between items-center">
            <div className='mt-[55px] ml-[100px]'>
                <a href="/"><img src="/Sphere.png" width="121.08px" height="19.68px" alt="Logo" /></a>
                <svg className='-mt-[31px] ml-[113px]' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19 18" fill="none">
                    <path d="M0.59082 9C0.59082 7.21997 1.11866 5.47991 2.10759 3.99987C3.09653 2.51983 4.50213 1.36627 6.14667 0.685084C7.7912 0.0038955 9.6008 -0.174335 11.3466 0.172932C13.0925 0.520199 14.6961 1.37737 15.9548 2.63604C17.2135 3.89471 18.0706 5.49836 18.4179 7.24419C18.7652 8.99002 18.5869 10.7996 17.9057 12.4442C17.2245 14.0887 16.071 15.4943 14.591 16.4832C13.1109 17.4722 11.3709 18 9.59082 18L9.59082 9H0.59082Z" fill="#5E1EE5" />
                </svg>
            </div>
            <div className='text-[#8E8E8E] text-[13px] text-center space-x-[25px] mt-[67px]'>
                <a href="/" className='px-[16px] py-[16px]'>HOME</a>
                <a href="" className='px-[16px] py-[16px]'>PRICING</a>
                <a href="" className='px-[16px] py-[16px]'>EVENTS</a>
                <a href="" className='px-[16px] py-[16px]'>COMPANY</a>
            </div>
            <div className='flex items-center space-x-6 mr-[111px]'>
                <a href="" className='text-[#8E8E8E] text-[13px] mt-[67px] px-[16px] py-[16px]'>LOGIN</a>
                <a href="" className='flex items-center text-white text-[16px] bg-black pt-4 pb-4 pr-[37px] pl-[37px] rounded-[52px] mt-[65px] mr-[20px]'>
                    <span className='mr-[10px]'>
                        Sign Up Now
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path d="M3.75 9.5H14.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 4.25L14.25 9.5L9 14.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
