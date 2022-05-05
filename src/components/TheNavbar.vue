<template>
<div>
    <nav id="nav" class="navbar navbar-inverse navbar-fixed-top headroom animated">
    <div class="container">
			<div class="navbar-header">
    <router-link to="/" class="navbar-brand"><img src="/images/logo.png" style="border-radius: 50%;"></router-link>
      <button class="navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="nav navbar-nav pull-right">
        <li class="nav-item" id="homelink"><router-link to="/" class="nav-link" onclick='topFunction()'>Home</router-link></li>
		<li class="nav-item" id="profiles"><router-link to="/profiles" class="nav-link" onclick='topFunction()'>Profiles</router-link></li>
      </ul>
    </div>
</div>
  </nav>
</div>
</template>