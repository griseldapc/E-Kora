'use client';

import { useState } from 'react';
import { Stepper, Button, Group, Title } from '@mantine/core';

function TimeLine() {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

  return (
    <>
    <Title order={3} mb={20}>Proses Penanganan Perkara</Title>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step
          label="Penyelidikan"
          description="Penyelidikan Perkara"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          Step 1 : Proses penyelidikan perkara
        </Stepper.Step>
        <Stepper.Step
          label="Penyidikan"
          description="Penyidikan Perkara"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          Step 2 : Proses penyidikan perkara
        </Stepper.Step>
        <Stepper.Step
          label="Kirim Berkas"
          description="Pengiriman Berkas Perkara"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          Step 3 : Proses pengiriman berkas perkara
        </Stepper.Step>

        <Stepper.Completed>
          Berhasil, proses penanganan perkara telah selesai!
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Kembali
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Lanjut</Button>
      </Group>
    </>
  );
}


export default TimeLine;