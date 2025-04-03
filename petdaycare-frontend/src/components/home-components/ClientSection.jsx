import React from "react";
import Client1Image from "../../assets/client-1.jpg";
import Client2Image from "../../assets/client-2.jpg";
import Client3Image from "../../assets/client-3.jpg";

const ClientSection = () => {
  return (
    <section className="py-16 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-lg font-medium">Testimonials</p>
        <h2 className="text-4xl font-semibold text-purple-900 mt-2">
          What people say about us
        </h2>
        <div className="mt-12">
          {/* Swiper Container */}
          <div className="swiper">
            <div className="swiper-wrapper">
              {/* Slide 1 */}
              <div className="swiper-slide">
                <div className="bg-white p-6 rounded-lg shadow-md text-left">
                  <div className="flex items-center gap-4">
                    <img
                      src={Client1Image}
                      alt="client"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-purple-900">
                        Sarah Johnson
                      </h4>
                      <h5 className="text-gray-500">Graphic Designer</h5>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                    The care my dog received at Pet Paradise was exceptional.
                    The vets were attentive and cared about my dog's well-being.
                  </p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide">
                <div className="bg-white p-6 rounded-lg shadow-md text-left">
                  <div className="flex items-center gap-4">
                    <img
                      src={Client2Image}
                      alt="client"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-purple-900">
                        Michael Adams
                      </h4>
                      <h5 className="text-gray-500">Software Engineer</h5>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Pet Paradise saved my cat during an emergency! Their quick
                    response and expertise made all the difference.
                  </p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide">
                <div className="bg-white p-6 rounded-lg shadow-md text-left">
                  <div className="flex items-center gap-4">
                    <img
                      src={Client3Image}
                      alt="client"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-purple-900">
                        Emily Martinez
                      </h4>
                      <h5 className="text-gray-500">Teacher</h5>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                    I trust Pet Paradise with all my pets. Their team is
                    professional, and they always go the extra mile for their
                    patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
