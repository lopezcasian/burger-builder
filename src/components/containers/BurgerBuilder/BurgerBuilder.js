import React, { Component } from 'react';
import AuxWrapper from '../../../highOrderComponents/AuxWrapper';

class BurgerBulder extends Component {
    render () {
        return (
            <AuxWrapper>
                <div>Burger</div>
                <div>Build controls</div>
            </AuxWrapper>
        );      
    }
}

export default BurgerBulder;