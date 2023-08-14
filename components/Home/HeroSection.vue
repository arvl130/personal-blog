<script setup>
import meAtTheJeepney from "@/assets/img/me-at-the-jeepney.jpg"
import meWithSomeFriends from "@/assets/img/zero-point-five.jpg"
import qcuProgComp from "@/assets/img/qcu-programming-competition-2023.jpg"
</script>

<template>
  <section class="text-zinc-700 mb-8">
    <h2 class="text-2xl font-semibold mb-6 text-zinc-900">
      hello, I'm Angelo 👋
    </h2>
    <p class="mb-3 text-justify">
      I'm a software hobbyist and student developer. I like tinkering with
      software and learning new things everyday.
    </p>
    <div class="grid grid-cols-3 mb-3">
      <div>
        <img
          class="aspect-[9_/_16] w-full object-cover rounded-lg"
          :src="meWithSomeFriends"
          alt="Me with some friends"
        />
      </div>
      <div></div>
      <div class="flex items-end">
        <img
          class="aspect-square w-full object-cover rounded-lg"
          :src="meAtTheJeepney"
          alt="Me with a laptop on a jeepney"
        />
      </div>
    </div>
    <div class="mb-3">
      <img
        class="aspect-[28_/_9] w-full object-cover rounded-lg"
        :src="qcuProgComp"
        alt="Me and the participants of the QCU Programming Competition 2023"
      />
    </div>
    <p class="text-justify">
      Currently, I'm an IT student at Quezon City University. In my free time, I
      like to contribute and participate in open-source communities.
    </p>
  </section>
</template>
