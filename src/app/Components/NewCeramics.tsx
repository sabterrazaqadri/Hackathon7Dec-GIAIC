import Image from "next/image";
import Link from "next/link";

const NewCeramics = () => {
  const NewCeramic = [
    {
      Pic: '/Photo (1).png',
      PName: "The Dandy chair",
      pPrice: "£250",
    },
    {
      Pic: '/Parent.png',
      PName: "Rustic Vase Set",
      pPrice: "£155",
    },
    {
      Pic: '/Photo.png',
      PName: "The Silky Vase",
      pPrice: "£125",
    },
    {
      Pic: '/Parent (1).png',
      PName: "The Lucy Lamp",
      pPrice: "£399",
    },
  ];

  return (
    <div className="w-full h-[761px]">
      <h4 className="text-[32px] md:pl-24 pl-16 pt-20">New ceramics</h4>
      <div className="h-[462px] w-full flex justify-center gap-8 mt-6 flex-wrap ">
        {NewCeramic.map((newItem, index) => (
          <div key={index} className=" flex flex-col">
            <div>
              <Image src={newItem.Pic} alt={newItem.PName} width={305} height={375} />
            </div>
            <h4 className="text-[20px] mt-4">{newItem.PName}</h4>
            <p className="text-sm mt-2">{newItem.pPrice}</p>
          </div>
        ))}
          </div>
        <Link href={'/productListing'}><div className="w-full flex justify-center mt-10"><button className="w-[170px] h-[56px] bg-[#F9F9F9] text-sm">
              View collection
        </button></div></Link>
    </div>
  );
};

export default NewCeramics;
