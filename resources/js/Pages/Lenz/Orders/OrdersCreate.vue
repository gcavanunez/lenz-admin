<template>
    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Formulario
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div class="ticket shadow relative">
                    <div>
                        <PrintForm
                            :date="date"
                            v-model:products="form.products"
                            v-model:total="form.total"
                            v-model:paymentMethod="form.paymentMethod"
                            v-model:contactMethod="form.contactMethod"
                            v-model:contact="form.contact"
                            v-model:amountProducts="form.amountProducts"
                            v-model:amountShipping="form.amountShipping"
                            v-model:paymentStatus="form.paymentStatus"
                            v-model:phone="form.phone"
                            v-model:address="form.address"
                            v-model:reference="form.reference"
                        />
                    </div>
                    <!-- <div class="saltopagina"></div> -->
                    <div class="print-only">
                        <hr />
                        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
                        <br />
                        <p>&nbsp;</p>
                        <br />
                        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
                        <br />
                        <p>&nbsp;</p>
                        <br />
                        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
                        <br />
                        <p>&nbsp;</p>
                        <br />
                        <p>CONFIRMACION DE ENTREGA</p>
                        <br />
                        <hr />
                    </div>
                    <div class="saltopagina"></div>
                    <!-- <div class="print-only"> -->
                    <div class="visible-only">
                        <PrintForm
                            :date="date"
                            v-model:products="form.products"
                            v-model:total="form.total"
                            v-model:paymentMethod="form.paymentMethod"
                            v-model:amountProducts="form.amountProducts"
                            v-model:amountShipping="form.amountShipping"
                            v-model:paymentStatus="form.paymentStatus"
                            v-model:contactMethod="form.contactMethod"
                            v-model:contact="form.contact"
                            v-model:phone="form.phone"
                            v-model:address="form.address"
                            v-model:reference="form.reference"
                        />
                    </div>
                    <!-- <div class="print-only">
        <hr />
        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
        <br />
        <p>&nbsp;</p>
        <br />
        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
        <br />
        <p>&nbsp;</p>
        <br />
        <p style="color: #f7f7f7">CONFIRMACION DE ENTREGA</p>
        <br />
        <p>&nbsp;</p>
        <br />
        <p>CONFIRMACION DE ENTREGA</p>
        <br />
        <hr />
      </div> -->
                    <!-- SALTO DE PAGINA PARA DOCUMENTOS ADICIONALES  -->

                    <div
                        class="saltopagina"
                        v-if="form.paymentStatus == 'pendiente'"
                    ></div>
                    <div
                        class="print-only"
                        v-if="form.paymentStatus == 'pendiente'"
                    >
                        <!-- <img
                            :src="import('@/img/source-uploads/pago.png')"
                            style="width: 400px"
                        /> -->
                    </div>
                    <p>
                        <input
                            class="no-print"
                            id="desaparece"
                            type="button"
                            @click="print()"
                            value="Imprimir"
                        />
                    </p>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import AppLayout from "@/js/Layouts/AppLayout.vue";
import PrintForm from "@/js/Components/PrintForm.vue";
import { useForm } from "@inertiajs/inertia-vue3";
export default defineComponent({
    components: {
        AppLayout,
        PrintForm,
    },
    setup() {
        const form = useForm({
            products: "",
            total: 1,
            amountProducts: "",
            amountShipping: "",
            paymentMethod: "banco",
            paymentStatus: "pendiente",
            contactMethod: "facebook",
            contact: "",
            phone: "",
            address: "",
            reference: "",
        });
        const date = computed(() => {
            const f = new Date();
            return (
                f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()
            );
        });
        return {
            date,
            form,
            print() {
                console.log(form);
                // const Obj = document.getElementById("desaparece");
                window.print();
            },
        };
    },
});
</script>

<style scoped>
textarea {
    font-size: 20px;
    border: solid 1px #bfbfbf;
    font-family: "Montserrat", Gotham, "Helvetica Neue", Helvetica, Arial,
        "sans-serif";
}

input {
    border: solid 1px #bfbfbf;
    font-size: 20px;
    font-family: "Montserrat", Gotham, "Helvetica Neue", Helvetica, Arial,
        "sans-serif";
}

.ticket {
    margin: 0 auto 0 auto;
    background-color: #fff;
    text-align: center;
    width: 400px;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        rgba(0, 0, 0, 0.09) 0px 32px 16px;

    padding: 20px;
}

.all {
    width: 100%;
    text-align: center;
}

.autosize {
    width: 100%;
    text-align: center;
    resize: none;
    overflow: hidden;
}

.left {
    text-align: left;
}

select {
    font-weight: 800;
    font-size: 20px;
    width: 150px;
    height: 40px;
    text-align: center;
}

.print-only {
    display: none;
}
.relative {
    position: relative;
}
.visible-only {
    top: 0;
    position: absolute;
    visibility: hidden;
}

@media all {
    div.saltopagina {
        display: none;
    }
}
@media print {
    .no-print {
        visibility: hidden;
    }
    .ticket {
        box-shadow: none;
        padding: 0;
    }
    textarea,
    input {
        border: none;
    }
    .print-only {
        display: block;
    }
    .visible-only {
        top: unset;
        position: relative;
        visibility: visible;
    }
}
@media print {
    div.saltopagina {
        display: block;
        page-break-before: always;
    }
}
.centering {
    display: flex;
    justify-content: center;
}
</style>
