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

<div id="newCardEditor" class="{display} card self-align-center mt-3" >
    <div class="card-body">
        <div class="d-flex">
            <div class="input-group me-2">
                <span class="input-group-text">Header</span>
                <input id="input1" bind:value={titleText} type="text" class="form-control">
            </div>

        </div>
        <div class="form-floating mt-3">
            <textarea class="form-control" bind:value={textAreaText} placeholder="Leave a comment here" id="textarea1" style="height: 100px"></textarea>
            <label for="textarea1"></label>
        </div>
        <div class="d-flex flex-row-reverse mt-3">
            <button class="btn btn-danger ms-2" on:click={cancel}>Cancel</button>
            <button class="btn btn-success" on:click={save}>Save</button>
        </div>
    </div>
</div>