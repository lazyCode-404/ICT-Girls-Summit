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
    speakerName2: 'Dr. Eddie Mukooyo',
    description2: 'Board Chair',
    paragraph2: 'Content Coming soon',
    image2: 'images/teacher3.jpg',
  },
  {
    speakerName1: 'Sudhir Ruparelia',
    description1: 'Businessman and Entrepreneur in Zambia.',
    paragraph1: 'He is the Chairman and majority shareholder in the companies of the Ruparelia Group. His investments are mainly in the areas of banking, insurance, education, broadcasting, real estate, floriculture, hotels and resorts.',
    image1: 'images/teacher1.jpg',
    speakerName2: 'Prof. Rhoda Wanyenze',
    description2: 'Board Member',
    paragraph2: 'Dr Rhoda Wanyenze MBChB, MPH, PhD, is a Professor and Dean at Makerere University School of Public Health (MakSPH).',
    image2: 'images/teacher4.jpg',
  },
  {
    speakerName1: 'Salim S. Abdool Karim',
    description1: 'entre for the AIDS Programme of Research in South Africa, South Africa',
    paragraph1: 'He is the Chairman and majority shareholder in the companies of the Ruparelia Group. His investments are mainly in the areas of banking, insurance, education, broadcasting, real estate, floriculture, hotels and resorts.',
    image1: 'images/teacher6.jpg',
    speakerName2: 'Dr. Nelson Musoba',
    description2: 'Director General UAC ,& Secretary to the Board',
    paragraph2: 'Dr. Musoba is the Director General of Uganda AIDS Commission. He is a medical doctor with more than 20 years of clinical and public health experience.',
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
