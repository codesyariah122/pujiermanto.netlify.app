import React from 'react'
import './index.scss'
import ContentDua from './content_dua'
import ContentTiga from './content_tiga'
import styled from 'styled-components'

const Parallax = styled.div`
perspective: 100px;
height: 100vh;
overflow-x: hidden;
overflow-y: auto;
position: absolute;
top: 0;
left: 30%;
right: 0;
bottom: 0;
margin-left: -1500px;
`


const ContactPages = () => {
    return (
    <>
        <Parallax>    
                <div class="parallax__layer parallax__layer__0">
                    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true" alt="layer_img"/>
                </div>
                <div class="parallax__layer parallax__layer__1">
                    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true" alt="layer_img"/>
                </div>
                <div class="parallax__layer parallax__layer__2">
                    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true" alt="layer_img"/>
                </div>
                <div class="parallax__layer parallax__layer__3">
                    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true" alt="layer_img"/>
                </div>
                <div class="parallax__layer parallax__layer__4">
                    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true" alt="layer_img"/>
                </div>
                <div class="parallax__layer parallax__layer__5">
                    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true" alt="layer_img"/>
                    <ContentTiga/>
                    <ContentDua/>
                </div>
                <div class="parallax__layer parallax__layer__6">
                    <img src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true" alt="layer_img"/>
                </div>
                <div class="parallax__cover"></div>
        </Parallax>
    </>
    )
}

export default ContactPages