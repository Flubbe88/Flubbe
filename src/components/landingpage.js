import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import profil from './assets/profilpop.png'


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src={profil}
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                        
                            <img style={{margin:'auto'}}
                            src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Falecive%2Fflatwoken%2F512%2FApps-Terminal-Pc-104-icon.png&f=1"
                            alt="avatar"
                            className="avatar4-img"
                            />
                            <hr style={{borderTop: '1px solid white',width:'100%'}} />
                            <h1 style={{margin:'auto'}}>IT Technician</h1>

                        <hr/>

                        <p>SCCM | Powershell | React | Problem solving</p>

                    <div style={{paddingLeft:'0'}} className="social-links">
                        {/* Instagram */}
                        <a href="https://www.instagram.com/flubbe88/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                        
                        {/* Github */}
                        <a href="https://github.com/Flubbe88" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github" aria-hidden="true" />
                        </a>


                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/niklas-flyborg-70784a9b" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>


                    </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;