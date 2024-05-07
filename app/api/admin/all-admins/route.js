import connectMongoDB from "@/libs/mongodb";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request) {
  await connectMongoDB();
  const user = await User.findById(id);
  return NextResponse.json(user, { status: 201 });
}
