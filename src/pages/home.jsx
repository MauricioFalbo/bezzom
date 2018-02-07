import React from 'react';

import {Header} from 'react-fullpage';

export default props => (
    <div>
        <Header>
            <div className="container">
                <img className="img-responsive" src={require('../layout/img/home/logo.png')} />    
            </div>
        </Header>
        <div className="fundoCinzaRight"></div>
        
        <div className="container container-centro">
            <div className="home">  
                <img src={require('../layout/img/home/home.png')} />
            </div>            
        </div>
    </div>
)