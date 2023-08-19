<template>
  <section class="text-zinc-700 mb-10">
    <p class="text-justify mb-4">
      I'm a life-long learner. I love sharing the interesting things I learn on
      my blog.
    </p>
    <div class="grid gap-3 mb-4">
      <NuxtLink
        to="/blog/you-might-not-need-a-transaction"
        class="bg-zinc-50 hover:bg-zinc-100 transition duration-200 rounded-md border border-zinc-300 px-6 py-3 leading-5"
      >
        <p class="font-bold">You might not need a transaction</p>
        <p>July 1, 2023</p>
      </NuxtLink>
      <NuxtLink
        to="/blog/eventually-consistent-databases-in-react"
        class="bg-zinc-50 hover:bg-zinc-100 transition duration-200 rounded-md border border-zinc-300 px-6 py-3 leading-5"
      >
        <p class="font-bold">
          Dealing with eventually consistent databases in React
        </p>
        <p>June 1, 2023</p>
      </NuxtLink>
    </div>
    <p class="text-justify">
      Subscribe to my newsletter to receive updates when I post.
    </p>
  </section>
</template>
