import DataBarang from "../components/admin/DataBarang";
import LayoutAdmin from "../components/admin/LayoutAdmin";
import BarangByNomor from "../components/admin/BarangByNomor";

const dataBarang = ({ data }) => {
  {
    Array.isArray(data) ? (data = data) : (data = [data]);
  }
  return (
    <LayoutAdmin>
      <BarangByNomor />
      <DataBarang data={data} />
    </LayoutAdmin>
  );
};

export async function getServerSideProps({ query }) {
  const nomor = query.nomor;
  console.log(nomor);
  let url = "http://localhost:5000/Barang";
  if (typeof nomor === "string") {
    url = `http://localhost:5000/Barang/${nomor}`;
  } else if (typeof catatan === "string") {
    url = `http://localhost:5000/Barang/Catatan/${nomor}`
  }
  //  fetch data
  const res = await fetch(url);
  const data = await res.json();

  return { props: { data } };
}

export default dataBarang;
