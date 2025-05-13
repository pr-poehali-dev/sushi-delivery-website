import React from "react";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Icon name="Soup" className="h-8 w-8 text-brand-green mr-2" />
              <span className="font-montserrat font-bold text-xl">
                Качмаз(тест)
              </span>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Доставка вкусных суши, роллов, пиццы и вок в вашем городе. Свежие
              ингредиенты и быстрая доставка.
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors"
              >
                <Icon name="Telegram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-green transition-colors"
              >
                <Icon name="Phone" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-lg mb-4">Меню</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Суши
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Роллы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Пицца
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вок
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Наборы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Напитки
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Информация
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Акции
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Контакты
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <Icon
                  name="MapPin"
                  className="h-5 w-5 mr-2 mt-0.5 text-brand-red"
                />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 mr-2 text-brand-red" />
                <a
                  href="tel:+79991234567"
                  className="hover:text-white transition-colors"
                >
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 mr-2 text-brand-red" />
                <a
                  href="mailto:info@sushimaster.ru"
                  className="hover:text-white transition-colors"
                >
                  info@sushimaster.ru
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Clock" className="h-5 w-5 mr-2 text-brand-red" />
                <span>10:00 - 23:00, без выходных</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-gray-500 text-sm">
            © 2025 СушиМастер. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap gap-4 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Пользовательское соглашение
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
