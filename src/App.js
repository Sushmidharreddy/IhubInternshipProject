import logo from './logo.svg';
import './App.css';
import SampleProps from './Components/SampleProps';
import ClassComponent from './Components/ClassComponent';
import StateSample from './Components/StateSample';
import CounterClass from './Components/CounterClass';
import BindingEvenet from './Components/BindingEvenet';
import ParentComponent from './Components/ParentComponent';




function App() {
  return (
    <div>
  {/* <SampleProps name="Hari" role="teacher"><p> He is a teacher</p></SampleProps>
  <SampleProps name="ravi" role="developer"><button>he is a developer</button></SampleProps>
  <SampleProps name="Balu" role="tester"><i>He is a tester </i></SampleProps>
  <ClassComponent name="virat" role="batsMan"><p>He is a batsMan</p></ClassComponent> */}
  {/* <StateSample/>
  <CounterClass/> */}
  {/* <BindingEvenet/> */}
  <ParentComponent/>
    </div>
  );
}

export default App;
