import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/users";

export async function POST(request) {
  const { id} = await request.json();
//   console.log(id);
  await connectMongoDB();
  const user = await User.findByIdAndDelete(id);
  return NextResponse.json(user, { status: 201 });
}