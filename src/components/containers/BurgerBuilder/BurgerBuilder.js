import React, { Component } from 'react';
import AuxWrapper from '../../../highOrderComponents/AuxWrapper';
import Burger from '../../Burger/Burger';

class BurgerBulder extends Component {
    render () {
        return (
            <AuxWrapper>
                <Burger />
                <div>Build controls</div>
            </AuxWrapper>
        );      
    }
}

export default BurgerBulder;