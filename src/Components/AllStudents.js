import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom";



function AllStudents(props) {
  let handleDelete=(i)=>{
    let newArray=[...props.value.students]
    newArray.splice(i,1);
    props.value.setStudents(newArray);
  }
 // console.log(props.value.name);
  return (
    <>
     <h1>All Students</h1>
      <Table striped borderd hover>
        <thead>
          <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Batch</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            props.value.students.map((e,i)=>{
              return <tr key={i}>
                <td>{++i}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.class}</td>
                <td>  
                  {/* <Button variant="secondary" onClick={()=>handleEdit(i)}>
                    Edit
                  </Button> */}
                  <Link to={`/edit-student/${i}`}>
                      <Button variant='secondary'>Edit</Button>
                  </Link>
                  <span>&nbsp;&nbsp;</span>
                  <Button variant="danger" onClick={()=>handleDelete(i)}>
                    Delete
                  </Button>
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>
      </>
  )
}

export default AllStudents
