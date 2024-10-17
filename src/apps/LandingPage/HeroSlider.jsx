"use client";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import Education from "../../assets/Hero/Education.webp";
import Placement from "../../assets/Hero/Placements.webp";
import Events from "../../assets/Hero/Events.webp";
import Labs from "../../assets/Hero/Labs.webp";
import Sports from "../../assets/Hero/Sports.webp";
import Auditorium from "../../assets/Hero/Auditorium.webp";
import BoxReveal from "../../components/ui/box-reveal";
import WordPullUp from "../../components/ui/word-pull-up";
import ShinyButton from "../../components/ui/shiny-button";
import WordRotate from "@/components/ui/word-rotate";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

const HeroSlider = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const imgSlider = [
    {
      image: Events,
      tagline: "Shaping Bright Futures Together",
      highlight:
        "World-class curriculum, experienced faculty, and state-of-the-art classrooms.",
      highlights: [
        "World-class curriculum",
        "Experienced faculty",
        "State-of-the-art classrooms",
      ],
    },
    {
      image: Education,
      tagline: "Celebrate Every Special Moment",
      highlight: "Cultural festivals, workshops, and leadership opportunities.",
      highlights: [
        "Cultural festivals",
        "Workshops",
        "Leadership opportunities",
      ],
    },
    {
      image: Sports,
      tagline: "Fuel Your Passion Daily",
      highlight:
        "Top-notch facilities, diverse sports options, and vibrant athletic culture.",
      highlights: [
        "Top-notch facilities",
        "Diverse sports options",
        "Vibrant athletic culture",
      ],
    },
    {
      image: Labs,
      tagline: "Innovate, Learn, Discover Together ",
      highlight:
        "Cutting-edge labs for practical learning, research, and discovery.",
      highlights: [
        "Cutting-edge labs",
        "Practical learning",
        "Research and discovery",
      ],
    },
    {
      image: Auditorium,
      tagline: "Inspire, Engage, Create Together",
      highlight:
        "Modern auditorium for events, seminars, and cultural programs.",
      highlights: [
        "Modern auditorium",
        "Events and seminars",
        "Cultural programs",
      ],
    },
    {
      image: Placement,
      tagline: "Launch Your Career Successfully",
      highlight: "Strong industry connections and 100% placement assistance.",
      highlights: [
        "Strong industry connections",
        "100% placement assistance",
        "Career launch support",
      ],
    },
  ];

  // Initialize Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    draggable: true,
    loop: true,
    speed: 10,
    // Add other options as needed
  });

  // Function to handle parallax effect
  const handleDrag = () => {
    if (!emblaApi) return;

    const progress = emblaApi.scrollProgress();
    const translateX = progress * 100; // Adjust parallax effect intensity
    const items = emblaRef.current.children;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const offset = (i - emblaApi.selectedScrollSnap()) * 100; // Adjust based on index
      item.style.transform = `translateX(${translateX + offset}%)`;
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("scroll", handleDrag); // Attach the drag handler

    return () => {
      emblaApi.off("scroll", handleDrag); // Clean up on unmount
    };
  }, [emblaApi]);

  return (
    <section className="hero-section h-[50vh] md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)] w-full relative">
      <Carousel
        ref={emblaRef}
        plugins={[plugin.current]}
        setApi={setApi}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
      >
        <CarouselContent>
          {imgSlider.map((img, index) => (
            <CarouselItem
              key={index}
              className="w-full sm:h-full relative h-[50vh] md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)]"
            >
              <img
                src={img.image}
                alt={img.tagline}
                className="object-cover w-screen  h-[50vh] md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)] sm:blur-sm blur-[2px]"
              />
              <div className="absolute inset-0 z-20 bg-black opacity-50" />
              <div className="size-full sm:max-w-5xl items-center justify-center overflow-hidden sm:pt-8 absolute top-16 sm:top-[4%] left-[10%] z-20 space-y-6 sm:space-y-">
                <AnimatedGradientText className="mx-0 rounded-md">
                  🔔 <hr className="h-4 mx-2 w-" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg- text-base sm:text-xl bg-gradient-to-r from-[#fff] via-[#a80808] to-[#fff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}
                  >
                    Enroll now
                  </span>
                  <ChevronRight className="ml-1 mt-1 size-3 sm:size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-white/70" />
                </AnimatedGradientText>
                <BoxReveal boxColor={"#DC2626"} duration={0.5}>
                  <p className="text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-8xl sm:py-4 sm:tracking-wide drop-shadow-lg">
                    {img.tagline.split(" ").map((word, index) => {
                      if (index === 1) {
                        return (
                          <span key={index}>
                            <span style={{ color: "#DC2626" }}>{word}</span>{" "}
                            <br />
                          </span>
                        );
                      } else if (index === 2) {
                        return (
                          <span key={index}>
                            <span style={{ color: "#DC2626" }}>{word}</span>{" "}
                          </span>
                        );
                      } else {
                        return <span key={index}>{word} </span>;
                      }
                    })}
                  </p>
                </BoxReveal>

                <WordPullUp
                  words={img.highlight}
                  className="hidden sm:block text-xl font-semibold md:text-3xl text-slate-200  md:font-bold text-left max-w-[20rem] md:max-w-3xl"
                />
                <WordRotate
                  className="sm:hidden block text-2xl font-bold md:text-3xl text-white  md:font-bold text-left max-w-[20rem] md:max-w-3xl"
                  words={img.highlights}
                />
                <ShinyButton className="text-sm font-bold text-white bg-white rounded-none sm:py-5 sm:px-10 lg:text-lg">
                  Explore Courses
                </ShinyButton>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute justify-center hidden mt-4 space-x-2 -rotate-90 sm:flex -right-5 bottom-28">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-4 h-[2px] rounded-sm ${
              index === current ? "bg-destructive/70" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
