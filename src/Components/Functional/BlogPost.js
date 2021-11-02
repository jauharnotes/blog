import React from "react";
import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Button,
} from "reactstrap";

function BlogPost(props) {
  return (
    <div>
      <Col style={{ marginBottom: "30px" }}>
        <CardGroup>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://placeimg.com/640/480/tech"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">{props.title}</CardTitle>
              <CardText>{props.body}</CardText>
            </CardBody>
            <Button>Remove</Button>
          </Card>
        </CardGroup>
      </Col>
    </div>
  );
}

export default BlogPost;
