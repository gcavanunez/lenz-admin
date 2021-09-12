<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Formulario
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <PrintForm />
            </div>
        </div>
    </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/js/Layouts/AppLayout.vue";
import PrintForm from "@/js/Components/PrintForm.vue";
export default defineComponent({
    components: {
        AppLayout,
        PrintForm,
    },
    setup() {},
});
</script>

<style></style>
