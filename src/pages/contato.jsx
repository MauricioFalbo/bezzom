import React from 'react';
import {Footer} from 'react-fullpage';

export default props => (
    <div>
        <div className="fundoCinzaRight"></div>
        
        <div className="container">
            <img className="img-responsive img-contato" src={require('../layout/img/contato2.png')} />
        </div>
        <Footer>
            <div className="footer">
                <div className="footer-esquerdo">
                    <img className="img-responsive footer-esquerdo-texto " src={require('../layout/img/vem.png')} />
                    {/*  
                        <img className="img-responsive footer-esquerdo-icon " src={require('../layout/img/face.png')} />
                        <img className="img-responsive footer-esquerdo-icon" src={require('../layout/img/insta.png')} />    
                    */}

                </div>
                <div className="footer-direito">
                    <img className="img-responsive " src={require('../layout/img/desenvolvido.png')} />
                </div>
            </div>
        </Footer>
    </div>
);