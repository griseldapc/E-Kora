import { Text } from '@mantine/core';
import { DashboardDetail } from '~/components/(dashboard)/dashboard/detail';
import Timeline from '~/components/(dashboard)/stepper';
import { auth } from '~/lib/auth';

export default async function Page() {
  const session = await auth();

  return (
    <Text>P
    </Text>
  );
}
