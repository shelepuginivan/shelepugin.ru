<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

const times = ref(0)
const button = useTemplateRef('button')

const buttonLabel = (times: number): string => {
    if (times === 0) {
        return 'Вы ещё не нажимали на кнопку'
    }

    if (times === 100) {
        return '100 раз это довольно много, поздравляю!'
    }

    if (times === 200) {
        return 'Продолжайте в том же духе!'
    }

    if (times === 300) {
        return '1000?'
    }

    if (times >= 1000) {
        console.log(button.value)
        button.value.classList.remove('bg-red-400')
        button.value.classList.remove('hover:bg-red-500')
        button.value.classList.add('completed')

        return 'Окей, вы прошли эту мини-игру!'
    }

    if ([2, 3, 4].includes(times % 10) && (times > 20 || times < 10)) {
        return `Вы нажали на кнопку ${times} раза`
    }

    return `Вы нажали на кнопку ${times} раз`
}
</script>

<template>
    <div class="w-full flex justify-center my-16">
        <button
            class="demo-button px-4 py-2 bg-red-400 text-stone-800 rounded hover:bg-red-500"
            ref="button"
            @click="times++"
        >
            {{ buttonLabel(times) }}
        </button>
    </div>
</template>

<style>
    .demo-button.completed {
        background-color: #4ade80;
    }

    .demo-button.completed:hover {
        background-color: #22c55e;
    }
</style>
