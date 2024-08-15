import React from 'react';

function Features() {
    return (
        <main className='justify-center mt-[50px]'>
            <div className='text-center'>
                <h1 className='text-black text-[48px] sm:text-[74px] font-extrabold leading-[58px] sm:leading-[92.50px]'>
                    What <span className=' text-[#5e1ee5] font-extrabold leading-[58px] sm:leading-[92.50px]'>we</span> provide?
                </h1>
            </div>
            <div className='flex flex-nowrap sm:flex-wrap text-center items-center justify-center overflow-x-auto sm:overflow-hidden relative p-[10px] gap-[10px] sm:gap-[50px] md:gap-[100px] mt-[30px] sm:mt-[50px]'>
                {[
                    { src: "/frames/Frame.png", text: ["Computer &", <br/>, "Laptop"] },
                    { src: "/frames/Frame (1).png", text: ["Mobile &", <br/>, "Phone"] },
                    { src: "/frames/Frame (2).png", text: "Camera" },
                    { src: "/frames/Frame (3).png", text: ["TV & Smart", <br/>, "Box"] },
                    { src: "/frames/Frame (4).png", text: ["Home", <br/>, "Appliance"] },
                    { src: "/frames/Frame (5).png", text: "Accessories" },
                    { src: "/frames/Frame (6).png", text: ["Other", <br/>, "Categories"] }
                ].map((item, index) => (
                    <div key={index} className='flex flex-col items-center min-w-[80px] sm:min-w-0'>
                        <div className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[85px] md:h-[85px] bg-white rounded-full shadow-lg flex items-center justify-center'>
                            <img className='w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 object-contain' src={item.src} alt="" />
                        </div>
                        <p className='hidden sm:block text-center text-xs sm:text-lg font-medium leading-normal mt-2 sm:mt-4'>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Features;
