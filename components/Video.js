import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const VideoCarousel = () => {
    const videos = [
        "/Video/video1.mp4",
        "/Video/video2.mp4",
        "/Video/video3.mp4",
        "/Video/video4.mp4",
        "/Video/video5.mp4",
        "/Video/video6.mp4"
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const videoChunks = chunkArray(videos, isMobile ? 1 : 3);

    return (
        <div className="carousel-container">
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                interval={8000}
                transitionTime={500}
            >
                {videoChunks.map((chunk, index) => (
                    <div key={index} className="video-group">
                        {chunk.map((video, idx) => (
                            <div key={idx} className="video-wrapper">
                                <video loop muted autoPlay className="video">
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>
            <style jsx>{`
                .carousel-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .video-group {
                    display: flex;
                    justify-content: space-between;
                }
                .video-wrapper {
                    flex: 1;
                    margin: 0 10px;
                }
                .video {
                    width: 100%;
                    height: auto;
                    border-radius: 10px;
                }
                @media (max-width: 768px) {
                    .video-group {
                        flex-direction: column;
                    }
                    .video-wrapper {
                        margin: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default VideoCarousel;
