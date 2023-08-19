<script setup>
import { MoveUpRight } from "lucide-vue-next"

useHead({
  title: "KISS32 Linux CDV \u2013 Angelo Geulin",
})
</script>

<template>
  <article class="text-zinc-700">
    <section class="mb-6">
      <h2 class="text-2xl text-zinc-900 font-semibold">KISS32 Linux CDV</h2>
      <p class="mb-6 text-zinc-500">Linux distribution port</p>
      <NuxtImg
        src="/assets/img/previews/kiss-linux-cdv.png"
        alt="A screenshot of KISS32 Linux CDV playing full 1080p video via MPV media player"
        class="border border-zinc-300 rounded-lg w-full flex justify-center items-center aspect-video object-contain"
        :width="800"
        :height="450"
        background="white"
        fit="contain"
        format="avif"
      />
    </section>
    <section>
      <p class="mb-4">
        This is a 32-bit Glibc port of the KISS Linux distribution to enable
        binary drivers for computers running the Intel Cedarview platform.
      </p>
      <p class="font-semibold text-lg mb-1">Key features</p>
      <ul class="mb-4 pl-6 list-disc">
        <li>Full 1080p playback through MPV and VA-API</li>
        <li>Support for software compiled with Glibc 2.24</li>
        <li>Can run DOOM</li>
      </ul>
      <p class="font-semibold text-lg mb-1">Links</p>
      <ul class="pl-2">
        <li>
          <a
            href="https://github.com/arvl130/kiss32-cdv-repo/releases/tag/20200509"
            target="_blank"
            class="hover:text-zinc-900 transition duration-200 flex items-center gap-2"
          >
            <MoveUpRight
              :size="18"
              aria-label="Arrow pointing upper right icon"
            />
            <span>View downloads</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/arvl130/kiss32-cdv-repo"
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
      </ul>
    </section>
  </article>
</template>
