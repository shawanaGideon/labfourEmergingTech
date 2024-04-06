import React, { useState } from "react";

const StudentForm = () => {
  const [student, setStudent] = useState({});

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" onChange={handleChange} />
      </div>
    </form>
  );
};

export default StudentForm;