export async function GET(params: any) {

    return Response.json([
        { title: "Learning React Basics", tags: ["React", "JavaScript"], created_at: "2025-03-01" },
        { title: "Tailwind CSS Tips", tags: ["CSS", "Tailwind", "CSS", "Tailwind"], created_at: "2025-03-02" },
        { title: "Node.js Best Practices", tags: ["Node.js", "Backend"], created_at: "2025-03-03" },
        { title: "TypeScript Essentials", tags: ["TypeScript", "JavaScript"], created_at: "2025-03-04" },
        { title: "Building with Astro", tags: ["Astro", "Frontend"], created_at: "2025-03-05" },
        { title: "OpenLayers for Maps", tags: ["Maps", "OpenLayers"], created_at: "2025-03-06" },
        { title: "Module Federation Insights", tags: ["React", "Microfrontend"], created_at: "2025-03-07" },
        { title: "Handling Dates in JavaScript", tags: ["JavaScript", "DateTime"], created_at: "2025-03-08" }
    ])
}