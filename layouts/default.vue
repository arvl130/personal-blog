<script setup>
import { Github, Twitter } from "lucide-vue-next"

const route = useRoute()
</script>

<template>
  <div class="min-h-screen grid grid-rows-[8rem_1fr_6rem]">
    <header class="font-sans w-full max-w-xl mx-auto flex items-center px-3">
      <h1 class="sr-only">Angelo Geulin</h1>
      <nav class="w-full flex justify-between items-center">
        <ul class="flex gap-3">
          <li>
            <NuxtLink
              to="/"
              class="text-zinc-500 hover:text-zinc-900 transition duration-200 pb-1 border-b"
              :class="{
                'text-zinc-900': route.path === '/',
                'border-zinc-300': route.path === '/',
                'border-white': route.path !== '/',
              }"
            >
              home
            </NuxtLink>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.ageulin.com"
              class="text-zinc-500 hover:text-zinc-900 transition duration-200 pb-1"
            >
              portfolio
            </a>
          </li>
          <li>
            <NuxtLink
              to="/blog"
              class="text-zinc-500 hover:text-zinc-900 transition duration-200 pb-1 border-b"
              :class="{
                'text-zinc-900': route.path === '/blog',
                'border-zinc-300': route.path === '/blog',
                'border-white': route.path !== '/blog',
              }"
            >
              blog
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="text-zinc-500 hover:text-zinc-900 transition duration-200 pb-1 border-b"
              :class="{
                'text-zinc-900': route.path === '/contact',
                'border-zinc-300': route.path === '/contact',
                'border-white': route.path !== '/contact',
              }"
            >
              contact
            </NuxtLink>
          </li>
        </ul>
        <ul class="flex items-center gap-3 text-zinc-400">
          <li>
            <a
              href="https://twitter.com/ageulin123"
              class="hover:text-zinc-900 transition duration-200"
              target="_blank"
              aria-label="Twitter contact link"
            >
              <Twitter :stroke-width="1.5" aria-label="Twitter logo" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/arvl130"
              class="hover:text-zinc-900 transition duration-200"
              target="_blank"
              aria-label="GitHub profile link"
            >
              <Github :stroke-width="1.5" aria-label="GitHub logo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="font-sans w-full max-w-xl mx-auto px-3">
      <slot />
    </main>
    <footer
      class="text-zinc-900 font-sans w-full max-w-xl mx-auto text-sm flex justify-center pb-3 items-end font-semibold px-3"
    >
      Angelo Geulin &copy; 2023
    </footer>
  </div>
</template>
