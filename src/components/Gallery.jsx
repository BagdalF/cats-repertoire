import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

export const Cat = ({ cat: { name, description, reference_image_id } }) => (
  <Card
    style={{
      width: "fit-content",
      height: "14rem",
      padding: "0",
    }}
  >
    <div className="row g-0">
      <CardImg
        className="col-6 col-md-5"
        style={{
          width: "12rem",
          height: "14rem",
          objectFit: "cover",
          padding: 0,
        }}
        alt={name}
        src={"https://cdn2.thecatapi.com/images/" + reference_image_id + ".jpg"}
      />
      <CardBody
        className="col-6 col-md-7"
        style={{
          width: "15rem",
        }}
      >
        <CardTitle tag="h5">{name}</CardTitle>
        <CardText style={{ fontSize: "11px" }}>{description}</CardText>
      </CardBody>{" "}
    </div>
  </Card>
);

export const Gallery = ({ data }) => {
  return (
    <div className="gallery-wrapper row g-4 justify-content-evenly">
      {data.map((cat) => (
        <Cat cat={cat} />
      ))}
    </div>
  );
};
