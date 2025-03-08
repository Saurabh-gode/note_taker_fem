// components/Modal.js
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ isOpen, onClose, children }: any) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                {children}
            </div>
        </div>,
        document.body
    );
}