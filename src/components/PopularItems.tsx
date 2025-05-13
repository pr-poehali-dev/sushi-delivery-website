
import React from 'react';
import FoodCard, { FoodItem } from './FoodCard';

const popularItems: FoodItem[] = [
  {
    id: '1',
    name: 'Филадельфия классик',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2fe075e?q=80&w=2000&auto=format&fit=crop',
    description: 'Лосось, сливочный сыр, огурец, авокадо',
    price: 490,
    weight: 280,
    isSpicy: false,
    isNew: false,
    category: 'rolls'
  },
  {
    id: '2',
    name: 'Калифорния с крабом',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2000&auto=format&fit=crop',
    description: 'Краб, авокадо, огурец, майонез, тобико',
    price: 450,
    weight: 250,
    isNew: true,
    category: 'rolls'
  },
  {
    id: '3',
    name: 'Пепперони',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2000&auto=format&fit=crop',
    description: 'Пепперони, моцарелла, томатный соус',
    price: 590,
    weight: 450,
    discount: 15,
    category: 'pizza'
  },
  {
    id: '4',
    name: 'Вок с курицей и овощами',
    image: 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?q=80&w=2000&auto=format&fit=crop',
    description: 'Курица, рисовая лапша, свежие овощи, соус терияки',
    price: 390,
    weight: 350,
    isVegan: false,
    category: 'wok'
  },
  {
    id: '5',
    name: 'Острый Дракон',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2000&auto=format&fit=crop',
    description: 'Угорь, тунец, спайси соус, огурец',
    price: 560,
    weight: 270,
    isSpicy: true,
    category: 'rolls'
  },
  {
    id: '6',
    name: 'Нигири с лососем',
    image: 'https://images.unsplash.com/photo-1648147891483-d1119bf95698?q=80&w=2000&auto=format&fit=crop',
    description: 'Рис, свежий лосось, васаби',
    price: 280,
    weight: 120,
    category: 'sushi'
  },
  {
    id: '7',
    name: 'Четыре сыра',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2000&auto=format&fit=crop',
    description: 'Моцарелла, горгонзола, пармезан, рикотта',
    price: 650,
    weight: 470,
    discount: 10,
    category: 'pizza'
  },
  {
    id: '8',
    name: 'Вок по-тайски',
    image: 'https://images.unsplash.com/photo-1617622141573-64e01a589ee9?q=80&w=2000&auto=format&fit=crop',
    description: 'Тофу, рисовая лапша, овощи, соус пад-тай',
    price: 370,
    weight: 340,
    isVegan: true,
    category: 'wok'
  }
];

const PopularItems: React.FC = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Популярные блюда</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Самые заказываемые позиции из нашего меню, которые нравятся нашим клиентам
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;
