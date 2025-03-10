export type Note = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    created_at: string;
    updated_at?: string;
};