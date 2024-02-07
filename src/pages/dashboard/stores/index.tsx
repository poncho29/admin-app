import { Buttom, InputText, Table } from "../../../components";

import { stores } from "../../../assets/data";

import { Store } from "../../../interfaces";

import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { Modal } from "../../../components/common/Modal";

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
  const [crateStore, setCrateStore] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Listado de Tiendas</h2>
        
        <Buttom
          customClass="max-w-[160px] flex items-center gap-2 bg-green-500 hover:bg-green-600"
          onClick={() => setCrateStore(true)}
        >
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

      <Modal isOpen={crateStore} onClose={() => setCrateStore(false)}>
        <form className="md:w-96 p-4">
          <h2 className="text-xl text-center font-bold uppercase mb-4">Crear Tienda</h2>

          <InputText label="Nombre *" name="name" type="text" />

          <InputText label="Ubicación *" name="location" type="text" />

          <InputText label="Categoría *" name="category" type="text" />

          <InputText label="Estado *" name="status" type="text" />

          <InputText label="Precio *" name="price" type="text" />

          <InputText label="Fecha de pago *" name="paymentDate" type="text" />

          <div className="w-full flex flex-col md:flex-row md:gap-2">
            <Buttom type="submit" customClass="w-full mt-4 bg-red-500 hover:bg-red-600">Cancelar</Buttom>
            <Buttom type="submit" customClass="w-full mt-4">Crear</Buttom>
          </div>
        </form>
      </Modal>
    </div>
  )
}
