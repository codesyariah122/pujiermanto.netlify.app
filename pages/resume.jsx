import Layout from './partials/layout'
import Head from 'next/head'
import MyResumeContent from './contents/resume/myresumecontent'

const Resume = () => {
	return (
		<>
		<Head>
			<link href='https://www.w3schools.com/w3css/4/w3.css' rel="stylesheet" type="text/css" /> 
            <script type="text/javascript">
               document.querySelector('body').classList.add('w3-light-white');
            </script>
		</Head>
		<Layout title="Resume">
			<MyResumeContent/>
		</Layout>
		</>
	)
}

export default Resume