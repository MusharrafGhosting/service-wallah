import connectMongoDB from "@/libs/mongodb";
import Service from "@/models/Service";
import { NextResponse } from "next/server";

function getCurrentDateFormatted() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  return `${day} ${month} ${year}`;
}

// Example usage:
const formattedDate = getCurrentDateFormatted();

export async function POST(request, { params }) {
  const { id } = params;
  const data = await request.json();
  console.log(data);
  await connectMongoDB();
  const service = await Service.findByIdAndUpdate(id, {
    data,
    updatedAt: formattedDate,
  });
  return NextResponse.json(service, { status: 201 });
}
