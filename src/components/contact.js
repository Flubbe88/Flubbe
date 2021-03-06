import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profil from './assets/profiljag.png'


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                     <Cell col={6}>
                         <h2 style={{margin:'auto'}}>Niklas Flyborg</h2>
                             <img
                             src={profil}
                             alt="avatar"
                             style= {{height: '200px'}}
                             />
                             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                             Thank you for looking in!<br></br>
                             If you are interested in me, please contact me on LinkedIn
                             </p>

                     </Cell>
                     <Cell col={6}>
                         <h2 style={{margin:'auto'}}>Contact me</h2>
                         <hr/>

                        <div className="contact-list">
                        <List>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'oxygen',color:'white'}}>
                                <a href="https://www.linkedin.com/in/niklas-flyborg-70784a9b" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                    </a>
                                    Niklas Flyborg @ LinkedIn
                                    </ListItemContent>
                            </ListItem>
                            
                            
                            
                        

                        </List>
                        </div>

                         


                     </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;