window.addEventListener("DOMContentLoaded", () => {
  const reviewContainer = document.querySelector(".review-container");
  const singleReview = document.querySelector(".single-revieew");
  const review = [
    {
      icon: "fa-circle",
      title: "Hendrerit Instructior",
      desc: "Quo eius liber affert id. Id pro summo soluta apeirian, eum ut putent lobortis electram, justo facilis delicatissimi mea ad.",
    },
    {
      icon: "fa-circle",
      title: "Prompta Principes",
      desc: "Te laoreet fastidii instructior vix, case mucius intellegebat sea ei. Sit an audiam saperet labores, te odio elitr sit, ne mea scripta aliquam.",
    },
    {
      icon: "fa-circle",
      title: "Iusto Soluta Inciderint",
      desc: "Nec ferri rebum ei. Officiis dissentiet eum ut, no vero mucius vix. Ne usu movet placerat, qui ne expetendis dissentiunt consectetuer.",
    },
    {
      icon: "fa-circle",
      title: "Apeirian Molestiae",
      desc: "Nulla iuvaret cu est, an euismod accusata his, has an evertitur inciderint. An est dicta ludus oblique. Ei sea nominati rationibus.",
    },
    {
      icon: "fa-circle",
      title: "Magna Exerci Putant",
      desc: "Quo illud persequeris at, inani discere dissentias no eum. At ius odio iuvaret. Mea error nihil id. Clita dolorum necessitatibus ea per.",
    },
    {
      icon: "fa-circle",
      title: "Timeam Sententiae",
      desc: "Ad cetero mnesarchum accommodare usu, at mei posse aliquam invidunt. Ea his feugait pertinacia, ex everti platonem facilisis his.",
    },
  ];

  const newReview = review
    .map((item) => {
      const { icon, title, desc } = item;
      return `
    <div class="single-revieew">
          <span class="fas ${icon}"></span>
          <h3>${title}</h3>
          <div class="border-bottom"></div>
          <p>
            ${desc}
          </p>
        </div>
      `;
    })
    .join(" ");
  reviewContainer.innerHTML = newReview;
  console.log(newReview);
});
