import connectMongoDB from "@/libs/mongodb";
import Service from "@/models/Service";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { id } = params;
  const data = await request.json();
  console.log(id);
  console.log(data);
  await connectMongoDB();
  const service = await Service.findByIdAndUpdate(id, data);
  return NextResponse.json(service, { status: 201 });
}
