import React, { useState, useEffect } from "react";

function ListDigimon() {
  const [digimons, setDigimons] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://digimon-api.vercel.app/api/digimon");
    const result = await response.json();

    setDigimons(result);
  }, []);

  console.log(digimons);

  return (
    <>
      <h2>Digimon</h2>
      {digimons.length === 0 ? (
        <span>Loading...</span>
      ) : (
        <>
          {digimons.map((item, idx) => (
            <div key={idx}>
              <img src={item.img} alt="" width={100} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default ListDigimon;
