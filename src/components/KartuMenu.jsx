import LabelHarga from "./LabelHarga";

function KartuMenu({ nama, harga, kategori = "Makanan" }) {
  return (
    <div className="kartu-menu">
      <h3>{nama}</h3>
      <p>Kategori: {kategori}</p>
      <p>
        Harga: <LabelHarga nilai={harga} />
      </p>
    </div>
  );
}

export default KartuMenu;