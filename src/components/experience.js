import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render(){
        return(
          <Grid>
              <Cell col={4}>
                  <p>{this.props.startYear} - {this.props.endYear}</p>
              </Cell>
              <Cell col={8}>
              <h4 style={{marginTop: '0px', margin: 'auto'}}>{this.props.jobName}</h4>
              <p style={{paddingBottom:'0em', fontSize: '12px',paddingLeft: '8px', fontWeight: 'bold', fontVariant:'small-caps',textDecorationLine:'underline',color:'#ea8519' }}>{this.props.jobTitle}</p>
              <p>{this.props.jobDescription}</p>
              </Cell>
            </Grid>  
        )
    }
}

export default Experience;