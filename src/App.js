import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import phone from './iphone.jpg'

function App() {
  return (
    <div className="App">
          <div style={{border:'solid 1 black',maxWidth:'100vw'}}>

<h1 class="title-black">Apple Products</h1>



<img src="/mac.png" height="300"  />



<img src={phone} height="300"/> 

</div>

<video width="820" height="640" controls>

<source src="myvideo.mp4" type="video/mp4"/>

</video>
    </div>
  );
}

export default App;
