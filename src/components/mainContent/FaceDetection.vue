<template>
    <div class="row">
        <div class="col s12 m6 l6 6" style="border-style:solid;border-color:red;">
            <div class="input__data column__set">
                <h3  style="color:black;">Open your Camera</h3>
                <video id="video" ref="video" width="320px" height="320px" autoplay muted></video>
                
            </div>
        </div>
        <div id="test" class="col s12 m6 l6 6" style="border-style:solid;border-color:blue;">
            <div class="output__data column__set">
                <h3>Your Output Data</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        const video = document.querySelector('#video');
        function startVideo(){
            navigator.getUserMedia(
                {video : true },
                stream => video.srcObject = stream,
                err => console.log(err)
            )
        }
        console.log(this.$refs)
        startVideo();
    },
}
</script>

<style scoped>
    .column__set{

        height: 540px;
        width: 100%;
        background-color: #f8f8f8f8;
    }
</style>