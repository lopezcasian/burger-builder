import React from 'react';
import AxuWrapper from '../../../highOrderComponents/AuxWrapper';

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( ingredientKey => {
            return (
                <li key={ ingredientKey }>
                    <span style={{textTransform: 'capitalize'}}>{ ingredientKey }</span>: { props.ingredients[ ingredientKey ] }
                </li>
            );
        });

    return (
        <AxuWrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                { ingredientSummary }
            </ul>
            <p>Continue to checkout?</p>
        </AxuWrapper>       
    );
}

export default orderSummary;