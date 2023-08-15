<script setup>
import filipinoDeCuisineLogo from "@/assets/img/logo/filipinodecuisine.png"
import lfiDentalClinicLogo from "@/assets/img/logo/lfidentalclinic.png"
import findJobDescriptionsLogo from "@/assets/img/logo/find-job-desc.png"
import kissLinuxLogo from "@/assets/img/logo/kiss32linux.png"
import { MoveUpRight } from "lucide-vue-next"

useHead({
  title: "Projects \u2013 Angelo Geulin",
})
</script>
<template>
  <section class="text-zinc-700">
    <h2 class="text-2xl font-semibold text-zinc-900 mb-6">
      browse my projects
    </h2>
    <NuxtLink
      to="/projects/filipino-de-cuisine"
      class="grid grid-cols-[3rem_1fr] mb-3 gap-3 px-6 py-3 border rounded-lg hover:rounded-none border-zinc-300 hover:bg-zinc-50 transition [transition-property:_background-color,_border-radius] duration-300"
    >
      <div>
        <img :src="filipinoDeCuisineLogo" alt="Logo for Filipino de cuisine" />
      </div>
      <div>
        <h3 class="font-semibold">Filipino de Cuisine</h3>
        <p>E-commerce website</p>
      </div>
    </NuxtLink>
    <NuxtLink
      to="/projects/lfi-dental-clinic"
      class="grid grid-cols-[3rem_1fr] mb-3 gap-3 px-6 py-3 border rounded-lg hover:rounded-none border-zinc-300 hover:bg-zinc-50 transition [transition-property:_background-color,_border-radius] duration-300"
    >
      <div>
        <img :src="lfiDentalClinicLogo" alt="Logo for LFI Dental Clinic" />
      </div>
      <div>
        <h3 class="font-semibold">LFI Dental Clinic</h3>
        <p>Clinic management system</p>
      </div>
    </NuxtLink>
    <NuxtLink
      to="/projects/find-job-descriptions"
      class="grid grid-cols-[3rem_1fr] mb-3 gap-3 px-6 py-3 border rounded-lg hover:rounded-none border-zinc-300 hover:bg-zinc-50 transition [transition-property:_background-color,_border-radius] duration-300"
    >
      <div>
        <img
          :src="findJobDescriptionsLogo"
          alt="Logo for Find Job Descriptions"
        />
      </div>
      <div>
        <h3 class="font-semibold">Find Job Descriptions</h3>
        <p>RESTful web service</p>
      </div>
    </NuxtLink>
    <NuxtLink
      to="/projects/kiss-linux-cdv"
      class="grid grid-cols-[3rem_1fr] gap-3 px-6 py-3 border rounded-lg hover:rounded-none border-zinc-300 hover:bg-zinc-50 transition [transition-property:_background-color,_border-radius] duration-300"
    >
      <div>
        <img :src="kissLinuxLogo" alt="Logo for KISS32 Linux CDV" />
      </div>
      <div>
        <h3 class="font-semibold">KISS32 Linux CDV</h3>
        <p>Linux distribution port</p>
      </div>
    </NuxtLink>
    <div class="text-center pt-6">
      <a
        target="_blank"
        href="https://github.com/arvl130"
        aria-label="Arrow pointing upper right icon"
        class="inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-900 transition duration-200"
        >See the full list on GitHub
        <MoveUpRight :size="18" />
      </a>
    </div>
  </section>
</template>
