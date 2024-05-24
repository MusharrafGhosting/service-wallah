"use client";
import React from "react";
import {
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  Input,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  FaCalendarCheck,
  FaHistory,
  FaInfoCircle,
  FaSearch,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { FaCartShopping, FaLocationDot, FaUsersGear } from "react-icons/fa6";
import { IoIosInformationCircle, IoMdMailUnread, IoMdOpen } from "react-icons/io";
import { AiFillHome, AiFillWarning } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  MdDashboardCustomize,
  MdManageAccounts,
  MdOutlineManageHistory,
  MdOutlinePayment,
} from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";

const services = [
  {
    title: "Home",
    icon: AiFillHome,
    link: "/",
  },
  {
    title: "All Services",
    icon: FaTools,
    link: "/services",
  },
  {
    title: "About",
    icon: IoIosInformationCircle,
    link: "/about",
  },
];
function ServicesList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = services.map(({ title, icon, link }, key) => (
    <Link href={link} key={key}>
      <MenuItem className="flex items-center justify-between gap-3 rounded-lg ">
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-gray-700 text-sm font-bold"
          >
            {title}
          </Typography>
        </div>
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          {" "}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-700 w-6",
          })}
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 bg-white border h-full justify-center border-gray-300 rounded-md shadow"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Go to
              <ChevronDownIcon
                strokeWidth={3.5}
                className={`hidden h-3 w-3 transition-transform lg:block text-[#582FFF]  ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function NavList() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleOpen2 = () => setOpen2(!open2);

  const [topServices, setTopServices] = useState([]);
  const gettingServices = async () => {
    try {
      const fetchedData = await fetch("/api/services", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await fetchedData.json();
      function getTopBookedServices(services, topN) {
        return services
          .sort((a, b) => b.bookings.length - a.bookings.length)
          .filter((service) => service.status === "active")
          .slice(0, topN);
      }

      const topBookedServices = getTopBookedServices(response, 6);

      setTopServices(topBookedServices);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    gettingServices();
  }, []);
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 md:gap-4">
      <ServicesList />
      <div className="flex gap-2 justify-evenly">
        <button
          onClick={handleOpen}
          variant="gradient"
          className="flex gap-2 w-full border bg-white border-gray-300 hover:bg-gray-200 shadow py-2 px-4 rounded-md justify-center items-center"
        >
          Location
          <FaLocationDot size={18} color="#F44336" />
        </button>
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Find Location</DialogHeader>
          <DialogBody>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>

        <button
          onClick={handleOpen2}
          variant="gradient"
          className="flex gap-2 border bg-white border-gray-300 hover:bg-gray-200 shadow py-2 px-3 rounded-full justify-center items-center"
        >
          <FaSearch />
        </button>
        <button
          onClick={handleOpen2}
          variant="gradient"
          className="flex gap-2 border bg-white border-gray-300 hover:bg-gray-200 shadow py-2 px-3 rounded-full justify-center items-center"
        >
          <FaCartShopping size={20}  />
        </button>
        <Dialog
          open={open2}
          size="lg"
          handler={handleOpen2}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogBody className="p-10 min-h-[90vh] bg-gray-100 rounded-xl">
            <div className="flex gap-3 mb-10 justify-center items-center">
              <h1 className="text-4xl font-julius uppercase">
                Search For Service
              </h1>
              <h2 className="text-5xl font-cookie text-blue-500">You like</h2>
            </div>
            <Input
              label="Search a Service"
              color="blue"
              icon={<FaSearch className="cursor-pointer text-blue-500" />}
            />
            <div>
              <div className="flex gap-2 items-center my-4">
                <h2 className="whitespace-nowrap text-gray-500">
                  Most Booked Services You may like
                </h2>
                <div className="h-px bg-gray-300 w-full"></div>
              </div>
              <div className="grid gap-4 grid-cols-3">
                {topServices.map((service, index) => {
                  return (
                    <div key={index} className="bg-white rounded-lg py-4 px-4">
                      <div className="flex flex-col items-center gap-2">
                        <img
                          src={service.icon.url}
                          alt={service.name}
                          className="w-16 h-16 rounded-md"
                        />
                        <div className="flex flex-col items-center gap-1 w-full">
                          <h2 className="text-gray-700 font-julius font-semibold">{service.name}</h2>
                          <p className="text-gray-500">{service.description}</p>
                          <Link href={`/service/${service._id}`}>
                          <Button
                            variant="gradient"
                            color="blue"
                            className="rounded w-full flex items-center gap-1"
                            size="sm"
                          >
                            View <IoMdOpen />
                          </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </DialogBody>
        </Dialog>
      </div>
    </List>
  );
}

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [user, setUser] = useState({
    image: {
      url: "",
      name: "",
    },
  });
  const gettingUser = async () => {
    const id = localStorage.getItem("token");
    const response = await fetch(`/api/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    // console.log(data);
    setUser(data);
  };
  const [registerData, setRegisterData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    phoneNumber: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    if (!loginData.phoneNumber || !loginData.password) {
      setErrorMessage("Invalid data");
      return;
    }
    try {
      const response = await fetch(
        "/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        },
        { cache: "no-store" }
      );
      const data = await response.json();
      // console.log({ data });
      if (data.status !== 400) {
        localStorage.setItem("token", data._id);
        setOpen3(false);
        setLoginData({
          phoneNumber: "",
          password: "",
        });
        setErrorMessage("");
        gettingUser();
      } else {
        setErrorMessage(data.message);
      }
    } catch {
      setErrorMessage(
        `Something went wrong while logging ${loginData.phoneNumber}`
      );
    }
  }
  // Registration
  const [open4, setOpen4] = useState(false);
  const handleOpen4 = () => setOpen4(!open4);
  const [registerError, setRegisterError] = useState("");
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  function generateOTP() {
    // Generate a random number between 1000 and 9999
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString();
  }
  const [generatedOTP, setGeneratedOtp] = useState();
  const [type, setType] = useState("paypal");
  const SendingOtp = async () => {
    if (
      !registerData.name ||
      !registerData.phoneNumber ||
      !registerData.password
    ) {
      setRegisterError("Invalid data");
      return;
    }
    console.log(" Sending OTP function triggered");
    const authkey = "15d7c1359e59f369";
    const name = "service wallah account";
    const mobile = registerData.phoneNumber;
    const country_code = "+91";
    const SID = "13608";
    const otp = generateOTP();
    console.log(otp);
    setGeneratedOtp(otp);
    const url = `https://api.authkey.io/request?authkey=${authkey}&mobile=${mobile}&country_code=${country_code}&sid=${SID}&company=${name}&otp=${otp}`;
    await axios.get(url);
    setOpen4(true);
  };
  async function handleRegister(e) {
    e.preventDefault();
    if (
      !registerData.name ||
      !registerData.phoneNumber ||
      !registerData.password
    ) {
      setRegisterError("Invalid data");
      return;
    }
    try {
      if (otp === undefined || otp !== generatedOTP) {
        setRegisterError("Invalid OTP");
        return;
      }
      const response = await fetch(
        "/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        },
        { cache: "no-store" }
      );
      await response.json();
      const loginResponse = await fetch(
        "/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: registerData.phoneNumber,
            password: registerData.password,
          }),
        },
        { cache: "no-store" }
      );
      const data = await loginResponse.json();
      // console.log({ data });
      if (data.status !== 400) {
        localStorage.setItem("token", data._id);
        gettingUser();
        if (response.ok) {
          setRegisterError("");
          setOpen4(false);
          setOpen3(false);
          setRegisterData({
            name: "",
            phoneNumber: "",
            email: "",
            password: "",
          });
        }

      }
    } catch (err) {
      setRegisterError(`Something went wrong while Regestering`);
    }
  }
  useEffect(() => {
    const id = localStorage.getItem("token");
    if (id) {
      gettingUser();
    }
  }, []);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleOpen3 = () => setOpen3(!open3);

  return (
    <div className="mx-auto max-w-full px-4 py-2 rounded-none shadow-none bprder-none bg-transparent z-50">
      <div className="flex items-center justify-between text-blue-gray-900 bg-transparent">
        <Link
          href={"/"}
          className="mr-4 cursor-pointer font-extrabold py-1.5 lg:ml-2"
        >
          <img
            src="/logo/secoundary-logo-black.png"
            alt="logo"
            className="cursor-pointer w-40 object-cover"
          />
          {/* Service Wallah */}
        </Link>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <NavList />
          {user?.role ? (
            <Menu allowHover={true} placement="bottom-start">
              <MenuHandler>
                {user?.image?.url ? (
                  <img
                    src={user.image.url}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover cursor-pointer"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full flex justify-center items-center font-junge bg-gray-400 cursor-pointer">
                    {user.name && Array.from(user.name)[0].toUpperCase()}
                  </div>
                )}
              </MenuHandler>
              {user.role === "user" ? (
                <MenuList>
                  <Link href={`/user`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      Profile <FaUser size={12} />
                    </MenuItem>
                  </Link>
                  <Link href={`/user/booking`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      Booking <FaCalendarCheck />
                    </MenuItem>
                  </Link>
                  <Link href={`/user/history`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      History <FaHistory />
                    </MenuItem>
                  </Link>
                  {/* <Link href={`/mail`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      Mail <IoMdMailUnread />
                    </MenuItem>
                  </Link> */}
                  <MenuItem
                    className="text-red-400 justify-center flex items-center gap-1"
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.reload();
                    }}
                  >
                    Logout <IoLogOut />
                  </MenuItem>
                </MenuList>
              ) : user.role === "service-provider" ? (
                <MenuList>
                  <Link
                    href={`/service-provider/${user._id}`}
                    className="outline-none"
                  >
                    <MenuItem className="justify-center flex items-center gap-1">
                      Profile <FaUser size={12} />
                    </MenuItem>
                  </Link>
                  <Link
                    href={`/service-provider/${user._id}/booking`}
                    className="outline-none"
                  >
                    <MenuItem className="justify-center flex items-center gap-1">
                      Booking <FaCalendarCheck />
                    </MenuItem>
                  </Link>
                  <Link
                    href={`/service-provider/${user._id}/history`}
                    className="outline-none"
                  >
                    <MenuItem className="justify-center flex items-center gap-1">
                      History <FaHistory />
                    </MenuItem>
                  </Link>
                  {/* <Link href={`/mail`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      Mail <IoMdMailUnread />
                    </MenuItem>
                  </Link> */}
                  <MenuItem
                    className="text-red-400 justify-center flex items-center gap-1"
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.reload();
                    }}
                  >
                    Logout <IoLogOut />
                  </MenuItem>
                </MenuList>
              ) : (
                <MenuList>
                  <Link href={`/admin`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      Dashboard <MdDashboardCustomize />
                    </MenuItem>
                  </Link>
                  <Link href={`/admin/services`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      Manage Services <MdOutlineManageHistory />
                    </MenuItem>
                  </Link>
                  <Link href={`/admin/users`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      Manage Users <MdManageAccounts />
                    </MenuItem>
                  </Link>
                  <Link
                    href={`/admin/service-providers`}
                    className="outline-none"
                  >
                    <MenuItem className="justify-center flex items-center gap-1">
                      Service Provider <FaUsersGear />
                    </MenuItem>
                  </Link>
                  <Link href={`/admin/payments`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      Manage Payments <MdOutlinePayment />
                    </MenuItem>
                  </Link>
                  {/* <Link href={`/admin/create-admin`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      Create new Admin <MdAddModerator />
                    </MenuItem>
                  </Link> */}
                  {/* <Link href={`/mail`} className="outline-none">
                    <MenuItem className="justify-center flex items-center gap-1">
                      Mail <IoMdMailUnread />
                    </MenuItem>
                  </Link> */}
                  <MenuItem
                    className="text-red-400 justify-center flex items-center gap-1"
                    onClick={() => {
                      localStorage.removeItem("token");
                      window.location.reload();
                    }}
                  >
                    Logout <IoLogOut />
                  </MenuItem>
                </MenuList>
              )}
            </Menu>
          ) : (
            <button
              onClick={handleOpen3}
              variant="gradient"
              className="flex gap-1 border border-gray-300 shadow py-2 px-4 rounded-md hover:bg-[#393737bf] h-11 justify-center items-center text-white text-sm bg-[#000000BF]"
              size="sm"
            >
              Log In <BiLogIn size={18} />
            </button>
          )}

          <Dialog
            open={open3}
            handler={handleOpen3}
            dismiss={{ enabled: false }}
            size="sm"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <CardBody>
              <Tabs value={type} className="">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-md text-center text-gray-800">
                    Welcome to Service Wallah
                  </h1>
                  <RxCross1
                    size={20}
                    onClick={handleOpen3}
                    className="cursor-pointer"
                  />
                </div>

                <TabsHeader className="relative z-0 ">
                  <Tab value="card" onClick={() => setType("card")}>
                    LogIn
                  </Tab>
                  <Tab value="paypal" onClick={() => setType("paypal")}>
                    Register Now
                  </Tab>
                </TabsHeader>
                <TabsBody
                  className="!overflow-x-hidden"
                  animate={{
                    initial: {
                      x: type === "card" ? 400 : -400,
                    },
                    mount: {
                      x: 0,
                    },
                    unmount: {
                      x: type === "card" ? 400 : -400,
                    },
                  }}
                >
                  <TabPanel value="card" className="p-0">
                    <form
                      className="flex flex-col gap-4 justify-center h-[35vh]"
                      onSubmit={handleLogin}
                    >
                      <div className="w-full ">
                        <Input
                          type="tel"
                          label="Phone Number"
                          value={loginData.phoneNumber}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              phoneNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          type="password"
                          label="Password"
                          value={loginData.password}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              password: e.target.value,
                            })
                          }
                        />
                        <Typography
                          variant="small"
                          color="gray"
                          className="mt-2 flex flex-col justify-center gap-1 font-normal"
                        >
                          <span className="flex gap-1 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="-mt-px h-4 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Use at least 8 characters, one uppercase, one
                            lowercase and one number.
                          </span>
                          {errorMessage && (
                            <span className="text-red-500 flex gap-1 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-px h-4 w-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {errorMessage}
                            </span>
                          )}
                        </Typography>
                      </div>
                      <div className="flex gap-2 justify-center">
                        {/* <Button
                              variant="gradient"
                              color="red"
                              onClick={handleOpen3}
                              className="mr-1"
                              fullWidth
                            >
                              <span>Cancel</span>
                            </Button> */}
                        <Button
                          fullWidth
                          size="lg"
                          type="submit"
                          variant="gradient"
                          color="blue"
                        >
                          Login
                        </Button>
                      </div>
                    </form>
                  </TabPanel>
                  <TabPanel value="paypal" className="p-0">
                    <div className="mt-7 flex flex-col gap-4 ">
                      <div className="w-full">
                        <Input
                          label="Fullname"
                          value={registerData.name}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          type="tel"
                          label="Phone Number"
                          value={registerData.phoneNumber}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              phoneNumber: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="relative flex w-full max-w-full">
                        <Input
                          type="email"
                          label="Email Address"
                          value={registerData.email}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              email: e.target.value,
                            })
                          }
                          className="pr-20"
                          containerProps={{
                            className: "min-w-0",
                          }}
                        />
                      </div>
                      <div className="w-full">
                        <Input
                          type="password"
                          label="Password"
                          value={registerData.password}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              password: e.target.value,
                            })
                          }
                        />
                        <Typography
                          variant="small"
                          color="gray"
                          className="mt-2 flex flex-col justify-center gap-1 font-normal"
                        >
                          <span className="flex gap-1 items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="-mt-px h-4 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Use at least 8 characters, one uppercase, one
                            lowercase and one number.
                          </span>
                          {registerError && (
                            <span className="text-red-500 flex gap-1 items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-px h-4 w-4"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {registerError}
                            </span>
                          )}
                        </Typography>
                      </div>

                      <Button
                        onClick={SendingOtp}
                        variant="gradient"
                        fullWidth
                        size="lg"
                        color="blue"
                      >
                        Verify Number
                      </Button>
                    </div>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </CardBody>
          </Dialog>
          <Dialog
            open={open4}
            handler={handleOpen4}
            size="xs"
            dismiss={{ enabled: false }}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-500">
                Verify OTP
              </h2>
              <form onSubmit={handleRegister} className="flex flex-col gap-4">
                <Input
                  label="Enter OTP"
                  maxLength={4}
                  color="blue"
                  value={otp}
                  size="lg"
                  minLength={4}
                  onChange={handleChange}
                />
                {registerError && (
                  <p className="text-red-500 flex gap-1 text-xs items-center">
                    <FaInfoCircle />
                    <span>{registerError}</span>
                  </p>
                )}
                <p className="text-gray-600 flex gap-1 text-xs items-center">
                  <FaInfoCircle />{" "}
                  <span>
                    Please enter the 4-digit OTP sent to your mobile number{" "}
                    {registerData.phoneNumber}.
                  </span>
                </p>

                <button
                  type="submit"
                  className="w-full bg-blue-400 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
                >
                  Verify OTP
                </button>
              </form>
            </div>
          </Dialog>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="gradient" size="sm" fullWidth onClick={handleOpen3}>
            Log In
          </Button>
        </div>
      </Collapse>
    </div>
  );
}
