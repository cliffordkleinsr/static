<script lang="ts">
    import { page } from '$app/stores';
</script>
<div class="flex flex-col w-full h-screen text-center">
    <h1 class="text-3xl pt-10">{$page.status}: {$page.error?.message}</h1>
</div>
