import Artwork from '../partials/artwork'
import Link from 'next/link'
import devs from '../../my.data'
import styled from 'styled-components'

const jobs = [
	devs.puji.jobdesk.satu,
	devs.puji.jobdesk.dua,
	devs.puji.jobdesk.tiga
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
	            Saya <Nama>{devs.puji.nama.excerpt}</Nama> Lengkapnya <Nama>{devs.puji.nama.full}</Nama>, saya adalah seorang {jobs.map(job => (
			         <span>{job} </span>
			    ))}.
	          </p>
	          <Link href="/contact"><a className="cta">Kontak Saya</a></Link>
	        </div>

          <div className="image-wrapper">
             <Artwork/>
          </div>
		</>
	)
}

export default Hero