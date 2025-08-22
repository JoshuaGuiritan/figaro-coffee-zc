
function App() {
  

  return (
    <>
      <nav class="navbar bg-primary text-secondary fixed-top">
        <div class="container-fluid">
          <img class="figaro-logo-size ms-2" src="./Images/figaro-logo.png" />
          <i class="bi bi-justify text-secondary fs-2 me-2"></i>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg bg-primary text-secondary">
        <div class="container-fluid">
          <div class="figaro-logo-size" />
        </div>
      </nav>
      <div class="container-fluid figaro-picture-div d-flex justify-content-center align-items-md-center ps-sm-5 align-items-start flex-column border-bottom border-3 border-primary mb-5">
        <h1 class="text-white display-5 fw-semibold d-xxl-block d-none">Celebrating coffee and culture, the Filipino way.</h1>
        <h1 class="text-white display-6 fw-semibold d-xxl-none d-xl-block d-none">Celebrating coffee and culture, the Filipino way.</h1>
        <h1 class="text-white fs-2 fw-semibold d-xl-none d-md-block d-none">Celebrating coffee and culture, the Filipino way.</h1>
        <h1 class="text-white fs-2 fw-semibold d-md-none d-sm-block">Celebrating coffee and culture,<br/> the Filipino way.</h1>
        <h3 class="text-primary fs-2 fw-light d-xxl-block d-none">Your Filipino café.</h3>
        <h3 class="text-primary fs-3 fw-light d-xxl-none d-xl-block d-none">Your Filipino café.</h3>
        <h3 class="text-primary fs-4 fw-light d-xl-none d-md-block d-none">Your Filipino café.</h3>
        <h3 class="text-primary fs-5 fw-light d-md-none d-sm-block">Your Filipino café.</h3>
        <a href="https://figarocoffee.com/" target="_blank">
          <button class="btn btn-outline-primary mt-4 fs-6 px-5 py-2 rounded-pill shadow-sm fw-semibold">Click here for more</button>
        </a>
      </div>
      <div class="container-fluid mt-5">
        <div class="row gap-5 justify-content-center text-white">
          <div class="col-xxl-3 col-xl-4 col-lg-7 col-md-8 col-sm-9">
            <div class="container-fluid figaro-picture2-div rounded rounded-sm shadow-sm"></div>
            <h4 class="mt-3 fs-3 text-primary text-center fw-semibold">Explore Figaro Zamboanga</h4>
            <p class="text-white lead text-center fs-6">Discover the rich flavors and cozy ambiance of Figaro Coffee in Zamboanga.</p>
          </div>

          <div class="col-xxl-3 col-xl-4 col-lg-7 col-md-8 col-sm-9">
            <div class="container-fluid figaro-picture3-div rounded rounded-sm shadow-sm"></div>
            <h4 class="mt-3 fs-3 text-primary text-center fw-semibold">Inside Figaro Zamboanga</h4>
            <p class="text-white lead text-center fs-6">Step inside Figaro Coffee Zamboanga and savor every sip in a cozy, inviting atmosphere.</p>
          </div>

          <div class="col-xxl-3 col-xl-4 col-lg-7 col-md-8 col-sm-9">
            <div class="container-fluid bg-light rounded rounded-sm shadow-sm p-4">
              <h2 class="text-secondary fs-1">About</h2>
              <p class="text-secondary fs-6">Figaro Coffee Company is a Philippine-based café chain known for delivering a premium coffee experience while highlighting Filipino culture and flavors. 
                Since its founding in 1993, Figaro has grown to become one of the leading Filipino café brands, offering freshly brewed coffee, pastries, and light meals 
                in a cozy and inviting atmosphere.
              </p>
              <button class="btn btn-primary mb-2 ms-3 text-secondary mt-2 btn-lg fs-4 py-1 fw-semibold rounded rounded-pill px-5">Apply Now</button>
            </div>
          </div>
          <div class="col-xxl-3 col-xl-4 col-lg-7 col-md-8 col-sm-9">
            <div class="container-fluid figaro-picture4-div rounded rounded-sm shadow-sm"></div>
            <h4 class="mt-3 fs-3 text-primary text-center fw-semibold">Explore Menu</h4>
            <p class="text-white lead text-center fs-6">Discover a world of flavors with Figaro's Explore Menu.</p>
          </div>

          <div class="col-xxl-3 col-xl-4 col-lg-7 col-md-8 col-sm-9">
            <div class="ratio ratio-16x9 figaro-video-div">
                <iframe 
                  src="https://www.youtube.com/embed/bFWOm2x95zs" 
                  title="YouTube video" 
                  allowfullscreen>
                </iframe>
            </div>

            <h4 class="mt-3 fs-3 text-primary text-center fw-semibold">Youtube - Figaro Zamboanga</h4>
            <p class="text-white lead text-center fs-6">Watch the official Figaro Zamboanga video on YouTube.</p>
          </div>
          <div class="col-xxl-3 col-xl-4 col-lg-7 col-md-8 col-sm-9">
            <div class="container-fluid bg-info rounded rounded-sm shadow-sm px-5 py-4">
              <h3 class="fs-2 text-center mt-2 fw-semibold mb-4">Customer Feedback</h3>
              <h4 class="fs-6 mt-3 lead">Customer Name</h4>
              <div class="form-floating mb-2">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Input here</label>
              </div>
              <h4 class="fs-6 mt-3 lead">Comments</h4>
              <div class="form-floating">
                <textarea class="form-control py-5" placeholder="Leave a comment here" id="floatingTextarea2" />
                <label for="floatingTextarea2">Input here</label>
              </div>
              <button class="btn btn-primary px-5 fs-4 ms-4 mt-4 rounded-pill fw-semibold">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5 px-5">
        <div class="container-fluid border border-primary"></div>
      </div>
      <div class="container-fluid mt-5 text-primary">
        <div class="row justify-content-center">
          <div class="col-3">
            <div class="container-fluid d-flex justify-content-center align-items-center figaro-footer">
              <div>
                <img src="./Images/figaro-group-logo.jpg" class="figaro-group-logo-size"/>
              </div>
            </div>
          </div>
          <div class="col-1"></div>
          <div class="col-2">
            <div class="container-fluid d-flex justify-content-center flex-column figaro-footer">
              <div>
                <h6 class="fs-5">Product</h6>
                <h6 class="fs-5">Features</h6>
                <h6 class="fs-5">Pricing</h6>
                <h6 class="fs-5">Integrations</h6>
                <h6 class="fs-5">Enterprises</h6>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="container-fluid d-flex justify-content-center flex-column figaro-footer">
              <div>
                <h6 class="fs-5">Company</h6>
                <h6 class="fs-5">About Us</h6>
                <h6 class="fs-5">Careers</h6>
                <h6 class="fs-5">Blog</h6>
                <h6 class="fs-5">Contact</h6>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="container-fluid d-flex justify-content-center flex-column figaro-footer">
              <div>
                <h6 class="fs-5">Support</h6>
                <h6 class="fs-5">Help Center</h6>
                <h6 class="fs-5">Documentation</h6>
                <h6 class="fs-5">API Status</h6>
                <h6 class="fs-5">Security</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-4"></div>
          <div class="col-6">
            <div class="container mb-5">
              <i class="bi bi-facebook text-primary fs-1 me-3"></i>
              <i class="bi bi-instagram text-primary fs-1 me-3"></i>
              <i class="bi bi-threads-fill text-primary fs-1 me-3"></i>
              <i class="bi bi-twitter-x text-primary fs-1 me-3"></i>
              <i class="bi bi-youtube text-primary fs-1 me-3"></i>
              <i class="bi bi-tiktok text-primary fs-1 me-3"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-info text-white pt-2 d-flex justify-content-center align-items-center mt-4">
        <p class="lead fs-6">Copyright © 2025 Figaro Coffee Company. All rights reserved.</p>
      </div>
    </>
  )
}

export default App;
