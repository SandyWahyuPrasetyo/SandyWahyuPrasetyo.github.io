AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Edukasi Kesadaran Keamanan SPBE",
    cardImage: "assets/images/education-page/dts-mono.png",
    moocLink: "https://digitalent.komdigi.go.id/pelatihan/9968",
  },
  {
    title: "Pengantar Sistem Pemerintahan Berbasis Elektronik (SPBE)",
    cardImage: "assets/images/education-page/dts-mono.png",
    moocLink: "https://digitalent.komdigi.go.id/pelatihan/9823",
  },
  {
    title: "Sistem Manajemen Keamanan Informasi Berbasis SNI ISO/IEC 27001:2013",
    cardImage: "assets/images/education-page/dts-mono.png",
    moocLink: "https://digitalent.komdigi.go.id/pelatihan/5975",
  },
  {
    title: "Intro to Programming",
    cardImage: "assets/images/education-page/kaggle.png",
    moocLink: "https://www.kaggle.com/learn/intro-to-programming",
  },
  {
    title: "Responsive Web Design",
    cardImage: "assets/images/education-page/sololearn.png",
    moocLink: "https://www.sololearn.com/en/learn/courses/le-responsive-web-design",
  },
  {
    title: "Kotlin",
    cardImage: "assets/images/education-page/sololearn.png",
    moocLink: "https://www.sololearn.com/en/learn/courses/le-kotlin",
  },
  {
    title: "Web Development Fundamentals",
    cardImage: "assets/images/education-page/sololearn.png",
    moocLink: "https://www.sololearn.com/Course/web-dev-basics/?ref=app",
  },
  {
    title: "Python Core",
    cardImage: "assets/images/education-page/sololearn.png",
    moocLink: "https://www.sololearn.com/en/learn/courses/le-python",
  },
  {
    title: "C++",
    cardImage: "assets/images/education-page/sololearn.png",
    moocLink: "https://www.sololearn.com/en/learn/courses/c-plus-plus-introduction",
  },
  {
    title: "Git",
    cardImage: "assets/images/education-page/progate.png",
    moocLink: "https://progate.com/courses/git",
  },
  {
    title: "Command Line",
    cardImage: "assets/images/education-page/progate.png",
    moocLink: "https://progate.com/courses/commandline",
  },
  {
    title: "JavaScript",
    cardImage: "assets/images/education-page/progate.png",
    moocLink: "https://progate.com/courses/es6",
  },
  {
    title: "HTML & CSS",
    cardImage: "assets/images/education-page/progate.png",
    moocLink: "https://progate.com/courses/html",
  },
];

