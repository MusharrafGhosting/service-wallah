import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Admin from "@/models/admin";

export async function POST(request) {
  const { email, password, image } = await request.json();
  console.log(email, password, image);
  await connectMongoDB();
  const user = await Admin.create({
    email,
    password,
    image,
  });
  return NextResponse.json(user, { status: 201 });
}
