import React from "react";
import { Helmet } from "react-helmet-async";

function Seo({ title, description, image, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Enja, Enja AB, Digital transformation, Digitalisering, Förändringsledning, Projektledning, Ledarskap, Dimios, Digital mognad, innovation, PIOS, Organisationsutveckling, Affärsutveckling, Strategi, Förändring, Förändringsarbete, Versamhetsutveckling, Utredningar, Utredning, Utredningsarbeten, Organisationsförändring, utbildning, projektledare, förändringsledare, planeringsledare, konsult" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default Seo;