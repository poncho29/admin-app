import { Store } from "../../interfaces";

import ImageStore from '../images/licorera.jpg';

export const stores: Store[] = [
  {
    id: '1',
    name: 'Tienda 1A',
    location: 'San gil',
    category: 'Veriado',
    status: true,
    price: 30.000,
    paymentDate: '01-03-2024',
    image: ImageStore
  },
  {
    id: '2',
    name: 'Punto frio la 14',
    location: 'Socorro',
    category: 'Licores',
    status: true,
    price: 30.000,
    paymentDate: '12-03-2024',
    image: ImageStore
  },
  {
    id: '3',
    name: 'El Tio',
    location: 'Socorro',
    category: 'Licores',
    status: true,
    price: 30.000,
    paymentDate: '22-05-2024',
    image: ImageStore
  },
  {
    id: '4',
    name: 'Vaseprint',
    location: 'Socorro',
    category: 'Computo',
    status: true,
    price: 30.000,
    paymentDate: '21-05-2024',
    image: ImageStore
  },
  {
    id: '5',
    name: 'Alcala',
    location: 'Socorro',
    category: 'Licores',
    status: true,
    price: 30.000,
    paymentDate: '05-05-2024',
    image: ImageStore
  },
  {
    id: '6',
    name: 'El Tiger',
    location: 'San Gil',
    category: 'Licores',
    status: true,
    price: 30.000,
    paymentDate: '10-05-2024',
    image: ImageStore
  }
];
