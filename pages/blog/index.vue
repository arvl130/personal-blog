<script setup>
useHead({
  title: "Blog \u2013 Angelo Geulin",
})
</script>
<template>
  <section class="text-zinc-700">
    <h2 class="text-2xl font-semibold text-zinc-900 mb-6">read my blog</h2>
    <ul>
      <li class="mb-3">
        <NuxtLink to="/blog/you-might-not-need-a-transaction">
          <p class="text-zinc-900">You might not need a transaction</p>
          <p class="text-zinc-500">July 1, 2023</p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog/eventually-consistent-databases-in-react">
          <p class="text-zinc-900">
            Dealing with eventually consistent databases in React
          </p>
          <p class="text-zinc-500">June 1, 2023</p>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
