'use client';

import { LaporanPolisi } from "~/types/laporanPolisi";
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<LaporanPolisi>[] = [
    {
        accessorKey: 'nomorLaporanPolisi',
        header: 'No. Laporan'
    },
    {
        accessorKey: 'createDate',
        header: 'Tanggal'
    },
    {
        accessorKey: 'pelapor',
        header: 'Nama Pelapor'
    },
    {
        accessorKey: 'terlapor',
        header: 'Nama Terlapor'
    },
    {
        accessorKey: 'pasal',
        header: 'Pasal'
    },
    {
        accessorKey: 'barangBukti',
        header: 'Barang Bukti'
    },
    {
        accessorKey: 'uraian',
        header: 'Deskripsi'
    }
]