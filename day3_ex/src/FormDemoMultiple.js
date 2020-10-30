import React, { useState } from "react";
 
function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };
 
  const handleSubmit = event => {
    alert(JSON.stringify(reservation));
  }

  return (
    <div>
      <form>
        <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
            onChange={handleChange}
          />
        
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        
        <br />
        <input
        name="lastName"
        value={reservation.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        />
        
        <br />
        <input
        name="email"
        value={reservation.email}
        onChange={handleChange}
        placeholder="E-mail"
        />
        
        <br />
        <input
        type="number"
        name="phone"
        value={reservation.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        />
        
        <br />
        <input
        name="street"
        value={reservation.street}
        onChange={handleChange}
        placeholder="Street"
        />
        
        <br />
        <input
        name="city"
        value={reservation.city}
        onChange={handleChange} 
        placeholder="City"
        />
        
        <br />
        <input
        type="number"
        name="zip"
        value={reservation.zip}
        onChange={handleChange}
        placeholder="ZipCode"
        />
        
        <br />
        <input
        name="country"
        value={reservation.country}
        onChange={handleChange}
        placeholder="Country"
        />
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;

// Answer to questions:
//  1): Do we ensure that a controls’ state, always matches the value found in an input control?
// Updating the state by using onChange handler. 
// 2): What is the purpose of doing event.preventDefault() in an event handler? :
// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
// For example, this can be useful when:
// Clicking on a "Submit" button, prevent it from submitting a form
// Clicking on a link, prevent the link from following the URL
// 3): What would be the effect of NOT doing event.preventDefault in a submit handler?
// This would make the page refresh, as the event would not be cancelled and the default action will occur, and the form wil be submitted.
// 4): Why don't we want to submit the traditional way, in a single page application?
// We want content to be loaded once and dynamically

