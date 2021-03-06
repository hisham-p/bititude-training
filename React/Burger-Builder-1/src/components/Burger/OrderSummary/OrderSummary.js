import React from 'react';
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
    const ingrediantSummary = Object
        .keys(props.ingrediants)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span
                        style={{
                        textTransform: 'capitalize'
                    }}>{igKey}</span>:{props.ingrediants[igKey]}</li>
            );
        })
    return (
        <Aux>
            <h3>
                <u>Your Order</u>
            </h3>
            <p>A delicious burger with following ingrediants :
            </p>
            <ul>
                {ingrediantSummary}
            </ul>
            <p>Continue to CheckOut ?</p>
        </Aux>
    );
}

export default orderSummary;