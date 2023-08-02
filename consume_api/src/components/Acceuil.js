import React from "react";

const Acceuil = () => {
  return (
    <>
      <header id="header" class="fixed-top  header-transparent ">
        <div class="container d-flex align-items-center justify-content-between">
          <div class="logo">
            <h1>
              <a href="index.html">We Share It</a>
            </h1>

            <a href="index.html">
              <img src="assets/img/logo.png" alt="" class="img-fluid" />
            </a>
          </div>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="getstarted scrollto" href="/login">
                  Se connecter
                </a>
              </li>
              <li>
                <a class="getstarted scrollto" href="/register">
                  S'inscrire
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>

      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
            >
              <div>
                <h1>App landing page template</h1>
                <h2>
                  Lorem ipsum dolor sit amet, tota senserit percipitur ius ut,
                  usu et fastidii forensibus voluptatibus. His ei nihil feugait
                </h2>
                <a href="#" class="download-btn">
                  <i class="bx bxl-play-store"></i> Google Play
                </a>
                <a href="#" class="download-btn">
                  <i class="bx bxl-apple"></i> App Store
                </a>
              </div>
            </div>
            <div
              class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img"
              data-aos="fade-up"
            >
              <img src="assets/img/hero-img.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div class="footer-newsletter">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Appland</h3>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>
                  Cras fermentum odio eu feugiat lide par naso tierra videa
                  magna derita valies
                </p>
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="bx bxl-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="bx bxl-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bx bxl-instagram"></i>
                  </a>
                  <a href="#" class="google-plus">
                    <i class="bx bxl-skype"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-4">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Appland</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Acceuil;
