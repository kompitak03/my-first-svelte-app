<script lang="ts">
	export let y: number;
</script>

<header
	class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid ' +
		(y > 0 ? ' py-4 bg-slate-950 border-violet-950' : ' py-6 bg-transparent border-transparent')}
>
	<h1 class="font-medium">
		<b class="font-bold poppins">Kompitak</b> <span class="">Fuangkosol</span>
	</h1>
</header>
