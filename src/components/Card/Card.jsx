import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

const Card = ({
  image,
  title,
  follows,
  likes,
  isSong = false,
}) => {
  const value = isSong ? likes : follows;
  const label = isSong ? "Likes" : "Follows";

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />

        <div className={styles.chipContainer}>
          <Chip
            label={`${value} ${label}`}
            size="small"
            sx={{
              backgroundColor: "#121212",
              color: "#fff",
              fontSize: "10px",
            }}
          />
        </div>
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Card;