import './Cards.css'

const defaultValues = {
   name: 'JANE APPLESEED',
   number: '0000 0000 0000 0000',
   expMonth: '00',
   expYear: '00',
   cvc: '000'
 }

export default function Cards(props) {
   return (
      <div className='cards'>
         <div className='cards__back'>
            <span className='cards__back__cvc'>{props.cvc === '' ? defaultValues.cvc : props.cvc}</span>
         </div>
         <div className='cards__front'>
            <i className='cards__front__logo' />
            <span className='cards__front__number'>{props.number === '' ? defaultValues.number : props.number}</span>
            <span className='cards__front__name'>{props.name === '' ? defaultValues.name : props.name}</span>
            <span className='cards__front__date'>{props.expMonth === '' ? defaultValues.expMonth : props.expMonth}/{props.expYear === '' ? defaultValues.expYear : props.expYear}</span>
         </div>
      </div>
   )
}