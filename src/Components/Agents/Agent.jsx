export default function Agent({ image, title, name }) {
	return (
		<div className="agent">
			<div className="agent-img">
				<img src={image} alt="" />
			</div>
			<div className="agent-details">
				<div className="name">
					<p className="agent-title">{title}</p>
					<p className="agent-name">{name}</p>
				</div>
			</div>
		</div>
	);
}