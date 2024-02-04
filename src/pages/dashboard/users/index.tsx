import { Table } from "../../../components";

import { users } from "../../../assets/data";

const columns = [
  {
    header: 'Nombre',
    accessorKey: 'name'
  },
  {
    header: 'Correo',
    accessorKey: 'email'
  },
  {
    header: 'Cedula',
    accessorKey: 'cedula'
  },
  {
    header: 'Nombre de la tienda',
    accessorKey: 'nameStore'
  },
  {
    header: 'Ciudad',
    accessorKey: 'city'
  }
]

export const Users = () => {
  return (
    <div className="w-full">
      <Table data={users} columns={columns} />
    </div>
  )
}
