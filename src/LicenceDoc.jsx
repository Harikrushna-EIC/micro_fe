import { useState, useEffect } from "react";
import LicenceFees from "./LicenceFees";

export default function LicenceDoc({ id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  return (
    <div style={{ border: "1px solid black", padding: 12 }}>
      <h3>Licence Provider Main</h3>
      <div key={data.id}>
        <h4>{data.title}</h4>
        <p>{data.body}</p>
      </div>
      <LicenceFees test={"Fees"} />
    </div>
  );
}
