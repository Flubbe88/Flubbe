import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}}
        to="/">Niklas Flyborg</Link>} scroll>
            <Navigation>
                
                <Link to="/aboutme"></Link>
                
                <Link style={{color:'green', fontSize:'25px'}} to="/"><i style={{fontWeight:'bold'}} className="fa fa-code" aria-hidden="true"/></Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>

                
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}}
        to="/">Niklas Flyborg</Link>}>
            <Navigation>
                
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
