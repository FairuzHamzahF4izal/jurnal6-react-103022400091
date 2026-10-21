
import { useState } from "react";
import KartuMenu from "./components/KartuMenu";
import Panel from "./components/Panel";
import "./App.css";

function App() {
  const [daftarMenu, setDaftarMenu] = useState([
    { id: 1, nama: "Nasi Goreng", harga: 19100, kategori: "Makanan" },
    { id: 2, nama: "Es Teh Manis", harga: 5000, kategori: "Minuman" },
    { id: 3, nama: "Mie Goreng", harga: 15000, kategori: "Makanan" },
    { id: 4, nama: "Jus Alpukat", harga: 12000, kategori: "Minuman" },
    { id: 5, nama: "Ayam Geprek", harga: 18000, kategori: "Makanan" },
  ]);

  function hapusMenu(id) {
    setDaftarMenu((menuSebelumnya) =>
      menuSebelumnya.filter((menu) => menu.id !== id)
    );
  }

  function balikUrutan() {
    setDaftarMenu((menuSebelumnya) => [...menuSebelumnya].reverse());
  }

  return (
    <Panel judul="Menu Hari Ini">
      <button onClick={balikUrutan}>Balik Urutan</button>

      {daftarMenu.length === 0 ? (
        <p>Semua menu habis terjual</p>
      ) : (
        <div className="daftar-menu">
          {daftarMenu.map((menu) => (
            <KartuMenu
              key={menu.id}
              nama={menu.nama}
              harga={menu.harga}
              kategori={menu.kategori}
              onHapus={() => hapusMenu(menu.id)}
            />
          ))}
        </div>
      )}
    </Panel>
  );
}

export default App;
