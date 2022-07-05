const DataMahasiswa = ({ data }) => {
  return (
    <div className="container">
      <h3>Data Mahasiswa</h3>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Angkatan</th>
            <th>Prodi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mhs, idx) => (
            <tr key={idx}>
              <td>{mhs.nim}</td>
              <td>{mhs.nama}</td>
              <td>{mhs.angkatan}</td>
              <td>{mhs.prodi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataMahasiswa;
