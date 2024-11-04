import { Button } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react'

function GitHubButton() {
  return (
    <> 
      <Button variant="filled" 
              color="rgba(0, 0, 0, 1)" 
              size="xs" radius="xl" 
              leftSection={<div style={{ 
                                      backgroundColor: 'white', 
                                      borderRadius: '50%', 
                                      padding: '1px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      position: 'relative',
                                    }}>
                                      <IconBrandGithub size={18} 
                                                        color="black" 
                                                        stroke={1.5} 
                                                        style={{ position: 'relative', top: '2px'}}/>
                    </div>}>
                  GitHub
      </Button>
  </>
  );
}

export default GitHubButton