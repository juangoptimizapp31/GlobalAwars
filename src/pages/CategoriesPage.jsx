import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import useScripts from '../hooks/useScripts';

function CategoriesPage() {
  // Load page-specific styles
  useStylesheet('/assets/css/lib/bootstrap.min.css');
  useStylesheet('/assets/css/lib/ionicons.css');
  useStylesheet('/assets/css/lib/line-awesome.css');
  useStylesheet('/assets/css/lib/all.min.css');
  useStylesheet('/assets/css/lib/animate.css');
  useStylesheet('/assets/css/lib/jquery.fancybox.css');
  useStylesheet('/assets/css/lib/lity.css');
  useStylesheet('/assets/css/lib/swiper8.min.css');
  useStylesheet('/assets/css/style.css');

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
    '/assets/js/lib/back-to-top.js',
    '/assets/js/lib/parallaxie.js',
    '/assets/js/lib/charming.min.js',
    '/assets/js/lib/TweenMax.min.js',
    '/assets/js/lib/demo.js',
    '/assets/js/main.js'
  ]);

  // Tab State
  const [activeTab, setActiveTab] = useState(null);
  const [showNominees, setShowNominees] = useState(false);

  const [introPhase, setIntroPhase] = useState(() => {
    return sessionStorage.getItem('globalGuideIntroShown') === 'true'
      ? 'finished'
      : 'video';
  });

  const introVideoRef = useRef(null);

  useEffect(() => {
    // Si el video ya fue mostrado durante esta sesión,
    // no volver a reproducirlo.
    if (sessionStorage.getItem('globalGuideIntroShown') === 'true') {
      return;
    }

    const video = introVideoRef.current;

    if (!video) return;

    video.playbackRate = 1.35;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Autoplay bloqueado:', error);
      }
    };

    playVideo();

    const titleTimer = setTimeout(() => {
      setIntroPhase('title');
    }, 6000);

    const finishTimer = setTimeout(() => {
      setIntroPhase('finished');

      // MARCAMOS QUE YA SE MOSTRÓ
      sessionStorage.setItem('globalGuideIntroShown', 'true');
    }, 9000);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <div className="home-style10 f-fm-jakarta">
      {/* =====================================================
          INTRO CINEMATOGRÁFICA
        ===================================================== */}
      {introPhase !== 'finished' && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >

          {/* =========================
            FASE 1 — IMAGEN
          ========================= */}
          {introPhase === 'video' && (
            <video
              ref={introVideoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '65% center',
              }}
            >
              <source
                src="/assets/img/home_10/GlobalVideoSec.mp4"
                type="video/mp4"
              />
            </video>
          )}

          {/* =========================
              FASE 2 — IDENTIDAD
            ========================= */}

          {introPhase === 'title' && (
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                textAlign: 'center',
                color: '#fff',
                animation: 'ggaIntroTitle 1.2s ease forwards',
              }}
            >

              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '5px',
                  textTransform: 'uppercase',
                  color: '#d9a928',
                  fontWeight: 500,
                  marginBottom: '20px',
                }}
              >
                Nuestro talento nos engrandece
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: 'clamp(60px, 8vw, 120px)',
                  lineHeight: 0.95,
                  fontWeight: 500,
                  letterSpacing: '-4px',
                }}
              >
                <span style={{ color: '#fff' }}>
                  Global
                </span>{' '}

                <span style={{ color: '#d9a928' }}>
                  Guide
                </span>
              </h1>

              <div
                style={{
                  marginTop: '22px',
                  fontSize: 'clamp(32px, 4vw, 58px)',
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic',
                  color: '#fff',
                }}
              >
                Awards
              </div>

            </div>
          )}

          <style>
            {`
              @keyframes ggaIntroTitle {
                from {
                  opacity: 0;
                  transform: scale(0.96);
                  filter: blur(10px);
                }

                to {
                  opacity: 1;
                  transform: scale(1);
                  filter: blur(0);
                }
              }
            `}

          </style>


        </div>
      )}
      {/* start navbar */}
      <div className="navbar-container style13">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light style13">
            <div className="container-fluid p-0">
              <div className="logo-search-side">
                <Link to="/categorias" className="logo-brand">
                  <img src="/assets/img/LogoPremioMini.png" alt="" />
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
                    <Link className="nav-link active" to="/categorias">Inicio.</Link>
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

                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* end navbar */}


      {/* start header */}
      <header className="tc-header-style25">
        <div className="container">
          <div className="info">
            <div>
              <h6 className="wow fadeInUp">Nuestro talento nos engrandece</h6>
            </div>
            <h1 className="wow fadeInUp" data-wow-delay="0.2s">
              <div className="t-inf">
                Global  <span className="color-light3"> Guide </span>
              </div>
              <div className="b-inf">
                <div className="rotate-circle fsz-40 rotate-text d-inline-block">
                  <svg className="textcircle" viewBox="0 0 500 500">
                    <defs>
                      <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"></path>
                    </defs>
                  </svg>
                </div>
                <img src="/assets/img/logo_mark_rd2.png" alt="" className="icon" />
                <span className="span_circle f-fm-Playfair fst-italic fw-400"> Awards </span>
              </div>
            </h1>
          </div>
        </div>
        <img src="/assets/img/home_10/header_back_shapes.png" alt="" className="back-shape slide-up-down" />
        <div className="stage">
          <div className="rotate">
            <div className="cube">
              <figure className="back"></figure>
              <figure className="top"></figure>
              <figure className="bottom"></figure>
              <figure className="left"></figure>
              <figure className="right"></figure>
              <figure className="front"></figure>
            </div>
          </div>
        </div>
      </header>
      {/* end header */}

      {/* Contents */}
      <main>
        {/* start tc-about-style25 */}
        <section className="tc-about-style25">
          <div className="container-fluid p-0">
            <div className="row justify-content-between">


              <div className="col-lg-5">
                <div className="info d-inline-block px-4 mt-4 mt-lg-0 wow fadeInRight" data-wow-delay="0.2s">
                  <div className="tc-section-title-style25 mb-30">
                    <h2> Donde la Innovación se <span className="color-light3"> encuentra </span> <br /> con la <span className="span_circle f-fm-Playfair fst-italic fw-400"> cratividad </span> </h2>
                  </div>
                  <div className="text mb-50">
                    Prepárate para conocer a quienes están transformando sus industrias con pasión y originalidad. <br />
                  </div>
                  <ul className="pb-40 border-bottom border-1 brd-gray">
                    <li>
                      <span className="icon fsz-21 me-15">
                        <i className="fal fa-check-circle"></i>
                      </span>
                      <span> Compromiso y la Excelencia </span>
                    </li>
                    <li>
                      <span className="icon fsz-21 me-15">
                        <i className="fal fa-check-circle"></i>
                      </span>
                      <span> Conexiones Estratégicas para el Éxito Global </span>
                    </li>
                  </ul>
                  <div className="btm-inf pt-40">
                    <img src="/assets/img/LogoPremioLado.png" width="150" alt="" />
                    <p> <span className="color-red3 ms-20"> . </span> Se parte de algo maravilloso </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stage">
            <div className="rotate">
              <div className="cube">
                <figure className="back"></figure>
                <figure className="top"></figure>
                <figure className="bottom"></figure>
                <figure className="left"></figure>
                <figure className="right"></figure>
                <figure className="front"></figure>
              </div>
            </div>
          </div>
        </section>
        {/* end tc-about-style25 */}

        {/* start tc-categories-style10 */}
        <section className="tc-categories-style10 pb-0">
          <div className="tc-categories-slider10">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <h2> <img src="/assets/img/logo_mark_dk.png" alt="" className="icon-40" /> <span> Premios Global </span> <img src="/assets/img/logo_mark_dk.png" alt="" className="icon-40" /> </h2>
                  <span className="mirror_1"> Premios Global</span>
                  <span className="mirror_2"> Premios Global </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end tc-categories-style10 */}

        {/* Menu Categorias */}
        <section className="tc-portfolio-style25 gga-categories">
          <div className="container">

            {/* HEADER */}
            <div className="gga-category-header">
              <h2 className="gga-section-title">Categorías</h2>

              <div className="gga-title-line">
                <span></span>
                <b>✦</b>
                <span></span>
              </div>

              <p className="gga-section-subtitle">
                Explora y celebra el talento que transforma naciones.
              </p>
            </div>

            {/* TABS */}
            <div className="gga-category-tabs">

              <button
                type="button"
                className={`gga-category-tab ${activeTab === 'pills-prt1' ? 'active' : ''
                  }`}
                onClick={() => {
                  setActiveTab('pills-prt1');
                  setShowNominees(true);
                }}
              >
                <span className="gga-tab-icon">●</span>
                <span>Arte</span>
              </button>

              <button
                type="button"
                className={`gga-category-tab ${activeTab === 'pills-prt2' ? 'active' : ''
                  }`}
                onClick={() => {
                  setActiveTab('pills-prt2');
                  setShowNominees(true);
                }}
              >
                <span className="gga-tab-icon">◎</span>
                <span>Emprendimiento Internacional en RD</span>
              </button>

              <button
                type="button"
                className={`gga-category-tab ${activeTab === 'pills-prt3' ? 'active' : ''
                  }`}
                onClick={() => {
                  setActiveTab('pills-prt3');
                  setShowNominees(true);
                }}
              >
                <span className="gga-tab-icon">▣</span>
                <span>Producción</span>
              </button>

            </div>
            {/* =====================================================
                HERO DE CATEGORÍA
            ===================================================== */}

            {activeTab && (
              <div className={`gga-category-hero gga-hero-${activeTab}`}>

                {/* DESTELLOS */}
                <span className="gga-spark spark-1">✦</span>
                <span className="gga-spark spark-2">✦</span>
                <span className="gga-spark spark-3">•</span>
                <span className="gga-spark spark-4">•</span>
                <span className="gga-spark spark-5">✦</span>

                {/* PANEL IZQUIERDO */}
                <div className="gga-hero-vote-box">

                  <span className="gga-hero-brand">
                    GLOBAL GUIDE AWARDS
                  </span>

                  <h2>
                    VOTA
                    <br />
                    POR TU
                    <br />
                    FAVORITO
                  </h2>

                  <div className="gga-hero-divider"></div>

                  <p>
                    APOYA A NUESTROS
                    <br />
                    ARTESANOS
                  </p>

                </div>

                {/* INFORMACIÓN DE LA CATEGORÍA */}
                <div className="gga-hero-info">

                  {activeTab === 'pills-prt1' && (
                    <>
                      <h1>Artes Plásticas</h1>

                      <p>
                        VOTA POR TU VIDEO FAVORITO
                        <br />
                        &amp; SÍGUELO EN LA PREMIACIÓN EN VIVO DESDE BELLAS ARTES
                      </p>
                    </>
                  )}

                  {activeTab === 'pills-prt2' && (
                    <>
                      <h1>Emprendimiento Internacional en RD</h1>

                      <p>
                        VOTA POR TU VIDEO FAVORITO
                        <br />
                        &amp; SÍGUELO EN LA PREMIACIÓN EN VIVO DESDE BELLAS ARTES
                      </p>
                    </>
                  )}

                  {activeTab === 'pills-prt3' && (
                    <>
                      <h1>Producción</h1>

                      <p>
                        VOTA POR TU VIDEO FAVORITO
                        <br />
                        &amp; SÍGUELO EN LA PREMIACIÓN EN VIVO DESDE BELLAS ARTES
                      </p>
                    </>
                  )}

                </div>

                {/* ARCO DORADO */}
                <div className="gga-hero-orbit"></div>

              </div>
            )}


            {/* SUBCATEGORÍAS */}
            {showNominees && (
              <div className="gga-nominees">

                {/* ================= ARTE ================= */}
                {activeTab === 'pills-prt1' && (
                  <div className="gga-main-categories gga-subcategories">

                    <Link to="/categorias/artes-plastic" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/ArtesPls5.jpg"
                          alt="Artes Plásticas"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">●</div>
                        <h3>Artes Plásticas</h3>
                        <p>
                          Reconocemos la creatividad, la expresión y el impacto
                          cultural que inspira al mundo.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/madera-tallada" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/madera tallada.jpg"
                          alt="Madera Tallada"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">◎</div>
                        <h3>Madera Tallada</h3>
                        <p>
                          Arte y tradición convertidos en piezas únicas
                          mediante el trabajo artesanal.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/fotografo creativo" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/fotografo creativo.jpg"
                          alt="Fotógrafo Creativo"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">▣</div>
                        <h3>Fotógrafo Creativo</h3>
                        <p>
                          Historias, emociones y momentos transformados
                          en imágenes con identidad.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/diseño-de-moda" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/DiseñoM2.jpg"
                          alt="Diseño de Moda"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">●</div>
                        <h3>Diseño de Moda</h3>
                        <p>
                          Creatividad, identidad y estilo llevados
                          a nuevas expresiones de la moda.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/accesorios-de-moda" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/accesorios de moda.jpg"
                          alt="Accesorios de Moda"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">◎</div>
                        <h3>Accesorios de Moda</h3>
                        <p>
                          Diseño y creatividad expresados mediante
                          piezas únicas y distintivas.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/madera-torneada" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/madera-torno.png"
                          alt="Madera Torneada"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">▣</div>
                        <h3>Madera Torneada</h3>
                        <p>
                          Precisión, técnica y creatividad aplicadas
                          al trabajo artístico de la madera.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/alfareria" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/alfareria (1).jpg"
                          alt="Alfarería"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">●</div>
                        <h3>Alfarería</h3>
                        <p>
                          Tradición, creatividad y cultura convertidas
                          en piezas artesanales.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                  </div>
                )}

                {/* ================= EMPRENDIMIENTO ================= */}
                {activeTab === 'pills-prt2' && (
                  <div className="gga-main-categories gga-subcategories">

                    <Link to="/categorias/empr-colombiano" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/emprendedorColombianjpg.png"
                          alt="Emprendedor Colombiano"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">◎</div>
                        <h3>Emprendedor Colombiano</h3>
                        <p>
                          Reconocemos el talento empresarial colombiano
                          con visión nacional e internacional.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/empr-hodur" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/HONDUREEEEno.jpg"
                          alt="Emprendedor Hondureño"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">◎</div>
                        <h3>Emprendedor Hondureño</h3>
                        <p>
                          Negocios y proyectos que impulsan el desarrollo
                          y conectan nuevas oportunidades.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/empr-mexic" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/emprededorMexican.jpg"
                          alt="Emprendedor Mexicano"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">◎</div>
                        <h3>Emprendedor Mexicano</h3>
                        <p>
                          Innovación y liderazgo empresarial que generan
                          impacto y crecimiento.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/empr-guatem" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/emprendedorGuatemalteco.jpg"
                          alt="Emprendedor Guatemalteco"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">◎</div>
                        <h3>Emprendedor Guatemalteco</h3>
                        <p>
                          Talento empresarial que construye oportunidades
                          y transforma comunidades.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/empr-chilen" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/chile.jpg"
                          alt="Emprendedor Chileno"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">◎</div>
                        <h3>Emprendedor Chileno</h3>
                        <p>
                          Empresas y proyectos que destacan por su
                          innovación y visión internacional.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/empr-salvad" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/salvador.jpg"
                          alt="Emprendedor Salvadoreño"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">◎</div>
                        <h3>Emprendedor Salvadoreño</h3>
                        <p>
                          Reconocemos proyectos que generan crecimiento
                          y nuevas oportunidades.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/empr-argent" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/argentina.jpg"
                          alt="Emprendedor Argentino"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">◎</div>
                        <h3>Emprendedor Argentino</h3>
                        <p>
                          Creatividad y visión empresarial con impacto
                          dentro y fuera de Argentina.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                  </div>
                )}

                {/* ================= PRODUCCIÓN ================= */}
                {activeTab === 'pills-prt3' && (
                  <div className="gga-main-categories gga-subcategories">

                    <Link to="/categorias/cuidado-pers" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/cuidado personal.jpg"
                          alt="Cuidado Personal"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">▣</div>
                        <h3>Cuidado Personal</h3>
                        <p>
                          Productos y propuestas orientadas al bienestar,
                          cuidado y calidad de vida.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/fundaciones" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/fundacion.jpg"
                          alt="Fundaciones"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">▣</div>
                        <h3>Fundaciones</h3>
                        <p>
                          Organizaciones que generan transformación
                          social y construyen un impacto positivo.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/gastron-artes" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/GastroArtes5.jpg"
                          alt="Gastronomía y Artes"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">▣</div>
                        <h3>Gastronomía y Artes</h3>
                        <p>
                          Sabores, creatividad y cultura unidos para
                          crear experiencias memorables.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/tabaco" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/Tbaco3.jpg"
                          alt="Tabaco"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">▣</div>
                        <h3>Tabaco</h3>
                        <p>
                          Tradición, elaboración y excelencia representadas
                          a través de productos distintivos.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/categorias/agricultura" className="gga-main-category">
                      <div className="gga-main-category-image">
                        <img
                          src="/assets/img/home_10/porfolio/agricultura.jpg"
                          alt="Agricultura"
                        />
                      </div>
                      <div className="gga-main-category-content">
                        <div className="gga-main-category-icon">▣</div>
                        <h3>Agricultura</h3>
                        <p>
                          Innovación y producción que impulsan el desarrollo
                          del sector agrícola.
                        </p>
                        <span className="gga-view-nominees">
                          Ver nominados <span>→</span>
                        </span>
                      </div>
                    </Link>

                  </div>
                )}

              </div>
            )}


            {/* FRANJA INFERIOR */}
            <div className="gga-category-values">

              <div className="gga-values-title">
                CATEGORÍAS QUE CONECTAN TALENTO Y CULTURAS
              </div>

              <div className="gga-values-grid">

                <div>
                  <span>♕</span>
                  <p>
                    Selección rigurosa<br />
                    y transparente
                  </p>
                </div>

                <div>
                  <span>♧</span>
                  <p>
                    Jurado internacional<br />
                    de alto nivel
                  </p>
                </div>

                <div>
                  <span>♜</span>
                  <p>
                    Reconocimiento<br />
                    con impacto global
                  </p>
                </div>

                <div>
                  <span>◎</span>
                  <p>
                    Talento que<br />
                    trasciende fronteras
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>
        {/* End Menu Categorias */}
        {/* Menu Categorias */}

        {/* start tc-awards-style25 */}
        <section className="tc-awards-style25 gga-awards-section">
          <div className="container">

            <div className="gga-awards-heading">
              <span className="gga-eyebrow">GLOBAL GUIDE AWARDS</span>

              <h2>
                Nominados <span>y Premios</span>
                <br />
                que Celebran la{" "}
                <em>Excelencia Global</em>
              </h2>

              <p>
                Reconocemos el talento, la innovación y la excelencia
                que transforman nuestra región y proyectan su impacto al mundo.
              </p>
            </div>

            <div className="gga-award-feature">
              <div className="gga-award-image">
                <img
                  src="/assets/img/LogoGrande.png"
                  alt="Global Guide Awards"
                />
              </div>

              <div className="gga-award-info">
                <span className="gga-award-label">PRIMERA EDICIÓN</span>

                <h3>Premios Global Guide</h3>

                <p>
                  Celebrando a quienes hacen historia con su talento,
                  creatividad, liderazgo e innovación.
                </p>

                <div className="gga-award-bottom">
                  <span>GLOBAL GUIDE AWARDS</span>
                  <strong>2024</strong>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* end tc-awards-style25 */}

        {/* start Mision-Vision */}
        <section
          style={{
            background: "#08060d",
            padding: "80px 0 100px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "1450px",
              margin: "0 auto"
            }}
          >

            {/* ================= MISIÓN ================= */}
            <div
              style={{
                position: "relative",
                minHeight: "270px",
                marginBottom: "24px",
                padding: "45px 55px",
                border: "1px solid rgba(218,174,77,.75)",
                borderRadius: "16px",
                overflow: "hidden",
                background:
                  "radial-gradient(circle at 12% 50%, rgba(218,174,77,.13), transparent 25%), linear-gradient(120deg,#11101a,#09080d 70%,#171109)",
                boxShadow:
                  "0 0 30px rgba(218,174,77,.08), inset 0 0 60px rgba(218,174,77,.04)"
              }}
            >

              {/* brillo inferior */}
              <div
                style={{
                  position: "absolute",
                  left: "-5%",
                  bottom: "-55px",
                  width: "65%",
                  height: "100px",
                  borderRadius: "50%",
                  borderTop: "2px solid rgba(218,174,77,.7)",
                  boxShadow: "0 -10px 35px rgba(218,174,77,.25)",
                  transform: "rotate(-3deg)"
                }}
              />

              {/* icono */}
              <div
                style={{
                  position: "absolute",
                  left: "45px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "105px",
                  height: "105px",
                  borderRadius: "50%",
                  border: "1px solid rgba(218,174,77,.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 0 25px rgba(218,174,77,.25), inset 0 0 25px rgba(218,174,77,.12)"
                }}
              >
                <i
                  className="fas fa-bullseye"
                  style={{
                    color: "#e5bd62",
                    fontSize: "48px"
                  }}
                />
              </div>

              {/* título */}
              <div
                style={{
                  marginLeft: "150px",
                  width: "30%"
                }}
              >
                <div
                  style={{
                    color: "#d9ae52",
                    fontSize: "11px",
                    letterSpacing: "5px",
                    marginBottom: "18px"
                  }}
                >
                  PREMIOS GLOBAL GUIDE
                </div>

                <h2
                  style={{
                    color: "#e5bd62",
                    fontSize: "58px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    margin: 0,
                    lineHeight: 1
                  }}
                >
                  MISIÓN
                </h2>

                <div
                  style={{
                    width: "85px",
                    height: "2px",
                    background: "#e5bd62",
                    marginTop: "22px"
                  }}
                />
              </div>

              {/* texto */}
              <div
                style={{
                  position: "absolute",
                  left: "43%",
                  right: "4%",
                  top: "42px"
                }}
              >
                <p
                  style={{
                    color: "#f1ece2",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    margin: 0,
                    maxWidth: "850px"
                  }}
                >
                  Destacar y celebrar a los emprendedores a nivel nacional e
                  internacional que demuestran una cultura productiva ejemplar y una
                  calidad de producto excepcional. Reconociendo el esfuerzo y la
                  dedicación de quienes innovan y contribuyen al desarrollo económico,
                  e inspirando a otros a seguir sus pasos.
                </p>

                <div
                  style={{
                    height: "1px",
                    background: "rgba(218,174,77,.55)",
                    margin: "22px 0 18px"
                  }}
                />

                <p
                  style={{
                    color: "#d9ae52",
                    fontSize: "11px",
                    lineHeight: "1.7",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  VALORAR EL TRABAJO Y LA CREATIVIDAD DE LOS EMPRENDEDORES Y
                  FOMENTAR UN ENTORNO DONDE LA EXCELENCIA Y LA MEJORA CONTINUA SON
                  RECOMPENSADAS, PROMOVIENDO ASÍ UN ECOSISTEMA EMPRESARIAL MÁS
                  DINÁMICO Y COMPETITIVO.
                </p>
              </div>

            </div>


            {/* ================= VISIÓN ================= */}
            <div
              style={{
                position: "relative",
                minHeight: "270px",
                padding: "45px 55px",
                border: "1px solid rgba(218,174,77,.75)",
                borderRadius: "16px",
                overflow: "hidden",
                background:
                  "radial-gradient(circle at 12% 50%, rgba(218,174,77,.13), transparent 25%), linear-gradient(120deg,#11101a,#09080d 70%,#171109)",
                boxShadow:
                  "0 0 30px rgba(218,174,77,.08), inset 0 0 60px rgba(218,174,77,.04)"
              }}
            >

              {/* brillo inferior */}
              <div
                style={{
                  position: "absolute",
                  right: "-5%",
                  bottom: "-55px",
                  width: "65%",
                  height: "100px",
                  borderRadius: "50%",
                  borderTop: "2px solid rgba(218,174,77,.7)",
                  boxShadow: "0 -10px 35px rgba(218,174,77,.25)",
                  transform: "rotate(3deg)"
                }}
              />

              {/* icono */}
              <div
                style={{
                  position: "absolute",
                  left: "45px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "105px",
                  height: "105px",
                  borderRadius: "50%",
                  border: "1px solid rgba(218,174,77,.7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    "0 0 25px rgba(218,174,77,.25), inset 0 0 25px rgba(218,174,77,.12)"
                }}
              >
                <i
                  className="fas fa-eye"
                  style={{
                    color: "#e5bd62",
                    fontSize: "45px"
                  }}
                />
              </div>

              {/* título */}
              <div
                style={{
                  marginLeft: "150px",
                  width: "30%",
                  paddingTop: "45px"
                }}
              >
                <div
                  style={{
                    color: "#d9ae52",
                    fontSize: "11px",
                    letterSpacing: "5px",
                    marginBottom: "18px"
                  }}
                >
                  PREMIOS GLOBAL GUIDE
                </div>

                <h2
                  style={{
                    color: "#e5bd62",
                    fontSize: "58px",
                    fontWeight: "500",
                    letterSpacing: "2px",
                    margin: 0,
                    lineHeight: 1
                  }}
                >
                  VISIÓN
                </h2>

                <div
                  style={{
                    width: "85px",
                    height: "2px",
                    background: "#e5bd62",
                    marginTop: "22px"
                  }}
                />
              </div>

              {/* texto */}
              <div
                style={{
                  position: "absolute",
                  left: "43%",
                  right: "4%",
                  top: "42px"
                }}
              >
                <p
                  style={{
                    color: "#f1ece2",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    margin: 0,
                    maxWidth: "850px"
                  }}
                >
                  Nuestra meta a futuro es lograr la integración internacional de los
                  premios, posibilitando su celebración en cada uno de los países
                  aliados a nuestra plataforma. Aspiramos al reconocimiento de los
                  productos de los emprendedores a corto plazo mediante acuerdos
                  comerciales. Para alcanzar esta ambiciosa visión, seguimos
                  estrategias clave.
                </p>

                <div
                  style={{
                    height: "1px",
                    background: "rgba(218,174,77,.55)",
                    margin: "22px 0 18px"
                  }}
                />

                <p
                  style={{
                    color: "#d9ae52",
                    fontSize: "11px",
                    lineHeight: "1.7",
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    margin: 0
                  }}
                >
                  APROVECHAREMOS NUESTRA CREDIBILIDAD Y VISIBILIDAD PARA IMPULSAR LA
                  ENTRADA EN MERCADOS EXTRANJEROS. LAS RUEDAS DE NEGOCIOS SE
                  PRESENTAN COMO UNA EXCELENTE HERRAMIENTA PARA ESTE PROPÓSITO, YA
                  QUE PERMITEN A LOS EMPRENDEDORES CONECTAR DIRECTAMENTE CON
                  POTENCIALES SOCIOS COMERCIALES, DISTRIBUIDORES E INVERSORES DE
                  OTROS PAÍSES.
                </p>
              </div>

            </div>

          </div>
        </section>
        {/* end Mision-Vision */}
      </main>
      {/* End-Contents */}

      {/* Footer */}
      <footer
        className="tc-footer-style19"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(218,174,77,.12), transparent 30%),
            radial-gradient(circle at 85% 80%, rgba(218,174,77,.10), transparent 32%),
            linear-gradient(135deg, #050507 0%, #0b090d 50%, #120e08 100%)
          `,
          color: '#f1ece2',
          borderTop: '1px solid rgba(218,174,77,.35)',
          boxShadow: '0 -15px 50px rgba(0,0,0,.55)',
        }}
      >
        <div className="container">
          <div className="content">
            <div className="row justify-content-between">
              <div className="col-lg-4">
                <div className="foot-info">
                  <h3 className="fsz-40 mb-40"> Únete a la Celebración del Talento Excepcional </h3>
                  <p className="fsz-18 color-777">
                    Sé parte de los Global Guide Awards y compite por un lugar entre los mejores en tu campo. Inscríbete ahora y deja que tu trabajo sea reconocido a nivel nacional e internacional.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="foot-subs mt-5 mt-lg-0">
                  <div className="form-group">
                    <span className="icon">
                      <i className="fas fa-envelope-open"></i>
                    </span>
                    <input type="text" placeholder="correo electronico" />
                    <button> Subscribirse <i className="fal fa-long-arrow-right ms-1 color-red3"></i> </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 col-lg-4">
                    <ul className="links">
                      <li> <Link to="/categorias">Inicio. </Link> </li>
                      <li> <Link to="/home">Patrocinadores. </Link> </li>
                      <li> <Link to="/categorias">Categorias.</Link> </li>
                      <li> <Link to="/register">Registro. </Link> </li>
                    </ul>
                  </div>
                  <div className="col-6 col-lg-4">
                    <ul className="links">
                      <li> <a href="#"> Facebook </a> </li>
                      <li> <a href="https://www.instagram.com/globalguideawards/?igsh=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noopener noreferrer"> Instagram </a> </li>
                      <li> <a href="#"> Twitter </a> </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <ul className="foot-contact">
                      <li> <a href="#"> premiosglobal@globalguideawards.com </a> </li>
                      <li> <a href="#"> 8493531403 </a> </li>
                      <li> <a href="#"> Riviera del caribe calle esmeralda </a> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foot py-4 border-top border-1 brd-gray text-center">
            <div className="row">
              <div className="col-lg-3">
                <div className="logo text-lg-start">
                  <img
                    src="/assets/img/LogoPremioLado.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <p className="text-lg-center color-777 fsz-16"> Diseño web & tecnologia <a href="#" className="color-000"> OptimizApp Solutions Sas. </a> Colombia </p>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/home_10/line1.png" alt="" className="line1" />
        <img src="/assets/img/home_10/line2.png" alt="" className="line2" />
      </footer>
    </div>
  );
}

export default CategoriesPage;
