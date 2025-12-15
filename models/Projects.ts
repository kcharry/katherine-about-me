import mongoose from 'mongoose';
const { Schema } = mongoose; 

const projectSchema = new Schema({
    projectName: String,
    startDate: String,
    endDate: String,
    description: String,
    deploymentLink: String,
    githubLink: String
});