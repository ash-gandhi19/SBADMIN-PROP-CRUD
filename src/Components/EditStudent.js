import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function EditStudent(props) {
  let params = useParams();
  useEffect(() => {
    if (params.id <= props.value.students.length) {
      getData();
    } else {
      navigate("/all-students");
      alert("Selected student is not available");
    }
  }, []);

  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [cls, setBatch] = useState("");

  let userid = params.id - 1;
  let getData = () => {
    setName(props.value.students[userid].name);
    setEmail(props.value.students[userid].email);
    setMobile(props.value.students[userid].mobile);
    setBatch(props.value.students[userid].class);
  };

  //add students function
  let handleSubmit = () => {
    let newData = { name, email, mobile, class: cls };
    let previousArray = [...props.value.students];
    previousArray.splice(userid, 1, newData);
    props.value.setStudents(previousArray);
    navigate("/all-students");
  };
  return (
    <>
      <h1>Add Students</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            value={mobile}
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Batch</Form.Label>
          <Form.Control
            type="text"
            value={cls}
            placeholder="Batch"
            onChange={(e) => setBatch(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Update
        </Button>
      </Form>
    </>
  );
}

export default EditStudent;
