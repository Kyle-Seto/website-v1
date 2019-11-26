import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from '../components/Card';
import website from '../assets/images/website.jpg';
import django from '../assets/images/django.jpg';
import racket from '../assets/images/racket.jpg';
class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'Kyle Seto',
                    subTitle: 'Personal Portfolio Website',
                    imgSrc: website,
                    link: 'https://kyleseto2.github.io',
                    selected: false
                },
                {
                    id:1,
                    title: 'Django Polls App',
                    subTitle: 'My First WebApp',
                    imgSrc: django,
                    link: 'https://www.github.com',
                    selected: false
                },
                {
                    id:2,
                    title: 'Racket Assignments',
                    subTitle: 'RPS bot',
                    imgSrc: racket,
                    link: 'https://kyleseto2.github.io',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item =>{
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) =>{
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;