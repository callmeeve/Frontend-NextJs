import { useState } from "react";

const Form = () => {
  const [gambar, setGambar] = useState("");
  const [title, setTitle] = useState("");

  const simpan = () => {
    setGambar("");
    setTitle("");
  };
  return (
    <div className="container border p-4">
      <h2>Input Data Card</h2>

      <label htmlFor="gambar">
        {gambar}
        <input
          type="text"
          className="form-control"
          placeholder="gambar"
          id="gambar"
          value={gambar}
          onChange={(e) => setGambar(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="title">
        {title}
        <input
          type="text"
          className="form-control"
          placeholder="title"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <div className="d-flex flex-row mt-4">
        <button className="btn btn-primary" onClick={simpan}>
          Simpan
        </button>
      </div>
    </div>
  );
};

export default Form;
