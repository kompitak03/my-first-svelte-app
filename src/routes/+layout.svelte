<script lang="ts">
	import Header from '../components/Header.svelte';
	import '../app.css';
	let y: number;
	let innerWidth = 0;
	let innerHeight = 0;

	function goTop() {
		document.body.scrollIntoView();
	}
</script>

<Header {y} />
<slot />
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
