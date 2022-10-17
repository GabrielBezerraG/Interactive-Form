import React from 'react';
import Cards from './components/Cards/Cards';
import Complete from './components/Complete/Complete';
import Form from './components/Form/Form';
import formatCvc from './js-modules/formatCvc';
import formatExpDate from './js-modules/formatExpDate';
import formatName from './js-modules/formatName';
import formatNumber from './js-modules/formatNumber';
import validateCvc from './js-modules/validateCvc';
import validateExpDate from './js-modules/validateExpDate';
import validateName from './js-modules/validateName';
import validateNumber from './js-modules/validateNumber';
import './reset.css';



const initialState = {
  name: '',
  number: '',
  expMonth: '',
  expYear: '',
  cvc: '',
  validity: {
    name: true,
    number: true,
    expMonth: true,
    expYear: true,
    cvc: true
  },
  errorMessage: {
    name: '',
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  },
  confirmed: false 
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitData = this.submitData.bind(this);
    this.reset = this.reset.bind(this);
  };

  submitData(event) {
    event.preventDefault();

    const validity = this.state.validity;
    const errorMessage = this.state.errorMessage;

    [validity.name, errorMessage.name] = validateName(this.state.name);
    [validity.number, errorMessage.number] = validateNumber(this.state.number);
    [validity.expMonth, errorMessage.expMonth] = validateExpDate(this.state.expMonth);
    [validity.expYear, errorMessage.expYear] = validateExpDate(this.state.expYear);
    [validity.cvc, errorMessage.cvc] = validateCvc(this.state.cvc);

    this.setState({
      validity: validity,
      errorMessage: errorMessage
    });

    let allInputsAreValid = [];
    for (let key in validity) {
      allInputsAreValid.push(validity[key])
    }
    if (allInputsAreValid.every(item => item)) {
      this.setState({
        confirmed: true
      })
    }
  };

  handleInputChange(event, input) {
    let newInput;
    let inputValue = event.target.value;
    switch(input) {
      case 'name':
        newInput = formatName(inputValue);
        break;
      case 'number':
        newInput = formatNumber(inputValue);
        break;
      case 'expMonth':
        newInput = formatExpDate(inputValue);
        break;
      case 'expYear':
        newInput = formatExpDate(inputValue);
        break;
      case 'cvc':
        newInput = formatCvc(inputValue);
        break;
    }

    this.setState({
      [input]: newInput
    })  
  };

  reset() {
    this.setState(initialState)
  };

  render() {
    return (
      <div className='container'>
        <Cards 
          name={this.state.name} 
          number={this.state.number} 
          expMonth={this.state.expMonth} 
          expYear={this.state.expYear} 
          cvc={this.state.cvc} 
        />
        {this.state.confirmed 
        ? <Complete reset={this.reset} />
        : <Form 
          name={this.state.name} 
          number={this.state.number} 
          expMonth={this.state.expMonth} 
          expYear={this.state.expYear} 
          cvc={this.state.cvc} 
          validity={this.state.validity}
          errorMessage={this.state.errorMessage}
          handleInputChange={this.handleInputChange} 
          submitData={this.submitData}
          />
        }    
      </div>
    )
  }
}

export default App;
