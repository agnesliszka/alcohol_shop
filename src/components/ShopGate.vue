<template>
    <div>
        <transition name="fade">
            <div class="buttons" v-if="accessDenied">
                <div class="block">
                    <p class="demonstration">Input your date of birth:</p>
                    <el-date-picker
                        v-model="dateOfBirth"
                        type="date"
                        placeholder="Pick a Date"
                        format="yyyy/MM/dd"
                    ></el-date-picker>
                </div>
                <button class="btn btn-btn btn-dark" @click="checkAge">Go to the shop</button>
            </div>
        </transition>
        <AlcoholShop v-if="!accessDenied" />
    </div>
</template>

<script>
import AlcoholShop from "./AlcoholShop.vue";

export default {
    name: "ShopGate",
    components: {
        AlcoholShop
    },
    props: {
        msg: String
    },
    data() {
        return {
            dateOfBirth: "",
            accessDenied: true,
            warningAlert: false
        };
    },
    methods: {
        checkAge() {
            const age = this.getAge();
            if (age >= 18) {
                this.accessDenied = false;
                this.$router.push("/");
            } else {
                this.accessDenied = true;
                this.warningAlert = true;
                this.openAlert();
            }
        },
        getAge() {
            const today = new Date();
            const birthDate = new Date(this.dateOfBirth);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        },
        openAlert() {
            this.$alert(
                "You are not permitted to enter the shop",
                "Access Denied",
                {
                    confirmButtonText: "OK"
                }
            );
        }
    }
};
</script>

<style scoped>
.buttons {
    border-radius: 60px;
    box-shadow: 10px 50px 100px black;
    border: 3px solid grey;
    padding: 10px;
    background-color: white;
    height: 30vh;
    width: 60vh;
}
.demonstration {
    margin-top: 30px;
}

.btn-dark {
    margin-top: 15px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
