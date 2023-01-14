<script lang="ts">
    import logo from "./img/logo_nav.svg";

    export let pageSelected = true;
    let buttonText = "About";

    function changeBool(){
        if(pageSelected){
            pageSelected = false;
            buttonText = "Home";
        }else{
            pageSelected = true;
            buttonText = "About";
        }
    }
</script>

<nav class="navbar navbar-expand-lg bg-warning sticky-top">
    <div class="container-fluid d-flex justify-content-between">
        <div>
            
        </div>
        <!-- <img src="{logo}" alt="logo" class="m-3" style="width: 2rem;"/> -->
        <h4 class="">Marknote</h4>
        <button class="btn btn-dark text-light" on:click={changeBool}>{buttonText}</button>
    </div>
</nav>
