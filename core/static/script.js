document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.category-item > a');
    const sections = document.querySelectorAll('.category');

    function onScroll() {
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        sections.forEach((section) => {
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                const id = section.getAttribute('id');
                categoryLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    document.addEventListener('scroll', onScroll);

    // Initial call to set the correct active category on page load
    onScroll();
});
