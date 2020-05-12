import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

export class PayPalBtn extends React.Component {
    render() {
      const { amount, onSuccess, currency } = this.props;
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              options={{
                clientId: 'AQ5BpD5q-nr5AHvLyZIhIwavCFZeueO4W63NKkP5y3PtdSAufkY2u-HxZ7OEzAaSUq-jKnliji8OfXoq'
              }}
          />
        );
    }
}