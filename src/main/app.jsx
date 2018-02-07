import React, { Component } from 'react'
import {SectionsContainer, Section, Footer} from 'react-fullpage';

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import '../layout/custom.css'
import Home from '../pages/home';
import Design from '../pages/design';
import Consultoria from '../pages/consultoria';
import Servicos from '../pages/servicos';
import Contato from '../pages/contato';

export default class App extends Component{
        
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        }
      }
  
      render() {
          const options = {
              sectionClassName: 'section',
              anchors: ['home', 'design', 'consultoria','servicos','contato'],
              scrollBar: false,
              navigation: true,
              verticalAlign: false,
              sectionPaddingTop: '0',
              sectionPaddingBottom: '0',
              arrowNavigation: true,
              scrollCallback: (states) => this.setState({current: states.activeSection})
          };
  
          const {current} = this.state
  
          return (
              <div>
                  
                  <SectionsContainer className="" {...options} activeSection={current}>
                      <Section > <Home/> </Section>
                      <Section > <Design/> </Section>
                      <Section > <Consultoria/> </Section>
                      <Section > <Servicos/> </Section>
                      <Section > <Contato/> </Section>
                  </SectionsContainer>
  
              </div>
          )
      }
}