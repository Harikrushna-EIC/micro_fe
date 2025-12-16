import LicenceDoc from "./LicenceDoc";

export default function LicenceCard({ id }) {
  return (
    <div style={{ border: "1px solid black", padding: 12 }}>
      <h3>Licence Provider dummy</h3>
      <LicenceDoc id={id} />
    </div>
  );
}
