import CvcInput from '../CvcInput/CvcInput';
import ExpDateInputs from '../ExpDateInputs/ExpDateInputs';
import NameInput from '../NameInput/NameInput';
import NumberInput from '../NumberInput/NumberInput';
import './Form.css';

export default function Form(props) {
   return (
      <form className='form'>
         <NameInput 
            name={props.name} 
            handleInputChange={props.handleInputChange}
            validity={props.validity.name}
            errorMessage={props.errorMessage.name}
         />
         <NumberInput 
            number={props.number}
            handleInputChange={props.handleInputChange}
            validity={props.validity.number}
            errorMessage={props.errorMessage.number}
         />
         <ExpDateInputs 
            expMonth={props.expMonth}
            expYear={props.expYear}
            handleInputChange={props.handleInputChange}
            monthValidity={props.validity.expMonth}
            yearValidity={props.validity.expYear}
            monthErrorMessage={props.errorMessage.expMonth}
            yearErrorMessage={props.errorMessage.expYear}
         />
         <CvcInput 
            cvc={props.cvc}
            handleInputChange={props.handleInputChange}
            validity={props.validity.cvc}
            errorMessage={props.errorMessage.cvc}
         />
         <input 
            type='submit' 
            className='form__submit button' value='Confirm' 
            onClick={props.submitData}
         />
      </form>
   );
}