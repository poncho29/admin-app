import { useState } from "react";

import { IoMdAdd } from "react-icons/io";

import { Buttom, InputText, Modal, Column, TableCustom } from "../../../components";

import { stores } from "../../../assets/data";

import { Store } from "../../../interfaces";

const columns: Column<Store>[] = [
  {
    header: 'Nombre',
    accessor: 'name',
    sorteable: true
  },
  {
    header: 'Ubicación',
    accessor: 'location',
    sorteable: true
  },
  {
    header: 'Categoría',
    accessor: 'category',
    sorteable: true
  },
  {
    header: 'Estado',
    accessor: 'status'
  },
  {
    header: 'Precio',
    accessor: 'price'
  },
  {
    header: 'Fecha de pago',
    accessor: 'paymentDate',
    sorteable: true
  }
];

const searchableFields: (keyof Store)[] = ['name', 'location', 'category', 'price', 'paymentDate'];

export const StoresPage = () => {
  const [modalCreate, setModalCreate] = useState(false);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Listado de Tiendas</h2>
        
        <Buttom
          customClass="max-w-[160px] flex items-center gap-2 bg-green-500 hover:bg-green-600"
          onClick={() => setModalCreate(true)}
        >
          <IoMdAdd size={24} />
          Crear Tienda
        </Buttom>
      </div>

      <TableCustom
        data={stores}
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
        searchableFields={searchableFields}
      />

      <Modal isOpen={modalCreate} onClose={() => setModalCreate(false)}>
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
