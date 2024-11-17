<template>
  <!-- section 1 -->
  <div
    v-if="props.product === 'mobileAppDev'"
    class="container-fluid py-5"
    id="products-sec"
  >
    <div class="container m-auto">
      <div class="head">
        <div class="col-12">
          <h3 class="m-0 fs-42 text-parrot text-center fw-bold">
            Featured Products
          </h3>
        </div>
      </div>
      <!-- content -->
      <div class="content pt-5">
        <div class="col-12">
          <div class="boxes">
            <div class="col-12 px-3 d-flex flex-wrap">
              <!-- box -->
              <router-link
                :to="{
                  name: 'productDetail',
                  params: { product: 'mobileAppDev', key: 'one' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/mobileAppDev.jpg"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  <!-- content -->
                  <div class="content bg-blue text-white p-4 rounded-bottom-5">
                    <div class="col-12">
                      <div class="head pb-3">
                        <div class="col-12">
                          <h5 class="m-0 text-parrot fw-bold">
                            iOS and Android App Development
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Create user-friendly mobile applications tailored
                            for iOS and Android platforms.
                          </p>
                        </div>
                      </div>
                      <div class="price">
                        <div class="col-12">
                          <p class="m-0 text-parrot fw-bold">
                            1 hour free consultation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
              <!-- box -->
              <router-link
                :to="{
                  name: 'productDetail',
                  params: { product: 'mobileAppDev', key: 'two' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/mobileAppDev.jpg"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  <!-- content -->
                  <div class="content bg-blue text-white p-4 rounded-bottom-5">
                    <div class="col-12">
                      <div class="head pb-3">
                        <div class="col-12">
                          <h5 class="m-0 text-parrot fw-bold">
                            MVP Development
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Build a Minimum Viable Product to test the market
                            quickly with essential features.
                          </p>
                        </div>
                      </div>
                      <div class="price">
                        <div class="col-12">
                          <p class="m-0 text-parrot fw-bold">
                            1 hour free consultation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
              <!-- box -->
              <router-link
                :to="{
                  name: 'productDetail',
                  params: { product: 'mobileAppDev', key: 'three' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/mobileAppDev.jpg"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  <!-- content -->
                  <div class="content bg-blue text-white p-4 rounded-bottom-5">
                    <div class="col-12">
                      <div class="head pb-3">
                        <div class="col-12">
                          <h5 class="m-0 text-parrot fw-bold">
                            User Interface (UI) and User Experience (UX) Design
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Focus on designing intuitive interfaces that enhance
                            user experience.
                          </p>
                        </div>
                      </div>
                      <div class="price">
                        <div class="col-12">
                          <p class="m-0 text-parrot fw-bold">
                            1 hour free consultation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
              <!-- box -->
              <router-link
                :to="{
                  name: 'productDetail',
                  params: { product: 'mobileAppDev', key: 'four' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/mobileAppDev.jpg"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  <!-- content -->
                  <div class="content bg-blue text-white p-4 rounded-bottom-5">
                    <div class="col-12">
                      <div class="head pb-3">
                        <div class="col-12">
                          <h5 class="m-0 text-parrot fw-bold">
                            Enterprise Mobile Solutions
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Develop apps that integrate with existing enterprise
                            systems, improving internal processes.
                          </p>
                        </div>
                      </div>
                      <div class="price">
                        <div class="col-12">
                          <p class="m-0 text-parrot fw-bold">
                            1 hour free consultation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
              <!-- box -->
              <router-link
                :to="{
                  name: 'productDetail',
                  params: { product: 'mobileAppDev', key: 'five' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/mobileAppDev.jpg"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  <!-- content -->
                  <div class="content bg-blue text-white p-4 rounded-bottom-5">
                    <div class="col-12">
                      <div class="head pb-3">
                        <div class="col-12">
                          <h5 class="m-0 text-parrot fw-bold">
                            Enterprise Mobile App Security Solutions
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Implement robust security features to protect
                            sensitive data.
                          </p>
                        </div>
                      </div>
                      <div class="price">
                        <div class="col-12">
                          <p class="m-0 text-parrot fw-bold">
                            1 hour free consultation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
              <!-- box -->
              <router-link
                :to="{
                  name: 'productDetail',
                  params: { product: 'mobileAppDev', key: 'six' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/mobileAppDev.jpg"
                        alt=""
                        srcset=""
                      />
                    </div>
                  </div>
                  <!-- content -->
                  <div class="content bg-blue text-white p-4 rounded-bottom-5">
                    <div class="col-12">
                      <div class="head pb-3">
                        <div class="col-12">
                          <h5 class="m-0 text-parrot fw-bold">
                            Enterprise Performance Optimization
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Enhance app performance for better user engagement
                            and retention.
                          </p>
                        </div>
                      </div>
                      <div class="price">
                        <div class="col-12">
                          <p class="m-0 text-parrot fw-bold">
                            1 hour free consultation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  product: {
    type: String,
    Required: true,
  },
});
</script>
