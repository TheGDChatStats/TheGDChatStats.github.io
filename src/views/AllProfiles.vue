<script>
import json from '@/datas.json'
export default {
    data(){
        return {
            data: json
        }
    }
}
</script>

<template>
<div class="home">
    <header id="head" class="secondary"></header>
    <div class="container">
        <div class="jumbotron top-space col-sm-12">
		    <div class="container">
                <div v-for="player in data.players" :key="player.name"> 
                    <img :src="`/images/${player.name}.png`"/><router-link class="btn btn-danger" :to="{path: `/profiles/${player.displayName}`}">{{player.displayName}}</router-link><br><br>
                </div>
            </div>
        </div>
    </div>
</div>
</template>