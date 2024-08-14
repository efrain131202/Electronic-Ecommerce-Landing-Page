import React from 'react';

function Features() {
    return (
        <main className='justify-center mt-[100px]'>
            <div className='text-center'>
                <h1 className='text-black text-[74px] font-extrabold leading-[92.50px]'>What <span className=' text-[#5e1ee5] font-extrabold leading-[92.50px]'>we</span> provide?</h1>
            </div>
            <div className='flex flex-wrap text-center items-center justify-center overflow-hidden relative p-[10px] gap-[100px] mt-[50px]'>
                {[
                    { src: "/frames/Frame.png", text: ["Computer &", <br/>, "Laptop"] },
                    { src: "/frames/Frame (1).png", text: ["Mobile &", <br/>, "Phone"] },
                    { src: "/frames/Frame (2).png", text: "Camera" },
                    { src: "/frames/Frame (3).png", text: ["TV & Smart", <br/>, "Box"] },
                    { src: "/frames/Frame (4).png", text: ["Home", <br/>, "Appliance"] },
                    { src: "/frames/Frame (5).png", text: "Accessories" },
                    { src: "/frames/Frame (6).png", text: ["Other", <br/>, "Categories"] }
                ].map((item, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <div className='w-[85px] h-[85px] bg-white rounded-full shadow-lg flex items-center justify-center'>
                            <img className='w-10 h-10 object-contain' src={item.src} alt="" />
                        </div>
                        <p className='text-lg font-medium leading-normal mt-4 text-center'>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Features;