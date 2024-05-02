import connectMongoDB from "@/libs/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    id,
    name,
    phoneNumber,
    email,
    password,
    image,
    gender,
    location,
    city,
    active,
    role,
    serviceHistory,
  } = await request.json();
  // console.log(
  //   id,
  //   name,
  //   phoneNumber,
  //   email,
  //   password,
  //   image,
  //   gender,
  //   location,
  //   city,
  //   active,
  //   role,
  //   serviceHistory
  // );
  await connectMongoDB();
  const user = await User.findByIdAndUpdate(id, {
    name,
    phoneNumber,
    email,
    password,
    image,
    gender,
    location,
    city,
    active,
    role,
    serviceHistory,
  });
  return NextResponse.json(user, { status: 201 });
}
