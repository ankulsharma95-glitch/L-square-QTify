import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get(endpoint);
        setAlbums(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAlbums();
  }, [endpoint]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button
          className={styles.toggleBtn}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {albums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          ))}
        </div>
      ) : (
        <Carousel
          data={albums}
          renderComponent={(album) => (
            <Card
              image={album.image}
              title={album.title}
              follows={album.follows}
            />
          )}
        />
      )}
    </section>
  );
};

export default Section;