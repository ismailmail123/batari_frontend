// src/store/usePrinterStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const usePrinterStore = create(
    persist(
        (set) => ({
            printerType: 'chatridge', // default: chatridge
            setPrinterType: (type) => set({ printerType: type }),
        }), {
            name: 'printer-storage', // key di localStorage
        }
    )
)

export default usePrinterStore