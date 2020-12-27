import React from 'react'
import Link from 'next/link'
import Navs from '../../my.data'
import { withRouter } from 'next/router'
import Img from 'next/image'

const Navbar = ({router}) => {
	// console.log(router);
	const navs = [
		Navs.navItem.home,
		Navs.navItem.about,
		Navs.navItem.contact,
		Navs.navItem.resume,	
	]
	// console.log(navs)
	
	return (
		<>
			<nav className="navbar">
		      <div className="container">
		        <Link href="/"><a>
		        	<Img
		        		src="/myVector.png"
		        		alt="logo"
		        		width="70"
		        		height="70"
		        	/>
		        </a></Link>

		        <ul className="nav-links">
			    {/*looping nav-item*/}
			    	{navs.map(nav => (
			    		<Link href={nav.href}><a className={`nav-item ${router.pathname == nav.href ? 'active' : ''}`}>{nav.label}</a></Link>
			    	))}
			    {/*end looping nav-item*/}		   	
		        </ul>

		      </div>
		    </nav>
		</>
	)
}

export default withRouter(Navbar)