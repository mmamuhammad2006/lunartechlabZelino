<template>
  <div class="container-fluid py-5">
    <div class="container m-auto py-5">
      <!-- Mobile App Dev -->
      <div v-if="product === 'mobileAppDev'" class="content">
        <div class="col-12 p-5 shadow bg-white rounded-5">
          <!-- top -->
          <div class="top bg-body-tertiary rounded-5">
            <div class="col-12 d-flex p-5">
              <!-- left img -->
              <div class="col-6">
                <div class="col-12">
                  <img
                    class="h-350 w-100 rounded-5"
                    :src="data.mobileAppDev"
                    alt=""
                  />
                </div>
              </div>
              <!-- right content -->
              <div class="content col-6 ps-5 d-flex align-items-center">
                <div class="col-12">
                  <div class="head pb-3">
                    <div class="col-12">
                      <h3 class="m-0 fw-bold fs-4 text-parrot">
                        Ecommerce website for startup
                      </h3>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">3 Page(Basic) Website</p>
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
                      <a href="/contact-us" class="btn bg-parrot px-3 py-2 me-2"
                        >Get Started</a
                      >
                      <a href="/whatsapp" class="btn bg-parrot px-3 py-2"
                        >Schedule a Consultation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="bottom mt-5 p-5 bg-body-tertiary rounded-5">
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
                      <h5 class="m-0 fs-5 fw-bold">Push Notifications</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Engage users with timely updates by sending personalized
                        messages about new features, promotions, or reminders.
                        This helps to retain user interest and encourages
                        regular interaction with the app.
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
                      <h5 class="m-0 fs-5 fw-bold">In-App Purchases</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Enable users to buy products or services seamlessly
                        within the app, enhancing the user experience. This
                        feature can support one-time purchases, subscriptions,
                        or consumable items, making monetization
                        straightforward.
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
                      <h5 class="m-0 fs-5 fw-bold">Location Services</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Provide personalized experiences based on user location
                        by using GPS and geolocation technologies. This can
                        enable features such as local recommendations,
                        location-based offers, and enhanced navigation
                        capabilities.
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
                      <h5 class="m-0 fs-5 fw-bold">Analytics Integration</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Track user behavior and app performance to make
                        data-driven decisions. Integrating tools like Google
                        Analytics helps developers understand user interactions,
                        identify drop-off points, and optimize the app for
                        better engagement.
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
      <div v-if="product === 'websiteDesignDev'" class="content">
        <div class="col-12 p-5 shadow bg-white rounded-5">
          <!-- top -->
          <div class="top bg-body-tertiary rounded-5">
            <div class="col-12 d-flex p-5">
              <!-- left img -->
              <div class="col-6">
                <div class="col-12">
                  <img
                    class="h-350 w-100 rounded-5"
                    :src="data.webDesignDev"
                    alt=""
                  />
                </div>
              </div>
              <!-- right content -->
              <div class="content col-6 ps-5 d-flex align-items-center">
                <div class="col-12">
                  <div class="head pb-3">
                    <div class="col-12">
                      <h3 class="m-0 fw-bold fs-4 text-parrot">
                        Ecommerce website for startup
                      </h3>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">3 Page(Basic) Website</p>
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
                      <a href="/contact-us" class="btn bg-parrot px-3 py-2 me-2"
                        >Get Started</a
                      >
                      <a href="/whatsapp" class="btn bg-parrot px-3 py-2"
                        >Schedule a Consultation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="bottom mt-5 p-5 bg-body-tertiary rounded-5">
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
                      <h5 class="m-0 fs-5 fw-bold">User-Friendly Navigation</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Design intuitive menus and layouts that allow users to
                        find information quickly and efficiently. This includes
                        using breadcrumb navigation, clear labeling, and a
                        responsive design that adapts to different devices.
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
                        Contact Forms and Chat Integration
                      </h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Enable easy communication with customers through
                        accessible contact forms and live chat features. This
                        ensures that inquiries can be handled promptly,
                        improving customer satisfaction and fostering trust.
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
                        Blog and Resource Section
                      </h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Provide valuable content to engage users and improve SEO
                        through regularly updated blog posts and resource
                        materials. This can establish authority in the industry
                        and drive organic traffic to the site.
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
                      <h5 class="m-0 fs-5 fw-bold">Analytics Dashboard</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Integrate tools like Google Analytics to track website
                        performance, user demographics, and behavior. This data
                        helps in making informed decisions for marketing
                        strategies and website improvements.
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
      <div v-if="product === 'webAppDev'" class="content">
        <div class="col-12 p-5 shadow bg-white rounded-5">
          <!-- top -->
          <div class="top bg-body-tertiary rounded-5">
            <div class="col-12 d-flex p-5">
              <!-- left img -->
              <div class="col-6">
                <div class="col-12">
                  <img
                    class="h-350 w-100 rounded-5"
                    :src="data.webAppDev"
                    alt=""
                  />
                </div>
              </div>
              <!-- right content -->
              <div class="content col-6 ps-5 d-flex align-items-center">
                <div class="col-12">
                  <div class="head pb-3">
                    <div class="col-12">
                      <h3 class="m-0 fw-bold fs-4 text-parrot">
                        Ecommerce website for startup
                      </h3>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">3 Page(Basic) Website</p>
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
                      <a href="/contact-us" class="btn bg-parrot px-3 py-2 me-2"
                        >Get Started</a
                      >
                      <a href="/whatsapp" class="btn bg-parrot px-3 py-2"
                        >Schedule a Consultation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="bottom mt-5 p-5 bg-body-tertiary rounded-5">
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
                        User Authentication and Authorization
                      </h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Secure user access with robust login systems that can
                        include multi-factor authentication. This protects
                        sensitive data and ensures that only authorized users
                        can access specific features or information.
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
                      <h5 class="m-0 fs-5 fw-bold">Real-Time Collaboration</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Enable users to work together in real time with features
                        like shared document editing and instant messaging. This
                        enhances teamwork and productivity, especially for
                        remote or distributed teams.
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
                      <h5 class="m-0 fs-5 fw-bold">API Integration</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Connect with external services and databases to extend
                        functionality and streamline operations. This allows the
                        web app to leverage third-party services for payment
                        processing, social media integration, or data
                        management.
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
                      <h5 class="m-0 fs-5 fw-bold">Offline Access</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Allow users to work without an internet connection by
                        implementing caching mechanisms. Changes made offline
                        can sync automatically when the connection is restored,
                        ensuring uninterrupted workflow.
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
      <div v-if="product === 'apiDev'" class="content">
        <div class="col-12 p-5 shadow bg-white rounded-5">
          <!-- top -->
          <div class="top bg-body-tertiary rounded-5">
            <div class="col-12 d-flex p-5">
              <!-- left img -->
              <div class="col-6">
                <div class="col-12">
                  <img
                    class="h-350 w-100 rounded-5"
                    :src="data.apiDev"
                    alt=""
                  />
                </div>
              </div>
              <!-- right content -->
              <div class="content col-6 ps-5 d-flex align-items-center">
                <div class="col-12">
                  <div class="head pb-3">
                    <div class="col-12">
                      <h3 class="m-0 fw-bold fs-4 text-parrot">
                        Ecommerce website for startup
                      </h3>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">3 Page(Basic) Website</p>
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
                      <a href="/contact-us" class="btn bg-parrot px-3 py-2 me-2"
                        >Get Started</a
                      >
                      <a href="/whatsapp" class="btn bg-parrot px-3 py-2"
                        >Schedule a Consultation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="bottom mt-5 p-5 bg-body-tertiary rounded-5">
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
                      <h5 class="m-0 fs-5 fw-bold">Versioning</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Manage multiple versions of the API to ensure backward
                        compatibility. This allows existing applications to
                        continue functioning without disruption while new
                        features are introduced.
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
                      <h5 class="m-0 fs-5 fw-bold">Rate Limiting</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Protect the API from excessive usage by setting limits
                        on the number of requests per user or IP address. This
                        helps maintain performance and prevents abuse of
                        resources.
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
                      <h5 class="m-0 fs-5 fw-bold">Error Handling</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Provide meaningful error messages and status codes to
                        help developers understand issues quickly. A
                        well-documented error handling process enhances the
                        developer experience and aids in troubleshooting.
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
                      <h5 class="m-0 fs-5 fw-bold">Security Features</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Use authentication methods such as OAuth and encryption
                        protocols to secure data. This ensures that sensitive
                        information is protected during transmission and that
                        only authorized users can access the API.
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
      <div v-if="product === 'automationTool'" class="content">
        <div class="col-12 p-5 shadow bg-white rounded-5">
          <!-- top -->
          <div class="top bg-body-tertiary rounded-5">
            <div class="col-12 d-flex p-5">
              <!-- left img -->
              <div class="col-6">
                <div class="col-12">
                  <img
                    class="h-350 w-100 rounded-5"
                    :src="data.chatBotDev"
                    alt=""
                  />
                </div>
              </div>
              <!-- right content -->
              <div class="content col-6 ps-5 d-flex align-items-center">
                <div class="col-12">
                  <div class="head pb-3">
                    <div class="col-12">
                      <h3 class="m-0 fw-bold fs-4 text-parrot">
                        Ecommerce website for startup
                      </h3>
                    </div>
                  </div>
                  <div class="price pb-3">
                    <div class="col-12">
                      <p class="m-0">3 Page(Basic) Website</p>
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
                      <a href="/contact-us" class="btn bg-parrot px-3 py-2 me-2"
                        >Get Started</a
                      >
                      <a href="/whatsapp" class="btn bg-parrot px-3 py-2"
                        >Schedule a Consultation</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bottom -->
          <div class="bottom mt-5 p-5 bg-body-tertiary rounded-5">
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
                        Natural Language Processing (NLP)
                      </h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Allow chatbots to understand and respond to user queries
                        in a conversational manner. NLP capabilities enable the
                        bot to interpret context, sentiment, and intent,
                        providing a more human-like interaction.
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
                      <h5 class="m-0 fs-5 fw-bold">Multi-Platform Support</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Deploy chatbots on various platforms such as websites,
                        social media, and messaging apps. This ensures that
                        users can access support and services through their
                        preferred channels, enhancing reach and engagement.
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
                      <h5 class="m-0 fs-5 fw-bold">User Personalization:</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Customize interactions based on user preferences,
                        history, and behavior. Personalized experiences can
                        improve user satisfaction and increase the likelihood of
                        repeat interactions with the chatbot.
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
                      <h5 class="m-0 fs-5 fw-bold">24/7 Availability</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        Provide constant support without human intervention,
                        allowing users to get assistance any time of day. This
                        feature improves customer service efficiency and ensures
                        that users receive immediate help whenever needed.
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
                        Web Application Development
                      </h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        I specialize in developing complex web applications,
                        including SaaS platforms, dashboards, and other
                        interactive tools. My approach involves understanding
                        the unique requirements of each client to create
                        solutions that enhance operational efficiency and user
                        engagement. I leverage modern frameworks and
                        technologies to build robust applications that are
                        scalable, secure, and user-friendly.
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
                      <h5 class="m-0 fs-5 fw-bold">SEO Optimization</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        I offer comprehensive search engine optimization
                        services to ensure that your websites rank well on
                        Google and other search engines. By implementing on-page
                        and off-page SEO strategies, optimizing site structure,
                        and creating quality content, I help improve your
                        visibility and drive organic traffic. My goal is to
                        enhance your website's search performance and ensure you
                        reach your target audience effectively.
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
                      <h5 class="m-0 fs-5 fw-bold">Performance and Security</h5>
                    </div>
                  </div>
                  <div class="text">
                    <div class="col-12">
                      <p class="m-0">
                        I emphasize the importance of fast, secure, and reliable
                        websites. By implementing best practices in performance
                        optimization and robust security measures, I ensure that
                        your site runs smoothly and protects user data. This
                        includes techniques such as caching, image optimization,
                        secure authentication, and regular security audits to
                        safeguard against threats and vulnerabilities.
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
const route = useRoute();

const data = ref({
  mobileAppDev: "/images/mobileAppDev.jpg",
  webDesignDev: "/images/webDesignDev.jpg",
  webAppDev: "/images/webAppDev.jpg",
  apiDev: "/images/api.jpg",
  chatBotDev: "/images/chatBot.jpg",
});
const product = route.params.product;
console.log(product + " details");
</script>
