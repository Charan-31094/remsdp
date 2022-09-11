import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
	const [menu, setMenu] = useState(true);

	const showMenu = () => {
		setMenu(!menu);
	};

	return (
		<nav>
			<div className="logo">
				<a href="#!">REALESTATE MANAGEMENT SYSTEM</a>
			</div>
			<div className={menu ? "nav-links" : "nav-links show"}>
				<div className="nav-link">
					<Link
						to="header"
						spy={true}
						smooth={true}
						duration={2000}
						delay={500}
						onClick={() => showMenu()}>
						Home
					</Link>
				</div>
				<div className="nav-link">
					<Link
						to="apartments"
						spy={true}
						smooth={true}
						duration={2000}
						delay={500}
						onClick={() => showMenu()}
					>
						Apartments
					</Link>
				</div>
				<div className="nav-link">
					<Link
						to="works"
						spy={true}
						smooth={true}
						duration={2000}
						delay={500}
						onClick={() => showMenu()}
					>
						How It Works
					</Link>
				</div>
				<div className="nav-link">
					<Link
						to="agents"
						spy={true}
						smooth={true}
						duration={2000}
						delay={500}
						onClick={() => showMenu()}
					>
						Agents
					</Link>
				</div>
			</div>
			<div
				className={menu ? "toggler" : "toggler close"}
				onClick={showMenu}>
				<div className="btn-line"></div>
				<div className="btn-line"></div>
				<div className="btn-line"></div>
			</div>
		</nav>
	);
}
