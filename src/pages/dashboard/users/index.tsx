import { useState } from "react";

import { PageLayout } from "../../../layouts";

import { Buttom, InputText, Modal, TableCustom } from "../../../components";

import { userColumns, users } from "../../../assets/data";

export const UsersPage = () => {
  const [modalCreate, setModalCreate] = useState(false);
  
  return (
    <PageLayout
      title="Listado de usuarios"
      onClickButton={() => setModalCreate(true)}
    >      
      <TableCustom
        data={users}
        columns={userColumns}
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
          <h2 className="text-xl text-center font-bold uppercase mb-4">Crear Usuario</h2>

          <InputText label="Nombre *" name="name" type="text" />

          <InputText label="Apellidos *" name="apellidos" type="text" />

          <InputText label="Email *" name="email" type="text" />

          <InputText label="Teléfono *" name="status" type="text" />

          <InputText label="Fecha de nacimiento *" name="birthDate" type="text" />

          <div className="w-full flex flex-col md:flex-row md:gap-2">
            <Buttom type="submit" customClass="w-full mt-4 bg-red-500 hover:bg-red-600">Cancelar</Buttom>
            <Buttom type="submit" customClass="w-full mt-4">Crear</Buttom>
          </div>
        </form>
      </Modal>
    </PageLayout>
  )
}
