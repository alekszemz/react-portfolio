import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';//change all component to capitals
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="all-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration: 'none', color: '#fff'}} to='/'>React Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: '#000'}} to='/'>My Portfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content style={{marginTop: '64px'}}>
            <Main />
        </Content>
    </Layout>
    </div>
  );
}

export default App;
