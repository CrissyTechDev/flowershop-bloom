"use client"


import Image from "next/image";



type Flower = {
    name: string;
    description: string;
    imageSrc: string;
    price: string;
}


const FlowerInformation: Flower[] = [
    {
        name: 'Bighani',
        description: 'Their stems are usually prickly and their glossy, green leaves have toothed edges. Rose flowers vary in size and shape.',
        imageSrc: '/images/rose.jpg',
        price: '499 PHP',
    },
    {
        name: 'Ocean',
        description: 'Their stems are usually prickly and their glossy, green leaves have toothed edges. Rose flowers vary in size and shape.',
        imageSrc: '/images/ocean.jpg',
        price: '499 PHP',
    },
    {
        name: 'Tangi',
        description: 'Their stems are usually prickly and their glossy, green leaves have toothed edges. Rose flowers vary in size and shape.',
        imageSrc: '/images/tangi.jpg',
        price: '499 PHP',
    },
    {
        name: 'Bloom',
        description: 'Their stems are usually prickly and their glossy, green leaves have toothed edges. Rose flowers vary in size and shape.',
        imageSrc: '/images/bloom.jpg',
        price: '499 PHP',
    },
    {
        name: 'Antigo',
        description: 'Their stems are usually prickly and their glossy, green leaves have toothed edges. Rose flowers vary in size and shape.',
        imageSrc: '/images/antigo.jpg',
        price: '399 PHP',
    },
    {
        name: 'Dalisay',
        description: 'Their stems are usually prickly and their glossy, green leaves have toothed edges. Rose flowers vary in size and shape.',
        imageSrc: '/images/dalisay.jpg',
        price: '499 PHP',
    },
    {
        name: 'Ligaya',
        description: 'Their stems are usually prickly and their glossy, green leaves have toothed edges. Rose flowers vary in size and shape.',
        imageSrc: '/images/ligaya.jpg',
        price: '999 PHP',
    },
    {
        name: 'Bloom Mothers day special',
        description: 'Their stems are usually prickly and their glossy, green leaves have toothed edges. Rose flowers vary in size and shape.',
        imageSrc: '/images/bloom1.jpg',
        price: '999 PHP',
    },
    



];

const FlowerSection = () => {
    return (
      <div className="bg-pink-50 p-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Most Picked Flowers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {FlowerInformation.map((flower, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={flower.imageSrc}
                  alt={flower.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-md"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{flower.name}</h3>
                <p className="text-sm text-gray-600">{flower.description}</p>
                <p className="text-sm mt-2">Price: {flower.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FlowerSection;