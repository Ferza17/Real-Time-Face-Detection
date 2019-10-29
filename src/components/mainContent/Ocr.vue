<template>
    <div class="row">
        <div class="col s12 m6 l6 6" style="border-style:solid;border-color:red;">
            <div class="input__data column__set">
                <h3 style="color:black;">Input Your File Here</h3>
                <input type="file" name="fileUpload" id="fileUpload">
            </div>
        </div>
        <div class="col s12 m6 l6 6" style="border-style:solid;border-color:blue;">
            <div class="output__data column__set">
                <h3>Your Output Data</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .column__set{

        height: 540px;
        width: 100%;
        background-color: #f8f8f8f8;
    }

    #fileUpload{
        margin-top: 20%;
        margin-left: 30%;
    }
</style>