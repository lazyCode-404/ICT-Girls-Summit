const menu = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');

menu.addEventListener('click',  function() {
  document.getElementById('myNav').style.width = '100%';
});

closeBtn.addEventListener('click', function() {
  document.getElementById('myNav').style.width = '0%';
})

const data = [
  {
    speakerName1: 'Bwalya Nonde',
    description1: 'Software Developer',
    paragraph1: 'Currently working at Bongo Hive as a Software developer.',
    image1: 'images/teacher2.jpg',
    speakerName2: 'Regina Mtonga ',
    description2: 'Co-founder, Director',
    paragraph2: 'Manages fund raising activities, the consultancy section of Asikana Network as well as taking charge of developer classes.',
    image2: 'images/teacher3.jpg',
  },
  {
    speakerName1: 'Lukonga Lindunda ',
    description1: 'Co-Founder & Executive Director.',
    paragraph1: 'Startup Ecosystem Builder, Executive Director and Co-founder of BongoHive Group of Companies, in Zambia, which includes BongoHive Innovations.',
    image1: 'images/teacher1.jpg',
    speakerName2: 'Bart Cornille',
    description2: 'Co-Founder',
    paragraph2: 'Skilled in Digital4Development, Management, Organizational Development, Training, and Adult Education.',
    image2: 'images/teacher4.jpg',
  },
  {
    speakerName1: 'Mulubwa Chungu',
    description1: 'Back-End Developer',
    paragraph1: 'Software Developer (Back-end(NodeJs{ExpressJs,NestJS}),Golang & flutter mobile apps) at BongoHive Consult.',
    image1: 'images/teacher6.jpg',
    speakerName2: 'Zoe Kuyanda ',
    description2: 'Coding Programmes Manager',
    paragraph2: ' A multidisciplinary researcher and consultant with experience in qualitative and desk research and Agile and Design Methodologies.',
    image2: 'images/teacher5.jpg',

  },
];

const speakerList = document.getElementById('speakerList');

speakerList.innerHTML = '';
data.map((speaker) => {
  speakerList.innerHTML = `${speakerList.innerHTML}
<section class="main-section-2">
    <div class="speaker-image">
        <div class="sub-heading">
            <h4>${speaker.speakerName1}</h4>
            <h6>${speaker.description1}</h6>
            <p>${speaker.paragraph1}</p>
        </div>
        <img src="${speaker.image1}" class="my-image" alt="">
    </div>
    <div class="speaker-image">
        <div class="sub-heading">
            <h4>${speaker.speakerName2}</h4>
            <h6>${speaker.description2}</h6>
            <p>${speaker.paragraph2}</p>
        </div>
        <img src="${speaker.image2}" class="my-image" alt="">
    </div>
</section>`;
  return (speaker);
});
