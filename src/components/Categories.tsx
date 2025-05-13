
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

type Category = {
  id: string;
  name: string;
  image: string;
  icon: string;
  description: string;
}

const categories: Category[] = [
  {
    id: 'sushi',
    name: 'Суши',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2000&auto=format&fit=crop',
    icon: 'Fish',
    description: 'Классические японские суши с свежей рыбой'
  },
  {
    id: 'rolls',
    name: 'Роллы',
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e323?q=80&w=2000&auto=format&fit=crop',
    icon: 'Soup',
    description: 'Разнообразные роллы на любой вкус'
  },
  {
    id: 'pizza',
    name: 'Пицца',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop',
    icon: 'Pizza',
    description: 'Ароматная пицца с хрустящим тестом'
  },
  {
    id: 'wok',
    name: 'Вок',
    image: 'https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?q=80&w=2000&auto=format&fit=crop',
    icon: 'UtensilsCrossed',
    description: 'Лапша и рис в воке с овощами и мясом'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Категории меню</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите категорию и найдите свои любимые блюда из нашего разнообразного меню
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="relative rounded-2xl overflow-hidden shadow-hover group"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent z-10"></div>
              
              {/* Background image */}
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                    <Icon name={category.icon} className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-white">
                    {category.name}
                  </h3>
                </div>
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-brand-dark"
                >
                  Смотреть все
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
