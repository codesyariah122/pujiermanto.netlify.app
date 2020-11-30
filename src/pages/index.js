import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'

const BgImg2 = styled.div`
display: flex;
grid: 100% / repeat(7, 1fr);
padding: 5em 15em;
background: url(https://codesyariah122.github.io/assets/images/author12.jpg)
  center center / cover;
`

const BgImg5 = styled.div`
background: url(https://images.pexels.com/photos/2947337/pexels-photo-2947337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
center center / cover;
display: flex;
align-items: center;
`

const IndexPage = () => {
  return (
        <Layout>
          <BgImg2>
             <div class="concept concept-two">
                <div class="hover">
                  <h1>W</h1>
                </div>
                <div class="hover">
                  <h1>E</h1>
                </div>
                <div class="hover">
                  <h1>L</h1>
                </div>
                <div class="hover">
                  <h1>C</h1>
                </div>
                <div class="hover">
                  <h1>O</h1>
                </div>
                <div class="hover">
                  <h1>M</h1>
                </div>
                <div class="hover">
                  <h1>E</h1>
                </div>
              </div>
          </BgImg2>

          <BgImg5>
              <div class="concept concept-five">
                <h1 class="word"><span class="char">I</span><span class="char">N</span><span class="char"></span><span class="char">M</span><span class="char">Y</span><span class="char">P</span><span class="char">O</span><span class="char">R</span><span class="char">T</span><span class="char">F</span><span class="char">O</span><span class="char">L</span><span class="char">I</span><span class="char">O</span>
                </h1>
              </div>
          </BgImg5>

        </Layout>
  )
}

export default IndexPage