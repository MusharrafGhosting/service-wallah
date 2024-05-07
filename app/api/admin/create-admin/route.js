import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/users";

export async function POST(request) {
  const { phoneNumber, password, image } = await request.json();
  // console.log(phoneNumber, password, image);
  await connectMongoDB();
  const user = await User.create({
    phoneNumber,
    password,
    image,
    role: "admin",
    active: true,
  });
  return NextResponse.json(user, { status: 201 });
}
export async function GET() {
  await connectMongoDB();
  const admins = await User.find();
  return NextResponse.json(admins, { status: 201 });
}
