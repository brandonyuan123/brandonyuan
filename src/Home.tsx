import './Home.css'
import GitHubButton from './components/GitHubButton'
import EmailButton from './components/EmailButton'
import ResumeButton from './components/ResumeButton'
import LinkedInButton from './components/LinkedInButton'

import { Group, Container } from '@mantine/core';


function Home () {
  return (
    <>
      <Container size='35rem'>
        <h1>hi, i'm brandon yuan!</h1>
        
        <h2>
          <Group gap="xs" style={{marginTop: '-1.5rem'}}> 
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brandon-yuan-2ab599265/">
              <LinkedInButton />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/brandonyuan123">
              <GitHubButton />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="/brandonyuan/resume.pdf">
              <ResumeButton />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:brandonyuan05@gmail.com">
              <EmailButton />
            </a>
          </Group>
        </h2>

        <h3>i am...</h3>
        <ul className="custom-list">
          <li data-emoji="💻">an undergraduate CS student @ Texas A&M</li>
          <li data-emoji="🤖">interested in web development & machine learning</li>
          <li data-emoji="🎵">a fan of classical music, basketball, & video games</li>
        </ul>

        <h3>previously, i've...</h3>
        <ul className="custom-list">
          <li data-emoji="📒">led & managed <a href="https://github.com/aggie-coding-club/notes-with-canvas"><em>Notes with Canvas</em></a> in the Aggie Coding Club</li>
          <li data-emoji="👓">worked on a convolutional neural network in <em>Red Dead Convolution</em></li>
        </ul>

        <h3>i'm currently...</h3>
        <ul className="custom-list">
          <li data-emoji="🚧">a machine learning research assistant for: <em>Forecasting Absenteeism in Construction using Machine Learning</em> </li>
          <li data-emoji="🎷">a project manager for <em>Spotify VibeMap</em></li>
        </ul>
      </Container>
    </>
  );
}

export default Home
