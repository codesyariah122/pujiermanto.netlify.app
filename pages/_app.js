import '../styles/app.scss'
import './contents/resume/content.scss'
import contentStyles from './contents/resume/content.scss'
import Head from 'next/head'
import Data from '../my.data'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>{Data.head.title}</title>
		        <link rel="shortcut icon" href="/favicon.png" />
			</Head>

		  	<Component {...pageProps} />
		</>
	)
}

export default MyApp
