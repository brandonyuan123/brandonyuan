import './Home.css'
import GitHubButton from './components/GitHubButton'
import EmailButton from './components/EmailButton'
import ResumeButton from './components/ResumeButton'
import LinkedInButton from './components/LinkedInButton'

import { Group } from '@mantine/core';


function Home () {
  return (
    <>
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
      <p>💻 an undergraduate CS student @ Texas A&M</p>
      <p>🤖 interested in web development & machine learning</p>
      <p>🎵 a fan of classical music, basketball, & video games</p>

      <h3>previously, i've...</h3>
      <p>📒 led & managed "<a href="https://github.com/aggie-coding-club/notes-with-canvas">Notes with Canvas</a>" in the Aggie Coding Club</p>
      <p>👓 contributed to the CNN model in "Red Dead Convolution"</p>
      
      <h3>i'm currently...</h3>
      <p>🚧 researching "Forecasting Absenteeism in Construction using Machine Learning"</p>
    </>
  );
}

export default Home
