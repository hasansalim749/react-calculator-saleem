import classes from './App.module.css';
import logo from './logo.png';
import Layout from './Components/Layout';
import Info from './Components/Info'
import {useState} from 'react';

function App() {


  const [data, setData] = useState("");
  const clickHandler = (e) =>{
    setData(data + e.target.value);
  }

  const clearHandler = (e) =>{
    setData('');
  }

  const calculateData = () =>{
    try{
    setData(
      String(eval(data))
      )}
      catch(err){
        setData('Error');
      }
  }


  const rootHandler = () =>{
    try{
    setData(
      Math.sqrt(data)
      )}
      catch(err){
        setData('Error');
      }
  }


  return (
    <div className={classes.App}>
      <Layout>

        {/* screen and logo */}
          <div className={classes.left}>
            <img src={logo} alt="logo" className={classes.logo}/>
            <div className={classes.screen}>
               {data}
            </div>
          </div>

        {/* buton grid */}
          <div className={classes.grid}>
              <button value='C' className={classes.button +' '+ classes.greybutton} onClick={clearHandler}>C</button>
              <button value='%' className={classes.button} onClick={clickHandler}>%</button>
              <button value='√' className={classes.button} onClick={rootHandler}>√</button>
              <button value='MC' className={classes.button +'  ' + classes.disabled}>MC</button>
              <button value='MR' className={classes.button +'  ' + classes.disabled}>MR</button>
              <button value='M+' className={classes.button +'  ' + classes.disabled}>M+</button>
              <button value='M-' className={classes.button +'  ' + classes.disabled}>M-</button>
              <button value='/' className={classes.button +' '+ classes.redbutton} onClick={clickHandler}>÷</button>
              <button value='7' className={classes.button} onClick={clickHandler}>7</button>
              <button value='8' className={classes.button} onClick={clickHandler}>8</button>
              <button value='9' className={classes.button} onClick={clickHandler}>9</button>
              <button value='*' className={classes.button +' '+ classes.redbutton} onClick={clickHandler}>x</button>
              <button value='4' className={classes.button} onClick={clickHandler}>4</button>
              <button value='5' className={classes.button} onClick={clickHandler}>5</button>
              <button value='6' className={classes.button} onClick={clickHandler}>6</button>
              <button value='-' className={classes.button +' '+ classes.redbutton} onClick={clickHandler}>-</button>
              <button value='1' className={classes.button} onClick={clickHandler}>1</button>
              <button value='2' className={classes.button} onClick={clickHandler}>2</button>
              <button value='3' className={classes.button} onClick={clickHandler}>3</button>
              <button value='+' className={classes.button +' '+ classes.redbutton} onClick={clickHandler}>+</button>
          </div>
          <div className={classes.unevengrid}>
              <button value='0' className={classes.leftrounddoublebutton} onClick={clickHandler}>0</button>
              <button value=',' className={classes.button}>,</button>
              <button value='=' className={classes.rightroundredbutton} onClick={calculateData}>=</button>
          </div>


      </Layout>
      <Info>
        
      </Info>
    </div>
  );
}

export default App;
