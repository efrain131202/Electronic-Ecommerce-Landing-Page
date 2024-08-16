import React from 'react';

function Header() {
    return (
        <header className='flex flex-col md:flex-row bg-[#F3F4F6] h-[648px]'>
            <div className='w-full md:w-[60%] flex flex-col items-center p-8'>
                <div className='max-w-3xl md:ml-[200px] mt-[65px] text-center md:text-left'>
                    <h1 className='text-black text-[42px] md:text-[74px] z-40 font-extrabold md:w-[572px] leading-[50px] md:leading-[92.50px] relative'>
                        <span className='inline-block text-white bg-[#5E1EE5] font-extrabold px-[36px] py-[8px] rounded-[28px] transform rotate-[-2deg] top-[-20px] md:left-[150px] left-[200px] origin-center absolute z-10'>50%</span>
                        <span className='relative z-20'>Grab</span> <br />
                        Off Smartphone <br /> Collection
                    </h1>
                    <p className='text-black text-lg font-normal leading-[30.33px] mt-[20px]'>
                        Lorem ipsum dolor sit amet consectetur. <br /> Eleifend nec morbi tellus vitae leo nunc.
                    </p>
                    <div className='flex flex-col md:flex-row items-center mt-[50px] mb-[63px]'>
                        <img
                            className='w-28 h-28 mb-5 md:mb-0'
                            src="/Group 136.png"
                            srcset="/Group 136.png 1x, /Group 136@2x.png 2x, /Group 136@3x.png 3x"
                            alt="Imagen de celular"
                            width="168"
                            height="168"
                            loading="lazy"
                        />
                        <p className='text-black text-[33px] md:mb-[63px] md:ml-[25px] font-semibold leading-10'>
                            Xiphone 14 <br /> Edition
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative w-0 md:w-1/2 hidden md:block'>
                <img className='absolute top-0 left-0 z-10 mt-[350px] mr-[515px]' src="/Group 168.png" alt="" />
                <img className='w-[500px] h-[615px] origin-top-left ml-[85px] mt-[33px]' src="/image 1.png" alt="Imagen de promoción" />
            </div>
        </header>
    );
}

export default Header;
