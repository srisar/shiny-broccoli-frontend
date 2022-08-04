<template>
	<section class="rounded border border-primary-100 p-5 shadow-sm">
		<header class="mb-5">
			<h1 class="h1 uppercase">
				<slot name="header"></slot>
			</h1>
		</header>

		<!-- Start: Body -->
		<section>
			<slot></slot>
		</section>
		<!-- End: Body -->

		<footer>
			<slot name="footer"></slot>
		</footer>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
