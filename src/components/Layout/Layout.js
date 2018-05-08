import React from 'react';
import Wrapper from '../Wrapper/Wrapper';


const layout = (props) => {
    return(
        <Wrapper>
            <div>Toolbar</div>
            <main>
                {props.children}
            </main>
        </Wrapper>
    );

};

export default layout;