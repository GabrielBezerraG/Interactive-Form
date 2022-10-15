export default function CvcInput(props) {
   return (
      <section className='form__cvc'>
         <label className='form__title'>CVC
            <input 
               type='text' 
               value={props.cvc} 
               placeholder='e.g. 123' 
               onChange={event => props.handleInputChange(event, 'cvc')} 
               className={props.validity ? 'form__cvc__input input' : 'form__cvc__input input input__warning'}
            />
         </label>
         {!props.validity && <span className='form__warning'>{props.errorMessage}</span>}
      </section>
   )
}