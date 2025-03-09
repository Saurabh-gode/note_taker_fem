'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

export const TitleEditor = ({ title }: { title: string }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Enter a title...',
            })
        ],
        content: `<p>${title}</p>`,
        immediatelyRender: false,
    })

    if (!editor) return null;

    return <EditorContent editor={editor} />
}



export const TagsEditor = ({ tags }: { tags: string }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                // Use a placeholder:
                placeholder: 'Add tags seperated by commas (e.g.Work, Planning)',
            })
        ],
        content: `<p>${tags}</p>`,
        immediatelyRender: false,

    })

    if (!editor) return null;

    return <EditorContent editor={editor} />
}

