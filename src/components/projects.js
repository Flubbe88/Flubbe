import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props)  { 
        super(props);
        this.state = { activeTab: 0 };
    }
            
    toggleCategories() {

        if(this.state.activeTab === 0){
            return(

                
                <div style={{margin:'auto'}} className="projects-grid">
                    
                    
                    {/*Project 1 */}
                <Card shadow= {5} style ={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fksusentinel.com%2Fwp-content%2Fuploads%2F2016%2F02%2F20445410520_97a11633c7_o.jpg&f=1) center / cover'}} >React Project #1</CardTitle>
                    <CardText>
                        Project 1
                    </CardText>
                    <CardActions border>
                        <Button Colored>GitHub</Button>
                        <Button Colored>CodePen</Button>
                        <Button Colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="Share" />  
                    </CardMenu>
                </Card>

                    {/*Project 2*/}
                <Card shadow= {5} style ={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sheffield.ac.uk%2Fpolopoly_fs%2F1.761228!%2Fimage%2Fdigital-coding-785.jpg&f=1) center / cover'}} >React Project #2</CardTitle>
                    <CardText>
                        Project 2
                    </CardText>
                    <CardActions border>
                        <Button Colored>GitHub</Button>
                        <Button Colored>CodePen</Button>
                        <Button Colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="Share" />  
                    </CardMenu>
                </Card>

                    {/*Project 3*/}
                <Card shadow= {5} style ={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstephenhaunts.files.wordpress.com%2F2014%2F07%2Fpowershell-v3-1280x1024.jpg&f=1) center / cover'}} >React Project #3</CardTitle>
                    <CardText>
                        Project 3
                    </CardText>
                    <CardActions border>
                        <Button Colored>GitHub</Button>
                        <Button Colored>CodePen</Button>
                        <Button Colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="Share" />  
                    </CardMenu>
                </Card>
                </div>                
                

                
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>Detta är Angular</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>Detta är VueJS</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><h1>Detta är MongoDB</h1></div>
            )
        }

    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Powershell <i className="fa fa-terminal" aria-hidden="true"/> </Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                
            </div>
            
        )
    }
}

export default Projects;