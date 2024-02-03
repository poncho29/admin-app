export const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead>
          <tr className="text-xs text-white uppercase bg-sky-800">
            <th scope="col" className="px-6 py-3">
              Nombre tienda
            </th>
            <th scope="col" className="px-6 py-3">
              Ubicación
            </th>
            <th scope="col" className="px-6 py-3">
              Categoria
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-gray-900 bg-white border-b">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Tienda la mona
            </th>
            <td className="px-6 py-4">
              San Gil
            </td>
            <td className="px-6 py-4">
              Variado
            </td>
            <td className="px-6 py-4">
              Activo
            </td>
          </tr>
          <tr className="text-gray-900 bg-white">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              Vase Print
            </th>
            <td className="px-6 py-4">
              Socorro
            </td>
            <td className="px-6 py-4">
              Computo
            </td>
            <td className="px-6 py-4">
              Activo
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
