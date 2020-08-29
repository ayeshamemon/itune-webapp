import React from "react";
import {
    MediaCard,
    MediaCardDetailLink,
    MediaCardMeta
} from "../styles/main-style";
import CardAudio from "./card-audio";
import { InfoCircleOutlined } from "@ant-design/icons";

function AlbumCard({ data }) {
    return (
        <MediaCard
            hoverable
            cover={
                <img
                    alt="example"
                    src={data.artworkUrl100.replace("100x100bb", "400x400bb")}
                />
            }
            actions={[
                <CardAudio src={data.previewUrl} />,
                <MediaCardDetailLink target="_blank" href={data.trackViewUrl}>
                    <InfoCircleOutlined />
                </MediaCardDetailLink>,
            ]}
        >
            <MediaCardMeta
                title={data.trackName || 'NO TITLE'}
                description={data.artistName}
            />
        </MediaCard>
    );
}

export default AlbumCard;
