import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';

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
                <Card shadow= {100} style ={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'Yellow', height: '176px',fontVariant:'small-caps', background:
                    'url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.askme4tech.com%2Fsites%2Fdefault%2Ffiles%2Fpowershell-wmi1.jpg&f=1) center / cover'}} >Form Datorinfo</CardTitle>
                    <CardText>
                        Datorinfo [Computerinfo] is build as a form with script that get information from local computers: Hostname, Windows version, IP address, MAC:address, Active networks card, If power source are connected, Username. 
                        And it invoke SCCM cycles for the targered computer 
                    </CardText>
                    <CardActions border>                    
                        <Button Colored>
                        <a href="https://github.com/Flubbe88/Datorinfo" rel="noopener noreferrer" target="_blank">
                            GitHub
                        </a>
                        </Button> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>

                                    {/*Project 2 */}
                <Card shadow= {100} style ={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'Yellow', height: '176px',fontVariant:'small-caps',paddingtop:'25px', background:
                    'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstackify.com%2Fwp-content%2Fuploads%2F2017%2F04%2FPowershell-commands-793x397.jpg&f=1) center / cover'}} >Batch Datorinfo</CardTitle>
                    <CardText>
                        Batch computer info will take computername from a CSV file and do foreach command to retreive data such as Windows version, Operatingsystem, Computer name, Computer model, OS build, Networksadapter, IP and MAC on the active card, AC connected, Disk space left and active User on the computer
                    </CardText>
                    <CardActions border>                    
                        <Button Colored>
                        <a href="https://github.com/Flubbe88/Batch-Datorinfo/tree/master" rel="noopener noreferrer" target="_blank">
                            GitHub
                        </a>
                        </Button> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>




                </div>                
                

                
            )
        } else if(this.state.activeTab === 1) {
            return(
                
                
                <div style={{margin:'auto'}} className="projects-grid">
                    
                    
                    {/*Project 1 React */}
                <Card shadow= {100} style ={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'Purple', height: '176px', background:
                    'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EntHChgUyirgbZ9A3zTxkAHaFj%26pid%3DApi&f=1) center / cover'}} >Resume homepage</CardTitle>
                    <CardText>
                        My Resume homepage was made in a test of React java programming
                    </CardText>
                    <CardActions border>                    
                        <Button Colored>
                        <a href="https://github.com/Flubbe88/Flubbe" rel="noopener noreferrer" target="_blank">
                            GitHub
                        </a>
                            </Button> 
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>

                </div>                
                


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
                    <Tab>React <i className="fa fa-terminal" aria-hidden="true"/> </Tab>
                    
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