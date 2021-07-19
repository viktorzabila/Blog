import Albums from 'pages/Albums/Albums';
import Dashboard from 'pages/Dashboard/Dashboard';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PrivateRoute from 'Utils/PrivateRoute';
import PublicRoute from 'Utils/PublicRoute';

const Layout = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<div className="header">
					<NavLink exact activeClassName="active" to="/">
						Home
					</NavLink>
					<NavLink activeClassName="active" to="/login">
						Login
					</NavLink>
					<NavLink activeClassName="active" to="/dashboard">
						Dashboard
					</NavLink>
					<NavLink to="/post">Post</NavLink>
					<NavLink to="/albums">Albums</NavLink>
				</div>
				<div className="content">
					<Switch>
						<Route exact path="/" component={Home} />
						<PublicRoute path="/login" component={Login} />
						<PrivateRoute
							path="/dashboard"
							component={Dashboard}
						/>
						<Route path="/post" render={() => <Profile />} />
						<Route path="/albums">
							<Albums />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default Layout
