import { useEffect, useState } from "react";
import "./App.css";

export default function LicenceCard({ name = "Micro Frontends", id = 1 }) {
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
    <div className="app">
      <h3>Licence Provider from {name}</h3>
      <div className="data">
        <p>Title: {data.title}</p>
        <p>Body: {data.body}</p>
        <p>Id: {data.id}</p>
      </div>
    </div>
  );
}
