<template>
  <!-- section 1 -->
  <div
    v-if="props.product === 'apiDev'"
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
            <div class="col-12 d-flex px-3 flex-wrap">
              <!-- box -->
              <router-link
                :to="{
                  name: 'productDetail',
                  params: { product: 'apiDev', key: 'one' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/api.jpg"
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
                            RESTful API Development
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Create scalable and easy-to-use APIs for web and
                            mobile applications.
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
                  params: { product: 'apiDev', key: 'two' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/api.jpg"
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
                            API Documentation
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Provide comprehensive documentation for developers.
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
                  params: { product: 'apiDev', key: 'three' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/api.jpg"
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
                            Integration with Third-Party APIs
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Help startups leverage existing APIs to enhance
                            their services.
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
                  params: { product: 'apiDev', key: 'four' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/api.jpg"
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
                            Enterprise Custom API Solutions
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Develop APIs tailored to specific enterprise needs
                            and workflows.
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
                  params: { product: 'apiDev', key: 'five' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/api.jpg"
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
                            Enterprise API Security Services
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Implement measures like OAuth for secure API access.
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
                  params: { product: 'apiDev', key: 'six' },
                }"
                class="box col-lg-4 col-sm-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/api.jpg"
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
                            Enterprise API Monitoring and Management
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Use tools to monitor API performance and usage
                            analytics.
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
