import React from 'react';
import AuxWrapper from '../../highOrderComponents/AuxWrapper';

const layout = ( props ) => (
    <AuxWrapper>
        <div>
            Toolbar, SideDraweer, Backdrop
        </div>
        <main>
            { props.children }
        </main>
    </AuxWrapper>
);

export default layout;