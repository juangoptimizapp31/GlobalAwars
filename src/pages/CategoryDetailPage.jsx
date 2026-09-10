import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import useScripts from '../hooks/useScripts';
import { categoriesData } from '../data/categoriesData';
import {
  submitVote,
  getVoteStatus
} from '../services/votingService';

function CategoryDetailPage() {
  const [voteStates, setVoteStates] = useState({});

  // Load page-specific styles
  useStylesheet('/assets/css/lib/bootstrap.min.css');
  useStylesheet('/assets/css/lib/all.min.css');
  useStylesheet('/assets/css/lib/ionicons.css');
  useStylesheet('/assets/css/lib/animate.css');
  useStylesheet('/assets/css/lib/jquery.fancybox.css');
  useStylesheet('/assets/css/lib/lity.css');
  useStylesheet('/assets/css/lib/swiper8.min.css');
  useStylesheet('/assets/css/style.css');
  useStylesheet('/assets/css/inner_pages_style.css');

  // Load interactive scripts
  useScripts([
    '/assets/js/lib/jquery-3.0.0.min.js',
    '/assets/js/lib/jquery-migrate-3.0.0.min.js',
    '/assets/js/lib/bootstrap.bundle.min.js',
    '/assets/js/lib/wow.min.js',
    '/assets/js/lib/jquery.fancybox.js',
    '/assets/js/lib/lity.js',
    '/assets/js/lib/swiper8-bundle.min.js',
    '/assets/js/lib/jquery.waypoints.min.js',
    '/assets/js/lib/jquery.counterup.js',
    '/assets/js/inner_pages_scripts.js'
  ]);

  const { id } = useParams();
  const category = categoriesData.find(cat => cat.id === id);

  if (!category) {
    return (
      <div className="container text-center py-5">
        <h2 className="text-white">Categoría no encontrada</h2>
        <Link to="/categorias" className="btn btn-primary mt-3">Volver a Categorías</Link>
      </div>
    );
  }

  // Check if there are active contestants (not disabled or commented out in the original html)
  const hasActiveContestants = category.contestants && category.contestants.length > 0 && !category.contestants.some(c => c.disabled);

  const handleVote = async (contestantName) => {

    const currentState = voteStates[contestantName];

    // Evitar múltiples clics
    if (currentState === 'registering') {
      return;
    }

    // Estado: REGISTRANDO
    setVoteStates((prev) => ({
      ...prev,
      [contestantName]: 'registering'
    }));

    try {

      const response = await submitVote({
        categoryId: category.id,
        categoryName: category.title,
        contestantName
      });

      // VOTO CONFIRMADO
      if (response.success && response.status === 'confirmed') {

        setVoteStates((prev) => ({
          ...prev,
          [contestantName]: 'confirmed'
        }));

        return;
      }

      // YA HABÍA VOTADO
      if (response.status === 'already_voted') {

        setVoteStates((prev) => ({
          ...prev,
          [contestantName]: 'already_voted'
        }));

        return;
      }

      // ERROR
      setVoteStates((prev) => ({
        ...prev,
        [contestantName]: 'error'
      }));

    } catch (error) {

      console.error('Error en handleVote:', error);

      setVoteStates((prev) => ({
        ...prev,
        [contestantName]: 'error'
      }));
    }
  };

  return (
    <div className="page-pricing inner-pages">
      {/* start navbar */}
      <div className="navbar-container style13">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light style13">
            <div className="container-fluid p-0">
              <div className="logo-search-side">
                <Link to="/home" className="logo-brand">
                  <img src="/assets/img/logo_black.png" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0 mt-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/home">Inicio.</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Contador.</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contactanos.</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Registro.</Link>
                  </li>
                </ul>
                <div className="r-side text-lg-end">
                  <div className="d-inline-flex align-items-center">
                    <div className="call-cont">
                      <p className="fsz-14 color-999"> Contacto </p>
                      <a href="#" className="fsz-16 fw-bold color-red3"> 8493531403 </a>
                    </div>
                    <div className="logo-mark ms-30">
                      <img src="/assets/img/logo_black.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>



      {/* Contents */}
      <main>
        {/* Render pricing table only if contestants are active */}
        {hasActiveContestants && (
          <section className="gga-voting-section">
            <div className="container">

              <div className="gga-voting-grid">
                <div className="gga-vote-banner">

                  <div className="gga-vote-banner-particles"></div>

                  <div className="gga-vote-banner-card">

                    <span className="gga-vote-banner-kicker">
                      GLOBAL GUIDE AWARDS
                    </span>

                    <h2>
                      VOTA
                      <br />
                      POR TU
                      <br />
                      FAVORITO
                    </h2>

                    <div className="gga-vote-banner-divider"></div>

                    <p>
                      APOYA A NUESTROS
                      <br />
                      ARTESANOS
                    </p>

                  </div>

                  <div className="gga-vote-banner-category">

                    <h1>
                      {category.title}
                    </h1>

                    <p>
                      Vota por tu video favorito
                      <br />
                      & síguelo en la premiación en vivo desde bellas artes
                    </p>

                  </div>

                </div>

                {category.contestants.map((contestant, idx) => {

                  const state =
                    voteStates[contestant.name] || 'available';

                  return (
                    <article
                      className={`gga-voting-card gga-state-${state}`}
                      key={idx}
                    >

                      {/* =========================================
                          HEADER
                      ========================================= */}

                      <div className="gga-voting-card-header">

                        <span className="gga-voting-number">
                          {String(idx + 1).padStart(2, '0')}
                        </span>

                        <span className="gga-voting-label">
                          NOMINADO
                        </span>

                      </div>


                      {/* =========================================
                          VIDEO
                      ========================================= */}

                      <div className="gga-voting-video">

                        <iframe
                          src={contestant.videoUrl}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                          allowFullScreen
                          title={`Video de ${contestant.name}`}
                        />

                      </div>


                      {/* =========================================
                          CONTENIDO
                      ========================================= */}

                      <div className="gga-voting-content">

                        <div className="gga-voting-icon">
                          ✦
                        </div>


                        <h2>
                          {contestant.name}
                        </h2>


                        <div className="gga-voting-line"></div>


                        {/* =====================================
                            DISPONIBLE
                        ===================================== */}

                        {state === 'available' && (
                          <>
                            <div className="gga-vote-status available">

                              <span className="gga-status-icon">
                                ✓
                              </span>

                              <span>
                                Disponible
                              </span>

                            </div>

                            <p>
                              El participante está activo
                              y puedes votar.
                            </p>

                            <button
                              type="button"
                              className="gga-vote-button"
                              onClick={() =>
                                handleVote(contestant.name)
                              }
                            >

                              <span>
                                VOTAR POR ESTE PARTICIPANTE
                              </span>

                              <span className="gga-vote-arrow">
                                →
                              </span>

                            </button>
                          </>
                        )}


                        {/* =====================================
                            REGISTRANDO
                        ===================================== */}

                        {state === 'registering' && (
                          <>
                            <div className="gga-vote-status registering">

                              <span className="gga-status-spinner">
                                ◌
                              </span>

                              <span>
                                Registrando voto...
                              </span>

                            </div>

                            <p>
                              Se está procesando tu voto.
                              <br />
                              Por favor espera.
                            </p>

                            <button
                              type="button"
                              className="gga-vote-button registering-button"
                              disabled
                            >

                              <span>
                                REGISTRANDO...
                              </span>

                              <span className="gga-status-spinner">
                                ◌
                              </span>

                            </button>
                          </>
                        )}


                        {/* =====================================
                            CONFIRMADO
                        ===================================== */}

                        {state === 'confirmed' && (
                          <>
                            <div className="gga-vote-status confirmed">

                              <span className="gga-status-icon">
                                ✓
                              </span>

                              <span>
                                Voto confirmado
                              </span>

                            </div>

                            <p>
                              Tu voto fue registrado
                              correctamente.
                            </p>

                            <div className="gga-confirmed-message">
                              ✓ &nbsp; ¡Gracias por votar!
                            </div>
                          </>
                        )}


                        {/* =====================================
                            YA VOTÓ
                        ===================================== */}

                        {state === 'already_voted' && (
                          <>
                            <div className="gga-vote-status already-voted">

                              <span className="gga-status-icon">
                                👤
                              </span>

                              <span>
                                Ya votaste en esta categoría
                              </span>

                            </div>

                            <p>
                              Solo puedes votar una vez
                              por categoría.
                            </p>

                            <button
                              type="button"
                              className="gga-vote-button already-voted-button"
                              onClick={() => {
                                document
                                  .querySelector('.gga-voting-section')
                                  ?.scrollIntoView({
                                    behavior: 'smooth'
                                  });
                              }}
                            >

                              <span>
                                VER PARTICIPANTES
                              </span>

                              <span className="gga-vote-arrow">
                                →
                              </span>

                            </button>
                          </>
                        )}


                        {/* =====================================
                            ERROR
                        ===================================== */}

                        {state === 'error' && (
                          <>
                            <div className="gga-vote-status error">

                              <span className="gga-status-icon">
                                !
                              </span>

                              <span>
                                No se pudo registrar
                              </span>

                            </div>

                            <p>
                              Ocurrió un problema al registrar
                              tu voto. Inténtalo nuevamente.
                            </p>

                            <button
                              type="button"
                              className="gga-vote-button"
                              onClick={() =>
                                handleVote(contestant.name)
                              }
                            >
                              INTENTAR NUEVAMENTE
                            </button>
                          </>
                        )}

                      </div>

                    </article>
                  );
                })}

              </div>

            </div>
          </section>
        )}

        {/* start tc-page-about-request */}
        <div className="tc-page-about-request">
          <div className="container">
            <div className="request-card text-center text-lg-start">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="info">
                    <div className="icon d-none d-lg-block">
                      <img src="" alt="" />
                    </div>
                    <h3 className="fsz-35"> Los mejores exponentes <br />  en República Dominicana </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end tc-page-about-request */}
      </main>

      {/* start footer */}
      <footer className="tc-footer-style9 pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 pe-lg-5">
              <div className="foot-info">
                <div className="foot-logo mb-40">
                  <img src="/assets/img/logo_black.png" alt="" />
                </div>
                <div className="text color-666">
                  Sé parte de los Global Guide Awards y compite por un lugar entre los mejores en tu campo. Inscríbete ahora y deja que tu trabajo sea reconocido a nivel nacional e internacional.
                </div>
                <div className="foot-links mt-50">
                  <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                  <a href="#"> <i className="fab fa-twitter"></i> </a>
                  <a href="#"> <i className="fab fa-behance"></i> </a>
                  <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                  <a href="#"> <i className="fab fa-youtube"></i> </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="links">
                <h5 className="sub-title mt-5 mt-lg-0"> Nosotros </h5>
                <ul>
                  <li> <Link to="/home"> Inicio </Link> </li>
                  <li> <Link to="/"> Contador </Link> </li>
                  <li> <Link to="/categorias"> Categorias </Link> </li>
                  <li> <Link to="/register"> Registro. </Link> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="links">
                <h5 className="sub-title mt-5 mt-lg-0"> Siguenos</h5>
                <ul>
                  <li> <a href="#"> Facebook </a> </li>
                  <li> <a href="#"> Instagram </a> </li>
                  <li> <a href="#"> Twitter</a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="links">
                <h5 className="sub-title mt-5 mt-lg-0"> Services </h5>
                <ul>
                  <li> <a href="#"> premiosglobal@globalguideawards.com </a> </li>
                  <li> <a href="#"> 8493531403 </a> </li>
                  <li> <a href="#"> Game Design </a> </li>
                  <li> <a href="#"> Riviera del caribe calle esmeralda </a> </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="button_su radius-4">
                <span className="su_button_circle bg-darkBlue2"></span>
                <a href="#" className="butn py-2 button_su_inner bg-blue3 m-0 pb-10 radius-4">
                  <span className="button_text_container fsz-13 fw-bold text-capitalize text-white">
                    <img src="" alt="" className="icon-15 me-2" /> Subscribirse
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="foot">
            <div className="row">
              <div className="col-lg-6">
                <p className="text-lg-center color-777 fsz-16"> Diseño web & tecnologia <a href="#" className="color-000"> OptimizApp Solutions Sas. </a> Colombia </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CategoryDetailPage;
