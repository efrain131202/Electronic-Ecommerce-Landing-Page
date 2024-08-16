import React from 'react';

const NavigationItem = ({ label, count, isActive, bgColor }) => (
  <li>
    <a href="#" className={`flex items-center justify-start px-4 py-2 border-l-2 ${isActive ? 'border-blue-500' : 'border-transparent border-gray-300'} text-[#2C2C2C] hover:text-gray-800 hover:border-blue-500 text-lg transition-colors duration-300`}>
      <span>{label}</span>
      <span className={`w-[40px] h-[31px] ml-[15px] flex justify-center items-center rounded-md font-extrabold ${bgColor} text-sm`}>
        {count}
      </span>
    </a>
  </li>
);

const ProductCard = ({ title, price, rating, reviews }) => (
  <div className='flex flex-col w-[410px]'>
    <div className='w-[410px] h-[404px] bg-white rounded-lg shadow-lg relative'>
      <div className='absolute top-[25px] right-[25px] w-[49px] h-[49px] bg-black rounded-full flex justify-center items-center'>
        <img className='w-[21px] h-[21px] object-contain' src="/Frame (7).png" alt="" />
      </div>
      <div className='w-[302px] h-[277px] mt-[35px] bg-[#d9d9d9] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
    </div>
    <div className="flex items-center justify-between py-8">
      <h3 className="text-2xl font-extrabold mr-4 truncate max-w-[250px] leading-[29.90px]">
        {title}
      </h3>
      <span className="text-2xl font-extrabold whitespace-nowrap">
        ${price}
      </span>
    </div>
    <p className='text-black text-lg font-normal leading-7'>
      Lorem ipsum dolor sit amet consectetur. <br /> Eleifend nec morbi tellus vitae leo nunc.
    </p>
    <div className='flex items-center justify-start'>
      <span className='text-[#04a904] text-[25px] tracking-[5px]'>
        {'★'.repeat(rating)}
      </span>
      <span className='text-black text-lg font-normal leading-7 ml-[10px]'>
        ({reviews})
      </span>
    </div>
    <button className='w-[192px] h-[53px] mt-[25px] rounded-[52px] border border-black flex items-center justify-center gap-2.5 hover:bg-[#d9d9d9] transition-colors duration-300'>
      <img src="/image.png" alt="carrito" className="w-6 h-6" />
      <p>Add to Cart</p>
    </button>
  </div>
);

function Shopping() {
  const navigationItems = [
    { label: 'Computer & Laptop', count: 15, bgColor: 'text-white bg-[#1F2537]' },
    { label: 'Mobile & Phone', count: 35, bgColor: 'text-[#1F2537] bg-[#AFE638]', isActive: true },
    { label: 'Camera Imaging', count: 10, bgColor: 'text-white bg-[#5E1EE5]' },
    { label: 'TV & Smart Box', count: 8, bgColor: 'text-[#1F2537] bg-[#F1F1F2]' },
    { label: 'Home Appliance', count: 2, bgColor: 'text-[#1F2537] bg-[#FFE921]' },
  ];

  const products = [
    { title: 'iPhone 14 Pro Max', price: '175.00', rating: 5, reviews: 121 },
    { title: 'Xiphone 13', price: '100.00', rating: 5, reviews: 89 },
    { title: 'Samsonge', price: '175.00', rating: 5, reviews: 121 },
    { title: 'Motorola pro', price: '100.00', rating: 4, reviews: 200 },
  ];

  return (
    <section className="h-screen flex flex-col mt-[105px]">
      <div className="h-[150px] flex flex-col md:flex-row md:justify-between md:items-center mx-[100px] text-center md:text-left">
        <div className='flex flex-col'>
          <h2 className='text-[47px] text-black font-bold leading-[58.75px]'>
            New <span className='text-[47px] text-[#5e1ee5] font-bold leading-[58.75px]'>arrival</span> for you
          </h2>
          <div className='mt-4 md:mt-0 flex md:hidden justify-center space-x-[24px]'>
            <button className='w-[55px] h-[55px] rounded-full border border-black flex items-center justify-center hover:bg-[#d9d9d9] transition-colors duration-300'>
              <img src="/izquierda.png" alt="Left Arrow" className="w-6 h-6" />
            </button>
            <button className='w-[55px] h-[55px] rounded-full bg-[#afe638] flex items-center justify-center hover:bg-[#d9d9d9] transition-colors duration-300'>
              <img src="/derecha.png" alt="Right Arrow" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className='hidden md:flex space-x-[24px] items-center'>
          <button className='mr-2 w-[55px] h-[55px] left-0 top-0 rounded-full border border-black flex items-center justify-center hover:bg-[#d9d9d9] transition-colors duration-300'>
            <img src="/izquierda.png" alt="Left Arrow" className="w-6 h-6" />
          </button>
          <button className='mr-2 w-[55px] h-[55px] left-0 top-0 rounded-full bg-[#afe638] flex items-center justify-center hover:bg-[#d9d9d9] transition-colors duration-300'>
            <img src="/derecha.png" alt="Right Arrow" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="w-full md:w-[30%] hidden md:block">
          <nav className="border-l border-gray-200 mt-[50px]" aria-label="Navegación vertical">
            <ul className="ml-[100px] space-y-4 md:space-y-0">
              {navigationItems.map((item, index) => (
                <NavigationItem key={index} {...item} />
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-full md:w-[70%] overflow-x-auto mt-[100px] md:mt-[50px]">
          <div className="flex flex-row space-x-10 ml-8 md:ml-0">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Shopping;
