"use client";
import Nav from "@/components/Nav";
import { useEffect, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Dialog,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { MdDelete } from "react-icons/md";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { storage } from "@/firebase";

const CreateAdmin = () => {
  const [open, setOpen] = useState(false);
  const [imageUploaded, setimageUploaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    phoneNumber: "",
    password: "",
    image: {
      url: "",
      name: "",
    },
  });
  const handleUploadProfile = async (image) => {
    try {
      if (!image) {
        alert("Invalid Image");
        return;
      }
      const imageRef = ref(
        storage,
        `adminProfiles/${image.lastModified + image.size + image.name}`
      );
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef); // Get the image URL directly
      setimageUploaded(true);
      const imageObject = { url: imageUrl, name: imageRef._location.path_ };
      setData({ ...data, image: imageObject });
      // console.log({ imageUrl, imageRef: imageRef._location.path_ });
    } catch (err) {
      console.error(err);
    }
  };
  async function handleRegister() {
    if (!data.phoneNumber || !data.image.url || !data.password) {
      setErrorMessage("Invalid data");
      return;
    }
    const response = await fetch(
      "/api/admin/create-admin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
      { cache: "no-store" }
    );
    const responseData = await response.json();
    console.log(responseData);
    if (response.status === 201) {
      setAdmins([...admins, responseData]);
      setErrorMessage("");
      setData({
        phoneNumber: "",
        password: "",
        image: {
          url: "",
          name: "",
        },
      });
      setOpen(false);
    }
    if (response.status !== 201) {
      setErrorMessage(`Something went wrong while Creating a new account`);
    }
  }
  const handleDelete = async (id, imageRef) => {
    const confirmation = confirm(`Are you sure you want to delete`);
    if (!confirmation) return;
    if (imageRef) {
      await deleteObject(ref(storage, imageRef));
    }
    try {
      const response = await fetch(
        "/api/admin/delete-admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        },
        { cache: "no-store" }
      );
      const responsseData = await response.json();
      console.log(responsseData);
      gettingAdmin();
    } catch {
      alert(`Something went wrong while Deleting account`);
    }
  };
  const [admins, setAdmins] = useState([]);
  const gettingAdmin = async () => {
    const response = await fetch(
      "/api/admin/create-admin",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      { cache: "no-store" }
    );
    const responseData = await response.json();
    const allAdmin = responseData.filter((admin) => {
      return admin.role === "admin";
    });
    setAdmins(allAdmin);
  };
  useEffect(() => {
    gettingAdmin();
  }, []);
  useEffect(() => {
    console.log(admins);
  }, [admins]);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="flex justify-center items-center min-h-[89vh]">
        <Card className="w-[50vw] p-4">
          <div className="flex justify-between items-center px-4">
            <Typography variant="h3" color="blue-gray" className="text-center">
              All Admins
            </Typography>
            <Button onClick={handleOpen} variant="gradient" color="indigo">
              Create new Account
            </Button>
            <Dialog
              size="sm"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none"
            >
              <Card className="mx-auto w-full">
                <CardBody className="flex flex-col gap-4">
                  <Typography variant="h4" color="blue-gray">
                    Create Admin Account
                  </Typography>
                  <Typography className="-mb-2" variant="h6">
                    Phone Number
                  </Typography>
                  <Input
                    label="123456789"
                    size="lg"
                    value={data.phoneNumber}
                    onChange={(e) =>
                      setData({ ...data, phoneNumber: e.target.value })
                    }
                  />
                  <Typography className="-mb-2" variant="h6">
                    Password
                  </Typography>
                  <Input
                    label="******"
                    size="lg"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                  <Typography className="-mb-2" variant="h6">
                    Profile Pic
                  </Typography>
                  <input
                    type="file"
                    onChange={(e) => handleUploadProfile(e.target.files[0])}
                  />
                  <Checkbox
                    label={
                      <div>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          NOTE: With this created account anybody can have the
                          power of Admin.
                        </Typography>
                      </div>
                    }
                    containerProps={{
                      className: "-mt-5",
                    }}
                  />
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
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    variant="gradient"
                    disabled={!imageUploaded}
                    onClick={handleRegister}
                    fullWidth
                  >
                    Create Account
                  </Button>
                </CardFooter>
              </Card>
            </Dialog>
          </div>
          <List>
            {admins.map((admin) => {
              return (
                <ListItem className="flex justify-between" key={admin._id}>
                  <div className="flex">
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="candice"
                        src={admin.image?.url}
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        {admin.phoneNumber}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Password: <span>{admin.password}</span>
                      </Typography>
                    </div>
                  </div>
                  <div>
                    <MdDelete
                      color="red"
                      size={30}
                      onClick={() => handleDelete(admin._id, admin.image.name)}
                    />
                  </div>
                </ListItem>
              );
            })}
          </List>
        </Card>
      </div>
    </div>
  );
};

export default CreateAdmin;
