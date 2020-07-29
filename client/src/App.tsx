import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import All from "./Components/viewAll"
import One from "./Components/viewOne"

const App = () => {
	return(
		<Router>
			<Switch>
				<Route exact path="/" component={All} />
				<Route exact path="/:id" component={One} />
			</Switch>
		</Router>
	)
}

export default App
