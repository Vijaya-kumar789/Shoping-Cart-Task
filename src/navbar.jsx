import { useState } from "react";
import Cart from "../cart";

function Nav({ cart, removeFromCart, total }) {
  const [isShow, setIsShow] = useState(false);
  const [isToggler, setIsToggler] = useState(false);

  const openShow = () => {
    setIsShow(!isShow);
  };
  const openToggler = () => {
    setIsToggler(!isToggler);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5 mt-0 ">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button
            onClick={openToggler}
            className={`navbar-toggler ${isToggler ? "collapsed" : ""} `}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={`${isToggler ? "false" : "true"}`}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isToggler ? "show" : ""
            } justify-content-between`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item dropdown show">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  onClick={openShow}
                >
                  Shop
                </a>
                <ul
                  className={`dropdown-menu ${isShow ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <Cart cart={cart} removeFromCart={removeFromCart} total={total} />
            </div>
          </div>
        </div>
      </nav>

      <header className="bg text-center">
        <div>
          <h1 className="display-3 fw-bolder">Shop in style</h1>
          <h6>With this shop hompeage template</h6>
        </div>
      </header>
    </>
  );
}
export default Nav;
