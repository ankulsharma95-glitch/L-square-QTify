import React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

const Card = ({ image, title, follows }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />

        <div className={styles.chipContainer}>
          <Chip
            label={`${follows} Follows`}
            size="small"
            sx={{
              backgroundColor: "#121212",
              color: "#FFFFFF",
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