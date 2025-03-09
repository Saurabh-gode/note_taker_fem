"use client"
import Button from "@/components/Button";
import HomeSVG from "@/app/images/icon-home.svg";
import ArchiveSVG from "@/app/images/icon-archive.svg";
import NoteItem from "@/components/NoteItem";
import Logo from "@/components/Logo";
import { useState } from "react";
import Modal from "@/components/modal/Modal";
import ModalContent from "@/components/modal/ModalContent";
import DesktopSidebar from "@/components/desktopSidebar/DesktopSidebar";
import DesktopHeader from "@/components/desktopHeader/DesktopHeader";
import NoteList from "@/components/noteList/NoteList";
import Tiptap from "@/components/tiptap/Tiptap";
import NoteEditor from "@/components/noteEditor/NoteEditor";
import { Note } from "@/components/types";



export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);
  const handler = () => setModalOpen(prev => !prev);

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 0,
      title: "Learning React Basics",
      tags: ["React", "JavaScript"],
      created_at: "2025-03-01",
      description: "Explore the fundamentals of React, including components, state, and props. Perfect for beginners looking to build dynamic web applications."
    },
    {
      id: 1,
      title: "Tailwind CSS Tips",
      tags: ["CSS", "Tailwind"],
      created_at: "2025-03-02",
      description: "Discover practical tips for mastering Tailwind CSS. Learn how to efficiently style your components with utility classes and streamline development."
    },
    {
      id: 2,
      title: "Node.js Best Practices",
      tags: ["Node.js", "Backend"],
      created_at: "2025-03-03",
      description: "Unlock the secrets to writing robust, scalable Node.js applications. Dive into error handling, performance optimization, and clean code techniques."
    },
    {
      id: 3,
      title: "TypeScript Essentials",
      tags: ["TypeScript", "JavaScript"],
      created_at: "2025-03-04",
      description: "Master TypeScript’s core features, including type safety, interfaces, and generics. A must-read for JavaScript developers leveling up their skills."
    },
    {
      id: 4,
      title: "Building with Astro",
      tags: ["Astro", "Frontend"],
      created_at: "2025-03-05",
      description: "Learn how to build lightning-fast websites with Astro. Discover island architecture, component hydration, and seamless integration with React."
    },
    {
      id: 5,
      title: "OpenLayers for Maps",
      tags: ["Maps", "OpenLayers"],
      created_at: "2025-03-06",
      description: "Dive into creating interactive maps with OpenLayers. Explore layers, vector sources, and how to handle map events for dynamic geospatial apps."
    },
    {
      id: 6,
      title: "Module Federation Insights",
      tags: ["React", "Microfrontend"],
      created_at: "2025-03-07",
      description: "Understand the power of Module Federation in React. Learn how to split code across teams, share components, and build flexible microfrontends."
    },
    {
      id: 7,
      title: "Handling Dates in JavaScript",
      tags: ["JavaScript", "DateTime"],
      created_at: "2025-03-08",
      description: "Solve common date manipulation challenges in JavaScript. Explore libraries, time zones, and techniques for parsing, formatting, and comparing dates."
    }
  ]
  
  );

  const [currentNote, setCurrentNote] = useState<Note | undefined>({ 
    id: 0, 
    title: "Learning React Basics", 
    tags: ["React", "JavaScript"], 
    created_at: "2025-03-01", 
    description: "Explore the fundamentals of React, including components, state, and props. Perfect for beginners looking to build dynamic web applications." 
  },);


  const handleNewNoteSelection = (data: Note) => {
    setCurrentNote(data)
  }

  return (
    <>
      <div className="flex w-full p-4">

        <div className="w-1/6">
          <DesktopSidebar />
        </div>
        <div className="w-full h-full gap-4">
          <DesktopHeader />
          <hr />
          <section className="flex gap-4">
            <NoteList notesList={notes} currentNote={currentNote} onClickNote={handleNewNoteSelection} />
            <NoteEditor currentNote={currentNote}/>
          </section>
        </div>

        {<Modal isOpen={modalOpen} onClose={() => { setModalOpen(false) }}>
          <ModalContent
            actionIcon={<ArchiveSVG />}
            actionLabel={"Archive Note"}
            actionDescription={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum minus dolor ut cumque vitae."}
          />
        </Modal>}
      </div>
    </>
  );
}
