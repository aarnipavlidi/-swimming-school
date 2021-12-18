import React from 'react';
import '../css/LoadingSpinner.css';

const Home = ({ loadingContent }) => {

  if (loadingContent) {
    return (
      <div className="loadingBackground">
        <div className="spinner-border loadingSpinner"></div>
      </div>
    )
  };

  return (
    <div style={{ flex: 1, marginTop: 20, marginBottom: 20 }} className="container d-flex">
      <div className="align-self-center">
        <h2 style={{ textAlign: 'left' }} className="title-font">Yksityinen uimakoulu Oulussa</h2>
        <div>
          <p className="content-font">Järjestän yksityistä uimaopetusta kaiken ikäisille ja tasoisille lapsille sekä nuorille! Opetus tapahtuu pääasiassa
          Oulun uimahallissa, mutta opetuspaikan järjestäminen muualla on neuvoteltavissa.</p>
          <p className="content-font">Työskentelen tällä hetkellä Oulun Lohien juniorivalmennusvastaavana, ja olen toiminut jo useita vuosia valmentajana
          Helsingin Simmiksessä, jossa olen toiminut Rollo-, IKM-, ja NSM-ikäisten ryhmissä vastuuvalmentajana.</p>
          <p className="content-font">Kiinnostuitko? Ota  rohkeasti yhteyttä, niin sovitaan yhdessä aika yksityiseen uimaopetukseen!</p>
        </div>
        <div className="ratio ratio-21x9 justify-content-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1685.5863428945438!2d25.495589216336505!3d65.00924905030993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4681cd53839d48e5%3A0x271114ad31124a78!2sOulun%20Uimahalli!5e0!3m2!1sen!2sfi!4v1620219229195!5m2!1sen!2sfi"
            width="400"
            height="300"
            className="embed-responsive-item"
            allowfullscreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
