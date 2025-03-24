import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDataStore from "../../store/useDataStore";

const WargabinaanDetail = () => {
  const { id } = useParams();
  const { fetchWbpById, wbpById } = useDataStore();

  useEffect(() => {
    fetchWbpById(id);
  }, [id, fetchWbpById]);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-80 transition-transform duration-300 hover:scale-105">
        {/* Bagian Foto */}
        <div className="h-48 bg-gray-200 relative">
		{wbpById.photo ? (
          <img
            src={wbpById.photo}
            alt={wbpById.nama}
            className="w-full h-full w-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Tidak Ada Foto
          </div>
        )}
        </div>

        {/* Bagian Informasi */}
        <div className="p-6 text-start">
		<div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{wbpById.nama}</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>
            <span className="font-medium">Alamat:</span> {wbpById.alamat}
          </p>
          <p>
            <span className="font-medium">Tempat Lahir:</span> {wbpById.tempat_lahir}
          </p>
          <p>
            <span className="font-medium">Tanggal Lahir:</span> {wbpById.tanggal_lahir}
          </p>
          <p>
            <span className="font-medium">Jenis Kelamin:</span> {wbpById.jenis_kelamin}
          </p>
          <p>
            <span className="font-medium">Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                wbpById.status === "aktif"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {wbpById.status}
            </span>
          </p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default WargabinaanDetail;