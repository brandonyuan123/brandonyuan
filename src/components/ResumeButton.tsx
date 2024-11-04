import { Button } from '@mantine/core';
import { IconFileCertificate } from '@tabler/icons-react'

export default function ResumeButton() {
  return (
    <> 
      <Button variant="light" color="rgba(0, 0, 0, 1)" size="xs" radius="xl" leftSection={<IconFileCertificate size={18}/>}>Resume</Button>
    </>
  );
}