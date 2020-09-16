import React from 'react';
import AuxWrapper from '../../highOrderComponents/AuxWrapper';
import classes from './Layout.module.css';

const layout = ( props ) => (
    <AuxWrapper>
        <div>
            Toolbar, SideDraweer, Backdrop
        </div>
        <main className={ classes.Content }>
            { props.children }
        </main>
    </AuxWrapper>
);

export default layout;