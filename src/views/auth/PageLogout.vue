<template></template>

<script setup lang="ts">
import { AuthService } from "@/services/auth_service";
import { useRouter } from "vue-router";

const router = useRouter();

AuthService.logout();

router.push("/");
</script>

<style scoped></style>
