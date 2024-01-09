document.addEventListener("DOMContentLoaded", function () {
    // Simulating asynchronous data fetching
    setTimeout(() => {
        updateDisplayInfo();
        updateCameraInfo();
        updateProcessorInfo();
        updateBatteryInfo();
        initStaggeredAnimations();
        initFeatureSlideshow();
    }, 1000);
    gsap.registerPlugin(ScrollTrigger);

    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item,
                start: "center right",
                end:"left",
                scrub:true,
            
            },
        });
    });
    function updateDisplayInfo() {
        document.getElementById("displayInfo").innerText =
            "6.7-inch Super Actua display18";
    }

    function updateCameraInfo() {
        document.getElementById("cameraInfo").innerText =
            "Triple rear camera system";
    }

    function updateProcessorInfo() {
        document.getElementById("processorInfo").innerText = "Google Tensor G3";
    }

    function updateBatteryInfo() {
        document.getElementById("batteryInfo").innerText =
            "5,050 mAh20, 24+ hour battery life";
    }

    function initStaggeredAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        const staggeredItems = document.querySelectorAll(".staggered-item");

        staggeredItems.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                    },
                }
            );
        });
    }

    function initFeatureSlideshow() {
        gsap.registerPlugin(ScrollTrigger);

        const featureImages = document.querySelectorAll('.feature-slideshow img');
        let currentFeature = 0;

        function showFeature(index) {
            gsap.to(featureImages, { opacity: 0, duration: 0.5 });
            gsap.to(featureImages[index], { opacity: 1, duration: 0.5 });
        }

        function nextFeature() {
            currentFeature = (currentFeature + 1) % featureImages.length;
            showFeature(currentFeature);
        }

        ScrollTrigger.create({
            trigger: ".details",
            start: "top center",
            end: "bottom center",
            onEnter: nextFeature,
            onEnterBack: nextFeature,
        });
    }
});
