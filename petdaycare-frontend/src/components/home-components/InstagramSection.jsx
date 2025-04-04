import React from "react";
import Instagram1Image from "../../assets/instagram-1.jpg";
import Instagram2Image from "../../assets/instagram-2.jpg";
import Instagram3Image from "../../assets/instagram-3.jpg";
import Instagram4Image from "../../assets/instagram-4.jpg";

const InstagramSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-6 py-2 rounded-full">
          FOLLOW
        </p>
        <h2 className="text-4xl font-semibold text-purple-900 mt-2">
          Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <img
            src={Instagram1Image}
            alt="instagram"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src={Instagram2Image}
            alt="instagram"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src={Instagram3Image}
            alt="instagram"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src={Instagram4Image}
            alt="instagram"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
