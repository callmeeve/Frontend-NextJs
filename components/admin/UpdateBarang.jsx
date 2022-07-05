import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";

const UpdateBarang = () => {
  //deklarasi state
  const [_nomor, setNomor] = useState("");
  const [_nama, setNama] = useState("");
  const [_jumlah, setJumlah] = useState("");
  const [_catatan, setCatatan] = useState("");

  //mengambil data yang dikirim melalui router
  const router = useRouter();
  const { nomor, nama, jumlah, catatan} = router.query;

  useEffect(() => {
    if (typeof nomor == "string") {
      setNomor(nomor);
    }
    if (typeof nama == "string") {
      setNama(nama);
    }
    if (typeof jumlah == "string") {
      setJumlah(jumlah);
    }
    if (typeof jumlah == "string") {
      setCatatan(catatan);
    }
  }, [nomor, nama, jumlah, catatan]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      axios
        .put(`http://localhost:5000/barang/${_nomor}`, {
          nomor: _nomor,
          nama: _nama,
          jumlah: _jumlah,
        })
        .then((response) => {
          console.log(response);
        });

      alert("Update Data Sukses");
      Router.push("/dataBarang");
    } catch (e) {
      console.log({ message: e.message });
    }
  };

  return (
    <div>
      <div className="container mt-4">
        <form className="w-50 mx-auto" onSubmit={submitHandler}>
          <h1 className="w-75 font-blod text-center mb-3">
            Edit Data Barang
          </h1>
          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nomor"
                type="text"
                placeholder="Nomor"
                value={_nomor}
                onChange={(e) => setNomor(e.target.value)}
              />
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="nama"
                type="text"
                placeholder="nama"
                value={_nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
          </div>

          <div className="w-75">
            <div className="form-floating">
              <input
                className="form-control mb-2"
                id="jumlah"
                type="text"
                placeholder="jumlah"
                value={_jumlah}
                onChange={(e) => setJumlah(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex flex-row-reverse w-75">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBarang;
