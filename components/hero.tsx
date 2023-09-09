"use client"
import { useState, useEffect } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
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

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);

    const openModal = (flower: any) => {
        setSelectedFlower(flower);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col items-center bg-pink-50 border-b px-4 p-5">
            <h1 className="font-semibold">GIFTING SALE!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {FlowerInformation.map((flower, index) => (
                    <div key={index} className="p-2">
                        <Dialog>
                            <DialogTrigger asChild>

                                <div className="cursor-pointer text-gray-700 hover:bg-white" onClick={() => openModal(flower)}>
                                    <Image
                                        className="object-contain rounded-md"
                                        key={index}
                                        width={200}
                                        height={200}
                                        alt={flower.name}
                                        src={flower.imageSrc}
                                    />
                                    <div className="text-center mt-2">
                                        <p>{flower.name}</p>
                                        <p>Price: {flower.price}</p>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>{flower.name}</DialogTitle>
                                    <DialogDescription>{flower.description}</DialogDescription>
                                </DialogHeader>
                                <div className="text-center py-4">
                                    <div
                                        className="modal-image-container"
                                        style={{ maxWidth: "100%", maxHeight: "400px" }} // Adjust max width and max height as needed
                                    >
                                        <Image
                                            className="object-contain"
                                            width={500}
                                            height={500}
                                            alt={flower.name}
                                            src={flower.imageSrc}
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-4 py-4">
                                    <div className="">
                                        <Label htmlFor="name" className="flex flex-col">
                                            <p className='text-lg font-semibold'>Flower name: {flower.name}</p>
                                            <p className='text-sm'>Price: {flower.price}</p>
                                        </Label>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                ))}
            </div>
            {isModalOpen && selectedFlower && (
                <Dialog>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>{selectedFlower.name}</DialogTitle>
                            <DialogDescription>{selectedFlower.description}</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    {selectedFlower.name}
                                </Label>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Price: {selectedFlower.price}
                                </Label>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Image
                                    className="object-contain"
                                    width={500}
                                    height={500}
                                    alt={selectedFlower.name}
                                    src={selectedFlower.imageSrc}
                                />
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default HeroSection;
