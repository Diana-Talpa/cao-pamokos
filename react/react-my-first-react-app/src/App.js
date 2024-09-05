import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='logo-nav'>
        <img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-and-black-colors-logo-design-template-6a0c7bdc6745d0632247fbc7bfa6d8a8_screen.jpg?ts=1603975210' className='logo' alt='logo' />
          
        <div className='top-nav'> 
              <a href="#"
                target="_blank"
                >
                Home
              </a> 
              <a href="#"
                target="_blank"
                >
                Product
              </a> 
              <a href="#"
                target="_blank"
                >
                Company
              </a> 
              <a href="#"
                target="_blank"
                >
                Contact
              </a> 
        </div>
        <div className='main-image'>
              <h1>Header Image</h1>
              <img className='header Image'/>
        </div>
      </div>
          <main>
              <div className='first-section'>
                    <div className='card'>
                          <h2 >About</h2>
                          <p>
                          Contrary to popular belief, Lorem Ipsum is not simply random text. 
                          It has roots in a piece of classical Latin literature from 45 BC,
                           making it over 2000 years old.
                          </p>
                       </div>
                    <div className='card'>
                          <h2 >Company</h2>
                            <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from 45 BC, 
                            making it over 2000 years old.
                            </p>
                    </div>
                    <div className='card'>
                          <h2>Services</h2>
                          <p>
                          Contrary to popular belief, Lorem Ipsum is not simply random text. 
                          It has roots in a piece of classical Latin literature from 45 BC, 
                          making it over 2000 years old.
                          </p>
                    </div>
              </div>
              <div className='content-bottom-nav'>
                  <div className='second-section'>
                    <h2 >Content</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                      It has roots in a piece of classical Latin literature from 45 BC, 
                      making it over 2000 years old.</p>
                    <h2>Sub Header</h2>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                      It has roots in a piece of classical Latin literature from 45 BC, 
                      making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  </div>
                  <div >
                    <h3>Navigation</h3>
                    <div className='bottom-nav'>
                          <a href="#"
                            target="_blank" >
                            Home
                          </a>
                          <a href="#"
                            target="_blank" >
                            Product
                          </a>
                          <a href="#"
                            target="_blank" >
                            Company
                          </a>
                          <a href="#"
                            target="_blank" >
                            Contact
                          </a>
                    </div>
                  </div>
              </div>
      </main>
    </div>
  );
}

export default App;
