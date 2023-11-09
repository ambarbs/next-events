import React from 'react';
import Table, { rows } from './TableRow';

export default function Dashboard () {
    return <main className='flex justify-center items-center min-h-screen min-w-max'>
        <Table rows={rows}/>
    </main>
}
