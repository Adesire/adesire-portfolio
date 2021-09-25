import React, {useState, createRef} from "react";
import { Card, CardBody, CardTitle, CardText, CardImg, CardHeader, Button, Col, Badge } from "reactstrap";

import ColorThief from "colorthief";

import { Fade } from "react-reveal";

const CertificationCard = ({ data }) => {
	/*return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardImg top width="100%" src={data.img} alt="Card image cap" />
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">{data.name}</h5>
							<p className="description mt-3">{data.description}</p>
						</div>
					</div>
					<Button><a href={data.link}>View Credential</a></Button>
				</CardBody>
			</Card>
		</Fade>
	);*/



	const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();

    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }

    return ( 
        <Col lg="4">
        <Fade left duration={1000} distance="40px">
            <Card style={{flex: 1}} className="shadow-lg--hover shadow border-0 text-center rounded">
                <CardHeader style={{background: rgb(colorArrays)}} >
                    <h5 className="text-white">{data.company}</h5>
                </CardHeader>
                <CardBody className="py-5">
                    <img ref={imgRef} src={data.img} style={{ width: "100px" }} onLoad={() => getColorArrays()} alt=""/>
                    <CardTitle tag="h5">{data.name}</CardTitle>
                    {/* <CardSubtitle>{data.date}</CardSubtitle> */}
                    <CardText className="description my-3 text-left">
                        {data.description}
                    </CardText>
                    <div>
                    </div>
					<Button><a href={data.link}>View Credential</a></Button>
                </CardBody>
            </Card>
            </Fade>
        </Col>
     );
};

export default CertificationCard;
