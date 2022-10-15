export default function NameInput(props) {
   return (
      <section className='form__name'>
            <label className='form__title'>CARDHOLDER NAME
               <input 
                  onChange={event => props.handleInputChange(event, 'name')} 
                  value={props.name} 
                  type='text' 
                  placeholder='e.g. Jane Appleseed' 
                  className={props.validity ? 'form__name__input input' : 'form__name__input input input__warning'}
               />
            </label>
            {!props.validity && <span className='form__warning'>{props.errorMessage}</span>}
         </section>
   )
}