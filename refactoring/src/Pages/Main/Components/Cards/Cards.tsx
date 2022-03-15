import React, { Component } from "react";
import "./Cards.scss";

export interface CardsDataProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

export function Cards({ name, description, image, price }: CardsDataProps) {
  console.log(name);
  return <div>Cards</div>;
}

// export class Cards extends Component {
//   render() {
//     const { description, name, price } = this.props;
//     return (
//       <div className="cards">
//         <img
//           src={this.props.subscribeImg}
//           className="subscribeImg"
//           alt="product"
//         />
//         <p className="subscribeIntro">{description}</p>
//         <p className="subscribeName">{name}</p>
//         <p className="subscribePrice">{`${price}원`}</p>
//         <span className="freeShipping">무료배송</span>
//       </div>
//     );
//   }
// }

// export default Cards;
