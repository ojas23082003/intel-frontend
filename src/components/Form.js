import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const handleGenerate = () =>{

  }

  return (
    <>
        <div className='container ubuntu-medium'>
            <h1>Fill in the form below, and click on generate</h1>
        </div>
        <div className='form'>
            <Form>
                <Form.Group className='group-form'>
                    <Form.Label>Language</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>   
                </Form.Group>
                <br/>
                <p>Upload the document (.pdf format)</p>
                <div className='upload-doc'>
                    <Form.Group className='group-form'>
                        <Form.Label>Upload the document</Form.Label><br/>
                        <Button variant="primary" type="submit">
                            Upload
                        </Button>
                    </Form.Group>
                </div>
                <br/>
                <div className="d-grid gap-2 group-form">
                    <Button variant="success" size="lg" onClick={handleGenerate}>
                        Generate
                    </Button>
                </div>
            </Form>
        </div>
    </>
  );
}

export default BasicExample;