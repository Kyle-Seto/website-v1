import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

    return(
        <div>
            <Hero title={props.title}/>

            <Content>

                <p>Hi, I'm Kyle. I'm a first year mathematics student at the University of Waterloo. </p>

                <p>My hobbies are mountain biking, skiing, and travelling.</p>

                <p>I am constantly learning new things. Currently starting out with learning Node JS, React.</p>

                <p>I am currently working on creating a robot that can lock and unlock my dorm door from the internet.</p>

            </Content>


        </div>
    )
}

export default AboutPage;