import connectMongoDB from "@/libs/mongodb";
import Service from "@/models/Service";
import { NextResponse } from "next/server";
import { v4 } from "uuid";

export async function POST(request, { params }) {
  const { id } = params;
  const data = await request.json();
  console.log(data);
//   await connectMongoDB();
//   const service = await Service.findById(id);
//   service.subServices.push({
//     _id: v4(),
//     name,
//     status,
//     price,
//     icon,
//     reviews: [],
//     bookings: [],
//   });
//   const savedService = await service.save();
  return NextResponse.json("data", { status: 201 });
}
