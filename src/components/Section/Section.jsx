import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = ({ title, endpoint }) => {
  const isSongsSection = title === "Songs";

  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const fetchAlbums = async () => {
  try {
    const res = await axios.get(endpoint);
    setAlbums(res.data);

    if (isSongsSection) {
      const genreRes = await axios.get(
        "https://qtify-backend.labs.crio.do/genres"
      );

      setGenres(genreRes.data.data);
    }
  } catch (err) {
    console.error(err);
  }
};

fetchAlbums();
  }, [endpoint]);

  const displayData =
  isSongsSection && selectedGenre !== "all"
    ? albums.filter(
        (item) => item.genre.key === selectedGenre
      )
    : albums;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
  <h2>{title}</h2>

  {!isSongsSection && (
    <button
      className={styles.toggleBtn}
      onClick={() => setShowAll((prev) => !prev)}
    >
      {showAll ? "Collapse" : "Show All"}
    </button>
  )}
</div>

{isSongsSection && (
  <Tabs
    value={selectedGenre}
    onChange={(event, newValue) => setSelectedGenre(newValue)}
    textColor="inherit"
    indicatorColor="secondary"
  >
    <Tab label="All" value="all" />

    {genres.map((genre) => (
      <Tab
        key={genre.key}
        label={genre.label}
        value={genre.key}
      />
    ))}
  </Tabs>
)}

      {!isSongsSection && showAll ? (
  <div className={styles.grid}>
    {albums.map((item) => (
      <Card
        key={item.id}
        image={item.image}
        title={item.title}
        follows={item.follows}
      />
    ))}
  </div>
) : (
  <Carousel
    data={displayData}
    renderComponent={(item) => (
      <Card
        image={item.image}
        title={item.title}
        follows={item.follows}
        likes={item.likes}
        isSong={isSongsSection}
      />
    )}
  />
)}
    </section>
  );
};

export default Section;