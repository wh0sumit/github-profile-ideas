
const ProfileContainer = document.querySelector('.profiles-container');


fetch('https://raw.githubusercontent.com/DesignSystemsOSS/github-profile-ideas/master/Data/profile_data.json')
  .then((res) => res.json())
  .then((res) => {
  for (let profile_data in res) {
    console.log(res[profile_data])
  }
});
let profileCard = document.createElement("div");
profileCard.classList.add("profile-card");

