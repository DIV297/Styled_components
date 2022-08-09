
import './App.css';
import { Button1, Input, Wrapper } from './Button.style';

function App() {
  return (
    <div className="App">
      <>
      <Wrapper color='aliceblue'>
      <Button1 className='home'>Home</Button1>
      <Button1 className='about'>About</Button1>
      <Button1 className='services'>Services</Button1>
      <Button1 className='contactus'>Contact Us</Button1>
      </Wrapper>
      <h1>Style Components Assignment</h1>
      <Wrapper color='lightblue' style={{'margin':"2vh 30vw",'borderRadius':'30px'}}>
      <Input placeholder='Enter email' ></Input>
      <Input placeholder='Enter password' ></Input>
      <Button1 className='login'>Login</Button1>
      </Wrapper>
      </>
    </div>
  );
}

export default App;
