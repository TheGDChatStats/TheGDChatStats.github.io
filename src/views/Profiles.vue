<script>
import ProfileDataService from "@/services/ProfileDataservice.vue"
import json from '@/datas.json'
export default {
    data(){
        return {
            data: [],
            players: json,
            playerName: '',
            playerId: ''
        }
    },
    methods: {
        getProfile(id){
            ProfileDataService.getProfile(id)
            .then(response => {
                this.data = response.data
            })
        },
        functionPlayer(item, id){
            if(item.displayName === this.$route.params.name){
                this.playerId = item.id,
                this.playerName = item.name
            }
        }
    },
    mounted(){
        this.players.players.forEach(this.functionPlayer)
        this.getProfile(this.playerId)
    }
}
</script>

<template>
<div class="home">
    <header id="head" class="secondary"></header>
    <div class="container">
        <div class="jumbotron top-space col-sm-12">
		    <div class="container">
                <div class="card" style="width: 18rem;">
                    <img :src="`/images/${playerName}.png`" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{data.username}}</h5>
                        <p class="card-text">Rank : {{data.rank}}</p>
                        <p class="card-text">Stars : {{data.stars}}</p>
                        <p class="card-text">Diamonds : {{data.diamonds}}</p>
                        <p class="card-text">Coins : {{data.coins}}</p>
                        <p class="card-text">UserCoins : {{data.userCoins}}</p>
                        <p class="card-text">Demons : {{data.demons}}</p>
                        <router-link to="/profiles" class="btn btn-primary">Go back</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>