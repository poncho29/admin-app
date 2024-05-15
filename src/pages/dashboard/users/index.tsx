import { useState } from "react";

import { IoMdAdd } from "react-icons/io";

import { Buttom, Column, InputText, Modal, TableCustom } from "../../../components";

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
];

// const searchableFields: (keyof User)[] = ['name', 'email', 'cedula', 'nameStore', 'city'];

export const UsersPage = () => {
  const [modalCreate, setModalCreate] = useState(false);
  
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Listado de usuarios</h2>
        
        <Buttom
          customClass="max-w-[160px] flex items-center gap-2 bg-green-500 hover:bg-green-600"
          onClick={() => setModalCreate(true)}
        >
          <IoMdAdd size={24} />
          Crear usuario
        </Buttom>
      </div>
      
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
    </>
  )
}
