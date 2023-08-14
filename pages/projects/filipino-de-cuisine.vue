<script setup>
import filipinoDeCuisineImg from "@/assets/img/previews/filipino-de-cuisine.png"
import { MoveUpRight } from "lucide-vue-next"

useHead({
  title: "Filipino de Cuisine \u2013 Angelo Geulin",
})
</script>

<template>
  <article class="text-zinc-700">
    <section class="mb-6">
      <h2 class="text-2xl text-zinc-900 font-semibold">Filipino de Cuisine</h2>
      <p class="mb-6 text-zinc-500">E-commerce website</p>
      <img
        :src="filipinoDeCuisineImg"
        alt="The home page of the Filipino de Cuisine website"
        class="border border-zinc-300 rounded-lg w-full aspect-video object-contain mb-3"
      />
    </section>
    <section>
      <p class="mb-3 text-justify">
        This is the website for the restaurant management system of Filipino de
        Cuisine—an imaginary Filipino restaurant. Check out
        <a
          target="_blank"
          href="https://filipinodecuisine.ageulin.com/menu"
          class="underline underline-offset-4"
          >our menu</a
        >
        and
        <a
          target="_blank"
          href="https://filipinodecuisine.ageulin.com"
          class="underline underline-offset-4"
          >order now</a
        >.
      </p>
      <p class="font-semibold text-lg mb-1">Key features</p>
      <ul class="mb-3 pl-6 list-disc">
        <li>Responsive frontend design</li>
        <li>Streamlined ordering and delivery monitoring</li>
        <li>Efficient reservation scheduling and management</li>
        <li>Secure payments with GCash and Maya</li>
        <li>Sign in with Email, Google, and Facebook</li>
      </ul>
      <p class="font-semibold text-lg mb-1">Links</p>
      <ul class="mb-3 pl-2">
        <li>
          <a
            href="https://github.com/arvl130/filipino-de-cuisine"
            target="_blank"
            class="hover:text-zinc-900 transition duration-200 flex items-center gap-2"
          >
            <MoveUpRight :size="18" />
            <span>Browse code</span>
          </a>
        </li>
        <li>
          <a
            href="https://filipinodecuisine.ageulin.com"
            target="_blank"
            class="hover:text-zinc-900 transition duration-200 flex items-center gap-2"
          >
            <MoveUpRight :size="18" />
            <span>View demo</span>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
