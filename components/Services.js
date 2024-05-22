import Link from "next/link";
import { LuArrowUpRightSquare } from "react-icons/lu";

const Service = ({ iconSrc, title, services, link }) => {
  return (
    <div className="flex flex-col gap-4 justify-between bg-white p-6 w-full rounded-lg shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <img
            src={iconSrc}
            alt="Icon"
            className="h-20 w-20 mr-3 rounded-md drop-shadow-lg object-cover"
          />
          <h1 className="text-xl text-gray-700 font-bold">{title}</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="whitespace-nowrap text-sm">{title}</div>
          <div className="h-px bg-gray-300 w-full"></div>
        </div>
        <div>
          {services.length === 0 ? (
            <div className="text-center my-4">🫠Uh oh, There is no services in {title}</div>
          ) : (
            services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-100 p-3 rounded-md"
              >
                <img
                  src={service.icon?.url}
                  alt={service.name}
                  className="w-20 h-20 rounded-lg mr-4"
                />
                <span className="text-lg ">{service.name}</span>
              </div>
            ))
          )}
        </div>
      </div>
      <Link href={`/services/${link}`} legacyBehavior>
        <a className="text-center flex justify-center items-center gap-2 bg-gray-700 text-white py-2 rounded-md">
          View{" "}
          <span aria-hidden="true">
            <LuArrowUpRightSquare />
          </span>
        </a>
      </Link>
    </div>
  );
};

export default Service;
