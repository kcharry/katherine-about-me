// /app/api/project/[id]/route.ts

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import Project from "@/models/Project";

type Params = {
  params: { id: string };
};

/**
 * GET /api/project/:id
 */
export async function GET(_: Request, { params }: Params) {
  try {
    await connectToDatabase();
    const project = await Project.findById(params.id);

    if (!project) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/project/:id
 */
export async function PUT(req: Request, { params }: Params) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const updated = await Project.findByIdAndUpdate(
      params.id,
      body,
      { new: true }
    );

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/project/:id
 */
export async function DELETE(_: Request, { params }: Params) {
  try {
    await connectToDatabase();
    await Project.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
