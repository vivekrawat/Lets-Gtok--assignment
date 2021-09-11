import React from 'react'
import {Card,Container,Button} from 'react-bootstrap'
const Activity = ({activities}) => {
    return (
        <Container fluid className="main-child">
            {activities.map((activity) => (
                <Card key={activity.id}>
                    <Card.Body className="activity">
                        <p className="activity-title">{activity.activity}</p>
                        <p className="activity-description">{activity.description}</p>
                        <span className="activity-user">@{activity.name}</span>
                        <span className="activity-time">{activity.time}</span>
                    </Card.Body>
                </Card>
            ))
            }
            <br/>
            <p>Share what's on you are doing with the community</p>
            <Button> Share activity</Button>
        </Container>

    )
}

export default Activity
