// /app/api/experience/[id]/route.ts

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import Experience from "@/models/Experience";

type Params = {
  params: { id: string };
};

/**
 * GET /api/experience/:id
 */
export async function GET(_: Request, { params }: Params) {
  try {
    await connectToDatabase();
    const experience = await Experience.findById(params.id);

    if (!experience) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(experience);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch experience" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/experience/:id
 */
export async function PUT(req: Request, { params }: Params) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const updated = await Experience.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json(
      { error: "Failed to update experience" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/experience/:id
 */
export async function DELETE(_: Request, { params }: Params) {
  try {
    await connectToDatabase();
    await Experience.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete experience" },
      { status: 500 }
    );
  }
}
