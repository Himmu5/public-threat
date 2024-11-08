'use client';
import dynamic from 'next/dynamic';
import { Incident } from '@/types/incident';
import { CellContext, ColumnDef, createColumnHelper, HeaderContext } from '@tanstack/react-table';
import React, { FC } from 'react'
const Table = dynamic(() => import('@/components/common/Table'), { ssr: false });

type P = {
  data: Incident[]
}

const IncidentsTable:FC<P> = ({ data }) => {

const columnHelper = createColumnHelper<Incident>()

const columns: ColumnDef<Incident, string>[] = [
  columnHelper.accessor('title', {
    header: () => <span>Title</span>,
    cell: (info: CellContext<Incident, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<Incident, string>) => <span>Total</span>
  }),
  columnHelper.accessor('actor', {
    header: () => <span>Actor</span>,
    cell: (info: CellContext<Incident, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<Incident, string>) => <span>Total</span>
  }),
  columnHelper.accessor('status', {
    header: () => <span>Status</span>,
    cell: (info: CellContext<Incident, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<Incident, string>) => <span>Total</span>
  }),
  columnHelper.accessor('type', {
    header: () => <span>Type</span>,
    cell: (info: CellContext<Incident, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<Incident, string>) => <span>Total</span>
  }),
  columnHelper.accessor('initial_access', {
    header: () => <span>Initial Access</span>,
    cell: (info: CellContext<Incident, string>) => <div>{info.getValue()}</div>,
    footer: (info: HeaderContext<Incident, string>) => <span>Total</span>
  })
]

  return (
    <div>
         <Table data={data} columns={columns}/>
    </div>
  )
}

export default IncidentsTable