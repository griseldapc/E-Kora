'use client';

import { Button, Flex, Table } from '@mantine/core';
import { IconEye, IconPencil, IconTrash } from '@tabler/icons-react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEntityModal } from '~/hooks/useEntityModal';
import { ModalSizeType } from '~/types/use-entity-modal';
import { useRouter } from 'next/navigation';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  modalSize?: ModalSizeType;
  topRight?: React.ReactNode;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  modalSize,
  topRight
}: DataTableProps<TData, TValue>) {
  const { setEntityState } = useEntityModal();
  const router = useRouter();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div>
        {topRight}
      </div>
      <Table striped highlightOnHover>
        <Table.Thead bg="secondary.1">
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )
                        ?.toString()
                        .toLocaleUpperCase()}
                </Table.Th>
              ))}
              <Table.Th>TINDAKAN</Table.Th>
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody>
          {table.getCoreRowModel().rows?.length ? (
            table.getCoreRowModel().rows.map((row) => (
              <Table.Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Td>
                ))}
                <Table.Td>
                  <Flex gap="xs">
                    {/* EDIT */}
                    {/* <Button
                      size="xs"
                      variant="default"
                      c="secondary"
                      leftSection={<IconPencil size={12} />}
                      onClick={() => {
                        setEntityState(row.original, 'PATCH', modalSize);
                      }}
                    >
                      Edit
                    </Button> */}

                    {/* DELETE */}
                    {/* <Button
                      size="xs"
                      bg="red"
                      leftSection={<IconTrash size={12} />}
                      onClick={() => {
                        setEntityState(row.original, 'DELETE', modalSize);
                      }}
                    >
                      Hapus
                    </Button> */}

                    {/* DETAIL */}
                    <Button
                      size="xs"
                      bg="blue"
                      leftSection={<IconEye size={12} />}
                      onClick={() => {
                        router.push('/laporanPolisi/detail')
                      }}
                    >
                      Detail
                    </Button>
                  </Flex>
                </Table.Td>
              </Table.Tr>
            ))
          ) : (
            <Table.Tr>
              <Table.Td colSpan={columns.length + 1} h={24}>
                Tidak ada data.
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </>
  );
}