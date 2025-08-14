
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // FAQ accordion
        const faqButtons = document.querySelectorAll('#contact button');
        faqButtons.forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                answer.classList.toggle('hidden');
                
                const icon = button.querySelector('i');
                if (answer.classList.contains('hidden')) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                } else {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            });
        });
        
        // Show newsletter popup after delay
        setTimeout(() => {
            document.querySelector('.newsletter-popup').classList.remove('hidden');
        }, 5000);
        
        function closeNewsletter() {
            document.querySelector('.newsletter-popup').classList.add('hidden');
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    