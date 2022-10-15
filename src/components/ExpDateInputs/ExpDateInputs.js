export default function ExpDateInputs(props) {

   return (
      <section className='form__exp-date'>
         <label className='form__title' for='exp-date__month'>EXP. DATE (MM/YY)
         </label>
         <div className='form__exp-date__inputs'>
            <input 
               type='text' 
               id='exp-date__month' 
               placeholder='MM' 
               value={props.expMonth} 
               onChange={event => props.handleInputChange(event, 'expMonth')} 
               className={props.monthValidity ? 'form__exp-date__month input' : 'form__exp-date__month input input__warning'}
            />
            <input 
               type='text' 
               placeholder='YY' 
               value={props.expYear} 
               onChange={event => props.handleInputChange(event, 'expYear')} 
               className={props.yearValidity ? 'form__exp-date__year input' : 'form__exp-date__year input input__warning'} 
               />
         </div>
         {!props.monthValidity ? <span className='form__warning'>{props.monthErrorMessage}</span> 
         : !props.yearValidity && <span className='form__warning'>{props.yearErrorMessage}</span>
         }
      </section>
   )
}