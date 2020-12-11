import React from 'react'
import { CartOrderFormStyled } from './cart-styled'
import { Field, reduxForm, InjectedFormProps, reset } from 'redux-form'

const CartOrderForm:React.FC<InjectedFormProps> = ({handleSubmit}) => {
  return (
    <CartOrderFormStyled>
      <form onSubmit={handleSubmit}>
        <div>
          <Field required name="name" component="input" placeholder='name' type="text" />
        </div>
        <div>
          <Field required name="surName" component="input" placeholder='surname' type="text" />
        </div>
        <div>
          <Field required name="adress" component="input" placeholder='adress' type="text" />
        </div>
        <div>
          <Field required name="phone" component="input" placeholder='phone' type="text" />
        </div>
        <button type="submit">order</button>
      </form>
    </CartOrderFormStyled>
  )
}

const afterSubmit = (result: any, dispatch: any) => dispatch(reset('make-order'))

export default reduxForm({
  form: 'make-order',
  onSubmitSuccess: afterSubmit,
})(CartOrderForm)
