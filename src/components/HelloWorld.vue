<template>
  <div v-on:click="sendClickLocation" class="container">
      <img src="https://78.media.tumblr.com/8b3d7f28995d48ae714076140a0178c8/tumblr_mqg78sIALY1swnmv6o1_400.png" alt="" class="nick" v-bind:style="{ left: x + 'px', top: y + 'px' }">
  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
    data() {
        return {
            y: '',
            x: '',
            socket : io('localhost:3000')
        }
    },
    methods: {
        sendClickLocation(e) {
            this.socket.emit('sendLocation', {
                x: e.pageX, y: e.pageY
            });
        },
    },
    mounted() {
       this.socket.on('click', (data) => {
            this.x = data.coordinates.x;
            this.y = data.coordinates.y;
        });
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nick {
    width: 100px;
    position: absolute;
    transition:1s ease-in-out
}
.container {
    width: 100vw;
    height: 100vh;
}
</style>
