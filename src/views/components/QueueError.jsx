import React from "react";
import { Link } from "react-router-dom";

const QueueError = ({ description, btnDesc, link }) => {
  return (
    <main id="queuePage">
      <section className="user-queue-notLogged">
        <h1>{description}</h1>
        <Link to={link} className="btn btn-success">
          {btnDesc}
        </Link>
      </section>
    </main>
  );
};

export default QueueError;
