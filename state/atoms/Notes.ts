
import { Note } from "@/components/types";
import { atom } from "recoil";

export const currentNoteState = atom<Note>({
    key: "currentNote",
    default: undefined
})

