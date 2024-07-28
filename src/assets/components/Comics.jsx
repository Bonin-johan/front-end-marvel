app.get("/marvel/comics", async (req, res) => {
  try {
    // Effectuer une requête GET à une API externe
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=Z0Cr1Rh9Fny66fwT"
    );
    // Envoyer la réponse de l'API externe au client
    res.json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default Comics;
