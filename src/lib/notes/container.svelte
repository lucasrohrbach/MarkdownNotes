<script lang="ts">
    import Note from './note.svelte'
    import { Notes } from '../typeScript/stores';
    import NewNote from './newNote.svelte'
    let newCardVisible = false;
</script>

<div class="d-flex flex-row-reverse mt-3">
    <button class="btn btn-warning text-dark" on:click={()=>newCardVisible=!newCardVisible}><i class="bi bi-plus-lg"></i>New Note</button>
</div>

<NewNote bind:visibility={newCardVisible}></NewNote>
{#each $Notes as note}
    <Note Note={note}/>
{/each}
    