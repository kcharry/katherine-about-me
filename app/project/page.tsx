'use client';

import { useEffect, useState } from 'react';

interface Project {
    _id: string;
    projectName: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    deploymentLink?: string;
    githubLink?: string;
}

export default function ProjectPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
        try {
            const res = await fetch('/api/project');
            const data = await res.json();
            setProjects(data);
        } catch (error) {
            console.error('Failed to fetch projects:', error);
        } finally {
            setLoading(false);
        }
        }

        fetchProjects();
    }, []);

    if (loading) {
        return <p className="p-4">Loading projects...</p>;
    }

    return (
        <main className="h-screen p-6 space-y-6 bg-[#2d545e] text-[#F2F0EF] font-mono text-base">
        <h1 className="text-3xl font-bold">Projects</h1>

        {projects.map((project) => (
            <div key={project._id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{project.projectName}</h2>

            {project.description && <p className="mt-2">{project.description}</p>}

            <p className="text-sm">
                {project.startDate} – {project.endDate ?? 'Present'}
            </p>

            <div className="mt-2 space-x-4">
                {project.deploymentLink && (
                <a
                    href={project.deploymentLink}
                    target="_blank"
                    className="underline"
                >
                    Live Site
                </a>
                )}

                {project.githubLink && (
                <a
                    href={project.githubLink}
                    target="_blank"
                    className="underline"
                >
                    GitHub
                </a>
                )}
            </div>
            </div>
        ))}
        </main>
    );
}