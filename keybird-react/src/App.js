import logo from './logo.svg';
import './App.css';
import RecorderJSDemo from './RecorderJSDemo';
import AudioUpload from './AudioUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-wrapper'>
          <div className='Input-wrapper'>
            <div className='UploadAudio'>
              <AudioUpload></AudioUpload>
            </div>
            <hr></hr>
            <div className='RecordAudio'>
              <RecorderJSDemo></RecorderJSDemo>
            </div>
          </div>
          <div className='Output-wrapper'>
            <div className='Information-wrapper'>
              foamed, aluminiumy
            
            </div>
            <div className='Predictions-wrapper'>
              <div className='Prediction'>
                <div className='Prediction-value'>
                  <div className='Prediction-percentage' id="clacky">95%</div>
                  <div className='Prediction-svg'>
                    <svg width="48" height="48"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" xmlSpace="preserve"><path d="M64 8.9c0-2.786-.794-4.99-2.36-6.55-6.284-6.261-22.806.396-37.62 15.16a20.959 20.959 0 0 0-1.504 1.695 3.468 3.468 0 0 0-.54-.17C17.71 18.04 4.017 20.366.03 36.292a.998.998 0 0 0 1.557 1.053c5.41-3.925 9.751-5.504 13.54-4.923-.261.474-.527.937-.8 1.379a1 1 0 0 0 .143 1.235l1.569 1.564-2.937 2.926a.998.998 0 0 0 0 1.416l9.829 9.797a.997.997 0 0 0 1.412 0l2.94-2.932 1.574 1.569a1 1 0 0 0 1.23.143c.414-.255.843-.502 1.285-.746.65 3.808-.926 8.176-4.914 13.638a1 1 0 0 0 1.049 1.56c15.94-3.963 18.296-17.609 17.313-21.865a3.142 3.142 0 0 0-.224-.645 21.16 21.16 0 0 0 1.834-1.604C57.103 29.22 64 17.066 64 8.9zM16.058 30.548c-3.902-.823-8.189.32-13.28 3.562 2.504-6.948 7.065-10.23 10.643-11.776 2.682-1.158 5.124-1.483 6.686-1.483.42 0 .774.024 1.054.06l-5.103 9.637zm7.579 18.069-8.412-8.385 2.23-2.221 7.268 7.242 1.144 1.14-2.23 2.224zm17.896 1.955c-1.547 3.583-4.842 8.148-11.837 10.651 3.246-5.069 4.394-9.338 3.57-13.23l9.674-5.089c.174 1.315.047 4.299-1.407 7.668zm-6.844-5.708c-1.758.847-3.433 1.651-4.97 2.544L16.436 34.172c.718-1.229 1.38-2.562 2.052-3.94l4.061-7.667c.85-1.316 1.792-2.551 2.883-3.638C38.984 5.419 54.917-1.523 60.228 3.765 61.404 4.937 62 6.665 62 8.9c0 7.545-6.825 19.417-16.982 29.541-2.83 2.82-6.642 4.653-10.329 6.425z"/><path d="M42.725 12.853a5.953 5.953 0 0 0-1.768 4.248c0 1.607.628 3.116 1.768 4.25a6.023 6.023 0 0 0 4.26 1.753 6.02 6.02 0 0 0 4.26-1.754 5.952 5.952 0 0 0 1.767-4.249 5.952 5.952 0 0 0-1.767-4.248c-2.348-2.338-6.17-2.338-8.52 0zm7.11 7.08a4.048 4.048 0 0 1-5.7 0 3.97 3.97 0 0 1-1.178-2.832 3.97 3.97 0 0 1 1.178-2.83 4.028 4.028 0 0 1 2.85-1.173c1.033 0 2.064.391 2.85 1.173a3.969 3.969 0 0 1 1.177 2.83 3.97 3.97 0 0 1-1.177 2.831zM16.465 47.147a1 1 0 0 0-1.414-.002l-9.995 9.962a1 1 0 1 0 1.412 1.416l9.995-9.962a1 1 0 0 0 .002-1.414zM5.725 51.973a1 1 0 0 0 .706-.292l6.582-6.56a1 1 0 0 0-1.412-1.416l-6.583 6.56a1 1 0 0 0 .707 1.708zM18.502 50.584l-6.582 6.56a1 1 0 0 0 1.412 1.416L19.914 52a1 1 0 0 0-1.412-1.416z"/></svg>
                  </div>
                </div>
                <div className='Prediction-name'>
                  Clacky
                </div>
              </div>
              <div className='Prediction'>
                <div className='Prediction-value'>
                  <div className='Prediction-percentage' id = "thocky">5%</div>
                  <div className='Prediction-svg'>arrow</div>
                </div>
                <div className='Prediction-name'>
                  Thonky
                </div>
              </div>
              <div className='Prediction'>
                <div className='Prediction-value'>
                  <div className='Prediction-percentage' id = "muted">0%</div>
                  <div className='Prediction-svg'>
                  <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"  xmlSpace="preserve"><path d="M348.533 187.944c-2.287 0-4.596.084-6.926.241-5.621-73.995-67.623-132.488-143.048-132.488-79.095 0-143.45 64.348-143.45 143.454 0 .47.004.935.018 1.406C21.396 218.757 0 254.172 0 292.832c0 57.833 47.046 104.893 104.885 104.893h243.648c57.828 0 104.888-47.055 104.888-104.893 0-57.835-47.06-104.888-104.888-104.888zm0 187.361H104.885c-45.472 0-82.471-37.002-82.471-82.473 0-32.46 19.193-62.005 48.889-75.279l7.095-3.171-.604-9.688c-.122-1.839-.265-3.672-.265-5.543 0-66.74 54.298-121.041 121.038-121.041 66.749 0 121.055 54.296 121.036 121.114-.032.523-.065 1.032-.07 1.546l-.132 13.691 13.444-2.578c5.313-1.021 10.594-1.531 15.701-1.531 45.479 0 82.472 36.995 82.472 82.479 0 45.472-37.007 82.474-82.485 82.474z"/></svg>
                  </div>
                </div>
                <div className='Prediction-name'>
                  Muted
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
