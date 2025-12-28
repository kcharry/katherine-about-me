import mongoose, { Schema, Document } from "mongoose";

export interface IExperience extends Document {
    company: string;
    title: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}

const experienceSchema = new Schema<IExperience>({
    company: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String },
});

export default mongoose.models.Experience || mongoose.model<IExperience>("Experience", experienceSchema);