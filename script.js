const btn = document.querySelector('#btn-click');
const section1 = document.querySelector('.sect1');
const section2 = document.querySelector('.sect2');
const overlay = document.querySelector('#morph');
const morph = document.querySelector('.morph');

// const morphing = anime({
//     targets: '.morph',
//     d: [
//         { value: 'M0,0V495.781s90.608-143.605,425.688-141.9c314.564-3.419,210.261,314.564,562.455,314.564s315.651-285.5,600.066-285.5,331.66,181.216,331.66,181.216V0Z'},
//         {value: 'M0,0V1079.819s94.027-1.71,429.107,0c314.564-3.419,211.971,0,564.164,0h926.6v0z'}
//     ],
//     easing: 'easeInOutQuint',
//     duration: 1300,
//     loop: false,
//     autoplay: false
// })



const morphing = anime({
    targets: morph,
    d: 'M -44,-50 C -137.1,117.4 67.86,445.5 236,452 435.3,459.7 500.5,242.6 676,244 873.5,245.6 957,522.4 1154,594 1593,753.7 1793,226.3 1582,-126 1371,-478.3 219.8,-524.2 -44,-50 Z',
    easing: 'easeInOutQuint',
    duration: 1300,
    loop: false,
    autoplay: false
});

btn.addEventListener('click', () => {
    section1.classList.remove('white');
    morphing.restart();
    overlay.classList.add('pointer');
    setTimeout(()=> {
        section1.classList.add('white')
    }, 500)
})

{/* <svg id="morph" height="100%" width="100%" viewBox="0 0 1920 1080" preserveAspectRatio="none">
<path class="morph" d="M0,0HS1111.085-1.71,446.165,0C760.729-3.419,620.543,1.71,971.009,0S1308.885,0,1593.3,0H0Z" fill="#002E3A"></path>
</svg>

M0,0V495.781s90.608-143.605,425.688-141.9c314.564-3.419,210.261,314.564,562.455,314.564s315.651-285.5,600.066-285.5,331.66,181.216,331.66,181.216V0Z

M0,0V1079.819s94.027-1.71,429.107,0c314.564-3.419,211.971,0,564.164,0h926.6v0z */}