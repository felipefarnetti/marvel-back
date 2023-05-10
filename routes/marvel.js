// Required packages
const express = require("express");
const router = express.Router();
const axios = require("axios");

///////////////////////////////////////////
/////////   COMICS PART ROUTES ////////////
///////////////////////////////////////////

router.get("/comics", async (req, res) => {
  try {
    // Query filters: title, limit and skip -
    const title = req.query.title;
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;

    // Request Comics from the API
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API}&limit=${limit}&skip=${skip}&title${title}`
    );

    const comics = response.data;
    res.status(200).json(comics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  try {
    // Request the Character Id
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterId}?apiKey=${process.env.MARVEL_API}`
    );
    const characterId = response.data;
    res.status(200).json(characterId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/comic/:comicId", async (req, res) => {
  try {
    // Request the Comic Id
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${req.params.comicId}?apiKey=${process.env.MARVEL_API}`
    );
    const comicId = response.data;
    res.status(200).json(comicId);
    // console.log(req.params);
  } catch (error) {
    res.status(400).json({ error: error.message });
    // console.log(comicId);
  }
});

///////////////////////////////////////////
/////////   COMICS PART ROUTES ////////////
///////////////////////////////////////////

router.get("/characters", async (req, res) => {
  try {
    // Query filters:  name, limit and skip -
    const name = req.query.name;
    const limit = req.query.limit || 100;
    const skip = req.query.skip || 0;

    // Request Characters from API
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API}&limit${limit}&skip${skip}&name${name}`
    );
    const characters = response.data;
    res.status(200).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/character/:characterId", async (req, res) => {
  try {
    // Request infos of a specific character
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${req.params.characterId}?apiKey=${process.env.MARVEL_API}`
    );
    const characterId = response.data;
    res.status(200).json(characterId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
