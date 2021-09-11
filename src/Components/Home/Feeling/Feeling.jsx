import React from 'react'
import {Card,Container,Button} from 'react-bootstrap'
const Feeling = ({feelings}) => {
    return (
        <Container fluid className="main-child">
            {feelings.map((feel) => (
                <Card key={feel.id}>
                    <Card.Body className="activity">
                        <p className="activity-title">{feel.feeling}</p>
                        <p className="activity-description">{feel.description}</p>
                        <span className="activity-user">@{feel.name}</span>
                        <span className="activity-time">{feel.time}</span>
                    </Card.Body>
                </Card>
            ))
            }
            <br/>
            <p>Share what's on your mind with the community</p>
            <Button> Share Feeling</Button>
        </Container>

    )
}

export default Feeling
