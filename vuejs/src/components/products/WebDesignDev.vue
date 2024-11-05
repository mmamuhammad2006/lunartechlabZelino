<template>
  <!-- section 1 -->
  <div
    v-if="props.product === 'websiteDesignDev'"
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
                  params: { product: 'websiteDesignDev', key: 'one' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webDesignDev.jpg"
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
                            Responsive Web Design
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Create websites that work well on both desktop and
                            mobile devices.
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
                  params: { product: 'websiteDesignDev', key: 'two' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webDesignDev.jpg"
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
                            Content Management Systems (CMS)
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Use platforms like WordPress or Shopify to empower
                            clients to manage their own content.
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
                  params: { product: 'websiteDesignDev', key: 'three' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webDesignDev.jpg"
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
                            Basic SEO Optimization
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Implement basic on-page SEO strategies to improve
                            search visibility.
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
                  params: { product: 'websiteDesignDev', key: 'four' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webDesignDev.jpg"
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
                            Enterprise Custom Web Solutions
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Build tailored web applications that meet specific
                            business needs.
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
                  params: { product: 'websiteDesignDev', key: 'five' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webDesignDev.jpg"
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
                            Enterprise E-commerce Solutions
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Develop robust e-commerce platforms with payment
                            gateways and inventory management.
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
                  params: { product: 'websiteDesignDev', key: 'six' },
                }"
                class="box col-lg-4 col-8 d-flex flex-lg-row flex-lg-column py-4 m-auto text-decoration-none"
              >
                <div class="col-lg-11 col-12 shadow rounded-5">
                  <div class="img">
                    <div class="col-12">
                      <img
                        class="h-100 w-100 rounded-top-5"
                        src="/images/webDesignDev.jpg"
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
                            Enterprise Branding and Identity Design
                          </h5>
                        </div>
                      </div>
                      <div class="para pb-3">
                        <div class="col-12">
                          <p class="m-0">
                            Create a cohesive brand presence through web design
                            elements.
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
