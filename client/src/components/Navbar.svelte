<script>
  import { Router, Link, Route } from  "svelte-navigator";
</script>

<Router>
  <nav>
    <div id="h1-container">
        <h1>Mandatory 2</h1>
    </div>
    <ul>
      <li><Link to="/log-out" class="link">Logout</Link></li>
    </ul>
</nav>

<Route path="/log-out">
</Route>

</Router>

<style>
    nav {
      background-color: red;
      display: flex;
      flex-direction: row;
      border-radius: 10px;
    }
    #h1-container{
        width: 70%;
        margin-left: 1em;
    }

    h1{
        font-size: 3em;
        color: #fff;
    }
   
  
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  
    li {
      margin-right: 1rem;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      text-decoration: underline;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }

  </style>
  