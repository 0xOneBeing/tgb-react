import tgb_logo from "../assets/img/tgb-logo.png";

export default function Footer() {
  return (
    <footer className="footer bd-footer py-4 py-md-5 text-light">
      <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-3 mb-3">
            <a
              className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
              href="/"
              aria-label="Bootstrap"
            >
              <img src={tgb_logo} alt="TheGoodBeach" width={300} px />
            </a>
            <div className="list-unstyled small text-center text-light">
              <p className="m-0 mt-2">
                <strong>All rights reserevd &copy; 2023</strong>
              </p>
              <p className="dev">
                <strong>Designed by 0xOneBeing</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="mb-3 mx-auto text-light">
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#our-space">Our Space</a>
              </li>
              <li>
                <a href="#bookings">Bookings</a>
              </li>
              <li>
                <a href="#activities">Activities</a>
              </li>
              <li>
                <a href="#membership-plans">Membership Plans</a>
              </li>
              <li>
                <a href="#FAQs">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
