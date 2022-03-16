import "./Cards.scss";

export interface CardsDataProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

export function Cards({ name, description, image, price }: CardsDataProps) {
  return (
    <div className="cards">
      <img src={image} className="subscribeImg" alt="product" />
      <p className="subscribeIntro">{description}</p>
      <p className="subscribeName">{name}</p>
      <p className="subscribePrice">{`${price}원`}</p>
      <span className="freeShipping">무료배송</span>
    </div>
  );
}
