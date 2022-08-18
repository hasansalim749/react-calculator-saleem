import logo from '../logo.png';
import classes from './LogoScreen.module.css';

function LogoScreen() {
  return (
    <div className={classes.left}>
        <img src={logo} alt="logo" className={classes.logo}/>
        <div className={classes.screen}>
            88888888
        </div>
        
    </div>
  );
}

export default LogoScreen;