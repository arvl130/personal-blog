<template>
  <section class="text-zinc-700 mb-10">
    <h2 class="text-2xl font-semibold mb-6 text-zinc-900">
      hello, I'm Angelo 👋
    </h2>
    <p class="text-justify mb-4">
      I'm a software hobbyist and student developer. I like tinkering with
      software and learning new things everyday.
    </p>
    <div class="grid grid-cols-3 mb-3">
      <div>
        <NuxtImg
          class="aspect-[9_/_16] w-full object-cover rounded-lg flex justify-center items-center"
          src="/assets/img/zero-point-five.jpg"
          alt="Me with some friends"
          format="avif"
          :width="225"
          :height="400"
        />
      </div>
      <div></div>
      <div class="flex items-end">
        <NuxtImg
          class="aspect-square w-full object-cover rounded-lg flex justify-center items-center"
          src="/assets/img/me-at-the-jeepney.jpg"
          alt="Me with a laptop on a jeepney"
          format="avif"
          :width="225"
          :height="225"
        />
      </div>
    </div>
    <div class="mb-4">
      <NuxtImg
        class="aspect-[28_/_9] w-full object-cover rounded-lg flex justify-center items-center"
        src="/assets/img/qcu-programming-competition-2023.jpg"
        alt="Me and the participants of the QCU Programming Competition 2023"
        format="avif"
        :width="700"
        :height="225"
      />
    </div>
    <p class="text-justify">
      Currently, I'm an IT student at Quezon City University. In my free time, I
      like to contribute and participate in open-source communities.
    </p>
  </section>
</template>
