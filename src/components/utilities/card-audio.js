import React, { Component } from 'react';
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import { PreviewAudio } from '../styles/main-style';
class CardAudio extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <PreviewAudio src={this.props.src}
                customAdditionalControls={[]}
                showSkipControls={false}
                showJumpControls={false}
                customVolumeControls={[]}
                customProgressBarSection={[]}
                customIcons={{
                    play: <PlayCircleOutlined />,
                    pause: <PauseCircleOutlined />
                }} />
        );
    }
}

export default CardAudio;