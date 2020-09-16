import React, { Component } from 'react';
import AuxWrapper from '../../../highOrderComponents/AuxWrapper';
import Burger from '../../Burger/Burger';

class BurgerBulder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render () {
        return (
            <AuxWrapper>
                <Burger ingredients={ this.state.ingredients } />
                <div>Build controls</div>
            </AuxWrapper>
        );      
    }
}

export default BurgerBulder;