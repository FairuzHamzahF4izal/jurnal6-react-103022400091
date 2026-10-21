function LabelHarga({ nilai }) {
  return <span>Rp {nilai.toLocaleString("id-ID")}</span>;
}

export default LabelHarga;