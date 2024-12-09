import Image from "next/image"
const Footer = () => {
  return (
    
    <div className="w-[1440px] h-[380px] bg-[#2A254B] text-white">
       <div className=" flex">
          <div className="w-[128px] h-[175px] ml-20 mt-16 ">
              <ul className="text-xs">
                  <li className="text-sm mb-4">Menu</li>
                  <li className="mb-3">New arrivals</li>
                  <li className="mb-3">Best sellers</li>
                  <li className="mb-3">Recently viewed</li>
                  <li className="mb-3">Popular this week</li>
                  <li className="mb-3">All products</li>
              </ul>      
          </div>
          <div className="w-[94px] h-[206px] ml-28 mt-16 ">
              <ul className="text-xs">
                  <li className="text-sm mb-4">Categories</li>
                  <li className="mb-3">Crockery</li>
                  <li className="mb-3">Furniture</li>
                  <li className="mb-3">Homeware</li>
                  <li className="mb-3">Plant pots</li>
                  <li className="mb-3">Chairs</li>
                  <li className="mb-3">Crockery</li>
              </ul>      
        </div>
          <div className="w-[125px] h-[175px] ml-28 mt-16 ">
              <ul className="text-xs">
                  <li className="text-sm mb-4">Our company</li>
                  <li className="mb-3">About us</li>
                  <li className="mb-3">Vacancies</li>
                  <li className="mb-3">Contact us</li>
                  <li className="mb-3">Privacy</li>
                  <li className="mb-3">Returns policy</li>
              </ul>      
          </div>
          <div className="w-[627px] h-[200px]  ml-24 mt-16 ">
              <h6 className="text-sm mb-4">Join our mailing list</h6>
            <input
              type="email"
              placeholder="your@email.com"
              className="sm:w-3/4 h-[56px] lg:w-[509px] lg:h-[56px] bg-gray-700 text-white px-4 lg:px-8"
            />
            <button className="sm:w-1/4 mt-4 lg:w-[118px] h-[55px] bg-white text-black text-sm">
              Sign up
              </button>
              
              </div>
              </div>
          <div className="w-[1277px] bg-[#4E4D93] h-[1px] ml-20 mt-10 "></div>
          <div className="w-[1277px] h-[65px] ml-20 flex justify-between items-center ">
              <h6 className="text-sm text-white">Copyright 2022 Avion LTD</h6>
              <div className="w-[264px] h-[24px] flex">
                <Image src={"/Logo--linkedin.png"} alt="img" width={24} height={24} ></Image>      
                <Image src={"/Logo--facebook.png"} alt="img" width={24} height={24}></Image>      
                <Image src={"/Logo--linkedin.png"} alt="img" width={24} height={24}></Image>      
                <Image src={"/Logo--linkedin.png"} alt="img" width={24} height={24}></Image>      
                <Image src={"/Logo--linkedin.png"} alt="img" width={24} height={24}></Image>      
                <Image src={"/Logo--linkedin.png"} alt="img" width={24} height={24}></Image>      
              </div>
          </div>
    </div>
  )
}

export default Footer