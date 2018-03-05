<template>
    <header class="row">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
            <a class="navbar-brand" href="/">PIZZA PLANET</a>
            <ul class="navbar-nav inline">
                <router-link :to="{ name: 'homeLink' }" tag="li"><a class="nav-link">home</a></router-link>
                <router-link :to="{ name: 'menuLink' }" tag="li"><a class="nav-link" href="">menu</a></router-link>
            </ul>
        </nav>
    </header>
</template>

<script>

</script>

<style>
    header {
        margin-bottom: 20px;
    }

    .navbar-brand {
        font-size: 1.5em;
    }
</style>

