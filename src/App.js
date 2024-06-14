// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

function App() {
  const [res_display,setDisplay] = useState("none");
  const [just_con,setJust] = useState("");
  const [form_width,setWidth] = useState("100%");
  const [text,setText] = useState("");
  const [dummyText,setDummy] = useState("This is the dummy response!");
  const [inp_width,setInpWid] = useState("50%");

  let timer;

  const handleClick = () =>{
    console.log("Clicked")
    setJust("space-around");
    setDisplay("block");
    setWidth("35%");
    setInpWid("75%");
    let i=-1;
    timer = setInterval(()=>{
      i++;
      if(i===dummyText.length-1)clearInterval(timer);
      setText((prev)=>prev+dummyText[i]);
    }, 20);
  };

  return (
    <>
    <div className="App">

      <div className='centre'>
        {/* <ReactAudioPlayer
          src="my_audio_file.ogg"
          autoPlay
          controls
        /> */}
        <div className='glass-card' style={{justifyContent:just_con}}>
          <div className='form-input' style={{width:form_width}}>
            <Form.Group className="mb-3 input-fields" style={{width:inp_width}} controlId="exampleForm.ControlInput1">
              <Form.Label className='input-label'>Upload a document</Form.Label>
              <Form.Control type="file"/>
            </Form.Group>
            <Form.Group className='input-fields' style={{width:inp_width}}>
              <Form.Label className='input-label'>Select a language</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className='input-fields'>
              <Button variant="success" className='input-label generate' onClick={handleClick}>Generate<svg xmlns="http://www.w3.org/2000/svg" style={{"marginLeft":"5px"}} width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </Button>{' '}
            </Form.Group>
          </div>
          {/* <div >
            <ReactAudioPlayer
              src="my_audio_file.ogg"
              autoPlay
              controls
            />
          </div> */}
          <div className='response arvo-bold' style={{display:res_display,"overflowY":"auto"}}>
            <div style={{"width":"100%"}}>
              <ReactAudioPlayer
                src="my_audio_file.ogg"
                autoPlay
                controls
                style={{"width":"100%","marginBottom":"10px"}}
              />
            </div>
            {text}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;