import Image from 'next/image';
import Link from 'next/link';
import { LuArrowUpRightSquare } from "react-icons/lu";

const Service = ({ iconSrc, title, services, link }) => {
    return (
        <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg mx-auto bg-white p-6 mb-6">
            <div className="flex items-center mb-4">
                <img src={iconSrc} alt="Icon" className="h-12 w-12 mr-3" />
                <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <hr className="mb-4" />
            <div className="mb-4">
                {services.map((service, index) => (
                    <div key={index} className="flex items-center mb-4 bg-gray-100 p-3 rounded-md">
                        <img src={service.icon?.url} alt={service.name} className="w-20 h-20 rounded-lg mr-4" />
                        <span className="text-lg ">{service.name}</span>
                    </div>
                ))}
            </div>
            <Link href={`/services/${link}`} legacyBehavior>
                <a className="text-center flex justify-center items-center gap-2 bg-gray-700 text-white py-2 rounded-md mt-4">
                    View <span aria-hidden="true"><LuArrowUpRightSquare /></span>
                </a>
            </Link>
        </div>
    );
};

export default Service;
