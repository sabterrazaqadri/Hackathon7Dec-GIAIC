import Image from "next/image";

const Popular = () => {
  return (
    <div className="w-full h-[744px]">
      <h4 className="text-[32px] pl-16 pt-20">Our popular products</h4>
      <div className="w-full h-[462px] mt-10 flex justify-start gap-8 ml-16 flex-wrap lg:flex-nowrap">
        <div className="w-full sm:w-[630px] h-full mb-8 sm:mb-0">
          <Image
            src={"/Large.png"}
            alt="img"
            height={0}
            width={375}
            className="w-full h-[375px]"
          />
          <h4 className="text-[20px] mb-4 mt-2">The Poplar suede sofa</h4>
          <p>£980</p>
        </div>
        <div className="w-full sm:w-[305px] h-full mb-8 sm:mb-0">
          <Image
            src={"/Photo (1).png"}
            alt="img"
            height={0}
            width={375}
            className="w-full h-[375px]"
          />
          <h4 className="text-[20px] mb-4 mt-2">The Dandy chair</h4>
          <p>£980</p>
        </div>
        <div className="w-full sm:w-[305px] h-full mb-8 sm:mb-0">
          <Image
            src={"/img3.png"}
            alt="img"
            height={0}
            width={375}
            className="w-full h-[375px]"
          />
          <h4 className="text-[20px] mb-4 mt-2">The Dandy chair</h4>
          <p>£980</p>
        </div>
      </div>
    </div>
  );
};

export default Popular;
