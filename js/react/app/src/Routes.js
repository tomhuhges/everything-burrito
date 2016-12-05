import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './App'
import HomePage from './components/HomePage'
import AuthorPage from './components/authors/AuthorPage'
import AboutPage from './components/about/AboutPage'
import NotFoundPage from './components/NotFoundPage'

export const Routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/👍🏻" component={AuthorPage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/𝖑𝖎𝖓𝖐_𝖉𝖚𝖒𝖕" component={AboutPage} />
		<Redirect from="/%F0%9F%91%8D%F0%9F%8F%BB" to="/👍🏻" />
		<Redirect from="/%F0%9D%96%91%F0%9D%96%8E%F0%9D%96%93%F0%9D%96%90_%F0%9D%96%89%F0%9D%96%9A%F0%9D%96%92%F0%9D%96%95" to="/𝖑𝖎𝖓𝖐_𝖉𝖚𝖒𝖕" />
		<Route path="/*" component={NotFoundPage}/>
	</Route>
)