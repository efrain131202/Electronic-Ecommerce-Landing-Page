import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white mt-[150px]">
            <div className="container p-6 mx-auto">
                <div className="lg:flex lg:justify-between">
                    <div className="lg:w-2/5">
                        <div>
                            <a href="#">
                                <img className="w-auto h-7" src="/Sphere.png" alt="Sphere" />
                            </a>
                            <svg className='-mt-[32px] ml-[120px]' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 19 18" fill="none">
                                <path d="M0.59082 9C0.59082 7.21997 1.11866 5.47991 2.10759 3.99987C3.09653 2.51983 4.50213 1.36627 6.14667 0.685084C7.7912 0.0038955 9.6008 -0.174335 11.3466 0.172932C13.0925 0.520199 14.6961 1.37737 15.9548 2.63604C17.2135 3.89471 18.0706 5.49836 18.4179 7.24419C18.7652 8.99002 18.5869 10.7996 17.9057 12.4442C17.2245 14.0887 16.071 15.4943 14.591 16.4832C13.1109 17.4722 11.3709 18 9.59082 18L9.59082 9H0.59082Z" fill="#5E1EE5" />
                            </svg>

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