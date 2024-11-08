'use client';
import dynamic from 'next/dynamic';
import { Actor } from '@/types/actor';
import { CellContext, ColumnDef, createColumnHelper, HeaderContext } from '@tanstack/react-table';
import React, { FC } from 'react'
const Table = dynamic(() => import('@/components/common/Table'), { ssr: false });

type P = {
  data: Actor[]
}

const ActorsTable:FC<P> = ({ data }) => {

const columnHelper = createColumnHelper<Actor>()

const columns: ColumnDef<Actor, string>[] = [
  columnHelper.accessor('title', {
    header: () => <span>Title</span>,
    cell: (info: CellContext<Actor, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<Actor, string>) => <span>Total</span>
  }),
  columnHelper.accessor('Aliases', {
    header: () => <span>Aliases</span>,
    cell: (info: CellContext<Actor, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<Actor, string>) => <span>Total</span>
  }),
  columnHelper.accessor('Status', {
    header: () => <span>Status</span>,
    cell: (info: CellContext<Actor, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<Actor, string>) => <span>Total</span>
  }),
  columnHelper.accessor('Tags', {
    header: () => <span>Tags</span>,
    cell: (info: CellContext<Actor, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<Actor, string>) => <span>Total</span>
  }),
  columnHelper.accessor('targeted_geography', {
    header: () => <span>Geography</span>,
    cell: (info: CellContext<Actor, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<Actor, string>) => <span>Total</span>
  })
]

  return (
    <div>
         <Table data={data} columns={columns}/>
    </div>
  )
}

export default ActorsTable