<script>
import { Route, Router } from "svelte-navigator";
import SignIn from "./pages/SignIn.svelte"
import PrivateRoute from "./privateRoutes/PrivateRoute.svelte"
import Home from "./pages/Home.svelte"
</script>

<SignIn />

<Router>
	<Route path="/" component={SignIn} />
	<PrivateRoute path="/home" component={Home} />
</Router>






