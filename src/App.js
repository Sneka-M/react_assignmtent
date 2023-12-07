
import './App.css';
import Header from "./Header";
import ProductList from './ProductList';


function App() {
   function Click()
  {
    console.log("Im clicked");
  }
  return (
    <div>
     {/* <Header/> */}
      <ProductList/>
      <button className="btn" onClick={Click}>Click Me</button>
    </div>
  );
}

export default App;
