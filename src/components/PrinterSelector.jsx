// import React from 'react'
// import usePrinterStore from "../store/usePrinterStore";

// function PrinterSelector() {
// 	const { printerType, setPrinterType } = usePrinterStore();
//   return (
// 	<div
//       style={{
//         position: "fixed",
//         top: "20px",
//         right: "20px",
//         background: "white",
//         padding: "12px 24px",
//         borderRadius: "40px",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
//         zIndex: 9999,
//         border: "1px solid #e2e8f0",
//         display: "flex",
//         alignItems: "center",
//         gap: "20px",
//         fontWeight: 500,
//         backdropFilter: "blur(10px)",
//         backgroundColor: "rgba(255, 255, 255, 0.95)",
//       }}
//     >
//       <span style={{ 
//         color: "#1e293b", 
//         fontSize: "14px",
//         display: "flex",
//         alignItems: "center",
//         gap: "6px"
//       }}>
//         <span style={{ fontSize: "18px" }}>🖨️</span>
//         Jenis Printer:
//       </span>
      
//       <label style={{ 
//         display: "flex", 
//         alignItems: "center", 
//         gap: "8px",
//         cursor: "pointer",
//         padding: "4px 8px",
//         borderRadius: "20px",
//         backgroundColor: printerType === "chatridge" ? "#e6f7ff" : "transparent",
//         transition: "all 0.2s"
//       }}>
//         <input
//           type="radio"
//           name="printerType"
//           value="chatridge"
//           checked={printerType === "chatridge"}
//           onChange={(e) => setPrinterType(e.target.value)}
//           style={{ accentColor: "#059669" }}
//         />
//         <span style={{ 
//           color: printerType === "chatridge" ? "#059669" : "#4b5563",
//           fontWeight: printerType === "chatridge" ? "600" : "400"
//         }}>
//           Chatridge
//         </span>
//       </label>
      
//       <label style={{ 
//         display: "flex", 
//         alignItems: "center", 
//         gap: "8px",
//         cursor: "pointer",
//         padding: "4px 8px",
//         borderRadius: "20px",
//         backgroundColor: printerType === "thermal" ? "#f3e8ff" : "transparent",
//         transition: "all 0.2s"
//       }}>
//         <input
//           type="radio"
//           name="printerType"
//           value="thermal"
//           checked={printerType === "thermal"}
//           onChange={(e) => setPrinterType(e.target.value)}
//           style={{ accentColor: "#7c3aed" }}
//         />
//         <span style={{ 
//           color: printerType === "thermal" ? "#7c3aed" : "#4b5563",
//           fontWeight: printerType === "thermal" ? "600" : "400"
//         }}>
//           Thermal
//         </span>
//       </label>
//     </div>
//   )
// }

// export default PrinterSelector

import React, { useState, useRef, useEffect } from 'react';
import usePrinterStore from "../store/usePrinterStore";

function PrinterSelector() {
  const { printerType, setPrinterType } = usePrinterStore();
  const [position, setPosition] = useState(() => {
    // Ambil posisi tersimpan dari localStorage atau gunakan default
    const saved = localStorage.getItem('printerSelectorPosition');
    return saved ? JSON.parse(saved) : { x: 20, y: 20 };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const selectorRef = useRef(null);

  useEffect(() => {
    // Simpan posisi ke localStorage setiap kali berubah
    localStorage.setItem('printerSelectorPosition', JSON.stringify(position));
  }, [position]);

  const handleMouseDown = (e) => {
    // Hanya mulai drag jika klik pada header atau area kosong (bukan radio button)
    if (e.target.closest('input[type="radio"]')) return;
    
    setIsDragging(true);
    const rect = selectorRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;

    // Batasi agar tidak keluar dari viewport
    const maxX = window.innerWidth - selectorRef.current.offsetWidth;
    const maxY = window.innerHeight - selectorRef.current.offsetHeight;

    setPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={selectorRef}
      style={{
        position: "fixed",
        left: `${position.x}px`,
        top: `${position.y}px`,
        background: "white",
        padding: "12px 24px",
        borderRadius: "40px",
        boxShadow: isDragging 
          ? "0 20px 40px rgba(0,0,0,0.2), 0 0 0 2px #059669" 
          : "0 10px 30px rgba(0,0,0,0.15)",
        zIndex: 9999,
        border: "1px solid #e2e8f0",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        fontWeight: 500,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        transition: isDragging ? "none" : "box-shadow 0.2s",
        opacity: isDragging ? 0.9 : 1,
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Drag Handle/Indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginRight: "4px",
          color: "#94a3b8",
          fontSize: "12px",
        }}
      >
        <span style={{ fontSize: "14px" }}>⋮⋮</span>
      </div>

      <span style={{ 
        color: "#1e293b", 
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        gap: "6px"
      }}>
        <span style={{ fontSize: "18px" }}>🖨️</span>
        Jenis Printer:
      </span>
      
      <label style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "8px",
        cursor: "pointer",
        padding: "4px 8px",
        borderRadius: "20px",
        backgroundColor: printerType === "chatridge" ? "#e6f7ff" : "transparent",
        transition: "all 0.2s"
      }}>
        <input
          type="radio"
          name="printerType"
          value="chatridge"
          checked={printerType === "chatridge"}
          onChange={(e) => setPrinterType(e.target.value)}
          style={{ accentColor: "#059669", cursor: "pointer" }}
        />
        <span style={{ 
          color: printerType === "chatridge" ? "#059669" : "#4b5563",
          fontWeight: printerType === "chatridge" ? "600" : "400"
        }}>
          Chatridge
        </span>
      </label>
      
      <label style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "8px",
        cursor: "pointer",
        padding: "4px 8px",
        borderRadius: "20px",
        backgroundColor: printerType === "thermal" ? "#f3e8ff" : "transparent",
        transition: "all 0.2s"
      }}>
        <input
          type="radio"
          name="printerType"
          value="thermal"
          checked={printerType === "thermal"}
          onChange={(e) => setPrinterType(e.target.value)}
          style={{ accentColor: "#7c3aed", cursor: "pointer" }}
        />
        <span style={{ 
          color: printerType === "thermal" ? "#7c3aed" : "#4b5563",
          fontWeight: printerType === "thermal" ? "600" : "400"
        }}>
          Thermal
        </span>
      </label>

      {/* Tombol reset posisi (opsional) */}
      <button
        onClick={() => setPosition({ x: 20, y: 20 })}
        style={{
          background: "none",
          border: "none",
          fontSize: "14px",
          cursor: "pointer",
          padding: "4px 8px",
          borderRadius: "20px",
          color: "#94a3b8",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginLeft: "4px",
        }}
        title="Reset posisi"
        onMouseDown={(e) => e.stopPropagation()} // Mencegah drag saat klik tombol
      >
        <span>↺</span>
      </button>
    </div>
  );
}

export default PrinterSelector;