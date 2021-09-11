import React from 'react'
import {Card,Container,Button,Breadcrumb,Row,Col} from 'react-bootstrap'
import './Styles.css'
import image from '../../assets/image1.png'
import Feeling from './Feeling/Feeling'
import Activity from './Activity/Activity'
import Footer  from './Footer/Footer'

const Home = () => {
    const feelings = [
        {id: 1, feeling: 'Current Feeling', description: 'So exited to finally get my hands in latest PS5',name: 'lilly',time: 'a few seconds ago'},
        {id: 2, feeling: 'Current Feeling', description: 'So exited to finally get my hands in latest PS5',name: 'lilly',time: 'a few seconds ago'},
    ]
    const activities = [
        {id: 1, activity: 'Watching', description: 'The wolf of the wall Street. A must watch', name: 'lilly', time: 'a few seconds ago' },
        {id: 2, activity: 'Watching', description: 'The wolf of the wall Street. A must watch', name: 'lilly', time: 'a few seconds ago' }
    ]
    return (
        <>
        <Container fluid className="header">
            <Container>
            <Card className="header-card">
                <Card.Body>
                <span className="header-card-span">Share feelings</span> without being judged.<br/>
                <Button variant="primary">Share Feelings</Button>
                </Card.Body>
            </Card>
            </Container>
            <Breadcrumb className="header-breadcrumb">
                <Breadcrumb.Item>Join</Breadcrumb.Item>
                <Breadcrumb.Item>Share</Breadcrumb.Item>
                <Breadcrumb.Item >Feel Relief</Breadcrumb.Item>
            </Breadcrumb>
        </Container>
        <Container fluid className="main">
            <h3>A community to spread Positivity</h3>
            <Row>
                <Col md="6" sm="12">
                    <Feeling feelings={feelings}/>
                </Col>
                <Col md="6" sm="12">
                    <Activity activities={activities}/>
                </Col>
            </Row>
        </Container>
        <Container fluid className="about">
        <Row>
            <Col sm={12} md={8} className="about-read">
                <Container className="about-content">
                <h2>Why Lets Gtok?</h2>
                <p>
                Lets Gtak aims to provide a safe space online for people
                to share and connect with genuine feelings. Users can share 
                their feelings or activities even without revealing their identity.</p>
                <Button>Learn More</Button>
                </Container>
            </Col>
            <Col sm={12} md={4}>
                <Container>
                    <img alt="a cartoon" src={image} width="100%"/>
                </Container>
            </Col>
        </Row>
        </Container>
        <Footer/>
        </>
    )
}

export default Home
