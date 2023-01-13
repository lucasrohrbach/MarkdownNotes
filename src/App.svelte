<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import NotesContainer from "./lib/notes/container.svelte";
  import { onMount } from "svelte";
  import { Notes } from "./lib/typeScript/stores";

  let dataParsed = false;

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
  <Navbar />
  <NotesContainer />
</main>
