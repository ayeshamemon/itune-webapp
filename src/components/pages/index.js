import { Col, Row } from "antd";
import React from "react";
import SearchBox from "../utilities/SearchBox";
import AlbumResults from "../utilities/AlbumResults";

const Index = (props) => {
    return (
        <>
            <Row gutter={[20, 20]}>
                <Col lg={8}>
                    <SearchBox />
                </Col>
            </Row>
            <AlbumResults />
        </>
    );
};

export default Index;
