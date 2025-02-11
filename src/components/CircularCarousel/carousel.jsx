import { useEffect, useRef, useState } from "react";
import "./style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import { buildCarousel } from "../../utils";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies
gsap.registerPlugin(Draggable);

export default function CircularCarousel({
  items = [],
  className = "",
  radiusX = 600,
  radiusY = 600,
  variant = "default",
}) {
  const [carousel, setCarousel] = useState();
  const mainCarouselWrapRef = useRef(null);

  let data = [...items, ...items];

  const cmsDescRef = [...data.map((_, index) => useRef(null))];
  const itemsRef = [...data.map((_, index) => useRef(null))];

  useGSAP(() => {
    let descriptions = cmsDescRef.map((currentRef) => currentRef.current);
    let items = itemsRef.map((currentRef) => currentRef.current);
    let tfc = mainCarouselWrapRef.current;
    // let radius = tfc.offsetWidth / 2;

    gsap.set(descriptions[0], { autoAlpha: 1 }); // make the first description visible.

    setCarousel(
      buildCarousel(items, {
        radiusX: radiusX,
        radiusY: radiusY,
        activeAngle: -90,
        // draggable: true,
        onClick(element, self) {
          self.to(element, { duration: 1, ease: "power1.inOut" }, "short");
        },
        onActivate(element, self) {
          element.classList.add("active");
        },
        onDeactivate(element, self) {
          element.classList.remove("active");
        },
        // when a drag or animation starts (via the Carousel's to()/next()/previous() methods)
        onStart(element, self) {
          gsap.to(descriptions[items.indexOf(element)], {
            autoAlpha: 0,
            duration: 0.25,
            overwrite: "auto",
          });
        },
        onStop(element, self) {
          gsap.to(descriptions[items.indexOf(element)], {
            autoAlpha: 1,
            overwrite: "auto",
          });
        },
      })
    );

    // nextRef.map(currentRef => currentRef.current.addEventListener("click", () => carousel.next()));
    // prevRef.map(currentRef => currentRef.current.addEventListener("click", () => carousel.prev()));

    // Mobile Size
    let mm = gsap.matchMedia();
    mm.add("(max-width: 767px)", () => {
      console.log("mm", mm);
      carousel?.resize(radiusX / 2.8, radiusY / 2.8);
    });

    // updateSize(); // Run once when the component mounts
    // window.addEventListener("resize", updateSize); // Update on window resize
    // return () => window.removeEventListener("resize", updateSize); // Cleanup
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      style={{ "--circle-radius": radiusX + "px", "--circle-radius-y": radiusY + "px" }}
      className={
        className +
        " px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-52 grid md:grid-row-2 gap-12 lg:gap-4 xl:gap-12 z-10"
      }
    >
      <div className="container products-container carousel w-products-container">
        <div className="carousel-overflow">
          <div
            id="circleList"
            role="list"
            className="tfc-qoute-list w-dyn-items"
          >
            {data.map((item, index) => (
              <div
                key={`circle-1-${index}`}
                role="listitem"
                ref={itemsRef[index]}
                className={`tfc-qoute-item w-dyn-item`}
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(-50%, -50%) translate(0px, -590px)",
                }}
              >
                <div className="tfc-quote-item-child">
                  <div className="quote-item-inner">
                    <img
                      src={item.img}
                      loading="lazy"
                      alt="Matan Bar"
                      className="quote-img img-bw"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <button
              onClick={() => carousel.previous({ duration: 1 })}
              className="w-button quote-prev"
            >
              <img src="/arrow-left.svg" loading="lazy" alt="" />
            </button>
            <button
              onClick={() => carousel.next({ duration: 1 })}
              className="w-button quote-next"
            >
              <img src="/arrow-right.svg" loading="lazy" alt="" />
            </button>
            {data.map((item, index) => (
              <div
                key={`circle-2-${index}`}
                role="listitem"
                ref={cmsDescRef[index]}
                className={`cms-desc w-dyn-item  ${
                  index !== item.sno ? "second-time" : ""
                }`}
              >
                <div className="quote-name text-5xl bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                  {item.name}
                </div>
                <div className="quote-title">{item.role}</div>
                <div
                  className="quote-rtx w-richtext"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
