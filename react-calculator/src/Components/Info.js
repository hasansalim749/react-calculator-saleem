import classes from './info.module.css';

function Info(props) {
  return (
    <div className={classes.info}>
        <p>
            <b>Faced problems:</b>
        </p>

        <ul>
            <li> Values flowing outside the sceen could be fixed with react-textfit (but had few compatibility issues while installing it and could not give much time to resolve them) </li>
            <br></br><li> Tried making different components for screen and button grid but got stuck while transfering data between diff. components that wastaking time so had to move to single component application.</li>
            <br></br><li> Some of the operators could not be handled.</li>
        </ul>

    </div>
  );
}

export default Info;
