import Link from 'next/link'

const Navbar = () => {
	return (
		<>
			<nav className="navbar">
		      <div className="container">
		        <Link href="/"><a className="logo">unexpected</a></Link>
		        <ul className="nav-links">
		            <li><Link href="/"><a className="nav-items">Home</a></Link></li>
		            <li><Link href="/about"><a className="nav-items">About</a></Link></li>
		            <li><Link href="/contact"><a className="nav-items">Contact</a></Link></li>
		        </ul>

		      </div>
		    </nav>
		</>
	)
}

export default Navbar