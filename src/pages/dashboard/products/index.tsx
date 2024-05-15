import { useState } from "react";

import { IoMdAdd } from "react-icons/io";

import { Buttom, Column, InputText, Modal, TableCustom } from "../../../components";

import { products } from "../../../assets/data";

import { Product } from "../../../interfaces";

const columns: Column<Product>[] = [
  {
    header: 'Producto',
    accessor: 'product'
  },
  {
    header: 'Código',
    accessor: 'code'
  },
  {
    header: 'Precio',
    accessor: 'price'
  },
  {
    header: 'Cantidad',
    accessor: 'quantity'
  },
  {
    header: 'Proveedor',
    accessor: 'supplier'
  }
];

// const searchableFields: (keyof User)[] = ['name', 'email', 'cedula', 'nameStore', 'city'];

export const ProductsPage = () => {
  const [modalCreate, setModalCreate] = useState(false);
  
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Listado de productos</h2>
        
        <Buttom
          customClass="max-w-[160px] flex items-center gap-2 bg-green-500 hover:bg-green-600"
          onClick={() => setModalCreate(true)}
        >
          <IoMdAdd size={24} />
          Crear producto
        </Buttom>
      </div>
      
      <TableCustom
        data={products}
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

      <Modal isOpen={modalCreate} onClose={() => setModalCreate(false)}>
        <form className="md:w-96 p-4">
          <h2 className="text-xl text-center font-bold uppercase mb-4">Crear Producto</h2>

          <InputText label="Producto *" name="product" type="text" />

          <InputText label="Código *" name="code" type="text" />

          <InputText label="Precio *" name="price" type="number" />

          <InputText label="Cantidad *" name="quantity" type="number" />

          <InputText label="Proveedor *" name="supplier" type="text" />

          <div className="w-full flex flex-col md:flex-row md:gap-2">
            <Buttom type="submit" customClass="w-full mt-4 bg-red-500 hover:bg-red-600">Cancelar</Buttom>
            <Buttom type="submit" customClass="w-full mt-4">Crear</Buttom>
          </div>
        </form>
      </Modal>
    </>
  )
}
