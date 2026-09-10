import React from 'react';
import { Link } from 'react-router-dom';
import useStylesheet from '../hooks/useStylesheet';
import useScripts from '../hooks/useScripts';

function LoginPage() {
  // Load page-specific styles
  useStylesheet('/css/bootstrap.min.css');
  useStylesheet('/css/bootstrap-icons.css');
  useStylesheet('/css/tooplate-kool-form-pack.css');

  // Load interactive scripts
  useScripts([
    '/js/jquery.min.js',
    '/js/bootstrap.bundle.min.js'
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted');
  };

  return (
    <div className="login-page-wrapper">
      <main>
        <header className="site-header">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-12 col-12 d-flex">
                <Link className="site-header-text d-flex justify-content-center align-items-center me-auto" to="/">
                  <i className="bi-box"></i>
                  <span>Global Guide Awards</span>
                </Link>

                <ul className="social-icon d-flex justify-content-center align-items-center mx-auto">
                  <span className="text-white me-4 d-none d-lg-block">Ingresa</span>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-instagram"></a>
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-twitter"></a>
                  </li>
                  <li className="social-icon-item">
                    <a href="#" className="social-icon-link bi-whatsapp"></a>
                  </li>
                </ul>

                <div>
                  <Link to="/categorias" className="custom-btn custom-border-btn btn">
                    Categorias
                    <i className="bi-arrow-right ms-2"></i>
                  </Link>
                </div>

                <a className="bi-list offcanvas-icon" data-bs-toggle="offcanvas" href="#offcanvasMenu" role="button" aria-controls="offcanvasMenu"></a>
              </div>
            </div>
          </div>
        </header>

        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          
          <div className="offcanvas-body d-flex flex-column justify-content-center align-items-center">
            <nav>
              <ul>
                <li><Link to="/home">Inicio</Link></li>
                <li><Link to="/register">Crear Cuenta</Link></li>
                <li><Link to="/categorias">Categorias</Link></li>
                <li><Link to="/">Contador</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        <section className="hero-section d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12 mx-auto">
                <form className="custom-form login-form" role="form" onSubmit={handleSubmit}>
                  <h2 className="hero-title text-center mb-4 pb-2">Ingresar</h2>

                  <div className="form-floating mb-4 p-0">
                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                    <label htmlFor="email">Correo electronico</label>
                  </div>

                  <div className="form-floating p-0">
                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" required />
                    <label htmlFor="password">Contraseña</label>
                  </div>

                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Recordarme
                    </label>
                  </div>

                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-12">
                      <button type="submit" className="form-control">Ingresar</button>
                    </div>

                    <div className="col-lg-5 col-12">
                      <Link to="/register" className="btn custom-btn custom-border-btn">Registrarse</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="video-wrap">
            <video autoPlay loop muted playsInline className="custom-video" poster="">
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LoginPage;
