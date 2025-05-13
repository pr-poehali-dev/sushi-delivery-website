import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export type FoodItem = {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  weight: number;
  isSpicy?: boolean;
  isNew?: boolean;
  isVegan?: boolean;
  discount?: number;
  category: string;
};

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const {
    name,
    image,
    description,
    price,
    weight,
    isSpicy,
    isNew,
    isVegan,
    discount,
  } = item;

  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <div className="food-card group">
      {/* Image container */}
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-brand-green text-white">Новинка</Badge>
          )}
          {discount && (
            <Badge className="bg-brand-orange text-white">-{discount}%</Badge>
          )}
        </div>

        {/* Icons */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {isSpicy && (
            <div
              className="bg-white/80 p-1.5 rounded-full"
              title="Острое блюдо"
            >
              <Icon name="Flame" className="h-4 w-4 text-brand-orange" />
            </div>
          )}
          {isVegan && (
            <div
              className="bg-white/80 p-1.5 rounded-full"
              title="Вегетарианское блюдо"
            >
              <Icon name="Leaf" className="h-4 w-4 text-brand-green" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-montserrat font-semibold text-lg mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 min-h-[40px] mb-2">
          {description}
        </p>

        {/* Weight */}
        <div className="flex items-center mb-3">
          <Icon name="Weight" className="h-4 w-4 text-muted-foreground mr-1" />
          <span className="text-xs text-muted-foreground">{weight} г</span>
        </div>

        {/* Price and action */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <span className="font-semibold text-lg">{discountedPrice} ₽</span>
            {discount && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                {price} ₽
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="card-button bg-brand-green hover:bg-brand-green/90"
          >
            <Icon name="Plus" className="h-4 w-4 mr-1" />В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
