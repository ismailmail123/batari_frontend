import React, { useState } from 'react';
import axios from 'axios';

const KunjunganForm = () => {
  const [formData, setFormData] = useState({
    namaNarapidana: '',
    nomorKamar: '',
    namaPengunjung: '',
    namaPengikut: '',
    barangTitipan: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('YOUR_APPSSCRIPT_KUNJUNGAN_URL', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="namaNarapidana" placeholder="Nama Narapidana" onChange={handleChange} />
      <input type="text" name="nomorKamar" placeholder="Nomor Kamar" onChange={handleChange} />
      <input type="text" name="namaPengunjung" placeholder="Nama Pengunjung" onChange={handleChange} />
      <input type="text" name="namaPengikut" placeholder="Nama Pengikut" onChange={handleChange} />
      <input type="text" name="barangTitipan" placeholder="Barang Titipan" onChange={handleChange} />
      <button type="submit">Ajukan Kunjungan</button>
    </form>
  );
};

export default KunjunganForm;