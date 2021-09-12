<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"> -->
                <section class="grid gap-6 my-6 md:grid-cols-3">
                    <div class="p-6 bg-white shadow rounded-2xl">
                        <dl class="space-y-2">
                            <dt class="text-sm font-medium text-gray-500">
                                Pedidos nuevos
                            </dt>

                            <dd class="text-5xl font-light md:text-6xl">
                                192.1k
                            </dd>

                            <dd
                                class="
                                    flex
                                    items-center
                                    space-x-1
                                    text-sm
                                    font-medium
                                    text-green-500
                                "
                            >
                                <span>32k increase</span>

                                <svg
                                    class="w-7 h-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.25 15.25V6.75H8.75"
                                    ></path>
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17 7L6.75 17.25"
                                    ></path>
                                </svg>
                            </dd>
                        </dl>
                    </div>

                    <div class="p-6 bg-white shadow rounded-2xl">
                        <dl class="space-y-2">
                            <dt class="text-sm font-medium text-gray-500">
                                Clientes nuevos
                            </dt>

                            <dd class="text-5xl font-light md:text-6xl">21%</dd>

                            <dd
                                class="
                                    flex
                                    items-center
                                    space-x-1
                                    text-sm
                                    font-medium
                                    text-red-500
                                "
                            >
                                <span>7% increase</span>

                                <svg
                                    class="w-7 h-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.25 8.75V17.25H8.75"
                                    ></path>
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17 17L6.75 6.75"
                                    ></path>
                                </svg>
                            </dd>
                        </dl>
                    </div>

                    <div class="p-6 bg-white shadow rounded-2xl">
                        <dl class="space-y-2">
                            <dt class="text-sm font-medium text-gray-500">
                                Productos nuevos
                            </dt>

                            <dd class="text-5xl font-light md:text-6xl">
                                03:12
                            </dd>

                            <dd
                                class="
                                    flex
                                    items-center
                                    space-x-1
                                    text-sm
                                    font-medium
                                    text-green-500
                                "
                            >
                                <span>3% increase</span>

                                <svg
                                    class="w-7 h-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.25 15.25V6.75H8.75"
                                    ></path>
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17 7L6.75 17.25"
                                    ></path>
                                </svg>
                            </dd>
                        </dl>
                    </div>
                </section>
                <!-- </div> -->
            </div>
        </div>
    </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/js/Layouts/AppLayout.vue";

export default defineComponent({
    components: {
        AppLayout,
    },
});
</script>
