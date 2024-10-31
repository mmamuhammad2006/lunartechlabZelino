<template>
  <div>
    <headerFile />
    <main>
      <router-view></router-view>
      <router-link
        :to="{ name: 'contactUs' }"
        id="quote-button"
        class="bg-blue rounded-4 p-3 text-decoration-none shadow"
      >
        <i
          class="fa-solid fa-quote-left d-block text-center fs-3 text-parrot"
        ></i>
        <div href="#quote-form" class="quote-link">Request a Quote</div>
      </router-link>
    </main>
    <footerFile />
  </div>
</template>
