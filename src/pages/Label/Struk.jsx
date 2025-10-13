import React, { useEffect, useState } from "react";
import axios from "axios";
import { FileText, FileSpreadsheet, FileImage, File } from "lucide-react"; 
import { Loader2 } from "lucide-react";

// mapping ekstensi ke ikon & warna
const fileIcons = {
  pdf: { icon: FileText, color: "text-red-500", bg: "bg-red-50 group-hover:bg-red-100" },
  xls: { icon: FileSpreadsheet, color: "text-green-500", bg: "bg-green-50 group-hover:bg-green-100" },
  xlsx: { icon: FileSpreadsheet, color: "text-green-500", bg: "bg-green-50 group-hover:bg-green-100" },
  png: { icon: FileImage, color: "text-blue-500", bg: "bg-blue-50 group-hover:bg-blue-100" },
  jpg: { icon: FileImage, color: "text-blue-500", bg: "bg-blue-50 group-hover:bg-blue-100" },
  jpeg: { icon: FileImage, color: "text-blue-500", bg: "bg-blue-50 group-hover:bg-blue-100" },
};

const StrukList = () => {
  const [struks, setStruks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStruks = async () => {
      try {
        const res = await axios.get("https://batarirtnbantaeng.cloud /v1/pengunjung/struk");
        setStruks(res.data.data);
      } catch (err) {
        console.error("Gagal mengambil daftar struk:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStruks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (struks.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500 text-lg">
        Belum ada struk tersedia.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        📂 Daftar File Struk
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {struks.map((struk, index) => {
          const ext = struk.name.split(".").pop().toLowerCase();
          const { icon: Icon = File, color = "text-gray-500", bg = "bg-gray-100 group-hover:bg-gray-200" } =
            fileIcons[ext] || {};

          return (
            <a
              key={index}
              href={struk.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 bg-white p-4 flex flex-col items-center"
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-lg ${bg}`}>
                <Icon className={`w-10 h-10 ${color}`} />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700 group-hover:text-blue-600 text-center truncate w-40">
                {struk.name}
              </p>
              <p className="text-xs text-gray-400 mt-1">{ext.toUpperCase()} file</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default StrukList;
