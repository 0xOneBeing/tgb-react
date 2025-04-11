import tgb_logo from "../assets/img/tgb-logo.png";

export default function Header() {
  // const noRef = null;

  return (
    <header className="header">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="nav-brand d-md-none" href="./">
            <img src={tgb_logo} alt="TheGoodBeach" width={101.52} px />
          </a>
          <button
            class="navbar-toggler b-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tgbContent"
            aria-controls="tgbContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="tgbContent">
            <div class="navbar-nav mx-auto align-items-center">
              <a class="nav-link active" aria-current="page" href="./">
                HOME
              </a>
              <a class="nav-link" href="#our-space">
                OUR SPACE
              </a>
              <a class="nav-link" href="#bookings">
                BOOKINGS
              </a>
              <a class="nav-brand d-none d-md-block p-0" href="./">
                <img src={tgb_logo} alt="TheGoodBeach" width={101.52} px />
              </a>
              <a class="nav-link" href="#activities">
                ACTIVITIES
              </a>
              <a class="nav-link" href="#membership-plans">
                MEMBERSHIP PLANS
              </a>
              <a class="nav-link" href="#FAQs">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* Offcanvas navbar */}
      {/* <nav class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Offcanvas navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav> */}
      {/* Offcanvas navbar */}
    </header>
  );
}
