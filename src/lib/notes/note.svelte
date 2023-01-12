<script lang="ts">
    import FaFileAlt from 'svelte-icons/fa/FaFileAlt.svelte'
    import FaTrashAlt from 'svelte-icons/fa/FaTrashAlt.svelte'
    import FaEdit from 'svelte-icons/fa/FaEdit.svelte'

    function newCard(){
        
    }
</script>

<div class="d-flex flex-row-reverse mt-3">
    <button class="btn btn-dark text-light" on:click={newCard}><i class="bi bi-plus-lg"></i>New Note</button>
</div>

<div id="newCardEditor" class="card self-align-center mt-3" >
    <div class="card-body">
        <div class="card-title d-flex">
            <h3 class="col-2 mt-1">Card title</h3>
            <button class="btn btn-danger me-2"><i class="bi bi-trash"></i></button>
            <button class="btn btn-warning me-2"><i class="bi bi-pencil-square"></i></button>
        </div>
        <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </div>
</div>

<div class="card self-align-center mt-3" >
    <div class="card-body">
        <div class="card-title d-flex">
            <h3 class="col-2 mt-1">Card title</h3>
            <button class="btn btn-danger me-2"><i class="bi bi-trash"></i></button>
            <button class="btn btn-warning me-2"><i class="bi bi-pencil-square"></i></button>
        </div>
        <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </div>
</div>