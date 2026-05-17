import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    console.log("BODY:", body);

    const { name, email, message } = body;

    const { data, error } = await supabase
      .from("contact")
      .insert([
        {
          name,
          email,
          message,
        },
      ]);

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (err) {

    console.log("CATCH ERROR:", err);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}