import axios from 'axios';
 
import React,{Component} from 'react';
import * as ReactDOM from 'react-dom';
 
class AudioUpload extends Component {
  
    state = {
 
      // Initially, no file is selected
      selectedFile: null
    };
    
    // On file select (from the pop up)
    onFileChange = event => {
        //console.log(fetch('api/uploadfile'));
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
      
    };
    
    // On file upload (click the upload button)
    onFileUpload = () => {
    
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );

      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData)
      .then(function(response) {
        console.log(response["data"]);
      })
      .catch(function(error) {
        console.log(error);
      });
      const clackyRoot = ReactDOM.createRoot(
        document.getElementById('clacky')
      );
      const clackyPerc = <p>96%</p>
      const thockyRoot = ReactDOM.createRoot(
        document.getElementById('thocky')
      );
      const thockyPerc = <p>20%</p>
      const mutedRoot = ReactDOM.createRoot(
        document.getElementById('muted')
      );
      const mutedPerc = <p>0%</p>
      clackyRoot.render(clackyPerc);
      thockyRoot.render(thockyPerc);
      mutedRoot.render(mutedPerc);
    };
    
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
    
      if (this.state.selectedFile) {
         
        return (
          <div>
            <h2>File Details:</h2>
             
<p>File Name: {this.state.selectedFile.name}</p>
 
             
<p>File Type: {this.state.selectedFile.type}</p>
 
             
<p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
 
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose file</h4>
          </div>
        );
      }
    };
    
    render() {
    
      return (
        <div>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
        </div>
      );
    }
  }
 
  export default AudioUpload;
