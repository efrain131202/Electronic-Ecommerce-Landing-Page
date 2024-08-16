import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white mt-[150px]">
            <div className="container p-6 mx-auto">
                <div className="lg:flex lg:justify-between">
                    <div className="lg:w-2/5">
                        <div>
                            <a href="#">
                                <img className="w-auto h-7" src="/logo.png" alt="Sphere" />
                            </a>
                            <p className="max-w-sm text-black text-lg font-normal leading-7 mt-[55px]">
                                Lorem ipsum dolor sit amet consectetur. <br /> Eleifend nec morbi tellus vitae leo nunc.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
                            <div>
                                <p className="text-black text-[22px] font-extrabold uppercase">Company</p>
                                <a href="#" className="block mt-[13px] text-lg text-black font-normal hover:text-[#5e1ee5]">About Us</a>
                                <a href="#" className="block mt-[13px] text-lg text-black font-normal hover:text-[#5e1ee5]">Products Digital</a>
                                <a href="#" className="block mt-[13px] text-lg text-black font-normal hover:text-[#5e1ee5]">Customer Reviews</a>
                            </div>

                            <div>
                                <p className="text-black text-[22px] font-extrabold uppercase">Information</p>
                                <a href="#" className="block mt-[13px] text-lg text-black font-normal hover:text-[#5e1ee5]">Help Center</a>
                                <a href="#" className="block mt-[13px] text-lg text-black font-normal hover:text-[#5e1ee5]">Payment Methods</a>
                                <a href="#" className="block mt-[13px] text-lg text-black font-normal hover:text-[#5e1ee5]">Return & Refund</a>
                            </div>

                            <div>
                                <p className="text-black text-[22px] font-extrabold uppercase">Contact</p>
                                <div className="flex items-center mt-[13px]">
                                    <img src="/phone.png" alt="Phone" className="w-5 h-5 mr-2" />
                                    <span className="text-lg text-black font-normal hover:text-[#5e1ee5]">(+1) 123-456-7890</span>
                                </div>
                                <div className="flex items-center mt-[13px]">
                                    <img src="/email.png" alt="Email" className="w-5 h-5 mr-2" />
                                    <span className="text-lg text-black font-normal hover:text-[#5e1ee5]">email@youremail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;