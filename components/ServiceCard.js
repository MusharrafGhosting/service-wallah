// components/ServiceCard.js
import Image from 'next/image';

const ServiceCard = ({ title, description, buttonText, imageUrl, medalIcon }) => {
  return (
    <div className="flex flex-col sm:flex-row relative items-center justify-center  py-4 lg:pl-36  bg-white rounded-lg shadow-md w-full mx-auto border-y border-gray-200 mt-0-important">
      <div className="flex-shrink-0 mb-4 sm:mb-0 mx-auto sm:mx-0">
        <Image src={imageUrl || medalIcon} alt="Service Image" className='lg:w-96 md:w-80 sm:w-72 w-64'   height={150} />
      </div>
      <div className="ml-0 sm:ml-6 sm:w-full flex-1 px-4 sm:px-0 text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold text-blue-500">{title}</h1>
        <p className="mt-2 text-gray-600 lg:pr-[125px] sm:pr-4  ">{description}</p>
        {buttonText && <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          {buttonText}
        </button>}
      </div>
      <div className="absolute top-0 right-0 lg:mr-24 md:mr-4 sm:mr-4 mr-4">
        <Image src={medalIcon} alt="Medal Icon" width={50} height={50} />
      </div>
    </div>
  );
};

export default ServiceCard;