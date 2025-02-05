// app/api/getData/route.ts
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `*[_type =='products' && islike == true ]{
         islike,
         name,
         id,
         _id
       
       }`;
    
    const data = await client.fetch(query);


    // Return data with success status
    return NextResponse.json({ success: true, data }, { status: 200 });
    // return NextResponse.json({data});

  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
