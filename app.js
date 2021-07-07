const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    //Toggle the navigation
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    //Animate the links
    navLinks.forEach((link, index)=>{
        //Console.log index, should get 4
        console.log(index)
        //Add animation, index divided by 7 so that they animate individually
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
        console.log(index/7);
    })
}

const app = () => {
    navSlide();
}

app();