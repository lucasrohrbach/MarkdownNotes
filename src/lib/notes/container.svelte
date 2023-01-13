<script lang="ts">
    import Note from './note.svelte'
    import { Notes } from '../typeScript/stores';
    import NewNote from './newNote.svelte'

    let newCardVisible = false;
</script>
<div class="d-flex justify-content-center">
    <div style="width: 50rem;">   
        <div class="d-flex flex-row-reverse mt-3">
            <button class="btn btn-dark text-light" on:click={()=>newCardVisible=!newCardVisible}><i class="bi bi-plus-lg"></i>New Note</button>
        </div>
        
        <NewNote bind:visibility={newCardVisible}></NewNote>
        {#each $Notes as note}
            <Note 
                id={note.id} 
                title={note.title} 
                content={note.content} 
                created={note.created} 
                modified={note.modified}
            />
        {/each}
    </div>
</div>