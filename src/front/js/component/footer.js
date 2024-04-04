import React, { Component } from "react";
import {logo-footer} from "../../img/logo-footer-05.png";

export const Footer = () => (
	<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top p-5">
		<p class="col-md-4 mb-0 text-body-secondary">&copy; 2024 Timmihow</p>

		<a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
			<img src='https://drive.google.com/file/d/1cT9Bk6hXwDiAZEIDxLPaskiG5ggxilPz/view?usp=sharing' alt='timmihow-logo'/>
			<img src={logo-footer} />
		</a>

		<ul class="nav col-md-4 justify-content-end">
			<li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Why Us</a></li>
			<li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
			<li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Categories</a></li>
		</ul>
  </footer>
);
