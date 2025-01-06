// Import necessary modules
import React from 'react';
import { Card, Button, Badge, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// ApplicationCard Component
const ApplicationCard = ({ application, onWithdraw }) => {
    return (
        <Card className="mb-3 shadow-sm">
            <Card.Body>
                <Row className="align-items-center">
                    <Col md={8}>
                        <Card.Title>{application.eventName}</Card.Title>
                        <Card.Text>
                            <strong>Event Date:</strong> {application.eventDate}<br />
                            <strong>Status:</strong> <Badge bg={getStatusBadge(application.status)}>{application.status}</Badge>
                        </Card.Text>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <Button variant="primary" href={application.eventDetailsLink} target="_blank" className="me-2">
                            View Details
                        </Button>
                        <Button 
                            variant="danger" 
                            disabled={application.status !== 'pending'} 
                            onClick={() => onWithdraw(application.id)}>
                            Withdraw
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

// Helper function to determine badge color
const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
        case 'pending':
            return 'warning';
        case 'shortlisted':
            return 'success';
        case 'rejected':
            return 'danger';
        default:
            return 'secondary';
    }
};

// Main ApplicationPage Component
const ApplicationPage = () => {
    const [applications, setApplications] = React.useState([
        {
            id: 1,
            eventName: 'Tech Conference 2025',
            eventDate: '2025-02-15',
            status: 'pending',
            eventDetailsLink: 'https://example.com/tech-conference-2025',
        },
        {
            id: 2,
            eventName: 'Music Festival',
            eventDate: '2025-03-10',
            status: 'shortlisted',
            eventDetailsLink: 'https://example.com/music-festival',
        },
        {
            id: 3,
            eventName: 'Art Exhibition',
            eventDate: '2025-04-20',
            status: 'rejected',
            eventDetailsLink: 'https://example.com/art-exhibition',
        },
    ]);

    const handleWithdraw = (id) => {
        const updatedApplications = applications.map((app) =>
            app.id === id ? { ...app, status: 'withdrawn' } : app
        );
        setApplications(updatedApplications);
    };

    return (
        <Container className="my-5">
            <h2 className="mb-4">My Applications</h2>
            {applications.map((application) => (
                <ApplicationCard 
                    key={application.id} 
                    application={application} 
                    onWithdraw={handleWithdraw} 
                />
            ))}
        </Container>
    );
};

export default ApplicationPage;