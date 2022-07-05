import { useRouter } from "next/router";
import { useState } from "react";

const BarangByNomor = () => {
  const [nomor, setNomor] = useState("");
  const router = useRouter();
  const getBarangByNomor = (e) => {
    e.preventDefault();
    router.push({
      pathname: "databarang",
      query: { nomor: nomor },
    });
  };
  return (
    <div className="container">
      <form onSubmit={getBarangByNomor}>
        <div className="row">
          <div className="col-8"></div>
          <div className="col d-flex flex-reverse">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Barang By Nomor"
              value={nomor}
              onChange={(e) => setNomor(e.target.value)}
            />

            <input
              type="submit"
              value="Cari"
              className="btn btn-success ms-2 fs-6"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BarangByNomor;
