import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import useScripts from '../hooks/useScripts';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function CountdownPage() {
  // Load page-specific styles
  useStylesheet('/css/bootstrap.min.css');
  useStylesheet('/css/bootstrap-icons.css');
  useStylesheet('/css/tooplate-kool-form-pack.css');

  // Load bootstrap script for offcanvas menu
  useScripts([
    '/js/jquery.min.js',
    '/js/bootstrap.bundle.min.js'
  ]);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 38,
    hours: 14,
    minutes: 27,
    seconds: 59,
    finished: false
  });

  useEffect(() => {
    const countDownDate = new Date("April 8, 2026 15:37:25").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setTimeLeft(prev => ({ ...prev, finished: true }));
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          finished: false
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-page-wrapper">
      {/* Custom CSS to match the premium design perfectly and respect absolute pixel-fidelity */}
      <style>{`
          .countdown-page-wrapper {
            background-color: #000;
            color: #fff;
            font-family: 'Poppins', sans-serif;
            height: 100vh;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
          }
          .site-header {
            background: transparent;
            padding: 8px 0;
            position: relative;
            z-index: 150;
          }
          .site-logo {
            height: clamp(38px, 4vw, 50px);
            width: auto;
            object-fit: contain;
            margin-left: -280px;
            margin-top: -5px;
          }
          .nav-link-custom {
            color: #fff !important;
            font-weight: 500;
            font-size: 15px;
            text-decoration: none;
            margin: 0 15px;
            transition: color 0.3s;
            position: relative;
          }
          .nav-link-custom:hover {
            color: #087A45 !important;
          }
          .nav-link-custom.active::after {
            content: '';
            position: absolute;
            width: 60%;
            height: 2px;
            background: #087A45;
            bottom: -5px;
            left: 20%;
          }
          .separator-line {
            color: rgba(255, 255, 255, 0.3);
            margin: 0 15px;
          }
          .social-link-custom {
            color: #fff;
            font-size: 18px;
            margin-left: 15px;
            transition: color 0.3s;
          }
          .social-link-custom:hover {
            color: #c5a880;
          }
          
          .main-content-area {
            flex-grow: 1;
            display: flex;
            align-items: center;
            position: relative;
            z-index: 100;
            margin-top: -25px;

            /* ALTURA DEL HERO */
            min-height: 760px;
            height: 760px;
            overflow: visible;
          }
          .main-content-area > .container {
            position: relative;
            z-index: 10;
          }
          
          .tagline-gold {
            color: #FFD700;
            font-size: 16px;
            margin-bottom: 20px;
            line-height: 1.4;
            display: flex;
            flex-direction: column;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.35);
          }
          .tagline-gold-row {
            display: flex;
            align-items: center;
          }
          .tagline-line-decor {
            width: 50px;
            height: 2px;
            background-color: #FFD700;
            margin-right: 15px;
            display: inline-block;
            box-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
          }
          .tagline-gold span.desc {
            display: block;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.8);
            margin-top: 6px;
            padding-left: 65px; /* Aligned with the text under the horizontal line */
          }
          .hero-title-custom {
            font-family: 'Unbounded', sans-serif;
            font-weight: 700;
            font-size: 50px;
            line-height: 1.1;
            margin-bottom: 18px;
            letter-spacing: -1px;
          }
          .hero-title-custom span {
            color: #FFD700;
            text-shadow: 0 0 15px rgba(255, 215, 0, 0.25);
          }
          .countdown-container-custom {
            border: 1px solid rgba(229, 183, 80, 0.4);
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.55);
            padding: 20px 35px;
            max-width: 500px;
            margin-bottom: 30px;
          }
          .countdown-digits {
            font-family: 'Unbounded', sans-serif;
            font-weight: 700;
            font-size: 34px;
            color: #fff;
            line-height: 1;
          }
          .countdown-colon {
            color: #e5b750;
            font-size: 30px;
            margin: 0 10px;
            line-height: 1;
            font-weight: 300;
          }
          .countdown-labels {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-top: 6px;
          }
          .btn-gold-solid {
            background: #FFD700;
            color: #000 !important;
            font-weight: 700;
            border-radius: 30px;
            padding: 13px 30px;
            border: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            text-decoration: none;
            font-size: 16px;
            box-shadow: 0 0 18px rgba(255, 215, 0, 0.25);
          }

          .btn-gold-solid:hover {
            background: #FFC400;
            transform: translateY(-3px);
            box-shadow: 0 0 28px rgba(255, 215, 0, 0.45);
          }
          .btn-gold-outline {
            background: transparent;
            color: #fff !important;
            font-weight: 600;
            border-radius: 30px;
            padding: 12px 28px;
            border: 1px solid #e5b750;
            transition: border-color 0.3s, color 0.3s;
            text-decoration: none;
            margin-left: 20px;
            font-size: 16px;
          }
        
          .btn-gold-outline:hover {
            border-color: #fff;
            color: #fff !important;
          }
          .live-label {
            font-size: 15px;
            color: rgba(255, 255, 255, 0.9);
            margin-top: 25px;
            display: flex;
            align-items: center;
          }
          .live-label span.star {
            color: #e5b750;
            margin-right: 10px;
            font-size: 20px;
          }
          
          .sponsors-footer-section {
            background: #0d0d0d;
            border-top: 1px solid rgba(197, 168, 128, 0.2);
            padding: 10px 0 12px 0;

            /* DEBAJO DEL PENDÓN */
            position: relative;
            z-index: 1;

            margin-top: 50px;
          }
          .sponsors-title-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
          }
          .sponsors-title-line {
            height: 1px;
            background: rgba(197, 168, 128, 0.3);
            flex-grow: 1;
            max-width: 150px;
          }
          .sponsors-title-text {
            color: #c5a880;
            font-size: 12px;
            letter-spacing: 2px;
            margin: 0 20px;
            font-weight: 600;
          }
          .sponsor-col-item {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sponsor-col-item:not(:last-child) {
            border-right: 1px solid rgba(197, 168, 128, 0.2);
          }
          .sponsor-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 15px;
          }
          .sponsor-logo-img {
            max-width: 110px;
            max-height: 50px;
            width: auto;
            height: auto;
            object-fit: contain;
            margin-bottom: 10px;
          }
          .trophy-mini-img {
            height: 25px;
            object-fit: contain;
          }
          
          .video-wrap {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
            display: block;
          }

          .video-wrap video {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 1;
            visibility: visible;
          }
          
          @media (max-width: 991px) {
            .countdown-page-wrapper {
              height: auto;
              overflow: auto;
            }
            .main-content-area {
              padding-top: 50px;
              padding-bottom: 50px;
            }
            .video-wrap video {
              object-position: center;
            }
            .sponsor-col-item:not(:last-child) {
              border-right: none;
              border-bottom: 1px solid rgba(197, 168, 128, 0.2);
              padding-bottom: 15px;
              margin-bottom: 15px;
            }
            .tagline-gold span.desc {
              padding-left: 0;
            }
          }

          /* =========================================
            RESPONSIVE - LAPTOPS Y MONITORES
            ========================================= */

          @media (min-width: 992px) {

            .hero-title-custom {
              font-size: clamp(36px, 3.2vw, 50px);
              line-height: 1.08;
            }

            .tagline-gold {
              font-size: clamp(14px, 1.2vw, 16px);
            }

            .tagline-gold span.desc {
              font-size: clamp(13px, 1.1vw, 15px);
            }

            .countdown-container-custom {
              width: min(500px, 42vw);
              padding: 16px 25px;
            }

            .countdown-digits {
              font-size: clamp(27px, 2.3vw, 34px);
            }

            .countdown-colon {
              font-size: clamp(24px, 2vw, 30px);
              margin: 0 7px;
            }

            .btn-gold-solid,
            .btn-gold-outline {
              font-size: clamp(13px, 1.1vw, 16px);
              padding: 11px 24px;
            }

            .live-label {
              font-size: clamp(12px, 1vw, 15px);
              margin-top: 18px;
            }
          }


          /* =========================================
            PANTALLAS DE POCA ALTURA
            Ej: laptops de 14", 15", etc.
            ========================================= */

          @media (min-width: 992px) and (max-height: 800px) {

            .site-header {
              padding: 4px 0;
            }

            .site-logo {
              height: 42px;
              margin-top: -4px;
            }

            .main-content-area {
              margin-top: -15px;
            }

            .tagline-gold {
              margin-bottom: 10px;
            }

            .hero-title-custom {
              font-size: 40px;
              margin-bottom: 12px;
            }

            .countdown-container-custom {
              padding: 12px 22px;
              margin-bottom: 18px;
            }

            .countdown-digits {
              font-size: 28px;
            }

            .countdown-colon {
              font-size: 24px;
            }

            .btn-gold-solid,
            .btn-gold-outline {
              padding: 9px 20px;
              font-size: 14px;
            }

            .live-label {
              margin-top: 12px;
              font-size: 13px;
            }

            .sponsors-footer-section {
              padding: 7px 0 8px;
            }

            .sponsors-title-container {
              margin-bottom: 6px;
            }

            .sponsor-logo-img {
              max-height: 35px;
              margin-bottom: 5px;
            }

            .trophy-mini-img {
              height: 18px;
            }
          }


          /* =========================================
            TABLETS
            ========================================= */

          @media (min-width: 576px) and (max-width: 991px) {

            .countdown-page-wrapper {
              min-height: 100vh;
              height: auto;
              overflow-x: hidden;
              overflow-y: auto;
            }

            .site-header {
              padding: 10px 0;
            }

            .site-logo {
              height: 45px;
              margin-left: 0;
              margin-top: 0;
            }

            .main-content-area {
              padding-top: 35px;
              padding-bottom: 35px;
              margin-top: 0;
            }

            .hero-title-custom {
              font-size: clamp(34px, 6vw, 48px);
            }

            .countdown-container-custom {
              max-width: 500px;
              width: 100%;
              box-sizing: border-box;
            }

            .sponsors-footer-section {
              padding: 15px 0;
            }
          }


          /* =========================================
            CELULARES
            ========================================= */

          @media (max-width: 575px) {

            .countdown-page-wrapper {
              min-height: 100vh;
              height: auto;
              overflow-x: hidden;
              overflow-y: auto;
            }

            .site-header {
              padding: 8px 0;
            }

            .site-logo {
              height: 40px;
              margin-left: 0;
              margin-top: 0;
            }

            .main-content-area {
              padding: 35px 15px 40px;
              margin-top: 0;
              align-items: flex-start;
            }

            .main-content-area > .container {
              width: 100%;
            }

            .tagline-gold {
              font-size: 14px;
              margin-bottom: 14px;
            }

            .tagline-line-decor {
              width: 30px;
              margin-right: 10px;
            }

            .tagline-gold span.desc {
              font-size: 12px;
              padding-left: 40px;
              margin-top: 5px;
            }

            .hero-title-custom {
              font-size: clamp(28px, 8vw, 38px);
              line-height: 1.08;
              letter-spacing: -0.5px;
              margin-bottom: 18px;
            }

            .countdown-container-custom {
              width: 100%;
              max-width: none;
              padding: 14px 10px;
              margin-bottom: 20px;
            }

            .countdown-digits {
              font-size: clamp(20px, 6vw, 28px);
            }

            .countdown-colon {
              font-size: 20px;
              margin: 0 3px;
            }

            .countdown-labels {
              font-size: 9px;
              letter-spacing: 0.5px;
            }

            .main-content-area .d-flex.align-items-center {
              flex-wrap: wrap;
              gap: 10px;
            }

            .btn-gold-solid,
            .btn-gold-outline {
              font-size: 13px;
              padding: 10px 18px;
              margin-left: 0;
            }

            .live-label {
              font-size: 12px;
              margin-top: 16px;
            }

            .live-label span.star {
              font-size: 16px;
              margin-right: 7px;
            }

            .sponsors-footer-section {
              padding: 12px 10px 15px;
            }

            .sponsors-title-container {
              margin-bottom: 12px;
            }

            .sponsors-title-text {
              font-size: 9px;
              letter-spacing: 1px;
              margin: 0 10px;
            }

            .sponsors-title-line {
              max-width: 60px;
            }

            .sponsor-col-item {
              padding: 8px 5px;
            }

            .sponsor-card {
              padding: 0 5px;
            }

            .sponsor-logo-img {
              max-width: 85px;
              max-height: 38px;
              margin-bottom: 5px;
            }

            .trophy-mini-img {
              height: 18px;
            }
          }


          /* =========================================
            CELULARES MUY PEQUEÑOS
            ========================================= */

          @media (max-width: 380px) {

            .hero-title-custom {
              font-size: 26px;
            }

            .countdown-container-custom {
              padding: 12px 5px;
            }

            .countdown-digits {
              font-size: 18px;
            }

            .countdown-colon {
              font-size: 17px;
              margin: 0 2px;
            }

            .countdown-labels {
              font-size: 8px;
            }

            .btn-gold-solid,
            .btn-gold-outline {
              font-size: 12px;
              padding: 9px 14px;
            }

            .sponsor-logo-img {
              max-width: 75px;
            }
          }
          /* =========================================================
            ESTADOS DEL EVENTO
          ========================================================= */

          

          .gga-event-title {
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            gap: 18px;

            margin-bottom: 18px;
          }

          .gga-event-title span {
            height: 1px;

            flex: 1;

            background: rgba(197, 157, 76, 0.55);
          }

          .gga-event-title h2 {
            margin: 0;

            color: #d9a928;

            font-size: 13px;
            font-weight: 600;

            letter-spacing: 1.5px;

            white-space: nowrap;
          }


          /* FILA DE LAS 4 TARJETAS */

          .gga-states-row {
            width: 100%;

            display: grid;

            grid-template-columns:
              1fr 30px
              1fr 30px
              1fr 30px
              1fr;

            align-items: center;

            gap: 0;
          }


          /* TARJETA */

          .gga-state-card {
            min-width: 0;

            height: 100px;

            box-sizing: border-box;

            padding: 15px 18px;

            display: flex;
            align-items: center;

            gap: 14px;

            border: 1px solid rgba(197, 157, 76, 0.42);

            border-radius: 10px;

            background:
              linear-gradient(
                135deg,
                rgba(255,255,255,0.055),
                rgba(255,255,255,0.012)
              );

            box-shadow:
              inset 0 0 20px rgba(255,255,255,0.015),
              0 8px 30px rgba(0,0,0,0.25);

            transition:
              border-color .3s ease,
              transform .3s ease,
              background .3s ease;
          }

          .gga-state-card:hover {
            border-color: rgba(217,169,40,0.85);

            background:
              linear-gradient(
                135deg,
                rgba(217,169,40,0.08),
                rgba(255,255,255,0.015)
              );

            transform: translateY(-2px);
          }


          /* ICONO */

          .gga-state-icon {
            width: 46px;
            height: 46px;

            min-width: 46px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1.5px solid #d9a928;

            border-radius: 50%;

            color: #d9a928;

            font-size: 22px;

            box-sizing: border-box;
          }

          .gga-state-icon i {
            color: #d9a928;
          }


          /* TEXTO */

          .gga-state-info {
            min-width: 0;
          }

          .gga-state-info h3 {
            margin: 0 0 3px;

            color: #fff;

            font-size: 14px;
            font-weight: 600;

            line-height: 1.2;

            white-space: nowrap;
          }

          .gga-state-info strong {
            display: block;

            margin-bottom: 5px;

            color: #d9a928;

            font-size: 9px;
            font-weight: 700;

            letter-spacing: .5px;
          }

          .gga-state-info p {
            margin: 0;

            color: rgba(255,255,255,.68);

            font-size: 9px;

            line-height: 1.35;
          }


          /* FLECHAS */

          .gga-state-arrow {
            display: flex;

            align-items: center;
            justify-content: center;

            color: #d9a928;

            font-size: 22px;
            font-weight: 300;
          }


          /* =========================================================
            CAMPAÑA TEMPORAL
            ========================================================= */

          .gga-campaign {
            position: relative;
            z-index: 20;

            width: calc(100% - 60px);
            max-width: 1280px;

            height: 140px;

            margin: 8px auto 35px;

            display: grid;

            grid-template-columns:
              1.55fr
              .55fr
              1.15fr;

            overflow: hidden;

            border: 1px solid #c99b38;

            border-radius: 11px;

            background: #050505;

            box-sizing: border-box;
          }


          /* TEXTO */

          .gga-campaign-content {
            display: flex;

            flex-direction: column;

            justify-content: center;

            padding: 18px 24px;

            box-sizing: border-box;
          }

          .gga-campaign-label {
            display: block;

            margin-bottom: 5px;

            color: #d9a928;

            font-size: 10px;

            font-weight: 700;

            letter-spacing: .5px;
          }

          .gga-campaign-content h2 {
            margin: 0;

            color: #fff;

            font-size: 20px;

            font-weight: 700;

            line-height: 1.1;
          }

          .gga-campaign-motto {
            margin-top: 6px;

            color: #d9a928;

            font-size: 12px;

            font-weight: 700;
          }

          .gga-campaign-motto span {
            color: #fff;

            margin: 0 3px;
          }

          .gga-campaign-content p {
            margin: 5px 0 0;

            max-width: 470px;

            color: rgba(255,255,255,.72);

            font-size: 9px;

            line-height: 1.35;
          }


          /* FECHA */

          .gga-campaign-date {
            display: flex;

            flex-direction: column;

            justify-content: center;

            align-items: flex-start;

            padding: 15px;

            border-left: 1px solid rgba(197,157,76,.22);
            border-right: 1px solid rgba(197,157,76,.22);

            box-sizing: border-box;
          }

          .gga-campaign-date i {
            color: #d9a928;

            font-size: 21px;

            margin-bottom: 4px;
          }

          .gga-campaign-date span {
            color: #fff;

            font-size: 12px;

            font-weight: 700;
          }

          .gga-campaign-date strong {
            color: #d9a928;

            font-size: 10px;

            font-weight: 700;
          }

          .gga-campaign-btn {
            margin-top: 9px;

            padding: 7px 14px;

            border: 0;

            border-radius: 18px;

            background: linear-gradient(
              135deg,
              #f0c45b,
              #b77e22
            );

            color: #080808;

            font-size: 9px;

            font-weight: 700;

            cursor: pointer;
          }


          /* IMAGEN */

          .gga-campaign-image {
            position: relative;

            width: 100%;
            height: 100%;

            overflow: hidden;
          }

          .gga-campaign-image img {
            width: 100%;
            height: 100%;

            display: block;

            object-fit: cover;

            object-position: center;
          }

          .gga-campaign-image::after {
            content: "";

            position: absolute;

            inset: 0;

            background:
              linear-gradient(
                90deg,
                rgba(0,0,0,.3),
                transparent 45%
              );
          }

          

          /* =========================================================
            CONTENEDOR PRINCIPAL
            ========================================================= */

          .countdown-page-wrapper {
            height: auto !important;

            min-height: 100vh;

            overflow-x: hidden !important;
            overflow-y: auto !important;

            display: block !important;
          }


          /* =========================================================
            RESPONSIVE
            ========================================================= */

          @media (max-width: 1000px) {

            .gga-states-row {
              grid-template-columns: 1fr 1fr;

              gap: 12px;
            }

            .gga-state-arrow {
              display: none;
            }

            .gga-campaign {
              height: auto;

              grid-template-columns: 1fr;
            }

            .gga-campaign-date {
              border-left: 0;
              border-right: 0;

              border-top: 1px solid rgba(197,157,76,.22);
              border-bottom: 1px solid rgba(197,157,76,.22);
            }

            .gga-campaign-image {
              height: 220px;
            }
          }


          @media (max-width: 600px) {

            .gga-event-states {
              padding: 25px 15px 15px;
            }

            .gga-states-row {
              grid-template-columns: 1fr;
            }

            .gga-state-card {
              height: 90px;
            }

            .gga-state-arrow {
              display: none;
            }

            .gga-campaign {
              width: calc(100% - 30px);
            }

            .gga-campaign-content {
              padding: 20px;
            }

            .gga-campaign-content h2 {
              font-size: 18px;
            }
          }  
        `}</style>


      {/* Top Header/Navbar */}
      <header className="site-header">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <Link to="/home">
                <img src="/saas/assets/img/LogoPremioLado.png" className="site-logo" alt="Global Guide Awards Logo" />
              </Link>
            </div>

            <div className="col d-none d-lg-flex justify-content-end align-items-center">
              <Link className="nav-link-custom active" to="/">Inicio</Link>
              <Link className="nav-link-custom" to="/categorias">Categorías</Link>
              <Link className="nav-link-custom" to="/register">Registro</Link>
              <Link className="nav-link-custom" to="/contact">Contacto</Link>

              <span className="separator-line">|</span>

              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>
                Síguenos
              </span>

              <a
                href="https://www.instagram.com/globalguideawards/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-custom"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-custom"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-custom"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div className="col-auto d-lg-none">
              <a className="bi-list offcanvas-icon" style={{ fontSize: '24px', color: '#fff' }} data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu"></a>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Menu for Mobile */}
      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#000' }}>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
              <li className="my-3"><Link to="/" style={{ color: '#fff', fontSize: '20px', textDecoration: 'none' }}>Inicio</Link></li>
              <li className="my-3"><Link to="/categorias" style={{ color: '#fff', fontSize: '20px', textDecoration: 'none' }}>Categorías</Link></li>
              <li className="my-3"><Link to="/register" style={{ color: '#fff', fontSize: '20px', textDecoration: 'none' }}>Registro</Link></li>
              <li className="my-3"><Link to="/contact" style={{ color: '#fff', fontSize: '20px', textDecoration: 'none' }}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero / Main Content Area */}
      <section className="main-content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="tagline-gold">
                <div className="tagline-gold-row">
                  <span className="tagline-line-decor"></span>
                  "Nuestro talento nos engrandece"
                </div>
                <span className="desc">Ven y seamos testigos de lo mejor de nuestro arte.</span>
              </div>

              <h1 className="hero-title-custom">
                Premiación<br />
                Global Guide<br />
                Awards <span>2026</span>
              </h1>

              {/* Countdown Container */}
              <div className="countdown-container-custom">
                <div className="d-flex justify-content-between text-center align-items-center">
                  <div>
                    <div className="countdown-digits">{timeLeft.days}</div>
                    <div className="countdown-labels">Días</div>
                  </div>
                  <div className="countdown-colon">:</div>
                  <div>
                    <div className="countdown-digits">{timeLeft.hours}</div>
                    <div className="countdown-labels">Horas</div>
                  </div>
                  <div className="countdown-colon">:</div>
                  <div>
                    <div className="countdown-digits">{timeLeft.minutes}</div>
                    <div className="countdown-labels">Minutos</div>
                  </div>
                  <div className="countdown-colon">:</div>
                  <div>
                    <div className="countdown-digits">{timeLeft.seconds}</div>
                    <div className="countdown-labels">Segundos</div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="d-flex align-items-center">
                <Link to="/categorias" className="btn-gold-solid">
                  Ver categorías &nbsp; ➔
                </Link>
                <Link to="/categorias" className="btn-gold-outline">
                  Conocer nominados
                </Link>
              </div>

              {/* Subtitle */}
              <div className="live-label">
                <span className="star">★</span>
                <span>Prelanzamiento, Votación y Ceremonia en Vivo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shipped Video Globe to the 90% width mark */}
        <div className="video-wrap">
          <video autoPlay loop muted playsInline className="custom-video" poster="">
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* PENDÓN */}
      <div className="gga-side-pendon">

        {/* ESTADOS DEL EVENTO */}
        <section className="gga-event-states">

          <div className="gga-event-title">
            <span></span>
            <h2>ESTADOS DEL EVENTO</h2>
            <span></span>
          </div>

          <div className="gga-states-row">

            <div className="gga-state-card">
              <div className="gga-state-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>

              <div className="gga-state-info">
                <h3>Prelanzamiento</h3>
                <strong>OCTUBRE</strong>
                <p>Conoce las categorías<br />y prepárate para participar.</p>
              </div>
            </div>

            <div className="gga-state-arrow">→</div>

            <div className="gga-state-card">
              <div className="gga-state-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>

              <div className="gga-state-info">
                <h3>Registro</h3>
                <strong>PRÓXIMAMENTE</strong>
                <p>Inscribe tu proyecto<br />y forma parte de los mejores.</p>
              </div>
            </div>

            <div className="gga-state-arrow">→</div>

            <div className="gga-state-card">
              <div className="gga-state-icon">
                <i className="bi bi-check-circle"></i>
              </div>

              <div className="gga-state-info">
                <h3>Votación</h3>
                <strong>PRÓXIMAMENTE</strong>
                <p>Apoya a tus favoritos<br />y haz que tu voz cuente.</p>
              </div>
            </div>

            <div className="gga-state-arrow">→</div>

            <div className="gga-state-card">
              <div className="gga-state-icon">
                <i className="bi bi-broadcast"></i>
              </div>

              <div className="gga-state-info">
                <h3>Ceremonia en vivo</h3>
                <strong>PRÓXIMAMENTE</strong>
                <p>Celebramos juntos<br />a los ganadores.</p>
              </div>
            </div>

          </div>

        </section>


        {/* CAMPAÑA TEMPORAL */}
        <section className="gga-campaign">

          <div className="gga-campaign-content">

            <span className="gga-campaign-label">
              CAMPAÑA TEMPORAL
            </span>

            <h2>
              SEMANA DEL EMPRENDIMIENTO
            </h2>

            <div className="gga-campaign-motto">
              INSPIRA <span>•</span> CONECTA <span>•</span> TRANSFORMA
            </div>

            <p>
              Una semana dedicada a impulsar ideas, compartir conocimiento
              y conectar talento con comunidades.
            </p>

            <button className="gga-campaign-btn">
              Conoce la agenda →
            </button>

          </div>


          <div className="gga-campaign-date">

            <div className="gga-calendar-box">
              <i className="bi bi-calendar3"></i>
            </div>

            <div className="gga-campaign-date-text">
              <span>DEL 20 AL 26</span>
              <strong>DE OCTUBRE</strong>
            </div>

            <Link
              to="/categorias"
              className="gga-campaign-button"
            >
              Conoce la agenda →
            </Link>

          </div>


          <div className="gga-campaign-image">

            <img
              src="/assets/img/home_10/porfolio/ArtesPls5.jpg"
              alt="Campaña Global Guide Awards"
            />

          </div>

        </section>


      </div>

      {/* Lighter black container for Sponsors Footer Section */}
      <section className="sponsors-footer-section"></section>

      {/* Lighter black container for Sponsors Footer Section */}
      <section className="sponsors-footer-section">
        <div className="container">
          <div className="sponsors-title-container">
            <div className="sponsors-title-line"></div>
            <div className="sponsors-title-text">PATROCINADORES OFICIALES</div>
            <div className="sponsors-title-line"></div>
          </div>

          <div className="row text-center align-items-center justify-content-center">
            <div className="col-lg-2 col-md-3 col-6 sponsor-col-item">
              <div className="sponsor-card">
                <a href="https://optimizapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/img/LogoOptimizappBlanco.png" className="sponsor-logo-img" alt="OptimizApp Logo" />
                </a>
                <img src="/saas/assets/img/trofeoMini.png" className="trophy-mini-img" alt="Golden Trophy" />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6 sponsor-col-item">
              <div className="sponsor-card">
                <a href="https://micm.gob.do/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/img/LogoMICM.jpeg" className="sponsor-logo-img" alt="MICM Logo" />
                </a>
                <img src="/saas/assets/img/trofeoMini.png" className="trophy-mini-img" alt="Golden Trophy" />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6 sponsor-col-item">
              <div className="sponsor-card">
                <a href="https://www.fodearte.gob.do/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/img/LogoFodearte.png" className="sponsor-logo-img" alt="Fodearte Logo" />
                </a>
                <img src="/saas/assets/img/trofeoMini.png" className="trophy-mini-img" alt="Golden Trophy" />
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6 sponsor-col-item">
              <div className="sponsor-card">
                <a href="https://inaguja.gob.do/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/img/LogoINAGUJA.png" className="sponsor-logo-img" alt="INAGUJA Logo" />
                </a>
                <img src="/saas/assets/img/trofeoMini.png" className="trophy-mini-img" alt="Golden Trophy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CountdownPage;
