<template>
  <section class="text-zinc-700 mb-10">
    <p class="text-justify mb-4">
      Linux, open-source, and web development is my passion. Here's a sneak peek
      of the things I've built over the years.
    </p>
    <div class="grid md:grid-cols-2 gap-3 mb-4">
      <NuxtLink
        to="/projects/lfi-dental-clinic"
        class="grid grid-cols-[2.5rem_1fr] gap-3 bg-zinc-50 hover:bg-zinc-100 transition duration-200 rounded-md border border-zinc-300 px-6 py-3 leading-5"
      >
        <div>
          <NuxtImg
            src="/assets/img/logo/lfidentalclinic.png"
            alt="Logo for LFI Dental Clinic"
            class="w-full aspect-square"
            format="avif"
            :height="150"
            :width="150"
          />
        </div>
        <div>
          <p class="font-bold">LFI Dental Clinic</p>
          <p>Management System</p>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/projects/filipino-de-cuisine"
        class="grid grid-cols-[2.5rem_1fr] gap-3 bg-zinc-50 hover:bg-zinc-100 transition duration-200 rounded-md border border-zinc-300 px-6 py-3 leading-5"
      >
        <div>
          <NuxtImg
            src="/assets/img/logo/filipinodecuisine.png"
            alt="Logo for Filipino de Cuisine"
            class="w-full aspect-square"
            format="avif"
            :height="150"
            :width="150"
          />
        </div>
        <div>
          <p class="font-bold">Filipino de Cuisine</p>
          <p>E-commerce Website</p>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/projects/find-job-descriptions"
        class="grid grid-cols-[2.5rem_1fr] gap-3 bg-zinc-50 hover:bg-zinc-100 transition duration-200 rounded-md border border-zinc-300 px-6 py-3 leading-5"
      >
        <div>
          <NuxtImg
            src="/assets/img/logo/find-job-desc.png"
            alt="Logo for Find Job Descriptions"
            class="w-full aspect-square"
            format="avif"
            :height="150"
            :width="150"
          />
        </div>
        <div>
          <p class="font-bold">Find Job Descriptions</p>
          <p>RESTful Web Service</p>
        </div>
      </NuxtLink>
      <NuxtLink
        to="/projects/kiss-linux-cdv"
        class="grid grid-cols-[2.5rem_1fr] gap-3 bg-zinc-50 hover:bg-zinc-100 transition duration-200 rounded-md border border-zinc-300 px-6 py-3 leading-5"
      >
        <div>
          <NuxtImg
            src="/assets/img/logo/kiss32linux.png"
            alt="Logo for KISS Linux"
            class="w-full aspect-square"
          />
        </div>
        <div>
          <p class="font-bold">KISS32 Linux CDV</p>
          <p>Linux distribution port</p>
        </div>
      </NuxtLink>
    </div>
    <p class="text-justify">
      You'll find most of my projects on
      <a
        target="_blank"
        href="https://github.com/arvl130"
        class="underline underline-offset-4"
      >
        GitHub</a
      >.
    </p>
  </section>
</template>
