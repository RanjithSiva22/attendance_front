import { Modal, Button, Form } from "react-bootstrap";


const ClassForm = ({ onSubmit , input , fclass, sheet}) => {
    // console.log(fclass);
 
    return (
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            value={fclass.subject}
            name="subject"
            onChange={input}
          />
        </Form.Group>
        <Form.Group controlId="formBasicDept">
          <Form.Label>Dept</Form.Label>
          <Form.Control
            type="text"
            placeholder="handling dept"
            value={fclass.dept}
            name="dept"
            onChange={input}
          />
        </Form.Group>
        <Form.Group controlId="formBasicYear">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="year of class"
            value={fclass.year}
            name="year"
            onChange={input}
          />
        </Form.Group>
        <Form.Group controlId="formBasicYear">
          <Form.Label>Upload Sheet</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              sheet(file);
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me!" />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          ADD
        </Button>
      </Form>
    );
  };

  export default ClassForm;