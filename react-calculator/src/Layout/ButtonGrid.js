import classes from './ButtonGrid.module.css';
import Button from '../Components/Buttons'

function ButtonGrid() {

  return (
    <div>
      <div className={classes.grid}>
          <Button value='C' class='button grey-button'></Button>
          <Button value='%' class='button'></Button>
          <Button value='√' class='button'></Button>
          <Button value='MC' class='button'></Button>
          <Button value='MR' class='button'></Button>
          <Button value='M+' class='button'></Button>
          <Button value='M-' class='button'></Button>
          <Button value='÷' class='button red-button'></Button>
          <Button value='7' class='button'></Button>
          <Button value='8' class='button'></Button>
          <Button value='9' class='button'></Button>
          <Button value='x' class='button red-button'></Button>
          <Button value='4' class='button'></Button>
          <Button value='5' class='button'></Button>
          <Button value='6' class='button'></Button>
          <Button value='-' class='button red-button'></Button>
          <Button value='1' class='button'></Button>
          <Button value='2' class='button'></Button>
          <Button value='3' class='button'></Button>
          <Button value='+' class='button red-button'></Button>
      </div>
      <div className={classes.unevengrid}>
          <Button value='0' class='left-round-double-button'></Button>
          <Button value=',' class='button'></Button>
          <Button value='=' class='right-round-red-button'></Button>
      </div>
    </div>
  );
}

export default ButtonGrid;