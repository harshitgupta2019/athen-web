import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div class="navbar">
      <div class="container">
        <a
          href="/"
          class="navbar5_logo-link w-nav-brand w--current"
          aria-label="home"
        >
          <img
            src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
            loading="lazy"
            width="36"
            alt="Kula logo"
            class="navbar5_logo"
          />
        </a>
        <nav role="navigation" class="navbar5_menu-2 w-nav-menu">
          <div class="menu-left">
            <div
              data-hover="true"
              data-delay="200"
              data-w-id="161957b1-a96f-dbbc-a2fe-d2695da2485a"
              class="navbar11_menu-dropdown w-dropdown"
            >
              <div
                class="navbar11_dropdown-toggle w-dropdown-toggle"
                id="w-dropdown-toggle-0"
                aria-controls="w-dropdown-list-0"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabindex="0"
                fdprocessedid="0ntatp"
              >
                <div
                  class="dropdown-icon-2 w-icon-dropdown-toggle"
                  aria-hidden="true"
                >
                  <button
                    class="btn-secondary1 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                </div>
                <div class="text-block-20">
                  <span class="text-span-17">Product</span>
                </div>
              </div>
            </div>
            <a href="/story" class="navbar5_link-2 dark w-nav-link">
              Our Story
            </a>
            <div
              data-hover="true"
              data-delay="200"
              data-w-id="9b2c750f-9c86-6a76-f258-e1528116ca57"
              class="navbar11_menu-dropdown w-dropdown"
            >
              <div
                class="navbar11_dropdown-toggle w-dropdown-toggle"
                id="w-dropdown-toggle-1"
                aria-controls="w-dropdown-list-1"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabindex="0"
                fdprocessedid="309ib"
              >
                <div
                  class="dropdown-icon-2 w-icon-dropdown-toggle"
                  aria-hidden="true"
                >
                  <button
                    class="btn-secondary1 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                </div>
                <div class="text-block-20">
                  <span class="text-span-17">Resources</span>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar5_menu-right">
            <a
              data-click-id="book-demo"
              href="/book-demo"
              target="_blank"
              class="button-3 gradient-button w-button"
            >
              Book a demo
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
