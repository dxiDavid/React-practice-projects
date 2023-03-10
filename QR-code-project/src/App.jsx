
import QRcode from './assets/image-qr-code.png'
import './App.css'

function App() {
  return (
    <>
    <main>
      <div className="wrapper">
        <div className="container">
          <div className="image">
            <img src={ QRcode } alt="QR Code"/>
          </div>
          <div className="text">
            <h2>Improve your front-end skills by building projects</h2>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>  
          </div>
        </div>
  
      </div>
    </main>
  </>
  )
}

export default App
