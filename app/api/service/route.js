import connectMongoDB from "@/libs/mongodb";
import Service from "@/models/Service";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, phoneNumber, email, password } = await request.json();
  // console.log(name, phoneNumber, email, password);
  await connectMongoDB();
  const user = await Service.create({
    name,
    email,
    phoneNumber,
    gender: "Unspecified",
    location: "Unspecified",
    city: "Unspecified",
    active: true,
    role: "user",
    password,
    image: {
      url: "",
      name: "",
    },
  });
  return NextResponse.json(user, { status: 201 });
}
