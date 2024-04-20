"use client";
import React from "react";
import {
  Navbar,
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

import { FaSearch, FaTools } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosInformationCircle, IoMdReturnRight } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
  {
    title: "Home",
    icon: AiFillHome,
    link: "/",
  },
  {
    title: "All Services",
    icon: FaTools,
    link: "/all=services",
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
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 bg-white border h-full border-gray-300 rounded-md shadow-md"
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
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const handleOpen2 = () => setOpen2(!open2);
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 md:gap-4">
      <ServicesList />
      <div className="flex gap-2 justify-evenly">
        <button
          onClick={handleOpen}
          variant="gradient"
          className="flex gap-2 w-full border border-gray-300 hover:bg-gray-200 shadow py-2 px-4 rounded-md justify-center items-center"
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
          className="flex gap-2 border border-gray-300 hover:bg-gray-200 shadow py-2 px-3 rounded-full justify-center items-center"
        >
          <FaSearch className={`  text-[#582FFF;] `} />
        </button>
        <Dialog
          open={open2}
          handler={handleOpen2}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogBody>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                <FaSearch className="  cursor-pointer text-[#582FFF;]" />
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const gettingUser = async () => {
    const response = await fetch("/api/users/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: localStorage.getItem("token") }),
    });
    const data = await response.json();
    console.log({ data });
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
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    gettingUser();
    console.log(localStorage.getItem("token"));
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    if (!loginData.phoneNumber || !loginData.password) {
      setErrorMessage("Invalid data");
      return;
    }
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      console.log({ data });
      if (data.status !== 400) {
        localStorage.setItem("token", data._id);
        setIsAuthenticated(true);
        setOpen3(false);
        setRegisterData({
          phoneNumber: "",
          password: "",
        });
      } else {
        setErrorMessage(data.message);
      }
    } catch {
      setErrorMessage(
        `Something went wrong while logging ${loginData.phoneNumber}`
      );
    }
  }
  async function handleRegister(e) {
    e.preventDefault();
    if (
      !registerData.name ||
      !registerData.phoneNumber ||
      !registerData.password
    ) {
      setErrorMessage("Invalid data");
      return;
    }
    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setOpen3(false);
        setLoginData({
          phoneNumber: "",
          password: "",
        });
      }
    } catch {
      setErrorMessage(`Something went wrong while Regestering`);
    }
  }
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleOpen3 = () => setOpen3(!open3);
  const [type, setType] = React.useState("card");

  return (
    <Navbar className="mx-auto max-w-full px-4 py-2 rounded-none shadow-none bprder-none bg-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link
          href={"/"}
          className="mr-4 cursor-pointer font-extrabold py-1.5 lg:ml-2"
        >
          Service Wallah
        </Link>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <NavList />
          {isAuthenticated ? (
            <button
              variant="gradient"
              className="w-12 h-12 rounded-full bg-gray-400"
            >M</button>
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
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogBody className="min-h-[80vh]">
              <Card className="bg-none shadow-none">
                <CardBody>
                  <Tabs value={type} className="">
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
                          className="mt-12 flex flex-col gap-4 justify-center h-[50vh]"
                          onSubmit={handleLogin}
                        >
                          <div className="w-full">
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
                          <div className="flex gap-4 justify-end">
                            <Button
                              variant="gradient"
                              color="red"
                              onClick={handleOpen3}
                              className="mr-1"
                            >
                              <span>Cancel</span>
                            </Button>
                            <Button size="lg" type="submit">
                              Login
                            </Button>
                          </div>
                        </form>
                      </TabPanel>
                      <TabPanel value="paypal" className="p-0">
                        <form
                          className="mt-12 flex flex-col gap-4"
                          onSubmit={handleRegister}
                        >
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
                          <div className="flex gap-4 justify-end">
                            <Button
                              variant="gradient"
                              color="red"
                              onClick={handleOpen3}
                              className="mr-1"
                            >
                              <span>Cancel</span>
                            </Button>
                            <Button size="lg" type="submit">
                              Register
                            </Button>
                          </div>
                        </form>
                      </TabPanel>
                    </TabsBody>
                  </Tabs>
                </CardBody>
              </Card>
            </DialogBody>
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
    </Navbar>
  );
}
