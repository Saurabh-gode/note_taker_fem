"use client"
import Button from "@/components/Button";
import HomeSVG from "@/app/images/icon-home.svg";
import NoteItem from "@/components/NoteItem";
import Logo from "@/components/Logo";
import { useState } from "react";
import Modal from "@/components/modal/Modal";

export default function Home() {

  const [modalOpen, setModalOpen] = useState(false);
  const handler = () => setModalOpen(prev => !prev)

  console.log('modalOpen', modalOpen)
  return (
    <>
      <Button rounded onClick={handler}>
        <HomeSVG />
      </Button>
      <Logo />
      <NoteItem tags={["dev", "react", "etc"]} title="Note Title here" created_at="29 Oct 2024" />

      {<Modal isOpen={modalOpen} onClose={() => { setModalOpen(false) }}>
        <h2 className="text-xl font-semibold mb-2">Modal Title</h2>
        <p>This is the content of the modal styled with Tailwind CSS using @apply.</p>
      </Modal>}
    </>
  );
}
