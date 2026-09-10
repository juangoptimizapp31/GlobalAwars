import React from 'react';
import { Link } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import useScripts from '../hooks/useScripts';

function HomePage() {
  // Load page-specific styles
  useStylesheet('/common/assets/css/lib/bootstrap.min.css');
  useStylesheet('/common/assets/css/lib/all.min.css');
  useStylesheet('/common/assets/css/lib/ionicons.css');
  useStylesheet('/common/assets/css/lib/animate.css');
  useStylesheet('/common/assets/css/lib/jquery.fancybox.css');
  useStylesheet('/common/assets/css/lib/lity.css');
  useStylesheet('/common/assets/css/lib/swiper8.min.css');
  useStylesheet('/common/assets/css/common_style.css');
  useStylesheet('/saas/assets/css/home_26_style.css');

  // Load interactive scripts
  useScripts([
    '/common/assets/js/lib/jquery-3.0.0.min.js',
    '/common/assets/js/lib/jquery-migrate-3.0.0.min.js',
    '/common/assets/js/lib/bootstrap.bundle.min.js',
    '/common/assets/js/lib/wow.min.js',
    '/common/assets/js/lib/jquery.fancybox.js',
    '/common/assets/js/lib/lity.js',
    '/common/assets/js/lib/swiper8-bundle.min.js',
    '/common/assets/js/lib/jquery.waypoints.min.js',
    '/common/assets/js/lib/jquery.counterup.js',
    '/common/assets/js/lib/parallaxie.js',
    '/saas/assets/js/webfont.js',
    '/saas/assets/js/curved_text.js',
    '/saas/assets/js/home_26_scripts.js'
  ]);

  return (
    <div className="home-style26">
      {/* start navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark style41">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img src="/saas/assets/img/LogoPremioLado.png" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Cuenta Regresiva</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">Inicio.</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categorias">Categorias.</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Registro.</Link>
              </li>
            </ul>
            <div className="button_su border-0 rounded-pill">
              <span className="su_button_circle bg-blue8 desplode-circle"></span>
              <Link to="/categorias" className="butn button_su_inner bg-blue7 py-2 border-0 rounded-pill">
                <span className="button_text_container fsz-14 text-capitalize text-white"> <i className="far fa-lock me-2"></i> Categorias </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* end navbar */}

      {/* Encabezado */}
      <header className="tc-header-style41">
        <div className="container">
          <div className="info">
            <h1 className="wow fadeInUp" data-wow-delay="0.1s"> GLOBAL<span> GUIDE </span> Awards <img src="/saas/assets/img/LogoGrande.png" alt="" /> </h1>
            <br />
            <div className="text wow fadeInUp" data-wow-delay="0.3s" style={{ textAlign: 'center' }}>
              Somos una plataforma dedicada a destacar y premiar a emprendedores excepcionales <br /> reconociendo su innovación y contribución al desarrollo económico<br />Promovemos el crecimiento empresarial y la expansión internacional,<br />conectando a emprendedores con oportunidades clave en mercados globales.
            </div>
            <div className="button_su border-0 rounded-pill wow fadeInUp" data-wow-delay="0.3s">
              <span className="su_button_circle bg-blue7 desplode-circle"></span>
              <Link to="/categorias" className="butn button_su_inner bg-grad2 py-3 border-0 rounded-pill">
                <span className="button_text_container fsz-14 text-capitalize text-white"> Categorias </span>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="video-container" data-wow-delay="0.1s">
            <img
              src="/saas/assets/img/LogoGrande.png"
              alt="Global Guide Awards"
              style={{
                width: '100%',
                maxWidth: '700px',
                height: 'auto',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
        </div>
        <img src="/saas/assets/img/head_light.png" alt="" className="back_light" />
      </header>
      {/* Fin Encabezado */}

      {/* Contents */}
      <main>
        {/* Patrocinadores */}
        <section className="tc-partners-style41">
          <div className="container wow fadeInUp" data-wow-delay="0.1s">
            <p className="fsz-14 text-uppercase ltspc-2 color-blue8 text-center">
              "Con el respaldo de múltiples entidades gubernamentales y privadas <br /> en República Dominicana como a nivel <span className="text-white"> internacional,</span><br /> destacando la excelencia emprendedora."
            </p>
            <div className="logos">
              <a href="https://micm.gob.do/" target="_blank" rel="noopener noreferrer" className="logo">
                <img src="/saas/assets/img/LogoMICM.jpg" alt="" />
              </a>
              <a href="https://inaguja.gob.do/" target="_blank" rel="noopener noreferrer" className="logo">
                <img src="/saas/assets/img/LogoINAGUJA.png" alt="" />
              </a>
              <a href="https://optimizapp.com/" target="_blank" rel="noopener noreferrer" className="logo">
                <img src="/saas/assets/img/LogoOptimizappBlanco.png" alt="" />
              </a>
              <a href="#" className="logo">
                <img src="/saas/assets/img/LogoPremioLado.png" alt="" />
              </a>
              <a href="#" className="logo">
                <img src="/saas/assets/img/LogoPremioLado.png" alt="" />
              </a>
              <a href="#" className="logo">
                <img src="/saas/assets/img/LogoPremioLado.png" alt="" />
              </a>
              <a href="#" className="logo">
                <img src="/saas/assets/img/LogoPremioLado.png" alt="" />
              </a>
              <a href="#" className="logo">
                <img src="/saas/assets/img/LogoPremioLado.png" alt="" />
              </a>
              <a href="#" className="logo">
                <img src="/saas/assets/img/LogoPremioLado.png" alt="" />
              </a>
            </div>
          </div>
          <img src="/saas/assets/img/logos_light.png" alt="" className="logos_light" />
          <div className="curved-text">
            <svg className="hidden">
              <defs>
                <filter id="blur" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="0" result="blur" data-min-deviation="0" data-max-deviation="10"></feGaussianBlur>
                  <feMerge>
                    <feMergeNode in="blur"></feMergeNode>
                  </feMerge>
                </filter>
                <filter id="blur2" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="0" result="glow" data-min-deviation="0" data-max-deviation="30"></feGaussianBlur>
                  <feColorMatrix result="bluralpha" type="matrix" values="0 -1 0 0 0 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1.8 0 "></feColorMatrix>
                  <feOffset in="bluralpha" dx="0.000000" dy="0.000000" result="offsetBlur"></feOffset>
                  <feMerge>
                    <feMergeNode in="offsetBlur"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
                <filter id="distortionFilter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.01 0.03" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="noise"></feTurbulence>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" data-min-scale="0" data-max-scale="100" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"></feDisplacementMap>
                </filter>
                <filter id="distortionFilter2">
                  <feGaussianBlur stdDeviation="10" result="glow"></feGaussianBlur>
                  <feTurbulence type="fractalNoise" baseFrequency="0 0.1" numOctaves="2" seed="2" stitchTiles="noStitch" x="-30%" y="-30%" width="160%" height="160%" result="noise"></feTurbulence>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" data-min-scale="0" data-max-scale="50" xChannelSelector="R" yChannelSelector="B" x="-30%" y="-30%" width="160%" height="160%" filterUnits="userSpaceOnUse" result="displacement"></feDisplacementMap>
                  <feMerge>
                    <feMergeNode in="glow"></feMergeNode>
                    <feMergeNode in="displacement"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
            </svg>
            <svg className="svgtext" data-filter-type="blur" width="180%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 900 165">
              <path id="text-curve11" d="M 0 100 Q 250 0 500 100 Q 750 200 1000 -400" fill="none"></path>
              <text filter="url(#blur2)">
                <textPath href="#text-curve11">
                  Premios Global Guide Awards Premios Global Guide Awards Premios Global Guide Awards Premios Global Guide Awards
                </textPath>
              </text>
            </svg>
          </div>
        </section>
        {/* Fin Patrocinadores */}

        {/* start features */}
        <section className="tc-features-style41">
          <div className="container">
            <div className="section-title text-center mb-30 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="fsz-14 text-uppercase color-blue8 ltspc-1 mb-2"> Premios Global Guide </h6>
              <h2 class="fsz-40 text-capitalize"> Celebra la Excelencia </h2>
            </div>
            <div className="content wow fadeInUp" data-wow-delay="0.3s">
              <div className="row justify-content-between">
                <div className="col-lg-3">
                  <div className="features-card px-lg-4">
                    <div className="icon img-contain icon-80">
                      <img src="/saas/assets/img/icons/1.png" alt="" />
                    </div>
                    <div className="num">
                      <span> 01 </span>
                    </div>
                    <div className="info">
                      <h6 className=""> Reconociendo la Innovación </h6>
                      <div className="text"> Destacamos a emprendedores que impulsan el desarrollo económico con sus ideas innovadoras. </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="features-card px-lg-4">
                    <div className="icon img-contain icon-80">
                      <img src="/saas/assets/img/icons/2.png" alt="" />
                    </div>
                    <div className="num">
                      <span> 02 </span>
                    </div>
                    <div className="info">
                      <h6 className=""> Conectando Oportunidades </h6>
                      <div className="text"> Facilitamos conexiones estratégicas para la expansión de negocios en mercados globales. </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="features-card px-lg-4">
                    <div className="icon img-contain icon-80">
                      <img src="/saas/assets/img/icons/3.png" alt="" />
                    </div>
                    <div className="num">
                      <span> 03 </span>
                    </div>
                    <div className="info">
                      <h6 className=""> Inspirando Crecimiento </h6>
                      <div className="text"> Premiamos la dedicación y calidad, motivando la mejora continua y la excelencia empresarial. </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end features */}

        {/* start Mision-Vision */}

        <section
          style={{
            background: "#07070b",
            padding: "70px 0 90px",
            overflow: "hidden"
          }}
        >
          <style>{`

            .gg-mv-card {
              position: relative;
              overflow: hidden;
              min-height: 250px;
              margin-bottom: 22px;
              padding: 38px 45px;
              border: 1px solid rgba(226, 184, 82, .55);
              border-radius: 14px;

              background:
                radial-gradient(
                  circle at 12% 50%,
                  rgba(226, 184, 82, .16),
                  transparent 25%
                ),
                radial-gradient(
                  circle at 85% 20%,
                  rgba(226, 184, 82, .07),
                  transparent 30%
                ),
                linear-gradient(
                  110deg,
                  #18161b 0%,
                  #0b0b10 55%,
                  #11100e 100%
                );

              box-shadow:
                0 20px 50px rgba(0,0,0,.55),
                0 0 30px rgba(226,184,82,.08),
                inset 0 0 70px rgba(226,184,82,.025);

              transition:
                transform .6s ease,
                box-shadow .6s ease;
            }

            .gg-mv-card:hover {
              transform: translateY(-5px);

              box-shadow:
                0 25px 60px rgba(0,0,0,.65),
                0 0 45px rgba(226,184,82,.16),
                inset 0 0 80px rgba(226,184,82,.05);
            }

            /* línea luminosa superior */

            .gg-mv-card::before {
              content: "";
              position: absolute;
              top: 0;
              left: -30%;
              width: 30%;
              height: 1px;

              background: linear-gradient(
                90deg,
                transparent,
                #fff1b0,
                #e2b852,
                transparent
              );

              box-shadow:
                0 0 10px #e2b852,
                0 0 25px rgba(226,184,82,.7);

              animation: ggLight 6s linear infinite;
            }

            /* brillo lateral */

            .gg-mv-card::after {
              content: "";
              position: absolute;
              top: 15%;
              right: -80px;
              width: 180px;
              height: 180px;

              border-radius: 50%;

              background: rgba(226,184,82,.08);

              filter: blur(45px);

              animation: ggGlow 5s ease-in-out infinite;
            }

            /* PARTÍCULAS */

            .gg-particles {
              position: absolute;
              inset: 0;
              pointer-events: none;
              overflow: hidden;
            }

            .gg-particle {
              position: absolute;

              width: 3px;
              height: 3px;

              border-radius: 50%;

              background: #e8c66b;

              box-shadow:
                0 0 6px #e8c66b,
                0 0 16px rgba(232,198,107,.9);

              animation: ggParticle 7s linear infinite;
            }

            .gg-particle:nth-child(1)  { left: 4%;  bottom: 5%;  animation-delay: -1s; }
            .gg-particle:nth-child(2)  { left: 9%;  bottom: 20%; animation-delay: -3s; }
            .gg-particle:nth-child(3)  { left: 14%; bottom: 8%;  animation-delay: -5s; }
            .gg-particle:nth-child(4)  { left: 20%; bottom: 18%; animation-delay: -2s; }
            .gg-particle:nth-child(5)  { left: 28%; bottom: 5%;  animation-delay: -6s; }
            .gg-particle:nth-child(6)  { left: 36%; bottom: 15%; animation-delay: -4s; }
            .gg-particle:nth-child(7)  { left: 44%; bottom: 8%;  animation-delay: -1s; }
            .gg-particle:nth-child(8)  { left: 53%; bottom: 20%; animation-delay: -5s; }
            .gg-particle:nth-child(9)  { left: 61%; bottom: 7%;  animation-delay: -2s; }
            .gg-particle:nth-child(10) { left: 70%; bottom: 18%; animation-delay: -6s; }
            .gg-particle:nth-child(11) { left: 78%; bottom: 8%;  animation-delay: -3s; }
            .gg-particle:nth-child(12) { left: 87%; bottom: 20%; animation-delay: -5s; }
            .gg-particle:nth-child(13) { left: 93%; bottom: 6%;  animation-delay: -1s; }
            .gg-particle:nth-child(14) { left: 48%; bottom: 30%; animation-delay: -4s; }
            .gg-particle:nth-child(15) { left: 31%; bottom: 28%; animation-delay: -7s; }
            .gg-particle:nth-child(16) { left: 67%; bottom: 27%; animation-delay: -2s; }

            /* ONDA DORADA */

            .gg-wave {
              position: absolute;

              left: -5%;
              bottom: -66px;

              width: 65%;
              height: 100px;

              border-radius: 50%;

              border-top: 2px solid rgba(238,199,101,.85);

              box-shadow:
                0 -8px 20px rgba(238,199,101,.45),
                0 -20px 50px rgba(238,199,101,.15);

              transform: rotate(-3deg);

              animation: ggWave 6s ease-in-out infinite;
            }

            .gg-wave-small {
              position: absolute;

              left: -2%;
              bottom: -76px;

              width: 52%;
              height: 95px;

              border-radius: 50%;

              border-top: 1px solid rgba(255,226,145,.65);

              animation: ggWaveSmall 8s ease-in-out infinite;
            }

            /* DESTELLOS */

            .gg-spark {
              position: absolute;

              color: #ffe9a4;

              font-size: 16px;

              text-shadow:
                0 0 8px #e8c66b,
                0 0 22px rgba(232,198,107,.9);

              animation: ggSpark 3s ease-in-out infinite;
            }

            .gg-spark-1 {
              left: 43%;
              bottom: 30px;
            }

            .gg-spark-2 {
              left: 67%;
              top: 30px;
              animation-delay: -1.2s;
            }

            .gg-spark-3 {
              right: 12%;
              bottom: 35px;
              animation-delay: -2s;
            }

            /* ICONO */

            .gg-icon {
              position: absolute;

              left: 38px;
              top: 50%;

              transform: translateY(-50%);

              width: 108px;
              height: 108px;

              display: flex;
              align-items: center;
              justify-content: center;

              border-radius: 50%;

              border: 1px solid rgba(235,194,92,.8);

              background:
                radial-gradient(
                  circle,
                  rgba(235,194,92,.15),
                  transparent 65%
                );

              box-shadow:
                0 0 20px rgba(235,194,92,.30),
                0 0 45px rgba(235,194,92,.12),
                inset 0 0 30px rgba(235,194,92,.12);

              animation: ggIcon 4s ease-in-out infinite;

              z-index: 4;
            }

            .gg-icon::before {
              content: "";

              position: absolute;

              inset: 8px;

              border-radius: 50%;

              border: 1px solid rgba(235,194,92,.28);

              animation: ggRing 8s linear infinite;
            }

            .gg-icon i {
              position: relative;
              z-index: 2;

              color: #ebc65f;

              font-size: 46px;

              text-shadow:
                0 0 10px rgba(235,194,92,.8),
                0 0 25px rgba(235,194,92,.45);
            }

            /* TITULO */

            .gg-title-area {
              position: relative;

              margin-left: 145px;

              width: 31%;

              z-index: 5;
            }

            .gg-eyebrow {
              color: #d9ad4e;

              font-size: 10px;

              letter-spacing: 5px;

              margin-bottom: 15px;
            }

            .gg-title {
              margin: 0;

              color: #e9c366;

              font-family:
                Georgia,
                "Times New Roman",
                serif;

              font-size: 56px;

              font-weight: 500;

              letter-spacing: 1px;

              line-height: 1;

              text-shadow:
                0 0 8px rgba(233,195,102,.55),
                0 0 25px rgba(233,195,102,.18);
            }

            .gg-title-line {
              width: 85px;
              height: 2px;

              margin-top: 20px;

              background:
                linear-gradient(
                  90deg,
                  #dcae4e,
                  #ffe89a,
                  #dcae4e
                );

              box-shadow:
                0 0 10px rgba(233,195,102,.7);
            }

            /* TEXTO */

            .gg-text {
              position: absolute;

              left: 42%;

              right: 4%;

              top: 38px;

              z-index: 5;
            }

            .gg-main {
              color: #eee9df;

              font-family:
                Georgia,
                "Times New Roman",
                serif;

              font-size: 14px;

              line-height: 1.65;

              margin: 0;

              max-width: 850px;
            }

            .gg-divider {
              width: 100%;
              height: 1px;

              margin: 18px 0 15px;

              background:
                linear-gradient(
                  90deg,
                  rgba(225,182,79,.7),
                  rgba(225,182,79,.2),
                  transparent
                );

              box-shadow:
                0 0 8px rgba(225,182,79,.2);
            }

            .gg-secondary {
              color: #d9ad4e;

              font-size: 10px;

              line-height: 1.65;

              letter-spacing: 1.1px;

              text-transform: uppercase;

              margin: 0;
            }

            /* ANIMACIONES */

            @keyframes ggLight {
              from {
                left: -30%;
              }

              to {
                left: 110%;
              }
            }

            @keyframes ggGlow {
              0%,100% {
                transform: scale(.85);
                opacity: .4;
              }

              50% {
                transform: scale(1.2);
                opacity: .8;
              }
            }

            @keyframes ggParticle {
              0% {
                transform:
                  translate3d(0,25px,0)
                  scale(.3);

                opacity: 0;
              }

              20% {
                opacity: .8;
              }

              50% {
                transform:
                  translate3d(25px,-40px,0)
                  scale(1);

                opacity: 1;
              }

              100% {
                transform:
                  translate3d(-15px,-105px,0)
                  scale(.2);

                opacity: 0;
              }
            }

            @keyframes ggWave {
              0%,100% {
                transform:
                  translateX(0)
                  rotate(-3deg);
              }

              50% {
                transform:
                  translateX(35px)
                  rotate(-1deg);
              }
            }

            @keyframes ggWaveSmall {
              0%,100% {
                transform: translateX(0);
              }

              50% {
                transform: translateX(45px);
              }
            }

            @keyframes ggSpark {
              0%,100% {
                opacity: .2;
                transform: scale(.6) rotate(0deg);
              }

              50% {
                opacity: 1;
                transform: scale(1.4) rotate(45deg);
              }
            }

            @keyframes ggIcon {
              0%,100% {
                box-shadow:
                  0 0 20px rgba(235,194,92,.25),
                  0 0 45px rgba(235,194,92,.10),
                  inset 0 0 30px rgba(235,194,92,.08);
              }

              50% {
                box-shadow:
                  0 0 30px rgba(235,194,92,.5),
                  0 0 65px rgba(235,194,92,.20),
                  inset 0 0 35px rgba(235,194,92,.16);
              }
            }

            @keyframes ggRing {
              from {
                transform: rotate(0deg) scale(1);
              }

              to {
                transform: rotate(360deg) scale(1.04);
              }
            }

            /* RESPONSIVE */

            @media(max-width: 900px) {

              .gg-mv-card {
                min-height: 500px;
                padding: 35px 30px;
              }

              .gg-icon {
                position: relative;
                left: auto;
                top: auto;
                transform: none;

                margin: 0 auto 25px;
              }

              .gg-title-area {
                margin-left: 0;
                width: 100%;
                text-align: center;
              }

              .gg-title-line {
                margin-left: auto;
                margin-right: auto;
              }

              .gg-text {
                position: relative;

                left: auto;
                right: auto;
                top: auto;

                margin-top: 35px;
              }
            }

            @media(max-width: 600px) {

              .gg-mv-card {
                padding: 30px 22px 40px;
              }

              .gg-title {
                font-size: 42px;
              }

              .gg-main {
                font-size: 13px;
              }

              .gg-secondary {
                font-size: 9px;
              }
            }

          `}</style>

          <div
            style={{
              width: "90%",
              maxWidth: "1450px",
              margin: "0 auto"
            }}
          >

            {/* ================= MISIÓN ================= */}

            <div className="gg-mv-card">

              <div className="gg-particles">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="gg-particle"
                  />
                ))}
              </div>

              <span className="gg-spark gg-spark-1">✦</span>
              <span className="gg-spark gg-spark-2">✦</span>
              <span className="gg-spark gg-spark-3">✦</span>

              <div className="gg-wave"></div>
              <div className="gg-wave-small"></div>

              <div className="gg-icon">
                <i className="fas fa-bullseye"></i>
              </div>

              <div className="gg-title-area">

                <div className="gg-eyebrow">
                  PREMIOS GLOBAL GUIDE
                </div>

                <h2 className="gg-title">
                  MISIÓN
                </h2>

                <div className="gg-title-line"></div>

              </div>

              <div className="gg-text">

                <p className="gg-main">
                  Destacar y celebrar a los emprendedores a nivel nacional e
                  internacional que demuestran una cultura productiva ejemplar y una
                  calidad de producto excepcional. Reconociendo el esfuerzo y la
                  dedicación de quienes innovan y contribuyen al desarrollo económico,
                  e inspirando a otros a seguir sus pasos.
                </p>

                <div className="gg-divider"></div>

                <p className="gg-secondary">
                  VALORAR EL TRABAJO Y LA CREATIVIDAD DE LOS EMPRENDEDORES Y FOMENTAR
                  UN ENTORNO DONDE LA EXCELENCIA Y LA MEJORA CONTINUA SON
                  RECOMPENSADAS, PROMOVIENDO ASÍ UN ECOSISTEMA EMPRESARIAL MÁS
                  DINÁMICO Y COMPETITIVO.
                </p>

              </div>

            </div>


            {/* ================= VISIÓN ================= */}

            <div className="gg-mv-card">

              <div className="gg-particles">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="gg-particle"
                  />
                ))}
              </div>

              <span className="gg-spark gg-spark-1">✦</span>
              <span className="gg-spark gg-spark-2">✦</span>
              <span className="gg-spark gg-spark-3">✦</span>

              <div
                className="gg-wave"
                style={{
                  left: "35%",
                  transform: "rotate(3deg)"
                }}
              ></div>

              <div
                className="gg-wave-small"
                style={{
                  left: "40%"
                }}
              ></div>

              <div className="gg-icon">
                <i className="fas fa-eye"></i>
              </div>

              <div className="gg-title-area">

                <div className="gg-eyebrow">
                  PREMIOS GLOBAL GUIDE
                </div>

                <h2 className="gg-title">
                  VISIÓN
                </h2>

                <div className="gg-title-line"></div>

              </div>

              <div className="gg-text">

                <p className="gg-main">
                  Nuestra meta a futuro es lograr la integración internacional de los
                  premios, posibilitando su celebración en cada uno de los países
                  aliados a nuestra plataforma. Aspiramos al reconocimiento de los
                  productos de los emprendedores a corto plazo mediante acuerdos
                  comerciales. Para alcanzar esta ambiciosa visión, seguimos
                  estrategias clave.
                </p>

                <div className="gg-divider"></div>

                <p className="gg-secondary">
                  APROVECHAREMOS NUESTRA CREDIBILIDAD Y VISIBILIDAD PARA IMPULSAR LA
                  ENTRADA EN MERCADOS EXTRANJEROS. LAS RUEDAS DE NEGOCIOS SE PRESENTAN
                  COMO UNA EXCELENTE HERRAMIENTA PARA ESTE PROPÓSITO, YA QUE PERMITEN
                  A LOS EMPRENDEDORES CONECTAR DIRECTAMENTE CON POTENCIALES SOCIOS
                  COMERCIALES, DISTRIBUIDORES E INVERSORES DE OTROS PAÍSES.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* end Mision-Vision */}
      </main>
      {/* End-Contents */}

      {/* start footer */}
      <footer className="tc-footer-style41">
        <div className="container">
          <div className="foot">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="foot-logo">
                  <img src="/saas/assets/img/LogoPremioMini.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="foot-links text-lg-end mt-4 mt-lg-0">
                  <Link to="/home" className="fw-bold me-50 hover-underLine"> Inicio </Link>
                  <Link to="/categorias" className="fw-bold me-50 hover-underLine"> Categorias </Link>
                  <a href="#" className="fw-bold hover-underLine"> Terminos & Condiciones </a>
                </div>
              </div>
            </div>
            <div className="foot-btm mt-30 py-4 border-top border-1 brd-light">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="foot-social text-lg-end mt-4 mt-lg-0">
                    <a href="#" className="me-20 hover-darkBlue6"> <i className="fab fa-facebook-f"></i> </a>
                    <a href="https://www.instagram.com/globalguideawards/?igsh=NTc4MTIwNjQ2YQ%3D%3D" target="_blank" rel="noopener noreferrer" className="me-20 hover-darkBlue6"> <i className="fab fa-instagram"></i> </a>
                    <a href="#" className="me-20 hover-darkBlue6"> <i className="fab fa-youtube"></i> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </div>
  );
}

export default HomePage;
