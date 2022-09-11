import React from "react";
import landingImage from "../../img/hi.jpg";

export default function Header() {
	return ( 
		<>
			<div className="header" id="header">
				<div className="landing-text">
					<div className="cta" style={{ color: "orange" }}>
						<p>Find Your New Modern Apartment </p>
					</div>
					<div className="search-bar"style={{ color: "red" }}>
						<input type="text" placeholder="Search Location " />
						<button>Search</button>
					</div>
				</div>
				<div className="landing-image">
					<img src={landingImage} alt="" />
				</div>
				<div className="contact-info">
					<div className="phone">
						<p>
							<i class="fa fa-phone" aria-hidden="true"></i>{" "}
							<span>6302098030</span>
						</p>
					</div>
					<div>
						<p>
							<i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
							<span>Andhra Pradesh,India</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
