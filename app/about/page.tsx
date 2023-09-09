import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center mb-8">About Us</h2>

        {/* Introduction */}
        <div className="md:flex justify-between items-center">
          {/* Text Content */}
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700">
              Welcome to Bloom Resource PH, your source for high-quality dried
              flowers and botanicals. We are passionate about bringing the
              beauty and elegance of dried flowers into your life.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Our mission is to provide you with a wide selection of dried
              flowers that can be used to create stunning arrangements, gifts,
              and décor for any occasion.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-6 md:mt-0 px-10">
            <Image
              src="/images/rose.jpg"
              alt="About Us"
              width={200}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <p className="text-lg text-gray-700">
            - Quality: We source and preserve the finest dried flowers to
            ensure the highest quality products.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            - Creativity: We inspire creativity and offer a variety of dried
            flowers for your unique projects.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            - Sustainability: We are committed to sustainable and eco-friendly
            practices in all aspects of our business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
