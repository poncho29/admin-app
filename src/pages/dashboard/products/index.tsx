import { useState } from "react";

import { PageLayout } from "../../../layouts";

import { Buttom, InputText, Modal, TableCustom } from "../../../components";

import { productColumns, products } from "../../../assets/data";


export const ProductsPage = () => {
  const [modalCreate, setModalCreate] = useState(false);
  
  return (
    <PageLayout
      title="Listado de productos"
      onClickButton={() => setModalCreate(true)}
    >      
      <TableCustom
        data={products}
        columns={productColumns}
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
    </PageLayout>
  )
}
