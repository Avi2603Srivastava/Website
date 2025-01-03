import React from "react"
import {useState} from "react"
import WorkBrand from "../Component/WorkBrand";
import ChooseUs from "../Component/ChooseUs";


export default function EventList() {
    // Sample event data
  const [events, setEvents] = useState([
    { id: 1, title: 'Music Festival', location: 'New York', date: '2024-12-30', category: 'Music', description: 'An exciting music festival featuring top artists.' },
    { id: 2, title: 'Tech Conference', location: 'San Francisco', date: '2024-11-15', category: 'Technology', description: 'A conference for tech enthusiasts.' },
    { id: 3, title: 'Art Exhibition', location: 'Los Angeles', date: '2024-10-20', category: 'Art', description: 'Showcasing artwork by renowned artists.' },
    // Add more events as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ location: '', date: '', category: '' });

  // Filter and search logic
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filters.location ? event.location === filters.location : true;
    const matchesDate = filters.date ? event.date === filters.date : true;
    const matchesCategory = filters.category ? event.category === filters.category : true;

    return matchesSearch && matchesLocation && matchesDate && matchesCategory;
  });
  return (
   <>
    <div className="container event-listing-page mt-5">
      <h1 className="my-4 text-left text-dark">Event Listings</h1>

      {/* Search Bar */}
      <div className="search-bar mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="filters row mb-4">
        <div className="col-md-3">
          <select
            className="form-select"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Los Angeles">Los Angeles</option>
          </select>
        </div>
        <div className="col-md-3">
          <input
            type="date"
            className="form-control"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
            <option value="">All Categories</option>
            <option value="Music">Music</option>
            <option value="Technology">Technology</option>
            <option value="Art">Art</option>
          </select>
        </div>
      </div>

      {/* Event Listings */}
      <div className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div key={event.id} className="event-card card mb-4">
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text"><strong>Location:</strong> {event.location}</p>
                <p className="card-text"><strong>Date:</strong> {event.date}</p>
                <p className="card-text">
                  <strong>Description:</strong> {event.description.substring(0, 100)}...
                </p>
                <button className="btn btn-primary">Apply</button>
              </div>
            </div>
          ))
        ) : (
          <p>No events found matching your criteria.</p>
        )}
      </div>

      {/* Pagination Placeholder */}
      <div className="pagination mt-4">
        <button className="btn btn-outline-primary prev d-flex justify-content-center align-items-center">Previous</button>
        <button className="btn btn-outline-primary next">Next</button>
      </div>
    </div>
    <ChooseUs/>
    <WorkBrand />
</>
  )
}
