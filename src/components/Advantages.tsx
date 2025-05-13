import React from "react";
import Icon from "@/components/ui/icon";

const advantages = [
  {
    icon: "Timer",
    title: "Быстрая доставка",
    description: "Доставляем заказы по городу в течение 60 минут",
  },
  {
    icon: "Wallet",
    title: "Выгодные цены",
    description: "Регулярные акции и система бонусов для наших клиентов",
  },
  {
    icon: "Refrigerator",
    title: "Свежие продукты",
    description: "Используем только свежие ингредиенты высокого качества",
  },
  {
    icon: "Chef",
    title: "Опытные повара",
    description: "Наши шеф-повара имеют многолетний опыт в японской кухне",
  },
];

const Advantages: React.FC = () => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы стремимся предоставить лучший сервис и качество для наших
            клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 rounded-full bg-brand-green/10 flex items-center justify-center mb-4">
                <Icon
                  name={advantage.icon}
                  className="h-8 w-8 text-brand-green"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
