import { useState } from 'react';

const {EchoRequest, EchoResponse} = require('./echo_pb.js');
const {EchoServiceClient} = require('./echo_grpc_web_pb.js');


function App() {

    const [inputMessage, setInputMessage] = useState("")
    const [outputMessage, setOutputMessage] = useState("")

    const handleChange = (event) => {
        setInputMessage(event.target.value)
    }

    const handleClick = () => {
        var echoService = new EchoServiceClient('http://localhost:8080');

        var request = new EchoRequest();
        request.setMessage(inputMessage);
        
        echoService.echo(request, {}, function(err, response) {
            if (err) {
                console.log("error", err);
            } else if (response) {
                console.log("response", response);
                setOutputMessage(response.getMessage())
            }
        });    
    }

    return (
        <div>
            <p>Input text will be sent to server and echoed back via grpc-web</p>
            <input type="text" onChange={handleChange} value={inputMessage}></input>
            <button onClick={handleClick}>Send to server</button>
            <p>from server: {outputMessage}</p>
        </div>
    );
}

export default App;
