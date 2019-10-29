<template>
    <div>
          <nav>
                <div class="nav-wrapper">
                <a href="#" style="margin-left:1%;" class="nav__Content brand-logo">Final Project Artificial Intelegent</a>
                <ul id="nav-mobile" class=" right hide-on-med-and-down">
                    <router-link 
                        to="/"  
                        active-class="active" 
                        tag="li" > 
                            <a 
                                class="nav__Content "  
                                href="#">Home
                            </a> 
                    </router-link>

                    <router-link 
                        to="/FaceDetection" 
                        active-class="active" 
                        tag="li">
                            <a  class="nav__Content" 
                                href="#">Face Recognition
                            </a>
                    </router-link>

                    <router-link 
                        tag="li"
                        active-class="active"
                        to="/Ocr" >
                            <a 
                                class="nav__Content" 
                                href="#">Optical Character Recognition
                                
                            </a>    
                    </router-link>
                </ul>
                </div>
            </nav>
  
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    nav{
        background: transparent;
        border-width: 0;
        box-shadow: none;
        font-family: 'Lato', sans-serif;
    }

    .nav__Content_active{
        color: blue;
    }

    .nav__Content{
        color: #FAF8ED;
        font-weight: 400;
    }

    
    

</style>