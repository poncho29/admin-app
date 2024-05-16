import { useState } from "react";

import { PageLayout } from "../../../layouts";

import { Buttom, InputText, Modal, TableCustom } from "../../../components";

import { storeColumns, storeSearchableFields, stores } from "../../../assets/data";

export const StoresPage = () => {
  const [modalCreate, setModalCreate] = useState(false);

  return (
    <PageLayout
      title="Listado de Tiendas"
      onClickButton={() => setModalCreate(true)}
    >
      <TableCustom
        data={stores}
        columns={storeColumns}
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
        searchableFields={storeSearchableFields}
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
    </PageLayout>
  ) 
}
