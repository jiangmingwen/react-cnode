import React, { Component, Fragment } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import HomeInner from './pages/home/components/homeInner';
import Detail from './pages/detail';
import EditTopic from './pages/editTopic';
import Login from './pages/login';
import NewTopic from './pages/newTopic';
import NotFound from './pages/notFound';
import TopicCollect from './pages/topicCollect';
import UnreadMessage from './pages/unreadMessage';
import User from './pages/user';
import Header from './common/header';
import Footer from './common/footer';
import App from './App';
class Routers extends Component {
    render() {
        return (
            <BrowserRouter >
                <Fragment>
                    <Header />
                    <App>
                        <Switch>
                            <Route
                                path='/home' render={() => {
                                    return (
                                        <Home>
                                            <Switch>
                                                <Route exact path="/home/:id" component={HomeInner} />
                                                <Route exact path="/home/login" component={Login} />
                                                <Route exact component={NotFound} />
                                            </Switch>
                                        </Home>
                                    )
                                }}
                            />
                            <Route exact path='/detail' component={Detail} />
                            <Route exact path='/editTopic' component={EditTopic} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/newTopic' component={NewTopic} />
                            <Route exact path='/topicCollect' component={TopicCollect} />
                            <Route exact path='/unreadMessage' component={UnreadMessage} />
                            <Route exact path='/user' component={User} />
                            <Redirect exact path="/" to={{ pathname: '/home/all' }} />
                            <Route exact component={NotFound} />
                        </Switch>
                    </App>
                    <Footer />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Routers;