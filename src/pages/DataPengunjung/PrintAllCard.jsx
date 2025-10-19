import React, { useState } from "react";

const PrintAllCards = ({ pengunjungData }) => {
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  // Fungsi untuk print semua kartu berdasarkan range
  const handlePrintAll = () => {
    const selectedData = pengunjungData.slice(startIndex, endIndex + 1);
    
    const printWindow = window.open('', '_blank', 'width=356mm,height=216mm');
    
    // Bagi data menjadi chunks of 6 untuk multiple pages
    const chunkSize = 6;
    const chunks = [];
    for (let i = 0; i < selectedData.length; i += chunkSize) {
      chunks.push(selectedData.slice(i, i + chunkSize));
    }

    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Print Semua Kartu Pengunjung</title>
        <style>
          @media print {
            @page {
              size: Legal landscape;
              margin: 8mm;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .page-break {
              page-break-after: always;
            }
          }
          
          body {
            margin: 0;
            padding: 8mm;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: white;
          }
          
          .cards-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 5mm;
            width: 100%;
            height: 100%;
          }
          
          .identitas-container {
            width: 110mm;
            height: 95mm;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            position: relative;
            overflow: hidden;
            display: flex;
            page-break-inside: avoid;
          }
          
          .gradient-side {
            width: 40%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
          }
          
          .info-side {
            width: 60%;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          
          .logo {
            text-align: center;
            margin-bottom: 15px;
          }
          
          .logo h1 {
            font-size: 14px;
            margin: 0;
            font-weight: bold;
          }
          
          .logo p {
            font-size: 9px;
            margin: 3px 0 0 0;
            opacity: 0.9;
          }
          
          .barcode-section {
            text-align: center;
            width: 100%;
          }
          
          .barcode {
            width: 100%;
            max-width: 120px;
            height: auto;
            filter: drop-shadow(0 3px 6px rgba(0,0,0,0.2));
          }
          
          .kode-display {
            background: rgba(255,255,255,0.2);
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: bold;
            font-size: 12px;
            text-align: center;
            margin-top: 8px;
            backdrop-filter: blur(10px);
          }
          
          .data-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 6px;
            margin-bottom: 15px;
          }
          
          .data-row {
            display: flex;
            align-items: flex-start;
            padding: 6px 0;
            border-bottom: 1px solid #f0f0f0;
          }
          
          .data-label {
            font-weight: bold;
            color: #667eea;
            font-size: 10px;
            width: 70px;
            flex-shrink: 0;
          }
          
          .data-value {
            color: #333;
            font-size: 11px;
            flex: 1;
          }
          
          .header-main {
            text-align: center;
            margin-bottom: 20px;
          }
          
          .header-main h2 {
            color: #667eea;
            margin: 0;
            font-size: 16px;
            font-weight: bold;
          }
          
          .header-main p {
            color: #666;
            margin: 4px 0 0 0;
            font-size: 10px;
          }
          
          .photo-placeholder {
            width: 50px;
            height: 70px;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 9px;
            text-align: center;
            margin-left: auto;
          }
          
          .footer {
            text-align: center;
            font-size: 8px;
            color: #666;
            border-top: 1px solid #eee;
            padding-top: 8px;
          }
          
          .decoration {
            position: absolute;
            bottom: -15px;
            right: -15px;
            width: 80px;
            height: 80px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
          }
          
          .decoration-2 {
            position: absolute;
            top: -20px;
            left: -20px;
            width: 60px;
            height: 60px;
            background: rgba(255,255,255,0.05);
            border-radius: 50%;
          }
          
          .status-badge {
            background: #48bb78;
            color: white;
            padding: 3px 10px;
            border-radius: 12px;
            font-size: 9px;
            font-weight: bold;
            display: inline-block;
            margin-top: 4px;
          }
        </style>
      </head>
      <body>
        ${chunks.map((chunk, pageIndex) => `
          <div class="cards-container">
            ${chunk.map(pengunjung => `
              <div class="identitas-container">
                <!-- Side kiri dengan gradient -->
                <div class="gradient-side">
                  <div class="decoration"></div>
                  <div class="decoration-2"></div>
                  
                  <div class="logo">
                    <h1>WBP SYSTEM</h1>
                    <p>Visitor Identity</p>
                  </div>
                  
                  <div class="barcode-section">
                    <img src="${pengunjung.barcode}" alt="Barcode" class="barcode" />
                    <div class="kode-display">${pengunjung.kode}</div>
                  </div>
                  
                  <div style="text-align: center;">
                    <div style="font-size: 9px; opacity: 0.9;">Valid Until</div>
                    <div style="font-size: 11px; font-weight: bold;">${new Date(Date.now() + 360 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID')}</div>
                  </div>
                </div>
                
                <!-- Side kanan dengan informasi -->
                <div class="info-side">
                  <div class="header-main">
                    <h2>IDENTITAS PENGGUNA</h2>
                    <p>WBP Management System - Official Visitor Pass</p>
                  </div>
                  
                  <div class="data-grid">
                    <div class="data-row">
                      <div class="data-label">NAMA</div>
                      <div class="data-value">${pengunjung.nama}</div>
                    </div>
                    
                    <div class="data-row">
                      <div class="data-label">ALAMAT</div>
                      <div class="data-value">${pengunjung.alamat}</div>
                    </div>
                    
                    <div class="data-row">
                      <div class="data-label">NIK</div>
                      <div class="data-value">${pengunjung.nik}</div>
                    </div>
                    
                    <div class="data-row">
                      <div class="data-label">NO. HP</div>
                      <div class="data-value">${pengunjung.hp}</div>
                    </div>
                    
                    <div class="data-row">
                      <div class="data-label">JENIS KELAMIN</div>
                      <div class="data-value">
                        ${pengunjung.jenis_kelamin === 'laki-laki' ? 'Laki-laki' : 'Perempuan'}
                        <div class="status-badge">ACTIVE</div>
                      </div>
                    </div>
                    <div class="data-row">
                      <div class="data-label">NAMA WBP</div>
                      <div class="data-value">-</div>
                    </div>
                  </div>
                  
                  <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-top: auto;">
                    <div class="footer">
                      <div>Dicetak secara elektronik • ${new Date().toLocaleDateString('id-ID', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}</div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          ${pageIndex < chunks.length - 1 ? '<div class="page-break"></div>' : ''}
        `).join('')}
        
        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
              setTimeout(function() {
                window.close();
              }, 500);
            }, 500);
          }
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
    setShowPrintModal(false);
  };

  const maxEndIndex = pengunjungData.length - 1;
  const totalSelected = endIndex - startIndex + 1;
  const totalPages = Math.ceil(totalSelected / 6);

  return (
    <>
      {/* Tombol Print All */}
      <button
        onClick={() => {
          setStartIndex(0);
          setEndIndex(Math.min(5, pengunjungData.length - 1));
          setShowPrintModal(true);
        }}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
      >
        <span>🖨️</span>
        <span>Print All Cards</span>
      </button>

      {/* Modal untuk memilih range */}
      {showPrintModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Print Kartu Pengunjung
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mulai dari nomor urut:
                </label>
                <select
                  value={startIndex}
                  onChange={(e) => {
                    const newStart = parseInt(e.target.value);
                    setStartIndex(newStart);
                    if (newStart > endIndex) {
                      setEndIndex(Math.min(newStart + 5, pengunjungData.length - 1));
                    }
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {pengunjungData.map((pengunjung, index) => (
                    <option key={index} value={index}>
                      {index + 1}. {pengunjung.nama}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sampai nomor urut:
                </label>
                <select
                  value={endIndex}
                  onChange={(e) => setEndIndex(parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {pengunjungData.slice(startIndex).map((pengunjung, index) => {
                    const actualIndex = startIndex + index;
                    return (
                      <option key={actualIndex} value={actualIndex}>
                        {actualIndex + 1}. {pengunjung.nama}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Ringkasan Print:</strong>
                </p>
                <p className="text-sm text-blue-700">
                  Akan mencetak <strong>{totalSelected} kartu</strong>
                </p>
                <p className="text-sm text-blue-700">
                  Dari: <strong>{startIndex + 1}. {pengunjungData[startIndex]?.nama}</strong>
                </p>
                <p className="text-sm text-blue-700">
                  Sampai: <strong>{endIndex + 1}. {pengunjungData[endIndex]?.nama}</strong>
                </p>
                <p className="text-sm text-blue-700">
                  Total halaman: <strong>{totalPages} halaman Legal landscape</strong>
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  (6 kartu per halaman - layout rapat)
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowPrintModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handlePrintAll}
                disabled={totalSelected === 0}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Print {totalSelected} Kartu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrintAllCards;