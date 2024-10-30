<template>
  <div class="container-fluid position-relative">
    <div class="col-12 p-0 m-auto">
      <nav
        :class="data.navbarClass"
        class="navbar max-h-285 scrollbar-transparent-width-none navbar-expand-lg bg-transparent position-relative z-2 py-2 navbar-cont px-sm-0 px-3"
      >
        <div class="container m-auto">
          <div class="col-md-4 mb-0 mb-md-0">
            <router-link
              :to="{ name: 'home' }"
              class="d-flex link-body-emphasis text-decoration-none position-relative z-2"
            >
              <img
                src="/images/logo2.png"
                alt=""
                srcset=""
                style="height: 65px"
              />
              <!-- <span class="text-parrot fw-bold fs-3">LunarTechLabs</span> -->
            </router-link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse max-h-216 navbar-collapse col-8"
            id="navbarSupportedContent"
          >
            <ul
              class="navbar-nav pt-lg-0 pt-5 ms-auto col-xl-6 col-lg-9 col-12 mb-2 justify-content-end mb-md-0 position-relative z-2"
            >
              <li class="p-2">
                <router-link
                  :to="{ name: 'home' }"
                  class="text-decoration-none text-white cursor-pointer position-relative bottom-line-hover fw-bold"
                  >HOME</router-link
                >
              </li>
              <li class="p-2">
                <router-link
                  :to="{ name: 'aboutUs' }"
                  class="text-decoration-none text-white cursor-pointer position-relative bottom-line-hover fw-bold"
                  >ABOUT US
                </router-link>
              </li>
              <li class="p-2">
                <a
                  @click="toggleDropdown"
                  id="a-tag"
                  class="text-decoration-none dropdown-toggle text-white cursor-pointer position-relative bottom-line-hover fw-bold"
                  role="button"
                  >PRODUCTS</a
                >
                <div
                  :class="{ 'jq-dropdown': data.dropDown }"
                  class="drop_down_menu border text-start bg-white r-0 ms-auto"
                >
                  <ul class="col-12 py-3 list-style-none">
                    <li class="py-2 ps-5 bg-gray-hover">
                      <router-link
                        class="p-0 text-dark text-decoration-none"
                        :to="{
                          name: 'products',
                          params: { product: 'mobileAppDev' },
                        }"
                        >Mobile App Development</router-link
                      >
                    </li>
                    <li class="py-2 ps-5 bg-gray-hover">
                      <router-link
                        class="p-0 text-dark text-decoration-none"
                        :to="{
                          name: 'products',
                          params: { product: 'websiteDesignDev' },
                        }"
                        >Website Design & Development</router-link
                      >
                    </li>
                    <li class="py-2 ps-5 bg-gray-hover">
                      <router-link
                        class="p-0 text-dark text-decoration-none"
                        :to="{
                          name: 'products',
                          params: { product: 'webAppDev' },
                        }"
                        >Web App Development</router-link
                      >
                    </li>
                    <li class="py-2 ps-5 bg-gray-hover">
                      <router-link
                        class="p-0 text-dark text-decoration-none"
                        :to="{
                          name: 'products',
                          params: { product: 'apiDev' },
                        }"
                        >API Development</router-link
                      >
                    </li>
                    <li class="py-2 ps-5 bg-gray-hover">
                      <router-link
                        class="p-0 text-dark text-decoration-none"
                        :to="{
                          name: 'products',
                          params: { product: 'automationToolDev' },
                        }"
                        >Automation Tool</router-link
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li class="p-2">
                <router-link
                  :to="{ name: 'contactUs' }"
                  class="text-decoration-none text-white cursor-pointer position-relative bottom-line-hover fw-bold"
                  >CONTACT</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- hero section -->
      <div class="hero-section">
        <video
          autoplay
          muted
          loop
          class="hero-sec-video position-absolute h-100 w-100 -z-1 t-b-l-r-0 object-fit-cover"
        >
          <source src="/videos/hero-sec-video.mp4" type="video/mp4" />
        </video>
        <div
          class="video-cover position-absolute w-100 h-100 z-1 t-b-l-r-0"
        ></div>
        <!-- content -->
        <div class="content py-5 position-relative z-1">
          <!-- position-relative z-2 -->
          <div class="col-12 py-5">
            <!-- heading -->
            <div class="head">
              <div class="col-12">
                <h1 class="m-0 pb-3 text-white text-center">
                  Welcome to Your Digital Marketing Solution
                </h1>
                <h5 class="m-0 pb-3 text-white text-center">
                  ELEVATE YOUR BRAND…
                </h5>
              </div>
            </div>
            <!-- links -->
            <!-- <div class="links text-center">
                <div class="col-12 pb-3 d-flex flex-sm-row flex-column justify-content-center">
                  <div class="link px-3 py-sm-0 py-2">
                    <div class="col-12">
                      <i class="fa-brands fa-facebook text-white pe-2"></i>
                      <a href="#" class="text-white text-decoration-none"
                        >Follow us on facebook</a
                      >
                    </div>
                  </div>
                  <div class="link px-3 py-sm-0 py-2">
                    <div class="col-12">
                      <i class="fa-brands fa-instagram text-white pe-2"></i>
                      <a href="#" class="text-white text-decoration-none"
                        >Follow us on Instagram</a
                      >
                    </div>
                  </div>
                </div>
              </div> -->
            <!-- button -->
            <div class="bttn text-center">
              <div class="col-12 d-flex justify-content-center">
                <a
                  href="<%= target %>"
                  class="custom-button z-0 my-2 rounded-5 me-2 btn-parrot border-parrot"
                  >Discover More</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const data = ref({
  navbarClass: "bg-transparent",
  dropDown: false,
});

const updateNavbar = async () => {
  const width = window.innerWidth;
  try {
    if (width < 992) {
      console.log("updateNavbar");
      data.value.navbarClass =
        "bg-blue position-fixed w-100 z-3 overflow-y-auto";
    } else {
      data.value.navbarClass = "bg-transparent";
    }
  } catch (err) {
    console.err("updateNavbar function failed get this err:-", err);
  }
};

const toggleDropdown = async () => {
  data.value.dropDown = !data.value.dropDown;
};

onMounted(() => {
  updateNavbar();
  window.addEventListener("resize", updateNavbar);
});
</script>
