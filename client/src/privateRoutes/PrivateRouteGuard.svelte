<script>
	import { useNavigate, useLocation } from "svelte-navigator";
	import { user } from "../store/user";

	const navigate = useNavigate();
	const location = useLocation();

    //state

	$: if (!$user) {
		navigate("/", {
			state: { from: $location.pathname },
			replace: true,
		});
	}
</script>

{#if $user}
	<slot />
{/if}