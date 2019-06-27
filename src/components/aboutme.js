import React, { Component } from 'react';
import { Grid, Cell, Chip} from 'react-mdl';
import profilkaffe from './assets/profilkaffe.png'





class About extends Component {
    render() {
        const ommig = 'Datorkommunikation teett et tet et et et ektlasfdskldö akö ösdksal dkaslöd kaldk aölsd akd alkds lakd lkal dksld kald ksdiao diaos diaso \n Programering Virtual bacis A och B \n Lokala nätverk A och B \n Dator kunskap \n Flera';
        
        return(
            <div style={{width: '100%', margin: 'auto'}}>

            <Grid className="about-grid">
            <Cell className="about-left-col" col={4}>
            
                    <img 
                    src={profilkaffe}
                    alt="avatar"
                    className="avatar4-img"
                    />
                    
                    <hr style={{borderTop: '3px solid #e22947', paddingTop: '0em'}} />
                    <h2>Hej</h2>
                    
                    <p style={{ width: '90%', margin: 'auto', paddingTop: '1em' }}>
                             Lucifer (/ˈluːsɪfər/ LEW-si-fər; "light-bringer") is a Latin name for the 
                             
                             </p>
                             <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Verktyg</h2>
                    <Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>Virsual Studio Code</Chip><sb> </sb><Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>Powershell</Chip><br></br>
                    <Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>DSM</Chip><sb> </sb><Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>SCCM</Chip><sb> </sb><Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>Windows 10</Chip>
                    
                
                </Cell>


                
                <Cell className="about-right-col" col={8}>
                
                <h2 style={{ width: '50%', margin: 'auto', paddingLeft: '0em'}}>Om mig</h2>

                


                <div className="display-linebreak">
                    {ommig}
                    <p>Test <br></br>
                    test</p>

                </div>
                </Cell>
            </Grid>
                
        </div>
        )
    }
}

export default About;