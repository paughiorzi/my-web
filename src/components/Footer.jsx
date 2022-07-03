import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <br />
          <br />
          <h5 className="text-uppercase">Ghiorzi Paula Agustia</h5>
          <p className="pieDePagina">
            - El que no llora no mama. -{" "}
            <strong>Eric Liddell</strong>
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h6 className="text-uppercase fw-bold mb-4">Links utiles</h6>
          <p>
            <a href="#!" className="text-reset">
              xxxxxx
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              xxxxxx
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              xxxxx
            </a>
          </p>
          <p>
            <a href="#!" className="text-reset">
              Solicitar Baja
            </a>
          </p>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Contacto</h5>
          <ul className="list-unstyled">
            <li>Calle 56 N° 1132 e/ 17 y 18 Cuerpo 2, La Plata. </li>
            <li>info@quiron.com </li>
            <li>+ 54 221 3174 336 </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>
  </footer>
);

export default Footer;
