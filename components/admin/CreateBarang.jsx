import { useState } from "react";
import axios from "axios";

const CreateBarang = () => {
  const [nomor, setNomor] = useState("");
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/Barang", {
          nomor,
          nama,
          jumlah,
        })
        .then((response) => {
          console.log(response);
        });
      alert("Penambahan Data sukses");
      clearInput();
    } catch (e) {
      throw Error(e.message);
    }
  }
  const clearInput = () => {
    setNomor("");
    setNama("");
    setJumlah("");
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 text-center">Input Barang</h1>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nomor"
                type="text"
                placeholder="Nomor"
                value={nomor}
                onChange={(e) => setNomor(e.target.value)}
              />
              <label htmlFor="nomor">Nomor</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nama"
                type="text"
                placeholder="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <label htmlFor="nama">Nama</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="jumlah"
                type="text"
                placeholder="jumlah"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
              />
              <label htmlFor="jumlah">Jumlah</label>
            </div>
          </div>
          <div className="w-75 d-flex flex-row-revverse">
            <button className="btn btn-primary" type="submit">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBarang;
