import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full max-w-3xl mx-auto"
          >
            <SwiperSlide>
              <div className="bg-white p-8 rounded-xl shadow-lg text-left">
                <div className="flex items-center gap-4">
                  <img
                    src={Client1Image}
                    alt="Sarah Johnson"
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-purple-900">
                      Sarah Johnson
                    </h4>
                    <h5 className="text-sm text-gray-500">Graphic Designer</h5>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-base leading-relaxed">
                  The care my dog received at Pet Paradise was exceptional. The
                  vets were attentive and cared about my dog's well-being.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-8 rounded-xl shadow-lg text-left">
                <div className="flex items-center gap-4">
                  <img
                    src={Client2Image}
                    alt="Michael Adams"
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-purple-900">
                      Michael Adams
                    </h4>
                    <h5 className="text-sm text-gray-500">Software Engineer</h5>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-base leading-relaxed">
                  Pet Paradise saved my cat during an emergency! Their quick
                  response and expertise made all the difference.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-8 rounded-xl shadow-lg text-left">
                <div className="flex items-center gap-4">
                  <img
                    src={Client3Image}
                    alt="Emily Martinez"
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-purple-900">
                      Emily Martinez
                    </h4>
                    <h5 className="text-sm text-gray-500">Teacher</h5>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 text-base leading-relaxed">
                  I trust Pet Paradise with all my pets. Their team is
                  professional, and they always go the extra mile for their
                  patients.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
