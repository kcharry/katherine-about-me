'use client';

import { useEffect, useState } from 'react';

interface Experience {
    _id: string;
    company: string;
    title: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}

export default function ExperiencePage() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchExperiences() {
        try {
            const res = await fetch('/api/experience');
            const data = await res.json();
            setExperiences(data);
        } catch (error) {
            console.error('Failed to fetch experiences:', error);
        } finally {
            setLoading(false);
        }
        }

        fetchExperiences();
    }, []);

    if (loading) {
        return <p className="p-4">Loading experience...</p>;
    }

    return (
        <main className="h-screen p-6 space-y-6 bg-[#2d545e] text-[#F2F0EF] font-mono text-base">
        <h1 className="text-3xl font-bold">Experience</h1>

        {experiences.map((exp) => (
            <div key={exp._id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{exp.company}</h2>
            <p className="italic">{exp.title}</p>
            {exp.location && <p>{exp.location}</p>}
            <p className="text-sm">
                {exp.startDate} – {exp.endDate ?? 'Present'}
            </p>
            {exp.description && <p className="mt-2">{exp.description}</p>}
            </div>
        ))}
        </main>
    );
}
