"use client";
import { useParams } from "next/navigation";
import React from "react";
import Nav from "@/components/Nav";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Dialog, Input, DialogFooter } from "@material-tailwind/react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    image: {
      url: "",
      name: "",
    },
    gender: "",
    location: "",
    city: "",
    active: "",
    role: "",
    serviceHistory: "",
  });
  const [updateUser, setUpdateUser] = useState({
    image: {
      url: "",
      name: "",
    },
  });
  const gettingUser = async () => {
    const response = await fetch(
      "/api/users/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: localStorage.getItem("token") }),
      },
      { cache: "no-store" }
    );
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    gettingUser();
  }, []);
  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }
  const router = useRouter();
  const formattedDate = formatDate(user.createdAt);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const [uploadedImageObject, setUploadedImageObject] = useState({
    url: user.image.url,
    name: user.image.name,
  });
  const handleUploadProfile = async (image) => {
    try {
      if (!image) {
        alert("Invalid Image");
        return;
      }
      const imageRef = ref(
        storage,
        `userprofile/${image.lastModified + image.size + image.name}`
      );
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef); // Get the image URL directly
      setUploadedImageObject({
        url: imageUrl,
        name: imageRef._location.path_,
      });
      // console.log({ imageUrl, imageRef: imageRef._location.path_ });
    } catch (err) {
      console.error(err);
    }
  };
  const handleUpdate = async () => {
    const response = await fetch("/api/users/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...updateUser, id }),
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setOpen(false);
    }
  };
  useEffect(() => {
    setUpdateUser({
      name: user.name,
      phoneNumber: user.phoneNumber,
      email: user.email,
      password: user.password,
      image: user.image,
      gender: user.gender,
      location: user.location,
      city: user.city,
      active: user.active,
      role: user.role,
      serviceHistory: user.serviceHistory,
    });
  }, [user]);
  useEffect(() => {
    setUpdateUser({ ...updateUser, image: uploadedImageObject });
  }, [uploadedImageObject]);
  useEffect(() => {
    console.log(updateUser);
  }, [updateUser]);
  useEffect(() => {
    console.log(uploadedImageObject);
  }, [uploadedImageObject]);
  return (
    <div className="userpage-bg min-h-screen">
      <Nav />
      <div className="flex min-h-full flex-col justify-center items-center">
        <div className="w-10/12 mb-4">
          <button
            title="Go Back"
            className="flex gap-1 font-semibold text-gray-700 items-center my-10"
            onClick={router.back}
          >
            <FaArrowLeft /> Profile
          </button>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex gap-4 items-center w-full">
              {updateUser.image.url || user.image.url ? (
                <img
                  src={updateUser.image.url || user.image.url}
                  alt=""
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <span className="w-32 h-32 rounded-full font-junge bg-gray-400 flex justify-center text-4xl items-center shadow">
                  {user.name && Array.from(user.name)[0].toUpperCase()}
                </span>
              )}
              <div className="flex gap-1 flex-col justify-center">
                <span className="text-6xl font-semibold text-gray-800">
                  Hey👋
                </span>
                <span className="text-indigo-500 font-semibold text-3xl font-itim tracking-wider">
                  {user.name}
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col items-end gap-4">
              <div className="flex flex-col gap-6 w-full h-full bg-white bg-opacity-5 backdrop-blur-sm rounded-md shadow px-6 py-4 border border-gray-400">
                <div className="flex justify-between w-full">
                  <div>Phone Number</div>
                  <div>{user.phoneNumber}</div>
                </div>
                <div className="bg-gray-400 h-[1px] w-full"></div>
                <div className="flex justify-between w-full">
                  <div>Email</div>
                  <div>{user.email}</div>
                </div>
                <div className="bg-gray-400 h-[1px] w-full"></div>
                <div className="flex justify-between w-full">
                  <div>Gender</div>
                  <div>{user.gender}</div>
                </div>
                <div className="bg-gray-400 h-[1px] w-full"></div>
                <div className="flex justify-between w-full">
                  <div>City</div>
                  <div>{user.city}</div>
                </div>
                <div className="bg-gray-400 h-[1px] w-full"></div>
                <div className="flex justify-between w-full">
                  <div>Account Crated on</div>
                  <div>{formattedDate}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Link
                  href={`/user-history/${user._id}`}
                  className="px-4 py-2 bg-indigo-500 text-white font-bold rounded shadow"
                >
                  See History
                </Link>
                <button
                  onClick={handleOpen}
                  className="px-4 py-2 bg-gray-800 text-white font-bold rounded shadow"
                >
                  Edit Profile
                </button>
                <Dialog
                  open={open}
                  handler={handleOpen}
                  size="lg"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                  }}
                >
                  <h2 className="text-center font-semibold text-gray-700 text-2xl pt-6">
                    Edit Profile
                  </h2>
                  <div className="p-6 flex gap-4 items-center h-full">
                    <div className="flex flex-col gap-4 w-full">
                      <Input
                        onChange={(e) =>
                          setUpdateUser({ ...updateUser, name: e.target.value })
                        }
                        value={updateUser.name}
                        label="Fullname"
                      />
                      <Input
                        onChange={(e) =>
                          setUpdateUser({
                            ...updateUser,
                            phoneNumber: e.target.value,
                          })
                        }
                        value={updateUser.phoneNumber}
                        label="Phone Number"
                      />
                      <Input
                        onChange={(e) =>
                          setUpdateUser({
                            ...updateUser,
                            email: e.target.value,
                          })
                        }
                        value={updateUser.email}
                        label="Email"
                      />
                      <Input
                        onChange={(e) =>
                          setUpdateUser({
                            ...updateUser,
                            gender: e.target.value,
                          })
                        }
                        value={updateUser.gender}
                        label="Gender"
                      />
                      <Input
                        onChange={(e) =>
                          setUpdateUser({ ...updateUser, city: e.target.value })
                        }
                        value={updateUser.city}
                        label="City"
                      />
                    </div>
                    <figure className="relative h-72 w-3/5 rounded-md">
                      {updateUser.image.url || user.image.url ? (
                        <img
                          className="h-full w-full rounded-xl object-cover object-center"
                          src={updateUser.image.url || user.image.url}
                          alt="Profile image"
                        />
                      ) : (
                        <div className="bg-gray-700 h-full w-full font-junge text-white font-bold text-7xl flex justify-center items-center rounded-xl">
                          {user.name && Array.from(user.name)[0].toUpperCase()}
                        </div>
                      )}

                      <figcaption className="absolute bottom-4 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-lg text-gray-700 font-medium border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <label
                          className="w-full h-full text-center cursor-pointer"
                          htmlFor="profile"
                        >
                          Chnage Profile Image
                        </label>
                        <input
                          type="file"
                          className="hidden"
                          id="profile"
                          onChange={(e) =>
                            handleUploadProfile(e.target.files[0])
                          }
                        />
                      </figcaption>
                    </figure>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="text"
                      color="red"
                      onClick={handleOpen}
                      className="mr-1"
                    >
                      <span>Cancel</span>
                    </Button>
                    <Button
                      variant="gradient"
                      color="green"
                      onClick={handleOpen}
                    >
                      <span onClick={handleUpdate}>Update</span>
                    </Button>
                  </DialogFooter>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
