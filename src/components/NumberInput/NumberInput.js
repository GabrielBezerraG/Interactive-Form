export default function NumberInput(props) {
   return (
      <section className='form__number'>
         <label className='form__title'>CARD NUMBER
            <input 
               onChange={event => props.handleInputChange(event, 'number')} 
               value={props.number} 
               type='text' 
               placeholder='e.g. 1234 5678 9123 0000' 
               className={props.validity ? 'form__number__input input' : 'form__number__input input input__warning'}
            />
         </label>
         {!props.validity && <span className='form__warning'>{props.errorMessage}</span>}
      </section>
   )
}