import formatCurrency from "../../utils";

export default function Apartment({
	image,
	title,
	price,
}) {
	return (
		<div className="single-apartment">
			<div className="apartment-image">
				<img src={image} alt={title} />
			</div>
			<div className="apartment-details">
				<div className="">
					<h4 className="title">{title}</h4>
				</div>
				<div className="apartment-detail">
					<div className="">
						<p className="price">{formatCurrency(price)}</p>
					</div>
				</div>
				<button class="checkoutBtn">BUY</button>
				<button class="checkoutBtn">RENT</button>
			</div>
			
		</div>
	);
}
