import React, { Component } from "react";
import { Logo, Navbar } from "../styles/main-style";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Navbar>
                <Logo />
            </Navbar>
        );
    }
}

export default Header;
