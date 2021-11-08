import { DataStore } from "aws-amplify";
import { Booking, Contact, Venue } from "../../models";
import { useEffect, useState } from "react";

const Schedule = () => {
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    DataStore.query(Booking).then((response) => {
      setBookings(response);
    });
  
    DataStore.query(Contact).then((response) => {
      setContacts(response);
    });
  
    DataStore.query(Venue).then((response) => {
      setVenues(response);
    });
  });

  return (
    <div style={{ width: "500px", textAlign: "left" }}>
      <h3>Bookings</h3>
      <pre>{JSON.stringify(bookings, null, 2)}</pre>
      <h3>Contacts</h3>
      <pre>{JSON.stringify(contacts, null, 2)}</pre>
      <h3>Venues</h3>
      <pre>{JSON.stringify(venues, null, 2)}</pre>
    </div>
  );
};

export default Schedule;
