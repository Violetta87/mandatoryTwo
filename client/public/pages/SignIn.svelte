<script>
    import { BASE_URL } from "../store/url.js"
    import toastr from "toastr"
    import { useNavigate, useLocation, useResolvable, navigate } from "svelte-navigator"

    let email;
    let password;

   async function validateLogin(){
    const options={};

    options.method= "POST"
    options.headers = { 'Content-Type': 'application/json'}
    options.body = JSON.stringify({email: email, password: password});
    options.credentials= "include"

    console.log(email, password)

    const response = await fetch($BASE_URL + "/login", options);

    console.log(response)
    console.log("hej")
    const data = await response.json();
    if(response.status===200){
        const authenticatedUser = data.email;
        user.set(authenticatedUser);
        toastr.success(`hiiii ${authenticatedUser}`);
        setTimeout(()=> {
            navigate("/home", { replace: true})
        }, 1000);   
    }else{
        toastr.error(data.message)
    }

   } 
</script>

<h2>Login page</h2>

<form on:submit|preventDefault={validateLogin}>
<label for="email">Email</label>
<input type="text" placeholder="email" name="email" bind:value={email} required>

<label for="password">Password</label>
<input type="password" name="password" bind:value={password} required>

<button type="submit">Login</button>
</form>