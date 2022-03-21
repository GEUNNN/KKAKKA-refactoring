import "./DataList.scss";

export interface DataListProps {
  name: string;
  description: string;
  image: string;
  price: number;
  discountRate: number;
  discountedPrice: number;
}

export function DataList({
  name,
  description,
  image,
  price,
  discountRate,
  discountedPrice,
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
            <span className="cookieDiscountPrice">{discountedPrice}원</span>
          )}
        </div>
        <p className="freeShipping">무료배송</p>
      </div>
    </div>
  );
}
