<template>
  <!-- section 1 -->
  <div
    v-if="props.product === 'webAppDev'"
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
            <div class="col-12 d-flex flex-wrap">
              <!-- box -->
              <router-link
                :to="{
                  name: 'productDetail',
                  params: { product: 'webAppDev', key: 'one' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webAppDev.jpg"
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
                            Prototype Development
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Create prototypes to validate ideas quickly with
                            stakeholders.
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
                  params: { product: 'webAppDev', key: 'two' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webAppDev.jpg"
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
                            Single Page Applications (SPAs)
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Build fast, responsive SPAs for better user
                            experience.
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
                  params: { product: 'webAppDev', key: 'three' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webAppDev.jpg"
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
                            Progressive Web Apps (PWAs)
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Develop web apps that work seamlessly across all
                            devices and platforms.
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
                  params: { product: 'webAppDev', key: 'four' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webAppDev.jpg"
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
                            Enterprise Custom Dashboard Development
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Create dashboards for real-time data analysis and
                            reporting.
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
                  params: { product: 'webAppDev', key: 'five' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webAppDev.jpg"
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
                            Enterprise Integration with Third-Party Services
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Connect web apps with existing systems and services
                            (like CRMs).
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
                  params: { product: 'webAppDev', key: 'six' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webAppDev.jpg"
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
                            Enterprise Data Analytics Solutions
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Provide tools for businesses to analyze and
                            visualize data.
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
