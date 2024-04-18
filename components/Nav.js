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
  HomeIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogIn } from "react-icons/bi";
import Link from "next/link";
import { useState, useEffect } from "react";

const services = [
  {
    title: "Home",
    icon: HomeIcon,
    link: "/courses",
  },
  {
    title: "All Services",
    icon: WrenchScrewdriverIcon,
    link: "/about",
  },
  {
    title: "About",
    icon: BookOpenIcon,
    link: "/facilites",
  },
];
function ServicesList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = services.map(
    ({ title, icon, link }, key) => (
      <Link href={link} key={key}>
        <MenuItem className="flex items-center justify-between gap-3 rounded-lg ">
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
          </div>
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
        </MenuItem>
      </Link>
    )
  );
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
                className={`hidden h-3 w-3 transition-transform lg:block text-[#582FFF]  ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
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
        <button onClick={handleOpen} variant="gradient" className="flex gap-2 w-full border border-gray-300 shadow py-2 px-4 rounded-md justify-center items-center" >
          Location
          <FaLocationDot
            size={18}
            color="#F44336"
          // className={`h-6 w-6 text-gray-500 text-[#F44336;] `}
          />
        </button>
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this way,
            it took me twenty five years to get these plants, twenty five years of
            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
            getting started. I&apos;m up to something. Fan luv.
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

        <button onClick={handleOpen2} variant="gradient" className="flex gap-2 border border-gray-300 shadow py-2 px-3 rounded-full justify-center items-center" >
          <FaSearch

            className={`  text-[#582FFF;] `}
          />
        </button>
        <Dialog
          open={open2}
          handler={handleOpen2}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Its a simple  .</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this way,
            it took me twenty five years to get these plants, twenty five years of
            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
            getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen2}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen2}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </List>
  );
}

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  return (
    <Navbar className="mx-auto max-w-full px-4 py-2 rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href={"/"} className="mr-4 cursor-pointer font-extrabold py-1.5 lg:ml-2">

          Service Wallah

        </Link>

        <div className="hidden gap-2 lg:flex lg:items-center">
          <NavList />

          <button
            variant="gradient"
            className="flex gap-1 border border-gray-300 shadow py-2 px-4 rounded-md h-11 justify-center items-center text-white text-sm bg-[#000000BF]"
            size="sm"
          >
            Log In <BiLogIn size={18} />
          </button>
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
          <Button variant="gradient" size="sm" fullWidth>
          Log In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
