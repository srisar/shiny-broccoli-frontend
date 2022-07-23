<template>
	<router-view v-slot="{ Component }">
		<template v-if="Component">
			<suspense>
				<component :is="Component"></component>
				<template #fallback> Loading...</template>
			</suspense>
		</template>
	</router-view>
</template>

<script setup lang="ts"></script>
