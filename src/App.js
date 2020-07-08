import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./component/Home";
import Blog from "./component/Blog";
import About from "./component/About";
import Post from "./component/Post";
import Container from "./component/Container";

const App = () => (
    <Router>
        <div>
            <Container>
                <nav
                    style={{
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2 style={{ flexGrow: 4 }}>Brand</h2>
                    <div
                        style={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About</Link>
                    </div>
                </nav>
            </Container>
        </div>

        <Switch>
            <Container>
                <Route exact path="/" component={Home} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:id" component={Post} />
                <Route exact path="/about" component={About} />
            </Container>
        </Switch>
    </Router>
);

export default App;
