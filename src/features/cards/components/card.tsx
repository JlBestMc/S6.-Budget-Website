interface CardProps extends products {
  title: string;
  description: string;
  price: string;
}
export default function card({ title, description, price }: CardProps) {
  return (
    <div>
      <div className="flex justify-around ">
        <div>
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
        <div>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}
