import './Complete.css';

export default function Complete(props) {
   return (
      <div className='complete'>
         <i className='complete__icon'></i>
         <h1 className='complete__title'>THANK YOU!</h1>
         <h2 className='complete__subtitle'>We've added your card details</h2>
         <input 
            type='button' 
            className='complete__button button' value='Continue'
            onClick={props.reset} 
         />
      </div>
   )
}