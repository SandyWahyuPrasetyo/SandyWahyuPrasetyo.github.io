//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Kementerian Dalam Negeri",
    cardImage: "assets/images/experience-page/kemendagri.png",
    place: "Badan Penelitian dan Pengembangan",
    time: "(February, 2015 - January 2016)",
    desp: "<li>Bekerja sebagai Pegawai Tidak Tetap (PTT) / Pramubakti </br> Tata Usaha (TU) Pimpinan </br> Pusat Litbang Inovasi Daerah </br> Badan Penelitian dan Pengembangan </br> Kementerian Dalam Negeri. </br> Jl. Kramat Raya 132 – Jakarta </br> Bulan Februari 2015 – Januari 2016 .</li>",
  },
  {
    title: "Kementerian Dalam Negeri",
    cardImage: "assets/images/experience-page/kemendagri.png",
    place: "Badan Penelitian dan Pengembangan",
    time: "(February, 2016 - present)",
    desp: "<li>Bekerja sebagai Pegawai Tidak Tetap (PTT) / Pramubakti </br> Tenaga Teknisi Support Jaringan Internet dan Komputer  </br> Sekretariat Bagian Umum (LABDATA) </br> Badan Penelitian dan Pengembangan </br> Kementerian Dalam Negeri. </br> Jl. Kramat Raya 132 – Jakarta </br> Bulan Februari 2016 – Hingga Sekarang.</li>",
  },
  // {
  //   title: "Software Development Intern",
  //   cardImage: "assets/images/experience-page/flipkart.jpg",
  //   place: "Flipkart",
  //   time: "(May, 2020 - present)",
  //   desp: "<li>Worked to migrate Flipkart lite’s product page to AMP pages so that they load up instantly.</li> <li>Made changes in the current progressive web app of Flipkart to react to different actions performed on AMP page.</li> <li>Created a node module called “fk-amp” which abstracts all the files and middlewares and can be easily imported and used from express server.</li>",
  // },
  // {
  //   title: "Student Developer",
  //   cardImage: "assets/images/experience-page/gsoc.png",
  //   place: "Google Summer Of Code",
  //   time: "(Mar - Aug, 2019)",
  //   desp: "<li>Worked with MOZILLA as a part of Google Summer Of Code.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  // },
  // {
  //   title: "Research Intern",
  //   cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
  //   place: "IIT, Bombay",
  //   time: "(Dec, 19 - Jan, 20)",
  //   desp:"<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Digital Talent Scholarship </br> 2021",
    // time: "Selama 3 Bulan",
    cardImage: "assets/images/experience-page/dts_logo.png",
    description:
      "<b><u>Peserta program pelatihan pengembangan kompetensi</b></u></br> Badan Litbang Kominfo.",
  },
  {
    title: "Universitas Mercubuana </br> 2015",
    cardImage: "assets/images/education-page/UMB.png",
    description:
      "<b><u>organizational experience</u></b> </br>Peserta Forum Keakraban Teknik Informatika (FKTI).",
  },
  {
    title: "Universitas Mercubuana </br> 2015",
    cardImage: "assets/images/education-page/UMB.png",
    description:
      "<b><u>organizational experience</u></b> </br>Peserta LDK (Latihan Dasar Kepemimpinan) Teknik Informatika.",
  },
  {
    title: "Indovision, MNC Sky Vision </br> 2013",
    // time: "Selama 3 Bulan",
    cardImage: "assets/images/experience-page/indovision_logo.jpg",
    description:
      "<b><u>Internship Experience</u></b> </br><b>Human Resorce Division</b> </br> Praktek Kerja Industri yang dilaksanakan oleh </br> SMK PGRI 11 Ciledug.",
  },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
  // {
  //   title: "30 DaysofFlutter",
  //   cardImage: "assets/images/experience-page/5.jpg",
  //   description:
  //     "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  // },
  // {
  //   title: "Garuda Hacks",
  //   cardImage: "assets/images/experience-page/6.jpg",
  //   description:
  //     "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p>
          </div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  // {
  //   title: "HakinCode",
  //   image: "assets/images/experience-page/hakin.png",
  //   time: "06/2020 - 08/2020",
  //   desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  // },
  // {
  //   title: "Google Summer of Code",
  //   image: "assets/images/experience-page/gsoc.png",
  //   time: "03/2020 - 08/2020",
  //   desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
