// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// export default function JobPage() {
//   const [showModal, setShowModal] = useState(false);
//   const [applicants, setApplicants] = useState(0);
//   const [eventDetails, setEventDetails] = useState(null);

//   useEffect(() => {
//     // Fetch event details from an API or database
//     const fetchEventDetails = async () => {
//       const response = await fetch('/api/event-details');
//       const data = await response.json();
//       setEventDetails(data); 
//     };

//     fetchEventDetails();
//   }, []);

//   const handleApplyClick = () => setShowModal(true);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setApplicants(applicants + 1);
//     setShowModal(false);
//   };

//   return (
//     <div className="container mt-5">
//       {eventDetails ? (
//         <>
//           {/* Event Details Section */}
//           <div className="card mb-4">
//             <div className="card-body">
//               <h3 className="card-title">Event Title: {eventDetails.title}</h3>
//               <p className="card-text"><strong>Requirements:</strong> {eventDetails.requirements}</p>
//               <p className="card-text"><strong>Location:</strong> {eventDetails.location}</p>
//               <p className="card-text"><strong>Compensation:</strong> {eventDetails.compensation || 'Not Applicable'}</p>
//             </div>
//           </div>

//           {/* Employer Information */}
//           <div className="card mb-4">
//             <div className="card-body">
//               <h5 className="card-title">Organizer: {eventDetails.organizer.name}</h5>
//               <p className="card-text">Email: {eventDetails.organizer.email}</p>
//               <p className="card-text">Phone: {eventDetails.organizer.phone}</p>
//             </div>
//           </div>
//         </>
//       ) : (
//         <p>Loading event details...</p>
//       )}

//       {/* Apply Button */}
//       <div className="d-flex justify-content-between align-items-center">
//         <Button variant="primary" onClick={handleApplyClick}>
//           Apply Now
//         </Button>
//         <p className="mb-0">Current Applicants: {applicants}</p>
//       </div>

//       {/* Application Form Modal */}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Application Form</Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={handleSubmit}>
//           <Modal.Body>
//             <Form.Group className="mb-3" controlId="formName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control type="text" placeholder="Enter your name" required />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="Enter your email" required />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formResume">
//               <Form.Label>ID</Form.Label>
//               <Form.Control type="file" required />
//             </Form.Group>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowModal(false)}>
//               Close
//             </Button>
//             <Button variant="primary" type="submit">
//               Submit Application
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>
//     </div>
//   );
// };


import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const JobDetailsPage = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted");
    handleCloseModal();
  };
 

  return (
    <div className="container my-4">
      <h1 className="mb-3">{event.title}</h1>
      <div className="mb-4">
        <h5>Description:</h5>
        <p>{event.description}</p>
      </div>

      <div className="mb-4">
        <h5>Requirements:</h5>
        <ul>
          {event.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h5>Location:</h5>
        <p>{event.location}</p>
      </div>

      {event.compensation && (
        <div className="mb-4">
          <h5>Compensation:</h5>
          <p>{event.compensation}</p>
        </div>
      )}

      {event.employer && (
        <div className="mb-4">
          <h5>Employer Information:</h5>
          <p>{event.employer}</p>
        </div>
      )}

      <div className="mb-4">
        <h5>Number of Applicants:</h5>
        <p>{event.applicantsCount}</p>
      </div>

      <Button variant="primary" onClick={handleShowModal}>
        Apply Now
      </Button>

      {/* Modal for Application Form */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Application Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleApplicationSubmit}>
            <Form.Group className="mb-3 text-dark" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3 text-dark" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3 text-dark" controlId="formResume">
              <Form.Label>ID</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit Application
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JobDetailsPage;

