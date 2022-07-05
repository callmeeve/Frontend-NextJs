import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const DataBarang = ({ data }) => {
  const [message, setMessage] = useState(false);
  const router = useRouter();


  async function hapusBarang(nomor) {
    // setDeleting(true)
    try {
      const response = await axios.delete(
        `http://localhost:5000/Barang/${nomor}`
      );

      if (response.data.message) {
        setMessage(response.data.message);
      }
      alert(`Barang dengan Nomor ${nomor} telah terhapus`);
    } catch (error) {
      console.log({ message: error.message });
    }

    router.push("/databarang");
  }
  return (
    <div className="container">
      <h3>Data Barang</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Nomor</th>
            <th>Nama</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {data.map((brg, idx) => (
            <tr key={idx}>
              <td>{brg.nomor}</td>
              <td>{brg.nama}</td>
              <td>{brg.jumlah}</td>
              <td>
                <div className="d-flex justify-content-between">
                  <Link href={`/updatebarang?nomor=${brg.nomor}&nama=${brg.nama}&jumlah=${brg.jumlah}`}>
                    <a>Edit</a>
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    value={brg.nomor}
                    onClick={(e) => hapusBarang(e.target.value)}
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataBarang;
