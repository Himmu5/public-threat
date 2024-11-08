'use client';
import dynamic from 'next/dynamic';
import { technique } from '@/types/technique';
import { CellContext, ColumnDef, createColumnHelper, HeaderContext } from '@tanstack/react-table';
import React, { FC } from 'react'
const Table = dynamic(() => import('@/components/common/Table'), { ssr: false });

type P = {
  data: technique[]
}

const TechniquesTable:FC<P> = ({ data }) => {

const columnHelper = createColumnHelper<technique>()

const columns: ColumnDef<technique, string>[] = [
  columnHelper.accessor('title', {
    header: () => <span>Title</span>,
    cell: (info: CellContext<technique, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<technique, string>) => <span>Total</span>
  }),
  columnHelper.accessor('status', {
    header: () => <span>Status</span>,
    cell: (info: CellContext<technique, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<technique, string>) => <span>Total</span>
  }),
  columnHelper.accessor('relation', {
    header: () => <span>Relation</span>,
    cell: (info: CellContext<technique, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<technique, string>) => <span>Total</span>
  }),
  columnHelper.accessor('tags', {
    header: () => <span>Tags</span>,
    cell: (info: CellContext<technique, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<technique, string>) => <span>Total</span>
  })
]

  return (
    <div>
         <Table data={data} columns={columns}/>
    </div>
  )
}

export default TechniquesTable