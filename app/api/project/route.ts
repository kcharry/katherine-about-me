// /app/api/project/route.ts

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import Project from "@/models/Project";

/**
 * GET /api/project
 * Get all projects
 */
export async function GET() {
  try {
    await connectToDatabase();
    const projects = await Project.find();
    return NextResponse.json(projects);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/project
 * Create a new project
 */
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const project = await Project.create(body);
    return NextResponse.json(project, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
