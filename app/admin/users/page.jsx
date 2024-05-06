"use client";
import Nav from "@/components/Nav";
import { FaUsers } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Input,
} from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";

const Users = () => {
  return (
    <div>
      <Nav />
      <div className="flex w-full py-4 justify-between px-10 items-center">
        <div className="flex gap-2 items-center text-gray-700">
          <FaUsers size={30} />
          <span className="text-3xl font-bold"> All Users</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-72">
            <Input
              label="Search Users"
              className="bg-white"
              icon={<IoIosSearch />}
            />
          </div>
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
            allowHover
          >
            <MenuHandler>
              <Button>FIlter By Status</Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Active</MenuItem>
              <MenuItem>InActive</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="grid gap-10 grid-cols-4 px-10 mt-8">
        <div className="border p-4 bg-white shadow flex flex-col gap-4 rounded-lg">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt=""
                className="w-12 h-12 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1">
                <div>
                  <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-2xl">
                    Active
                  </span>
                </div>
                <div className="font-bold text-indigo-500 text-xl">
                  Musharraf Jamal
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <MdDelete color="red" size={20} />
            </div>
          </div>
          <div>
            <div>Phone Number: 1234567890</div>
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
