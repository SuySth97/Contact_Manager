import { useState } from "react";
// import { Samir, Sushal, Suyog } from "./Person";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = { id: Math.random(), name, mobile, location };
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill the fields");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  // let resultCard;

  // if (name === "Samir") {
  //   resultCard = <Samir></Samir>;
  // } else if (name === "Suyog") {
  //   resultCard = <Suyog></Suyog>;
  // } else if (name === "Sushal") {
  //   resultCard = <Sushal></Sushal>;
  // }

  return (
    <>
      <h2>Contact Adder : </h2>
      <form onSubmit={onFormSubmitHandler}>
        <input
          type="text"
          value={name}
          placeholder="Contact Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={mobile}
          placeholder="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        ></input>
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <button>Add Contact</button>
      </form>
    </>
  );
};

export default ContactAdder;
