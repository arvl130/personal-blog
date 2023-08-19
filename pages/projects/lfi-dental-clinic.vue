<script setup>
import { MoveUpRight } from "lucide-vue-next"

useHead({
  title: "LFI Dental Clinic \u2013 Angelo Geulin",
})
</script>
<template>
  <article class="text-zinc-700">
    <section class="mb-6">
      <h2 class="text-2xl text-zinc-900 font-semibold">LFI Dental Clinic</h2>
      <p class="mb-6 text-zinc-500">Clinic management system</p>
      <NuxtImg
        src="/assets/img/previews/lfi-dental-clinic-1.png"
        alt="The home page for the LFI Dental Clinic website"
        class="border border-zinc-300 rounded-lg w-full mb-3"
        :width="800"
        :height="450"
        background="white"
        fit="contain"
        format="webp"
      />
      <NuxtImg
        src="/assets/img/previews/lfi-dental-clinic-2.png"
        alt="The appointments scheduling page of the LFI Dental Clinic website"
        class="border border-zinc-300 rounded-lg w-full"
        :width="800"
        :height="450"
        background="white"
        fit="contain"
        format="webp"
      />
    </section>
    <section>
      <p class="mb-4">
        This is the clinic management system for LFI Dental Clinic—a dental
        clinic in Jordan Plains, Quezon City. Experience exceptional and
        affordable dental care at LFI Dental Clinic.
      </p>
      <p class="font-semibold text-lg mb-1">Key features</p>
      <ul class="mb-4 pl-6 list-disc">
        <li>Responsive frontend design</li>
        <li>Email-based sign in with verification</li>
        <li>Streamlined appointment scheduling and management</li>
        <li>Feature-rich dentist forms</li>
        <li>Efficient patient record system</li>
        <li>Automated reminders</li>
      </ul>
      <p class="font-semibold text-lg mb-1">Links</p>
      <ul class="pl-2">
        <li>
          <a
            href="https://github.com/arvl130/nuxt-lfi-dental-clinic"
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
            href="https://lfidentalclinic.vercel.app"
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
