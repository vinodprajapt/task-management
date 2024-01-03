import Button from "../Button/Button";
import PropTypes from "prop-types";
import './style.css';

const Card = (props) => {
const {label, type} = props;
  return (
    <div className="card">
        <div className="card-header">
            <h2>{label}</h2>
            {
            type === 'todo' ? 
                <Button label="Add new task" type={'button'} variant={'success'}  handleClick={()=> {
                    // modal open
                    console.log('clicked')
                }}/>
                : <></>
        }
        </div>
        <div className="task">
            <span className="title">Hello</span>
            <p className="description">this is my first task</p>
        </div>
        <div className="task">
            <span className="title">Hello</span>
            <p className="description">this is my first task</p>
        </div>
        <div className="task">
            <span className="title">Hello</span>
            <p className="description">this is my first task</p>
        </div>
        
        
      </div>
  );
};
Card.PropTypes = {
    label:PropTypes.string.isRequired,
    type: PropTypes.oneOf(['todo', 'inProgress', 'done']).isRequired
}

export default Card;
