import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
    projectName: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    deploymentLink?: string;
    githubLink?: string;
}

const projectSchema = new Schema({
    projectName: { type: String, required: true },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String },
    deploymentLink: { type: String },
    githubLink: { type: String },
});

export default mongoose.models.Project || mongoose.model<IProject>("Project", projectSchema);