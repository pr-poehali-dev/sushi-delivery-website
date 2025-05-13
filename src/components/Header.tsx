
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <Icon name="Soup" className="h-8 w-8 text-brand-red" />
            <span className="font-montserrat font-bold text-xl text-brand-dark">
              СушиМастер
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-brand-red transition-colors">
            Меню
          </a>
          <a href="#" className="text-sm font-medium hover:text-brand-red transition-colors">
            Акции
          </a>
          <a href="#" className="text-sm font-medium hover:text-brand-red transition-colors">
            Доставка
          </a>
          <a href="#" className="text-sm font-medium hover:text-brand-red transition-colors">
            Контакты
          </a>
        </nav>

        {/* Contact & Cart */}
        <div className="flex items-center space-x-4">
          <a href="tel:+79991234567" className="hidden md:flex items-center hover:text-brand-red">
            <Icon name="Phone" className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">+7 (999) 123-45-67</span>
          </a>
          
          <Button variant="ghost" size="icon" className="relative">
            <Icon name="ShoppingCart" className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-brand-red text-white text-[10px] font-bold rounded-full">
              0
            </span>
          </Button>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-8">
                <a href="#" className="text-base font-medium hover:text-brand-red transition-colors">
                  Меню
                </a>
                <a href="#" className="text-base font-medium hover:text-brand-red transition-colors">
                  Акции
                </a>
                <a href="#" className="text-base font-medium hover:text-brand-red transition-colors">
                  Доставка
                </a>
                <a href="#" className="text-base font-medium hover:text-brand-red transition-colors">
                  Контакты
                </a>
                <a href="tel:+79991234567" className="flex items-center hover:text-brand-red">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  <span className="text-base font-medium">+7 (999) 123-45-67</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
