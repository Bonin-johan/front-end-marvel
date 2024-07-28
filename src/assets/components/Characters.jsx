import React, { useState, useEffect } from "react";
import axios from "axios";

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Requête GET pour récupérer les personnages Marvel
        const response = await axios.get(
          "http://localhost:3000/marvel/characters"
          // site--marvel-back--2rbfqwrxhvg9.code.run/marvel/characters
        );
        const characters = response.data.results;
        setData(characters);
      } catch (error) {
        // Gestion des erreurs lors de la requête
        console.error("Error fetching data:", error);
      }
      setLoading(false); // Mise à jour de l'état de chargement
    };

    fetchData();
    console.log(data);
  }, []); // Dépendance : useEffect se déclenche à chaque changement de 'search' (si utilisé)

  return loading ? (
    <main className="load">
      <p>loading...</p>
    </main>
  ) : (
    <main>
      <div className="perso">
        {data.map((perso, index) => (
          <div className="perso-view" key={index}>
            {/* Vérification si l'image du personnage est disponible */}
            <img
              src={`${perso.thumbnail.path}.${perso.thumbnail.extension}`}
              alt={`Thumbnail ${index}`}
            />
            <div className="name">
              <div>{perso.name}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Characters;
