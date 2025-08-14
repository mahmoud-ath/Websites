document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.getElementById('carousel');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const navDots = document.querySelectorAll('.nav-dot');
            const projectCards = document.querySelectorAll('.project-card');
            
            let currentIndex = 0;
            const cardWidth = projectCards[0].offsetWidth + 24; // width + margin
            
            // Initialize first dot as active
            navDots[0].classList.add('active');
            projectCards[0].classList.add('glow-border');
            
            // Navigation dots click handler
            navDots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    scrollToProject(index);
                });
            });
            
            // Previous button click handler
            prevBtn.addEventListener('click', function() {
                const newIndex = currentIndex > 0 ? currentIndex - 1 : projectCards.length - 1;
                scrollToProject(newIndex);
            });
            
            // Next button click handler
            nextBtn.addEventListener('click', function() {
                const newIndex = currentIndex < projectCards.length - 1 ? currentIndex + 1 : 0;
                scrollToProject(newIndex);
            });
            
            // Auto-scroll every 5 seconds
            let autoScroll = setInterval(() => {
                const newIndex = currentIndex < projectCards.length - 1 ? currentIndex + 1 : 0;
                scrollToProject(newIndex);
            }, 5000);
            
            // Pause auto-scroll on hover
            carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
            carousel.addEventListener('mouseleave', () => {
                autoScroll = setInterval(() => {
                    const newIndex = currentIndex < projectCards.length - 1 ? currentIndex + 1 : 0;
                    scrollToProject(newIndex);
                }, 5000);
            });
            
            // Scroll to specific project
            function scrollToProject(index) {
                currentIndex = index;
                const scrollPosition = index * cardWidth;
                
                carousel.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth'
                });
                
                // Update active dot
                navDots.forEach(dot => dot.classList.remove('active'));
                navDots[index].classList.add('active');
                
                // Update glowing border
                projectCards.forEach(card => card.classList.remove('glow-border'));
                projectCards[index].classList.add('glow-border');
                
                // Reset auto-scroll timer
                clearInterval(autoScroll);
                autoScroll = setInterval(() => {
                    const newIndex = currentIndex < projectCards.length - 1 ? currentIndex + 1 : 0;
                    scrollToProject(newIndex);
                }, 5000);
            }
            
            // Handle window resize
            window.addEventListener('resize', function() {
                cardWidth = projectCards[0].offsetWidth + 24;
                scrollToProject(currentIndex);
            });
        });