import Artwork from '../partials/artwork'
import Link from 'next/link'
import devs from '../../my.data'
import styled from 'styled-components'

const jobs = [
	devs.dev.puji.jobdesk.satu,
	devs.dev.puji.jobdesk.dua,
	devs.dev.puji.jobdesk.tiga
]

const Nama = styled.span`
	color: crimson;
`

const Hero = () => {
	return (
		<>
			<div className="text-wrapper">
	          <h1 className="title">Hallo, Welcome </h1>
	          <p className="description">
	            Saya <Nama>{devs.dev.puji.nama.excerpt}</Nama> Lengkapnya <Nama>{devs.dev.puji.nama.full}</Nama>, saya adalah seorang {jobs.map(job => (
			         <span>{job} </span>
			    ))}. Selengkapnya mengenai resume saya ...
	          </p>
	          <Link href="/resume"><a className="cta">Resume Saya</a></Link>
	        </div>

          <div className="image-wrapper">
             <Artwork/>
          </div>
		</>
	)
}

export default Hero