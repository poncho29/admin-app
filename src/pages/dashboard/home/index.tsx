import { Table } from "../../../components";

import { stores } from "../../../assets/data";

const columns = [
  {
    header: 'Nombre',
    accessorKey: 'name'
  },
  {
    header: 'Ubicación',
    accessorKey: 'location'
  },
  {
    header: 'Categoría',
    accessorKey: 'category'
  },
  {
    header: 'Estado',
    accessorKey: 'status'
  },
  {
    header: 'Precio',
    accessorKey: 'price'
  },
  {
    header: 'Fecha de pago',
    accessorKey: 'paymentDate'
  }
]

export const Home = () => {
  
  return (
    <div className="w-full">
      <Table data={stores} columns={columns} />
    </div>
  )
}
