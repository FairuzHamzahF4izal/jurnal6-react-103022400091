
function App() {
  const namaPanggilan = "Fairuz Hamzah Faizal";
  const jam = 9;

  return (
    <>
      <h1
        className="judul-kantin"
        style={{
          color: "darkblue",
          textAlign: "left",
        }}
      >
        Kantin {namaPanggilan}
      </h1>

      <p>Saldo awal kartu kantin: Rp {91 * 1000}</p>

      <p>{jam < 12 ? "Selamat pagi" : "Selamat siang"}</p>

      <button disabled>Bayar</button>
    </>
  );
}

export default App;