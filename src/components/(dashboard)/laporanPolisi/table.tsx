'use client';

import { DataTable } from '~/components/dataTable';
import { columns } from './column';
import { LaporanPolisi } from '~/types/laporanPolisi';
import { useState } from 'react';
import { Title } from '@mantine/core';

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
  },
  {
    id: 2,
    nomorLaporanPolisi: 'LP/002/2024',
    createDate: '2024-09-18',
    pelapor: 'Alice Johnson',
    terlapor: 'Bob Williams',
    pasal: 'Pasal 351',
    barangBukti: 'Pisau',
    uraian: 'Penganiayaan dengan senjata tajam.',
    createdBy: 'Admin',
  },
  {
    id: 3,
    nomorLaporanPolisi: 'LP/003/2024',
    createDate: '2024-09-19',
    pelapor: 'Charlie Brown',
    terlapor: 'Dave Lee',
    pasal: 'Pasal 378',
    barangBukti: 'Dokumen palsu',
    uraian: 'Penipuan menggunakan dokumen palsu.',
    createdBy: 'Admin',
  },
];

function LaporanPolisiTable() {
  const [data] = useState<LaporanPolisi[]>(dummyData);

  return (
    <>
      <Title order={3} my={15}>List Laporan Polisi</Title>
      <DataTable
      columns={columns}
      data={data}
      modalSize="lg"
    />
    </>
  );
}

export default LaporanPolisiTable;
