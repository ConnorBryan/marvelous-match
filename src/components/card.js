import React from "react";
import classnames from "classnames";

import "./card.css";

const Card = ({ value, expression, done, visible, onClick }) => {
  const className = classnames({
    Card: true,
    "Card-done": done,
    "Card-visible": visible
  });

  return (
    <section className={className} onClick={onClick}>
      {(visible || done) && (expression || value)}
    </section>
  );
};

export default Card;
