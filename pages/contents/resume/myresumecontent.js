import React from 'react'
import Skills from './skills'
import Experience from './experience'
import styled from 'styled-components'
import Avatar from './avatar'


const Content = styled.div`
	max-width: 1400px;
	margin-top: 5rem;
`

const MyResumeContent = () => {

	return (
		<>
		<Content>
			<div class="w3-content w3-margin-top">
        
            <div class="w3-row-padding">
            
              <div class="w3-third">
              
                <div class="w3-white w3-text-grey w3-card-4">
                  <div class="w3-display-container">

	                  <Avatar/>

                  </div>
                  
                  <Skills/>

                </div>
                <br/>        
              </div>

              <Experience/>

            </div>
            
          </div>

		</Content>
		</>
	)
}

export default MyResumeContent