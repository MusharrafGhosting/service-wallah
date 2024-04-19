import connectMongoDB from "@/libs/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    name,
    email,
    phoneNumber,
    gender,
    location,
    city,
    active,
    role,
    serviceHistory,
    password,
  } = await request.json();
  await connectMongoDB();
  const user = await User.create({
    name,
    email,
    phoneNumber,
    gender,
    location,
    city,
    active,
    role,
    serviceHistory,
    password,
  });
  return NextResponse.json(user, { status: 201 });
}
