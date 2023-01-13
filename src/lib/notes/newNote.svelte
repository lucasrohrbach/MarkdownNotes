<script lang="ts"> 
    import { writable } from 'svelte-local-storage-store'
    import { Notes } from '../typeScript/stores';
    import { createNewNote } from './noteCreator';

    export let visibility:boolean;
    $: display = visibility ? '':'d-none';

    let titleText = "";
    let textAreaText = "";
    function save(){
        let note = createNewNote(titleText, textAreaText);
        Notes.update(d => [...d, note]);

        deleteNewCard();
    }

    function cancel(){
        deleteNewCard();
    }

    function deleteNewCard(){
        visibility = false;
        titleText = "";
        textAreaText = "";

    }

</script>

<div id="newCardEditor" class="{display} bg-dark card self-align-center mt-3" >
    <div class="card-header">
        <h4 class="text-light">New Note</h4>
    </div>
    <div class="card-body">
        <div class="d-flex">
            <div class="input-group me-2">
                <input id="input1" bind:value={titleText} type="text" class=" bg-dark text-light form-control border-warning">
            </div>

        </div>
        <div class="form-floating mt-3">
            <textarea style="height: 400px" class="form-control bg-dark text-light border-warning" bind:value={textAreaText}></textarea>
        </div>
        <div class="d-flex flex-row-reverse mt-3">
            <button class="btn btn-danger ms-2" on:click={cancel}>Cancel</button>
            <button class="btn btn-success" on:click={save}>Save</button>
        </div>
    </div>
</div>