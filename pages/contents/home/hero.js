import Artwork from './artwork'
import Link from 'next/link'
import Devs from '../../../my.data'
import styled from 'styled-components'

const jobs = [
	Devs.dev.puji.jobdesk.satu,
	Devs.dev.puji.jobdesk.dua,
	Devs.dev.puji.jobdesk.tiga
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
	            Saya <Nama>{Devs.dev.puji.nama.excerpt}</Nama> Lengkapnya <Nama>{Devs.dev.puji.nama.label}</Nama>, saya adalah seorang {jobs.map(job => (
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