import React from 'react';
import Link from "next/link";


const Navbar = () => {
  return (
    <ul className='navbar'>
		<li>
			<Link href="/home">
			Home</Link>
		</li>
		<li>
			<Link href="/about">About
			</Link>
		</li>
		<li>
			<Link href="/service">
			Service</Link>
		</li>
		<li>
			<Link href="/client">
			Clients
			</Link>
		</li>
		<li>
			<Link href="/relation">
			Investor Relation
			</Link>
		</li>
		<li>
			<Link href="/contact">
			Contact</Link>
		</li>
	</ul>
  )
}

export default Navbar