const certificate = document.querySelector(".certificate");
const certificatecards = [
  {
    titleCertificate: "SERTIFIKAT PELATIHAN - Edukasi Kesadaran Keamanan SPBE",
    company: "Digitalent Kominfo (Government Transformation Academy)",
    idCertificate: "19999681320-26/GTA/BLSDM.Komdigi/2025",
    dateIssued: "Maret 2025 - No Expiration",
    cardImageCertificate: "assets/images/certificate/19999681320-26.png",
    certificateLink: "https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=19999681320-26",
  },
  {
    titleCertificate: "SERTIFIKAT PELATIHAN - Pengantar Sistem Pemerintahan Berbasis Elektronik (SPBE)",
    company: "Digitalent Kominfo (Micro Skill)",
    idCertificate: "22998231320-2331/MS/BLSDM.Komdigi/2025",
    dateIssued: "February 2025 - No Expiration",
    cardImageCertificate: "assets/images/certificate/22998231320.png",
    certificateLink: "https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=22998231320-2331",
  },
  {
    titleCertificate: "SERTIFIKAT PELATIHAN - Manajemen Risiko Berbasis SNI ISO 31000",
    company: "Badan Standardisasi Nasional",
    idCertificate: "ELSDS/BSN/1069/XXIV",
    dateIssued: "February 2024 - February 2025",
    cardImageCertificate: "assets/images/certificate/ds_59508.png",
    certificateLink: "https://elearning.bsn.go.id/sertifikat",
  },
  {
    titleCertificate: "SERTIFIKAT PELATIHAN - SNI ISO 27001:2022 Sistem Manajemen Keamanan Informasi",
    company: "Badan Standardisasi Nasional",
    idCertificate: "ELSDS/BSN/634/XXIV",
    dateIssued: "January 2024 - January 2025",
    cardImageCertificate: "assets/images/certificate/ds_58713.png",
    certificateLink: "https://elearning.bsn.go.id/sertifikat",
  },
  {
    titleCertificate: "SERTIFIKAT PELATIHAN - Sistem Manajemen Keamanan Informasi Berbasis SNI ISO/IEC 27001:2013",
    company: "Digitalent Kominfo (GTA)",
    idCertificate: "19959751320-6/GTA/BLSDM KOMINFO/2023",
    dateIssued: "March 2023 - No Expiration",
    cardImageCertificate: "assets/images/certificate/19959751320-6.png",
    certificateLink: "https://digitalent.komdigi.go.id/cek-sertifikat?registrasi=19959751320-6",
  },
  {
    titleCertificate: "Kursus Intro to Programming",
    company: "Kaggle",
    idCertificate: "-",
    dateIssued: "November 2022 - No Expiration",
    cardImageCertificate: "assets/images/certificate/kaggle-introtoprogramming.png",
    certificateLink: "https://www.kaggle.com/learn/certification/sandywahyuprasetyo/intro-to-programming",
  },
  {
    titleCertificate: "Kursus Responsive Web Design",
    company: "Sololearn",
    idCertificate: "-",
    dateIssued: "October 2022 - No Expiration",
    cardImageCertificate: "assets/images/certificate/CT-YWJSESCC.jpg",
    certificateLink: "https://www.sololearn.com/en/certificates/CT-YWJSESCC",
  },
  {
    titleCertificate: "Kursus Kotlin",
    company: "Sololearn",
    idCertificate: "-",
    dateIssued: "October 2022 - No Expiration",
    cardImageCertificate: "assets/images/certificate/CT-BLWP9AI8.jpg",
    certificateLink: "https://www.sololearn.com/en/certificates/CT-BLWP9AI8",
  },
  {
    titleCertificate: "Kursus Web Development Fundamentals",
    company: "Sololearn",
    idCertificate: "-",
    dateIssued: "October 2022 - No Expiration",
    cardImageCertificate: "assets/images/certificate/CT-ABSBKATR.jpg",
    certificateLink: "https://www.sololearn.com/en/certificates/CT-ABSBKATR",
  },
  {
    titleCertificate: "Kursus Python Core",
    company: "Sololearn",
    idCertificate: "-",
    dateIssued: "September 2022 - No Expiration",
    cardImageCertificate: "assets/images/certificate/CT-US2NZBL2.jpg",
    certificateLink: "https://www.sololearn.com/en/certificates/CT-US2NZBL2",
  },
  {
    titleCertificate: "Kursus C++",
    company: "Sololearn",
    idCertificate: "-",
    dateIssued: "September 2022 - No Expiration",
    cardImageCertificate: "assets/images/certificate/CT-P3IGCWR6.jpg",
    certificateLink: "https://www.sololearn.com/en/certificates/CT-P3IGCWR6",
  },
  {
    titleCertificate: "Kursus Git",
    company: "Progate",
    idCertificate: "-",
    dateIssued: "April 2021 - No Expiration",
    cardImageCertificate: "assets/images/certificate/certificate_044d80e8qs5p1h.png",
    certificateLink: "https://progate.com/course_certificate/044d80e8qs5p1h",
  },
  {
    titleCertificate: "Kursus Command Line",
    company: "Progate",
    idCertificate: "-",
    dateIssued: "April 2021 - No Expiration",
    cardImageCertificate: "assets/images/certificate/certificate_03a85e8bqrsrgj.png",
    certificateLink: "https://progate.com/course_certificate/03a85e8bqrsrgj",
  },
  {
    titleCertificate: "Kursus JavaScript",
    company: "Progate",
    idCertificate: "-",
    dateIssued: "March 2021 - No Expiration",
    cardImageCertificate: "assets/images/certificate/certificate_669b9338qqu1px.png",
    certificateLink: "https://progate.com/course_certificate/669b9338qqu1px",
  },
  {
    titleCertificate: "Kursus HTML & CSS",
    company: "Progate",
    idCertificate: "-",
    dateIssued: "March 2021 - No Expiration",
    cardImageCertificate: "assets/images/certificate/certificate_a6849909qq42zz.png",
    certificateLink: "https://progate.com/course_certificate/a6849909qq42zz",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// certificateLink
const showCards3 = () => {
  let output = "";
  certificatecards.forEach(
    ({ titleCertificate, cardImageCertificate, certificateLink, idCertificate, company, dateIssued }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="300" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImageCertificate} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${certificateLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold certificate-title" style="font-size:12px;">${titleCertificate}</h6> 
                    <h6 class="mt-0 py-2 text-center font-weight-bold certificate-title" style="font-size:12px;">${company} . ${dateIssued}</h6>  
                    <h6 class="mt-0 py-2 text-center font-weight-bold certificate-title" style="font-size:12px;">ID: ${idCertificate}</h6>                   
                </div>
            </div>
        </div>        
      `)
  );
  certificate.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

/* Badges*/

// const bagdes = document.querySelector(".badges");
// const badgesection = [
//   // {
//   //   title: "Google Developer Essentials",
//   //   image: "assets/images/education-page/badge1.png",
//   //   description: "Earned May 20, 2020",
//   // },
//   // {
//   //   title: "VM Migration",
//   //   image: "assets/images/education-page/badge2.png",
//   //   description: "Earned June 20, 2020",
//   // },
//   // {
//   //   title: "G Suite Essentials",
//   //   image: "assets/images/education-page/badge3.png",
//   //   description: "Earned July 20, 2020",
//   // },
// ];

// const showCards1 = () => {
//   let output = "";
//   badgesection.forEach(
//     ({ title, image, description }) =>
//     (output += `       
//       <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
//         <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
//           <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
//           <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
//       </div>`)
//   );
//   bagdes.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },

  {
    heading: "Massachusetts Institute of Technology",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2020-2024)",
    description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
