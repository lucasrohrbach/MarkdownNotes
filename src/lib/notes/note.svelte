<script lang="ts">
    import {Notes} from "../typeScript/stores"
    import Showdown from "Showdown"

    let converter = new Showdown.Converter({tables: true});

    let isEditing:boolean = false;
    
    export let Note;
    function deleteNote(id:string){
        $Notes.splice(getNoteIndex(id), 1);
        $Notes = $Notes;
    }
    function editNote(id:string, title:string, content:string){
        $Notes[getNoteIndex(id)].title = title;
        $Notes[getNoteIndex(id)].content = content;
        $Notes[getNoteIndex(id)].modified = new Date().toString();
        $Notes = $Notes;
        isEditing = false;
    }

    function getNoteIndex(id:string){
       return $Notes.findIndex(d => d.id == id);
    }
</script>

<div id="{Note.id}" class="card text-bg-dark self-align-center mt-3" >
    <div class="card-header">
        <div class="card-title row">
            <div class="col d-flex justify-content-start">
                {#if !isEditing}
                    <h3 class=" mt-1">{Note.title}</h3>
                {:else}
                    <input class="mt-1 col-2 form-control bg-dark text-light border-warning" bind:value={Note.title} placeholder="Title">
                {/if}
            </div>
            <div class="col d-flex justify-content-end">
                {#if !isEditing}
                <button on:click={() => isEditing = true} class="btn btn-warning me-2"><i class="bi bi-pencil-square"></i></button>
                <button on:click={() => deleteNote(Note.id)} class="btn btn-danger me-2"><i class="bi bi-trash"></i></button>
                {/if}
            </div>
        </div>
    </div>
    <div class="card-body">

        {#if !isEditing}
            {@html converter.makeHtml(Note.content)}
        {:else}
            <textarea style="height: 500px" class="form-control bg-dark text-light border-warning" bind:value={Note.content}></textarea>
        {/if}
        <div class="d-flex flex-row-reverse my-3">
            {#if isEditing}
                <button on:click={() => isEditing = false} class="btn btn-danger">Cancel</button>
                <button on:click={() => editNote(Note.id, Note.title, Note.content)} class="btn btn-success me-2">Save</button>
            {/if}
        </div>
        
    </div>
</div>