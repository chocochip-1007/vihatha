import React from 'react';
import logo from './vihatha.PNG';

const NavBar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary random">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="50" height="40" class="d-inline-block align-text-top"/>
       VIHATHA
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div class="collapse navbar-collapse random-2 justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About Us
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Vision</a></li>
              <li><a class="dropdown-item" href="#">Our Story </a></li>
              <li><a class="dropdown-item" href="#">Our Team</a></li>
              <li><a class="dropdown-item" href="#">Key Focus Areas</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle programs" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Programs
            </a>
            <ul class="dropdown-menu programs-dropdown">
              <li><a class="dropdown-item" href="#">Nature Immersion Program</a></li>
              <li><a class="dropdown-item" href="#">Well Being Boot Camp </a></li>
              <li><a class="dropdown-item" href="#">Medhaswi - Scholarship Program</a></li>
              <li><a class="dropdown-item" href="#">Rural STEM program </a></li>
              <li><a class="dropdown-item" href="#">Library & Activity Center</a></li>
              <li><a class="dropdown-item" href="#">Govt school support program</a></li>
              <li><a class="dropdown-item" href="#">Sustainability Projects</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Support</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
