import "./DataList.scss";

export interface DataListProps {
  name: string;
  description: string;
  image: string;
  price: number;
  discountRate?: number;
  discountPrice?: number;
}

export function DataList({
  name,
  description,
  image,
  price,
  discountRate,
  discountPrice,
}: DataListProps): JSX.Element {
  return (
    <div>
      <div className="dataList">
        <img src={image} className="cookieImg" alt="product" />
        <p className="cookieIntro">{description}</p>
        <p className="cookieName">{name}</p>
        <div className="priceBox">
          {discountRate! > 0.0 && (
            <span className="cookieDiscountRate">{`${
              discountRate! * 100
            }%`}</span>
          )}
          {price! > 0 && (
            <span className="discountOriginPrice">{`${price}`}원</span>
          )}
          {discountRate === 0.0 && (
            <span className="originalPrice">{`${price}`}원</span>
          )}
          {discountRate! > 0.0 && (
            <span className="cookieDiscountPrice">{discountPrice}원</span>
          )}
        </div>
        <p className="freeShipping">무료배송</p>
      </div>
    </div>
  );
}

// export class DataList extends Component {
//   render() {
//     const {
//       cookieIntro,
//       name,
//       cookiePrice,
//       cookieDiscountPrice,
//       cookieDiscountRate,
//     } = this.props;

//     return (
//       <div className="dataList">
//         <img src={this.props.cookieImg} className="cookieImg" alt="product" />
//         <p className="cookieIntro">{this.props.cookieIntro}</p>
//         <p className="cookieName">{this.props.name}</p>
//         <div className="priceBox">
//           {cookieDiscountRate > 0.0 && (
//             <span className="cookieDiscountRate">{`${
//               cookieDiscountRate * 100
//             }%`}</span>
//           )}
//           {cookieDiscountPrice > 0 && (
//             <span className="discountOriginPrice">{`${cookiePrice}`}원</span>
//           )}
//           {cookieDiscountRate === 0.0 && (
//             <span className="originalPrice">{`${cookiePrice}`}원</span>
//           )}
//           {cookieDiscountRate > 0.0 && (
//             <span className="cookieDiscountPrice">{cookieDiscountPrice}원</span>
//           )}
//         </div>
//         <p className="freeShipping">무료배송</p>
//       </div>
//     );
//   }
// }

// export default DataList;
