import { Buttom, Table } from "../../../components";

import { stores } from "../../../assets/data";

import { Store } from "../../../interfaces";

import { IoMdAdd } from "react-icons/io";

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

export const Stores = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Listado de Tiendas</h2>
        
        <Buttom customClass="max-w-[160px] flex items-center gap-2 bg-green-500 hover:bg-green-600">
          <IoMdAdd size={24} />
          Crear Tienda
        </Buttom>
      </div>

      <Table
        data={stores}
        columns={columns}
        controls={[
          {
            icon: 'edit',
            text: 'Editar',
            action: (item: Store) => console.log(item)
          },
          {
            icon: 'delete',
            text: 'Desactivar',
            action: (item: Store) => console.log(item)
          }
        ]}
      />
    </div>
  )
}
