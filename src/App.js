import logo from './logo.svg';
import './App.css';
import { test_test } from './redux/thunk';
import { useDispatch ,useSelector} from 'react-redux';

function App() {
  const test=useSelector(state=>state.test)
  const dispatch=useDispatch()

  const tester=()=>{
    dispatch(test_test('true'))
  }
  return (
    <div className="App">
      <h1>pour tester</h1>
      <p>valuue:{test}</p>
      <button onClick={()=>{return tester()}}>onclick</button>

    </div>
  );
}

export default App;
