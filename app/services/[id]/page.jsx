"use client"
import Nav from '@/components/Nav';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer';

const Service = () => {
    const { id } = useParams();
    const [subService, setSubService] = useState({
        bookings: [],
    });

    const getService = async () => {
        try {
            const res = await fetch(`/api/services/${id}`);
            const data = await res.json();
            console.log(data);
            setSubService(data)
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getService();
    }, []);
    return (
        <div>
            <Nav />
            <div>{subService.name}</div>
            <Footer />
        </div>
    )
}

export default Service