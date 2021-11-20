const faders = document.querySelectorAll(".fade-in");
        const sliders = document.querySelectorAll(".slide-in ");
    
        const appearOptions = { 
            threshold: 1, rootMargin: "10px 0px -20px 0px" };
    
        const appearOnScroll = new IntersectionObserver(
            function(
                enteries, 
                appearOnScroll
                ) {
                    enteries.forEach(entry => {
                        if (!entry.isIntersecting){
                            return;
                        }else{
                            entry.target.classList.add("appear");
                            appearOnScroll.unobserve(entry.target);
                        }
                    })
                }, 
                appearOptions);
    
            faders.forEach(fader => {
            appearOnScroll.observe(fader)
            });