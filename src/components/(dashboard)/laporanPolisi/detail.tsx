'use client';

import { Badge, Card, Divider, Group, Text, Title } from "@mantine/core";
import { useState } from "react";
import { LaporanPolisi } from "~/types/laporanPolisi";

const dummyData: LaporanPolisi[] = [
    {
      id: 1,
      nomorLaporanPolisi: 'LP/001/2024',
      createDate: '2024-09-17',
      pelapor: 'John Doe',
      terlapor: 'Jane Smith',
      pasal: 'Pasal 362',
      barangBukti: 'Handphone',
      uraian: 'Pencurian handphone di rumah korban.',
      createdBy: 'Admin',
    }
  ];

function DetailLaporan(){
    const [data] = useState<LaporanPolisi[]>(dummyData);
    const laporan = data[0];
    return(
        <>
         <Card w={500} shadow="sm" withBorder radius={10}>
            <Group justify="start" mt="md" mb="xs">
                <Text fw={500}>No. Laporan : </Text>
                <Text>{laporan.nomorLaporanPolisi}</Text>
            </Group>
            <Group justify="start" mt="md" mb="xs">
                <Text fw={500}>Tanggal : </Text>
                <Text>{laporan.createDate}</Text>
            </Group>
            <Group justify="start" mt="md" mb="xs">
                <Text fw={500}>Nama Pelapor : </Text>
                <Text>{laporan.pelapor}</Text>
            </Group>
            <Group justify="start" mt="md" mb="xs">
                <Text fw={500}>Nama Terlapor : </Text>
                <Text>{laporan.terlapor}</Text>
            </Group>
            <Group justify="start" mt="md" mb="xs">
                <Text fw={500}>Pasal : </Text>
                <Text>{laporan.pasal}</Text>
            </Group>
            <Group justify="start" mt="md" mb="xs">
                <Text fw={500}>Barang Bukti : </Text>
                <Text>{laporan.barangBukti}</Text>
            </Group>
            <Group justify="start" mt="md" mb="xs">
                <Text fw={500}>Deskripsi : </Text>
                <Text>{laporan.uraian}</Text>
            </Group>
        </Card>   
        </>
    )
}

export default DetailLaporan;