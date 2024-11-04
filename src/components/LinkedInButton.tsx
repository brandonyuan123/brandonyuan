import { Button } from '@mantine/core';
import { IconBrandLinkedinFilled } from '@tabler/icons-react'

export default function LinkedInButton() {
  return (
    <> 
      <Button variant="filled" color="rgba(0, 16, 232, 1)" size="xs" radius="xl" leftSection={<IconBrandLinkedinFilled size={20}/>} >LinkedIn</Button>
    </>
  );
}