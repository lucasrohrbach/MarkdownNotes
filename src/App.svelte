<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import NotesContainer from "./lib/notes/container.svelte";
  import { onMount } from "svelte";
  import { Notes } from "./lib/typeScript/stores";
  import About from "./lib/about/About.svelte"

  let dataParsed = false;

  let mainOrAbout;

  onMount(async () => {
    if(localStorage.getItem("Notes") )
    {
      Notes.set(
        JSON.parse(
          localStorage.getItem("Notes")
        )
      );
    }
    dataParsed = true;
  });

  Notes.subscribe((notes) => {
    if (dataParsed) {
      localStorage.setItem("Notes", JSON.stringify(notes));
    }
  });
</script>

<main>
  <Navbar bind:pageSelected={mainOrAbout}/>
  <div class="d-flex justify-content-center">
    <div style="width: 50rem;" class="mb-5">
      {#if mainOrAbout}
        <NotesContainer />
      {:else}
        <About/>
      {/if}
    </div>
  </div>
</main>
