import styled from "styled-components";
import { Layout, Input, Card } from "antd";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const ColoredLayout = styled(Layout)`
    background-color: transparent;
`

export const Logo = styled.div`
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
`
export const Navbar = styled(Layout.Header)`
    background-color: #101010;
`

export const LayoutContent = styled.div`
    padding: 25px 0px;
`

export const Search = styled(Input.Search)`
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    border-color: white;

    &:focus, &:hover{
        box-shadow: none;
        border-color: white;
    }
    & .ant-input-search-icon{
        font-size: 20px;
    }
    & .ant-input-search-icon::before{
        border-left: none;
    }
`

export const MediaCard = styled(Card)`
    background-color: #101010;
    border-color: #101010;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    & .ant-card-cover{
        opacity: 0.8;
        max-height: 228px;
        overflow: hidden;
    }
    & .ant-card-actions{
        padding: 0px;
        border: 0px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    & .ant-card-actions li{
        margin: 0px;
        background-color: #101010;
        border: 0px;
        height: 48px;
        display:flex;
        align-items: center;
        justify-content: center;
        color: #868686;
        font-size: 24px;
        span{
            width: 100%;
        }
        :hover{
            background-color: #1f1f1f;
        }
    }
`

export const MediaCardMeta = styled(Card.Meta)`
    color: white;
    & .ant-card-meta-title{
        color: rgba(255, 255, 255, 0.85);
    }
    & .ant-card-meta-description{
        color: rgba(255, 255, 255, 0.45);
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
`

export const MediaCardDetailLink = styled.a`
    color: #868686 !important;
    font-size: 24px;
    display: flex !important;
    line-height: 1 !important;
    height: 48px;
    align-items: center;
`

export const PreviewAudio = styled(AudioPlayer)`
    color: white;
    background-color: transparent;
    padding: 0px;
    & *:focus{
        border: none;
        outline: none;
    }
    & .rhap_controls-section{
        margin-top: 0px;
    }
    & .rhap_main-controls{
        width: 100%;
    }
    & .rhap_play-pause-button{
        font-size: 24px;
        width : 100%;
    }
`

export const NoDataCard = styled(Card)`
    background-color: #101010;
    border-color: #101010;
    width: 100%;
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
    & .ant-card-head{
        color: rgba(255, 255, 255, 0.85);
        border: 0px;
    }
    & .ant-card-head h2{
        color: rgba(255, 255, 255, 0.85);
        text-transform: uppercase;
    }
`