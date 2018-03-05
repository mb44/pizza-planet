<template>
<div>
    <p>Click on the links bewlo for more info:</p>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <a class="navbar-brand" href="/">PIZZA PLANET</a>
        <ul class="navbar-nav">
            <router-link :to="{ name: 'historyLink' }" tag="li"><a class="nav-link">our history</a></router-link>
            <router-link :to="{ name: 'contactLink' }" tag="li"><a class="nav-link" href="">contact us</a></router-link>
            <router-link :to="{ name: 'orderingInfoLink' }" tag="li"><a class="nav-link">ordering guide</a></router-link>
            <router-link :to="{ name: 'deliveryLink' }" tag="li"><a class="nav-link" href="">delivery</a></router-link>
        </ul>
    </nav>

    <router-view></router-view>
</div>
</template>
