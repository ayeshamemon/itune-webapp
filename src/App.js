import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/layouts/header";
import Index from "./components/pages";
import { ColoredLayout, LayoutContent } from "./components/styles/main-style";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import store from "./redux/main";
import messages_en from "./translations/en.json";
const language = "en";
const messages = {
    en: messages_en,
};
const { Content } = Layout;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <ColoredLayout className="layout">
                <IntlProvider locale={language} messages={messages[language]}>
                    <Provider store={store}>
                        <Router>
                            <Header />
                            <Content style={{ padding: "0 50px" }}>
                                <LayoutContent>
                                    <Switch>
                                        <Route path="/">
                                            <Index />
                                        </Route>
                                    </Switch>
                                </LayoutContent>
                            </Content>
                        </Router>
                    </Provider>
                </IntlProvider>
            </ColoredLayout>
        );
    }
}

export default App;
