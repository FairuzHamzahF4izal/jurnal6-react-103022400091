
import { useState } from "react";
import LabelHarga from "./LabelHarga";

function KartuMenu({ nama, harga, kategori = "Makanan", onHapus }) {
  const [jumlah, setJumlah] = useState(0);
  const [catatan, setCatatan] = useState("");

  function tambah() {
    setJumlah(jumlah + 1);
  }

  return (
    <div className="kartu-menu">
      <h3>{nama}</h3>
      <p>Kategori: {kategori}</p>
      <p>
        Harga: <LabelHarga nilai={harga} />
      </p>

      <div className="kontrol-jumlah">
        <button
          onClick={() => setJumlah(jumlah - 1)}
          disabled={jumlah === 0}
        >
          -
        </button>
        <span>{jumlah}</span>
        <button onClick={tambah}>+</button>
      </div>

      <p>
        {jumlah === 0
          ? "Belum dipesan"
          : `Subtotal: Rp ${(harga * jumlah).toLocaleString("id-ID")}`}
      </p>

      {jumlah >= 5 && <span className="badge-pesanan">Pesanan banyak</span>}

      <div className="input-catatan">
        <label htmlFor={`catatan-${nama}`}>Catatan pesanan</label>
        <input
          id={`catatan-${nama}`}
          type="text"
          value={catatan}
          onChange={(e) => setCatatan(e.target.value)}
          placeholder="Masukkan catatan pesanan"
        />
      </div>

      {catatan !== "" && <p>Catatan: {catatan}</p>}

      <button onClick={onHapus}>Hapus</button>
    </div>
  );
}

export default KartuMenu;