<script>
    let email="cam";
    let password="test";
   async function validateLogin(){
    const url = "http://localhost:3000/login"

    const options={};

    options.method= "POST"
    options.headers = { 'content-Type': 'application/json'
    ,"Accept": "application/json", "Access-Control-Allow-Origin": "*"}
    options.body= JSON.stringify(email, password)
    options.mode= "cors"
    options.credentials= "include"

    const response = await fetch(url, options);
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