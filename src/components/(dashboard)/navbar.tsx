'use client';

import { useState } from 'react';
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from '../../styles/navbar.module.css';

export function Navbar() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const theme = useMantineTheme();
  const [activeItem, setActiveItem] = useState('Dashboard');

  const toggleDrawer = () => setDrawerOpened((prev) => !prev);
  const closeDrawer = () => setDrawerOpened(false);

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    closeDrawer();
  };

  return (
    <Box pb={15}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/dashboard" className={`${classes.link} ${activeItem === 'Dashboard' ? classes.active : ''}`}
              onClick={() => handleItemClick('Dashboard')}>
              Dashboard
            </a>
            <a href="/laporanPolisi" className={`${classes.link} ${activeItem === 'Laporan Polisi' ? classes.active : ''}`}
              onClick={() => handleItemClick('Laporan Polisi')}>
              Laporan Polisi
            </a>
            <a href="#" className={`${classes.link} ${activeItem === 'Notifikasi' ? classes.active : ''}`}
              onClick={() => handleItemClick('Notifikasi')}>
              Notifikasi
            </a>
            <a href="#" className={`${classes.link} ${activeItem === 'Profil' ? classes.active : ''}`}
              onClick={() => handleItemClick('Profil')}>
              Profil
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button>Logout</Button>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={`${classes.link} ${activeItem === 'Dashboard' ? classes.active : ''}`}
              onClick={() => handleItemClick('Dashboard')}>
            Dashboard
          </a>
          <a href="#" className={`${classes.link} ${activeItem === 'Laporan Polisi' ? classes.active : ''}`}
              onClick={() => handleItemClick('Laporan Polisi')}>
            Laporan Polisi
          </a>
          <a href="#" className={`${classes.link} ${activeItem === 'Notifikasi' ? classes.active : ''}`}
              onClick={() => handleItemClick('Notifikasi')}>
            Notifikasi
          </a>
          <a href="#" className={`${classes.link} ${activeItem === 'Profil' ? classes.active : ''}`}
              onClick={() => handleItemClick('Profil')}>
            Profil
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button>Logout</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
