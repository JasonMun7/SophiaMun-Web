import React, { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import '../../styles/style.css'

export default function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const updatePosition = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };
        window.addEventListener('mousemove', updatePosition);
        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return <div ref={cursorRef} className="cursor"></div>;
}