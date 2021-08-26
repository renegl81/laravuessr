<template>
	<div v-if="status">
		<v-overlay :value="status" opacity="0.1" z-index="100">
			<v-progress-circular indeterminate color="primary"></v-progress-circular>
		</v-overlay>
	</div>
</template>

<script>
export default {
  props: ["status"]
};
</script>
