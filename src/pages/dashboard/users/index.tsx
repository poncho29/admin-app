import { Column, TableCustom } from "../../../components";

import { users } from "../../../assets/data";

import { User } from "../../../interfaces";

const columns: Column<User>[] = [
  {
    header: 'Nombre',
    accessor: 'name'
  },
  {
    header: 'Correo',
    accessor: 'email'
  },
  {
    header: 'Cedula',
    accessor: 'cedula'
  },
  {
    header: 'Nombre de la tienda',
    accessor: 'nameStore'
  },
  {
    header: 'Ciudad',
    accessor: 'city'
  }
]

export const Users = () => {
  return (
    <div className="w-full">
      <TableCustom
        data={users}
        columns={columns}
        controls={[
          {
            icon: 'edit',
            text: 'Editar',
            onClick: (item) => console.log(item)
          },
          {
            icon: 'delete',
            text: 'Desactivar',
            onClick: (item) => console.log(item)
          }
        ]}
      />
    </div>
  )
}
