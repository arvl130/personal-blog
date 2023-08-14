<script setup>
import { MoveUpRight } from "lucide-vue-next"

useHead({
  title: "Contact \u2013 Angelo Geulin",
})
</script>
<template>
  <section class="text-zinc-700">
    <h2 class="text-2xl font-semibold text-zinc-900 mb-6">connect with me</h2>
    <p class="mb-3">You can contact me through any of my social media:</p>
    <ul class="mb-3">
      <li class="mb-1">
        <a
          href="https://twitter.com/angelogeulin"
          target="_blank"
          class="hover:text-zinc-900 transition duration-200 flex items-center gap-2"
        >
          <MoveUpRight :size="18" />
          <span>Twitter</span>
        </a>
      </li>
      <li class="mb-1">
        <a
          href="https://www.facebook.com/angelogeulin123"
          target="_blank"
          class="hover:text-zinc-900 transition duration-200 flex items-center gap-2"
        >
          <MoveUpRight :size="18" />
          <span>Facebook</span>
        </a>
      </li>
      <li class="mb-1">
        <a
          href="https://www.linkedin.com/in/angelo-geulin-350776138"
          target="_blank"
          class="hover:text-zinc-900 transition duration-200 flex items-center gap-2"
        >
          <MoveUpRight :size="18" />
          <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="mailto:angelogeulin123@gmail.com"
          class="hover:text-zinc-900 transition duration-200 flex items-center gap-2"
        >
          <MoveUpRight :size="18" />
          <span>Email</span>
        </a>
      </li>
    </ul>
    <p>I'm excited to hear from you. 😄</p>
  </section>
</template>
