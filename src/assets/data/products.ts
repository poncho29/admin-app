import { Column, Product } from "../../interfaces";

export const productColumns: Column<Product>[] = [
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

// const productSearchableFields: (keyof User)[] = ['name', 'email', 'cedula', 'nameStore', 'city'];

export const products: Product[] = [
  {
    id: 1,
    product: "Teléfono inteligente",
    code: "TS1001",
    price: 599.99,
    quantity: 50,
    supplier: "TechCo"
  },
  {
    id: 2,
    product: "Auriculares inalámbricos",
    code: "AI2001",
    price: 99.99,
    quantity: 100,
    supplier: "SoundTech"
  },
  {
    id: 3,
    product: "Cargador portátil",
    code: "CP3001",
    price: 29.99,
    quantity: 75,
    supplier: "PowerTech"
  },
  {
    id: 4,
    product: "Smartwatch",
    code: "SW4001",
    price: 149.99,
    quantity: 40,
    supplier: "WatchTech"
  },
  {
    id: 5,
    product: "Teclado mecánico",
    code: "KM5001",
    price: 79.99,
    quantity: 60,
    supplier: "KeyTech"
  },
  {
    id: 6,
    product: "Mouse inalámbrico",
    code: "MI6001",
    price: 39.99,
    quantity: 80,
    supplier: "MouseTech"
  },
  {
    id: 7,
    product: "Funda para teléfono",
    code: "FT7001",
    price: 19.99,
    quantity: 120,
    supplier: "CaseTech"
  },
  {
    id: 8,
    product: "Adaptador USB-C a HDMI",
    code: "AU8001",
    price: 24.99,
    quantity: 45,
    supplier: "ConnectTech"
  },
  {
    id: 9,
    product: "Batería externa",
    code: "BE9001",
    price: 49.99,
    quantity: 90,
    supplier: "PowerTech"
  },
  {
    id: 10,
    product: "Soporte para laptop",
    code: "SL1001",
    price: 34.99,
    quantity: 55,
    supplier: "StandTech"
  },
  {
    id: 11,
    product: "Altavoces Bluetooth",
    code: "AB1101",
    price: 129.99,
    quantity: 30,
    supplier: "SoundTech"
  },
  {
    id: 12,
    product: "Memoria USB",
    code: "MU1201",
    price: 19.99,
    quantity: 150,
    supplier: "StorageTech"
  },
  {
    id: 13,
    product: "Monitor de computadora",
    code: "MC1301",
    price: 249.99,
    quantity: 25,
    supplier: "ScreenTech"
  },
  {
    id: 14,
    product: "Ratón ergonómico",
    code: "RE1401",
    price: 49.99,
    quantity: 70,
    supplier: "MouseTech"
  },
  {
    id: 15,
    product: "Estuche para auriculares",
    code: "EA1501",
    price: 14.99,
    quantity: 110,
    supplier: "CaseTech"
  },
  {
    id: 16,
    product: "Router Wi-Fi",
    code: "RW1601",
    price: 89.99,
    quantity: 40,
    supplier: "ConnectTech"
  },
  {
    id: 17,
    product: "Cable de carga USB",
    code: "CC1701",
    price: 9.99,
    quantity: 200,
    supplier: "ConnectTech"
  },
  {
    id: 18,
    product: "Base de carga inalámbrica",
    code: "BC1801",
    price: 39.99,
    quantity: 60,
    supplier: "PowerTech"
  },
  {
    id: 19,
    product: "Micrófono USB",
    code: "MU1901",
    price: 59.99,
    quantity: 35,
    supplier: "SoundTech"
  },
  {
    id: 20,
    product: "Lámpara LED USB",
    code: "LU2001",
    price: 19.99,
    quantity: 80,
    supplier: "LightTech"
  }
];