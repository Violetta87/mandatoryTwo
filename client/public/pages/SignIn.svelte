<script>
    import { URL_LOCAL } from "../store/url.js"

    let email;
    let password;
   async function validateLogin(){
    const url = 'http://localhost:3000/login'
    //const url = `${URL_LOCAL}/login`;

    console.log(typeof url, "url")

    console.log(url)

    const options={};

    options.method= "POST"
    options.headers = { 'Content-Type': 'application/json'}
    options.body = JSON.stringify({email: email, password: password});

    options.credentials= "include"

    console.log(email, "email")
    console.log(password, "password")

    const response = await fetch(url, options);

    console.log(response)
    

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