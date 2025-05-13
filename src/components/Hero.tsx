import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Доставка вкусных{" "}
              <span className="text-brand-green">суши и роллов</span> за 60
              минут
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Свежие ингредиенты, быстрая доставка и вкусные блюда прямо к вам
              домой
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white"
              >
                Заказать сейчас
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-dark"
              >
                Наше меню
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center">
                <Icon name="Clock" className="h-5 w-5 mr-2 text-brand-orange" />
                <p className="text-sm font-medium text-gray-300">
                  Доставка от 60 минут
                </p>
              </div>
              <div className="flex items-center">
                <Icon
                  name="Sparkles"
                  className="h-5 w-5 mr-2 text-brand-orange"
                />
                <p className="text-sm font-medium text-gray-300">
                  Свежие ингредиенты
                </p>
              </div>
              <div className="flex items-center">
                <Icon
                  name="ThumbsUp"
                  className="h-5 w-5 mr-2 text-brand-orange"
                />
                <p className="text-sm font-medium text-gray-300">
                  Высокие оценки
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1800&auto=format&fit=crop"
                alt="Аппетитные суши-сеты"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 z-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green via-brand-orange to-brand-green"></div>
    </section>
  );
};

export default Hero;
