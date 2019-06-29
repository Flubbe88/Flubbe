import React, { Component } from 'react';
import { Grid, Cell, Chip } from 'react-mdl';
import profil from './assets/bild1.png'
import Education from './education';
import Experience from './experience'
import Skills from './skills'


class Resume extends Component {
    render() {
        const betyg = 'Work environment and safety \n Computer Knowledge \n Computer Communications \n IT coordination \n Local networks A \n Local networks B \n Programming A \n Programming B - VisualBasic \n Communication Security / LK \n Communication \n Operating system Linux \n Operating system Windows 7 \n Operating system Windows 10 \n Other operating systems \n Project-work \n ITIL - constant improvement ';
        return(
            <div className="resume-grid">
            <Grid>
                <Cell className="resume-left-col" col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img
                        src={profil}
                        alt="avatar"
                        style={{height: '200px'}}
                        />
                    </div>

                    <h2 style={{marginBottom: '0em'}}>Niklas Flyborg</h2>
                    <h5 style={{ width: '90%', margin: 'auto', paddingBottom: '15px', paddingTop:'5px',textDecorationLine:'underline', color:'grey', fontVariant:'small-caps', fontSize: '15px'}}>Network and Systemadministrator</h5>
                    <p style={{ width: '90%', margin: 'auto', paddingTop: '0em' }}>Hey!</p>
                    <p style={{ width: '90%', margin: 'auto', paddingTop: '5px' }}>
                    My name is Niklas Flyborg is 30 years old and I live in Högsbo I am passionate about everything 
                    that has to do with computers. My interest in computers began as early as the six-year-old with 
                    computer games, then the interest developed to build my own computers so my career choice was simple. 
                    Still think it is fun and interest has evolved to solve problems with between systems, clients scripts and other solutions. As a person, 
                    I am solution-focused, humble, positive and easy to work with other people. In my spare time I like to meet friends, 
                    play and socialize with the family

                    </p>
                    <hr style={{borderTop: '3px solid #6f0000', width: '100%'}}/>
                    <h5>Nationality</h5>
                    <p>Swedish</p>
                    <h5>Language</h5>
                    <p>Swedish (fluent) English (Good)</p>
                    <h5>Interests and hobbies</h5>
                    <p>Music, Cars, Hockey, Technology, Games and my Cat!</p>
                    <hr style={{borderTop: '3px solid #6f0000', width: '100%'}}/>

                    <h2>Tools</h2>
                    <Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>Virsual Studio Code</Chip><sb> </sb><Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>Powershell</Chip><br></br>
                    <Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>DSM</Chip><sb> </sb><Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>SCCM</Chip><sb> </sb><Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>Windows 10</Chip><br></br>
                    <Chip style={{textAlign:'center',background:'#00bfef',fontWeight: 'bold'}}>PS-execute</Chip>


                </Cell>
                <Cell className="resume-right2-col" col={8}>
                    <h2>Education / Course certificates </h2>

                    
                    <Education
                    startYear={2018}
                    endYear={2018}
                    schoolName="Inside Windows 10 in the Enterprise for VGR-IT"
                    schoolTitle="Course"
                    schoolDescription="The course content was: installation of Operating system with network booting, advanced troubleshooting, Powershell, Group Policy and more
                    "
                    />
                    

                    <Education
                    startYear={2016}
                    endYear={2016}
                    schoolTitle="Course"
                    schoolName="In-house ITIL Introduction for VGR IT"
                    schoolDescription="ITIL [Information Technology Infrastructure Library] aims to provide guidance for providing qualitative IT services, processes, functions, 
                    and other capabilities required for its support. The ITIL framework is based on the entire lifecycle of services and consists of five steps 
                    (service strategy, service design, service handover, service operation and continuous service improvement)
                    "
                    />
                    <Education
                    startYear={2010}
                    endYear={2012}
                    schoolTitle="Education"
                    schoolName="NatSys [Network and System Administration]"
                    schoolDescription="The program was an intensive two-year education. During the training 
                    we worked with computer communication to calculate hex and binary and subnet (network technology). Local networks A,B where we built up Enterprise networks with Custom GPO via AD and the network around the Enterprise network (Enterprise technology)
                    Programming A,B Virusal Basic, Security and much more 
                    "
                    />
                    
                <hr style={{borderTop: '3px solid #6f0000'}} />

                <h2>Work</h2>
            
                <Experience
                startYear={2012}
                
                jobName="VGR-IT (Västa Götalandsregionen)"
                jobTitle="IT Technician"
                jobDescription="VGR-IT (Västra Götalandsregion) is an IT for Hospitals and health centers around the Gothenburg area we also have other political assignments such as Schools, Politicians, and Libraries.
                  Iam working as a Destrubution technician within my assignment I have New orders, PC exchange, Scripting and help 1 and 2 line with problem within SCCM console. 
                  More Assignments I have had in VGR-IT
                Migrating Windows 7 as Destrubution technician and Investigation within System for Windows 10. Have worked as installation technicians in areas of DSM and SCCM "
                
            />
            
            <Experience
                startYear={2012}
                endYear={2012}
                
                jobName="Wayahead"
                jobTitle="IT-Consultant"
                jobDescription="Be a consultant from WayaHead to a company called Caperio and from there to VGR-IT. Worked on VGR-IT for six months before I got a job there."
                
            />            

            <Experience
                startYear={2010}
                endYear={2011}
                jobName="Pilkington (Car windsheils warehouse)"
                jobTitle="warehouse worker"
                jobDescription="Worked as a packer in car glass warehouse"
            />

<Experience
                startYear={2005}
                endYear={2009}
                jobName="Majornas Glasmästeri"
                jobTitle="Glass master apprentice"
                jobDescription="Worked as a glass master apprentice with my father "
            />

            <hr style={{borderTop: '3px solid #6f0000'}} />
            <h2>Experience</h2>
            <Skills
                skill="Windows 10"
                progress={80} 
                />
            <Skills
                skill="SCCM"
                progress={85} 
                />
            <Skills
                skill="System Administration"
                progress={90} 
                />
            <Skills
                skill="Powershell"
                progress={60} 
                />
            <Skills
                skill="Troubleshooting"
                progress={80} 
                />
            <Skills
                skill="Script"
                progress={60} 
                />
                

                <hr style={{borderTop: '3px solid #6f0000',paddingTop: '0em'}} />
                <h2 style={{textAlign: 'center'}}>Grade</h2>
                <div className="display-linebreak" style={{textAlign: 'center', paddingTop: '0em'}}>
                    {betyg}
                    
                </div>
                
                


                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Resume;