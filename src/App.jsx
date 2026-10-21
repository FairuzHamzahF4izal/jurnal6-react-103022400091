import KartuMenu from "./components/KartuMenu";
import Panel from "./components/Panel";
import "./App.css";

function App() {
  return (
    <Panel judul="Menu Hari Ini">
      <KartuMenu nama="Nasi Ayam Geprek" harga={19100} />
      <KartuMenu nama="Es Teh Lemon" harga={5000} kategori="Minuman" />
      <KartuMenu nama="Mie Goreng Telur" harga={15000} kategori="Makanan" />
    </Panel>
  );
}

export default App;