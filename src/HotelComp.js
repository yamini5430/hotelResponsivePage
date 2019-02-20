import React from 'react';
import "./main.css";
import logo from "./assets/logo.jpg";
import hotelexterior from "./assets/hotelexterior.jpg";

const HotelComp =() => {
    return (
        <div>
            <div className="navbar">
		<div className="nav">
			<div className="nav-title">Hotel Details</div>
			<div className="logo">
				<a href="/">
					<img src={logo} />
				</a>
			</div>
			<div className="nav-items">
				<a href="#">Menu1</a>
				<a href="#">Menu2</a>
				<a href="#">Menu3</a>
			</div>
		</div>
	</div>
	<div className="main">
		<div className="hotel-image">
			<img src={hotelexterior}/>
		</div>
		<div className="hotel-address">
			<h1>Hilton Chicago</h1>
			<p>720 South Michigan Avenue</p>
			<p>Chicago Illinois, 60605</p>
			<p>1-312-922-4400</p>
		</div>
		<div className="key-features">
			<div className="map">
				<a className="title" href="#">Map</a>
			</div>
			<div className="photos">
				<a className="title" href="#">Photo gallery</a>
			</div>
			<div className="amenities">
				<a className="title" href="#">Amenities</a>
			</div>
		</div>
	</div>
	<div className="footer">
		<div className="footer-left">
			<a href="#">FAQs</a>
			<span> | </span>
			<a href="#">Terms & Conditions</a>
			<span> | </span>
			<a href="#">Sitemap</a>
		</div>
		<div className="footer-right">
			Copyright &copy; Hilton Group. All rights reserved.
		</div>
	</div>
        </div>
    )
}

export default HotelComp;