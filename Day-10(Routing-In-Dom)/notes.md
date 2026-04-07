React Roter DOM

Procedure:-

-install react-router-dom "npm i react-router-dom"
-in main.jsx "import {BrowserRouter} from 'react-router-dom'"
-wrap <App /> by BrowserRouter in main.jsx file
-In App.jsx "import {Route, Routes} from 'react-router-dom'"
-make  <Routes> (collection of all route ) and inside Routes make route .
-in route mention path(where to go) and elements (what to render) attributes.

<Routes>
    <Route path="/home" element={<Home />} />
<Routes />


-Link tag is a special type of tag used in react to redirect to specific route without reloading the page.
-Make navBAr Compnent as well and add it before <Routes> in add.jsx.
<Link to="/">Home</Link>