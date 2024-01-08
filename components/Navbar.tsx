import Image from "next/image";
import React from "react";
import { Container } from "./ui/container";

const Navbar = () => {
	return (
		<nav className="bg-blue-500">
			<Container variant="narrowConstrainedPadded">
				<div className="flex items-center justify-between h-20 w-full text-white">
					<Image
						alt="clarista.io"
						src="/assets/clarista-logo-white.png"
						width={177}
						height={32}
					/>
					<ul className="flex gap-4">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/#how">How It Works</a>
						</li>
						<li>
							<a href="/#platform">Platform</a>
						</li>
						<li>
							<a href="/navigator/">Navigator</a>
						</li>
						<li>
							<a href="/lab/">Lab</a>
						</li>
						<li>
							<a href="/pulse/">Pulse</a>
						</li>
						<li>
							<a href="#start">START FOR FREE</a>
						</li>
					</ul>
				</div>
			</Container>
		</nav>
	);
};

export default Navbar;
