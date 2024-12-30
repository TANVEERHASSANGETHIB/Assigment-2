import React from 'react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>TESTIMONIALS</h2>
        <p>
          What Are They <span className="description-title">Saying About Us</span>
        </p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <script type="application/json" className="swiper-config">
            {JSON.stringify({
              loop: true,
              speed: 600,
              autoplay: {
                delay: 5000,
              },
              slidesPerView: 3,
              spaceBetween: 20,
              pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
              },
            })}
          </script>
          <div className="swiper-wrapper d-flex">
            {/* Testimonial 1 */}
            <div className="swiper-slide flex-shrink-0">
              <div className="testimonial-item">
                <div className="row gy-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
                          suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
                          et. Maecen aliquam, risus at semper.
                        </span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="img-fluid testimonial-img"
                      alt="Saul Goodman"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="swiper-slide flex-shrink-0">
              <div className="testimonial-item">
                <div className="row gy-4 align-items-center">
                  <div className="col-lg-6">
                    <div className="testimonial-content">
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>
                          Export tempor illum tamen malis malis eram quae irure esse labore quem
                          cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua
                          noster fugiat irure amet legam anim culpa.
                        </span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-center">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="img-fluid testimonial-img"
                      alt="Sara Wilsson"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Add more testimonials similarly */}
          </div>
        </div>
      </div>
    </section>
  );
};
