<script setup>
import { Mail, Facebook, Twitter, Linkedin } from "lucide-vue-next"
</script>

<template>
  <section class="text-zinc-700">
    <p class="mb-3 text-justify">
      Want us to work on something? Let's talk about it.
    </p>
    <div class="flex gap-3">
      <a
        href="https://www.facebook.com/angelogeulin123"
        target="_blank"
        aria-label="Facebook contact link"
        class="bg-zinc-50 hover:bg-zinc-100 transition duration-200 rounded-md border border-zinc-300 px-3 py-2 leading-5"
      >
        <Facebook :stroke-width="1.5" aria-label="Facebook logo" />
      </a>
      <a
        href="https://twitter.com/angelogeulin"
        target="_blank"
        aria-label="Twitter contact link"
        class="bg-zinc-50 hover:bg-zinc-100 transition duration-200 rounded-md border border-zinc-300 px-3 py-2 leading-5"
      >
        <Twitter :stroke-width="1.5" aria-label="Twitter logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/angelo-geulin-350776138"
        target="_blank"
        aria-label="LinkedIn contact link"
        class="bg-zinc-50 hover:bg-zinc-100 transition duration-200 rounded-md border border-zinc-300 px-3 py-2 leading-5"
      >
        <Linkedin :stroke-width="1.5" aria-label="LinkedIn logo" />
      </a>
      <a
        href="mailto:angelogeulin123@gmail.com"
        aria-label="Email contact link"
        class="bg-zinc-50 hover:bg-zinc-100 transition duration-200 rounded-md border border-zinc-300 px-3 py-2 leading-5"
      >
        <Mail :stroke-width="1.5" aria-label="Email logo" />
      </a>
    </div>
  </section>
</template>
