<script setup>
import { MoveUpRight } from "lucide-vue-next"

useHead({
  title: "Find Job Descriptions \u2013 Angelo Geulin",
})
</script>
<template>
  <article class="text-zinc-700">
    <section class="mb-6">
      <h2 class="text-2xl text-zinc-900 font-semibold">
        Find Job Descriptions
      </h2>
      <p class="mb-6 text-zinc-500">RESTful web service</p>
      <NuxtImg
        src="/assets/img/previews/find-job-descriptions-1.png"
        alt="The home page of Find Job Descriptions"
        class="border border-zinc-300 rounded-lg w-full flex justify-center items-center mb-3"
        :width="800"
        :height="450"
        background="white"
        fit="contain"
        format="webp"
      />
      <NuxtImg
        src="/assets/img/previews/find-job-descriptions-2.png"
        alt="The online search page of Find Job Descriptions"
        class="border border-zinc-300 rounded-lg w-full flex justify-center items-center"
        :width="800"
        :height="450"
        background="white"
        fit="contain"
        format="webp"
      />
    </section>
    <section>
      <p class="mb-4">
        Stop thinking about job descriptions and get them here. Try our
        <a
          target="_blank"
          href="https://jobdescriptions.ageulin.com"
          class="underline underline-offset-4"
          >Online Search</a
        >
        and
        <a
          target="_blank"
          href="https://jobdescriptions.ageulin.com"
          class="underline underline-offset-4"
          >REST API</a
        >.
      </p>
      <p class="font-semibold text-lg mb-1">Key features</p>
      <ul class="mb-4 pl-6 list-disc">
        <li>Online search</li>
        <li>REST API support</li>
        <li>Multiple apps support with API keys</li>
      </ul>
      <p class="font-semibold text-lg mb-1">Links</p>
      <ul class="pl-2">
        <li>
          <a
            href="https://github.com/arvl130/job-descriptions"
            target="_blank"
            class="hover:text-zinc-900 transition duration-200 flex items-center gap-2"
          >
            <MoveUpRight
              :size="18"
              aria-label="Arrow pointing upper right icon"
            />
            <span>Browse code</span>
          </a>
        </li>
        <li>
          <a
            href="https://jobdescriptions.ageulin.com"
            target="_blank"
            class="hover:text-zinc-900 transition duration-200 flex items-center gap-2"
          >
            <MoveUpRight
              :size="18"
              aria-label="Arrow pointing upper right icon"
            />
            <span>View demo</span>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
