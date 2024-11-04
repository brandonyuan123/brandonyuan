import { Button } from '@mantine/core';
import { IconMailFilled } from '@tabler/icons-react'

export default function EmailButton() {
  return (
    <> 
      <Button variant="light" color="rgba(0, 0, 0, 1)" size="xs" radius="xl" leftSection={<IconMailFilled size={18}/>}>Email</Button>
    </>
  );
}

