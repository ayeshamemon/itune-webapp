import React from "react";
import RcQueueAnim from "rc-queue-anim";
import { Row, Col, Spin } from "antd";
import AlbumCard from "./AlbumCard";
import { useSelector } from "react-redux";
import { NoDataCard } from "../styles/main-style";
import { WarningOutlined } from "@ant-design/icons";
import useIntlTag from "../../hooks/useIntlTag";

function AlbumResults() {
    // TODO: Retrieve results from redux
    const { loading, songs } = useSelector((s) => s);
    const intl = useIntlTag();

    return (
        <>
            {loading &&
                <Spin />
            }
            {!loading && songs?.length > 0 &&
                (
                    <RcQueueAnim
                        component={Row}
                        componentProps={{
                            gutter: [20, 20],
                            style: { marginTop: "20px" },
                        }}
                    >
                        {songs.map((data, index) => (
                            <Col lg={4} md={6} sm={8} xs={24} key={index}>
                                <AlbumCard data={data} />
                            </Col>
                        ))}
                    </RcQueueAnim>
                )
            }
            {!loading && !songs?.length &&
                <NoDataCard title={
                    <>
                        <h2><WarningOutlined /></h2>
                        <h2>{intl`noResult`}</h2>
                    </>
                }>
                    <p>{intl`chnageKeyWord`}</p>
                </NoDataCard>
            }
        </>
    );
}

export default AlbumResults;
