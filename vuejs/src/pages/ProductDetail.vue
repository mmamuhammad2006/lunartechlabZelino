<template>
  <div class="container-fluid py-5">
    <div class="container m-auto py-5">
      <!-- Mobile App Dev -->
      <div v-if="product === 'mobileAppDev'" class="content px-3">
        <div class="col-12 p-sm-5 p-3 shadow bg-white rounded-5">
          <!-- top -->
          <div class="top bg-body-tertiary rounded-5 px-3">
            <div class="col-12 d-flex flex-lg-row flex-column p-sm-5 pt-3">
              <!-- left img -->
              <div class="col-lg-6 col-12">
                <div class="col-12">
                  <img
                    class="h-350 w-100 rounded-5"
                    :src="data.mobileAppDev"
                    alt=""
                  />
                </div>
              </div>
              <!-- right content -->
              <div
                class="content col-lg-6 col-12 ps-lg-5 ps-0 d-flex align-items-center pt-lg-0 pt-5"
              >
                <div class="col-12">
                  <div class="head pb-3">
                    <div class="col-12">
                      <h3 class="m-0 fw-bold fs-4 text-parrot">
                        {{ data.title }}
                      </h3>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">{{ data.smDetail }}</p>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">1 hour free consultation</p>
                    </div>
                  </div>
                  <div class="buttons me-3 pb-3">
                    <div class="col-12 text-white">
                      <!-- buttons -->
                      <router-link
                        :to="{ name: 'contactUs' }"
                        class="btn bg-parrot px-3 my-2 py-2 me-2"
                        >Get Started</router-link
                      >
                      <a href="/whatsapp" class="btn bg-parrot px-3 my-2 py-2"
                        >Schedule a Consultation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="bottom mt-5 p-sm-5 px-3 pt-3 bg-body-tertiary rounded-5">
            <div class="col-12">
              <div class="head pb-3">
                <div class="col-12">
                  <h3 class="m-0 fw-bold fs-3 text-center text-parrot">
                    Services
                  </h3>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle1 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail1 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle2 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail2 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle3 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail3 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle4 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail4 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Web Design Dev -->
      <div v-if="product === 'websiteDesignDev'" class="content px-3">
        <div class="col-12 p-sm-5 p-3 shadow bg-white rounded-5">
          <!-- top -->
          <div class="top bg-body-tertiary rounded-5 px-3">
            <div class="col-12 d-flex flex-lg-row flex-column p-sm-5 pt-3">
              <!-- left img -->
              <div class="col-lg-6 col-12">
                <div class="col-12">
                  <img
                    class="h-350 w-100 rounded-5"
                    :src="data.webDesignDev"
                    alt=""
                  />
                </div>
              </div>
              <!-- right content -->
              <div
                class="content col-lg-6 col-12 ps-lg-5 ps-0 d-flex align-items-center pt-lg-0 pt-5"
              >
                <div class="col-12">
                  <div class="head pb-3">
                    <div class="col-12">
                      <h3 class="m-0 fw-bold fs-4 text-parrot">
                        {{ data.title }}
                      </h3>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">{{ data.smDetail }}</p>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">1 hour free consultation</p>
                    </div>
                  </div>
                  <div class="buttons me-3 pb-3">
                    <div class="col-12 text-white">
                      <!-- buttons -->
                      <router-link
                        :to="{ name: 'contactUs' }"
                        class="btn bg-parrot px-3 my-2 py-2 me-2"
                        >Get Started</router-link
                      >
                      <a href="/whatsapp" class="btn bg-parrot px-3 my-2 py-2"
                        >Schedule a Consultation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="bottom mt-5 p-sm-5 px-3 pt-3 bg-body-tertiary rounded-5">
            <div class="col-12">
              <div class="head pb-3">
                <div class="col-12">
                  <h3 class="m-0 fw-bold fs-3 text-center text-parrot">
                    Services
                  </h3>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle1 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail1 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">
                        {{ data.serviceTitle2 }}
                      </h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail2 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">
                        {{ data.serviceTitle3 }}
                      </h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail3 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle4 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail4 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Web App Dev -->
      <div v-if="product === 'webAppDev'" class="content px-3">
        <div class="col-12 p-sm-5 p-3 shadow bg-white rounded-5">
          <!-- top -->
          <div class="top bg-body-tertiary rounded-5 px-3">
            <div class="col-12 d-flex flex-lg-row flex-column p-sm-5 pt-3">
              <!-- left img -->
              <div class="col-lg-6 col-12">
                <div class="col-12">
                  <img
                    class="h-350 w-100 rounded-5"
                    :src="data.webAppDev"
                    alt=""
                  />
                </div>
              </div>
              <!-- right content -->
              <div
                class="content col-lg-6 col-12 ps-lg-5 ps-0 d-flex align-items-center pt-lg-0 pt-5"
              >
                <div class="col-12">
                  <div class="head pb-3">
                    <div class="col-12">
                      <h3 class="m-0 fw-bold fs-4 text-parrot">
                        {{ data.title }}
                      </h3>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">{{ data.smDetail }}</p>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">1 hour free consultation</p>
                    </div>
                  </div>
                  <div class="buttons me-3 pb-3">
                    <div class="col-12 text-white">
                      <!-- buttons -->
                      <router-link
                        :to="{ name: 'contactUs' }"
                        class="btn bg-parrot px-3 my-2 py-2 me-2"
                        >Get Started</router-link
                      >
                      <a href="/whatsapp" class="btn bg-parrot px-3 my-2 py-2"
                        >Schedule a Consultation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="bottom mt-5 p-sm-5 px-3 pt-3 bg-body-tertiary rounded-5">
            <div class="col-12">
              <div class="head pb-3">
                <div class="col-12">
                  <h3 class="m-0 fw-bold fs-3 text-center text-parrot">
                    Services
                  </h3>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">
                        {{ data.serviceTitle1 }}
                      </h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail1 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle2 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail2 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle3 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail3 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle4 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail4 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Api Dev -->
      <div v-if="product === 'apiDev'" class="content px-3">
        <div class="col-12 p-sm-5 p-3 shadow bg-white rounded-5">
          <!-- top -->
          <div class="top bg-body-tertiary rounded-5 px-3">
            <div class="col-12 d-flex flex-lg-row flex-column p-sm-5 pt-3">
              <!-- left img -->
              <div class="col-lg-6 col-12">
                <div class="col-12">
                  <img
                    class="h-350 w-100 rounded-5"
                    :src="data.apiDev"
                    alt=""
                  />
                </div>
              </div>
              <!-- right content -->
              <div
                class="content col-lg-6 col-12 ps-lg-5 ps-0 d-flex align-items-center pt-lg-0 pt-5"
              >
                <div class="col-12">
                  <div class="head pb-3">
                    <div class="col-12">
                      <h3 class="m-0 fw-bold fs-4 text-parrot">
                        {{ data.title }}
                      </h3>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">{{ data.smDetail }}</p>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">1 hour free consultation</p>
                    </div>
                  </div>
                  <div class="buttons me-3 pb-3">
                    <div class="col-12 text-white">
                      <!-- buttons -->
                      <router-link
                        :to="{ name: 'contactUs' }"
                        class="btn bg-parrot px-3 my-2 py-2 me-2"
                        >Get Started</router-link
                      >
                      <a href="/whatsapp" class="btn bg-parrot px-3 my-2 py-2"
                        >Schedule a Consultation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="bottom mt-5 p-sm-5 px-3 pt-3 bg-body-tertiary rounded-5">
            <div class="col-12">
              <div class="head pb-3">
                <div class="col-12">
                  <h3 class="m-0 fw-bold fs-3 text-center text-parrot">
                    Services
                  </h3>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle1 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail1 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle2 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail2 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle3 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail3 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle4 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail4 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Automation Tool Dev -->
      <div v-if="product === 'automationTool'" class="content px-3">
        <div class="col-12 p-sm-5 p-3 shadow bg-white rounded-5">
          <!-- top -->
          <div class="top bg-body-tertiary rounded-5 px-3">
            <div class="col-12 d-flex flex-lg-row flex-column p-sm-5 pt-3">
              <!-- left img -->
              <div class="col-lg-6 col-12">
                <div class="col-12">
                  <img
                    class="h-350 w-100 rounded-5"
                    :src="data.chatBotDev"
                    alt=""
                  />
                </div>
              </div>
              <!-- right content -->
              <div
                class="content col-lg-6 col-12 ps-lg-5 ps-0 d-flex align-items-center pt-lg-0 pt-5"
              >
                <div class="col-12">
                  <div class="head pb-3">
                    <div class="col-12">
                      <h3 class="m-0 fw-bold fs-4 text-parrot">
                        {{ data.title }}
                      </h3>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">{{ data.smDetail }}</p>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">1 hour free consultation</p>
                    </div>
                  </div>
                  <div class="buttons me-3 pb-3">
                    <div class="col-12 text-white">
                      <!-- buttons -->
                      <router-link
                        :to="{ name: 'contactUs' }"
                        class="btn bg-parrot px-3 my-2 py-2 me-2"
                        >Get Started</router-link
                      >
                      <a href="/whatsapp" class="btn bg-parrot px-3 my-2 py-2"
                        >Schedule a Consultation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="bottom mt-5 p-sm-5 px-3 pt-3 bg-body-tertiary rounded-5">
            <div class="col-12">
              <div class="head pb-3">
                <div class="col-12">
                  <h3 class="m-0 fw-bold fs-3 text-center text-parrot">
                    Services
                  </h3>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">
                        {{ data.serviceTitle1 }}
                      </h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail1 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle2 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail2 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle3 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail3 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- box -->
              <div class="box pb-4">
                <div class="col-12">
                  <!-- Head -->
                  <div class="head pb-3">
                    <div class="col-12">
                      <h5 class="m-0 fs-5 fw-bold">{{ data.serviceTitle4 }}</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        {{ data.serviceDetail4 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: App
</route>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { MobApp } from "../enums/productsEnum";
import { WebDesign } from "../enums/productsEnum";
import { WebApp } from "../enums/productsEnum";
import { Api } from "../enums/productsEnum";
import { Automation } from "../enums/productsEnum";
const route = useRoute();

const data = ref({
  mobileAppDev: "/images/mobileAppDev.jpg",
  webDesignDev: "/images/webDesignDev.jpg",
  webAppDev: "/images/webAppDev.jpg",
  apiDev: "/images/api.jpg",
  chatBotDev: "/images/chatBot.jpg",
  title: "",
  smDetail: "",
  serviceTitle1: "",
  serviceDetail1: "",
  serviceTitle2: "",
  serviceDetail2: "",
  serviceTitle3: "",
  serviceDetail3: "",
  serviceTitle4: "",
  serviceDetail4: "",
});
const product = route.params.product;
const key = route.params.key;
if (product === "mobileAppDev") {
  const mobAppKey = MobApp[key];
  data.value.title = mobAppKey.title;
  data.value.smDetail = mobAppKey.smDetail;
  data.value.serviceTitle1 = mobAppKey.services.one.title;
  data.value.serviceDetail1 = mobAppKey.services.one.smDetail;
  data.value.serviceTitle2 = mobAppKey.services.two.title;
  data.value.serviceDetail2 = mobAppKey.services.two.smDetail;
  data.value.serviceTitle3 = mobAppKey.services.three.title;
  data.value.serviceDetail3 = mobAppKey.services.three.smDetail;
  data.value.serviceTitle4 = mobAppKey.services.four.title;
  data.value.serviceDetail4 = mobAppKey.services.four.smDetail;
} else if (product === "websiteDesignDev") {
  const WebDesignKey = WebDesign[key];
  data.value.title = WebDesignKey.title;
  data.value.smDetail = WebDesignKey.smDetail;
  data.value.serviceTitle1 = WebDesignKey.services.one.title;
  data.value.serviceDetail1 = WebDesignKey.services.one.smDetail;
  data.value.serviceTitle2 = WebDesignKey.services.two.title;
  data.value.serviceDetail2 = WebDesignKey.services.two.smDetail;
  data.value.serviceTitle3 = WebDesignKey.services.three.title;
  data.value.serviceDetail3 = WebDesignKey.services.three.smDetail;
  data.value.serviceTitle4 = WebDesignKey.services.four.title;
  data.value.serviceDetail4 = WebDesignKey.services.four.smDetail;
} else if (product === "webAppDev") {
  const WebAppKey = WebApp[key];
  data.value.title = WebAppKey.title;
  data.value.smDetail = WebAppKey.smDetail;
  data.value.serviceTitle1 = WebAppKey.services.one.title;
  data.value.serviceDetail1 = WebAppKey.services.one.smDetail;
  data.value.serviceTitle2 = WebAppKey.services.two.title;
  data.value.serviceDetail2 = WebAppKey.services.two.smDetail;
  data.value.serviceTitle3 = WebAppKey.services.three.title;
  data.value.serviceDetail3 = WebAppKey.services.three.smDetail;
  data.value.serviceTitle4 = WebAppKey.services.four.title;
  data.value.serviceDetail4 = WebAppKey.services.four.smDetail;
} else if (product === "apiDev") {
  const ApiKey = Api[key];
  data.value.title = ApiKey.title;
  data.value.smDetail = ApiKey.smDetail;
  data.value.serviceTitle1 = ApiKey.services.one.title;
  data.value.serviceDetail1 = ApiKey.services.one.smDetail;
  data.value.serviceTitle2 = ApiKey.services.two.title;
  data.value.serviceDetail2 = ApiKey.services.two.smDetail;
  data.value.serviceTitle3 = ApiKey.services.three.title;
  data.value.serviceDetail3 = ApiKey.services.three.smDetail;
  data.value.serviceTitle4 = ApiKey.services.four.title;
  data.value.serviceDetail4 = ApiKey.services.four.smDetail;
} else if (product === "automationTool") {
  const AutomationKey = Automation[key];
  data.value.title = AutomationKey.title;
  data.value.smDetail = AutomationKey.smDetail;
  data.value.serviceTitle1 = AutomationKey.services.one.title;
  data.value.serviceDetail1 = AutomationKey.services.one.smDetail;
  data.value.serviceTitle2 = AutomationKey.services.two.title;
  data.value.serviceDetail2 = AutomationKey.services.two.smDetail;
  data.value.serviceTitle3 = AutomationKey.services.three.title;
  data.value.serviceDetail3 = AutomationKey.services.three.smDetail;
  data.value.serviceTitle4 = AutomationKey.services.four.title;
  data.value.serviceDetail4 = AutomationKey.services.four.smDetail;
}

console.log(product + " details");
</script>
