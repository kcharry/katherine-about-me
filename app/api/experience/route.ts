// /app/api/experience/route.ts

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import Experience from "@/models/Experience";


/**
 * GET /api/experience
 * Get all experiences
 */
export async function GET() {
    try {
        await connectToDatabase();
        const experiences = await Experience.find();
        return NextResponse.json(experiences);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch experiences" },
            { status: 500 }
        );
    }
}

/**
 * POST /api/experience
 * Create a new experience
 */
export async function POST(req: Request) {
    try {
        await connectToDatabase();
        const body = await req.json();
        const experience = await Experience.create(body);
        return NextResponse.json(experience, { status: 201 });
    } catch (error) {
        return NextResponse.json(
        { error: "Failed to create experience" },
        { status: 500 }
        );
    }
}