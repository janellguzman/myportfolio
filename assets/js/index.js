const websites = [{
    name: "Trip-Pal",
    imgName: "trip-pal.jpg",
    link: "https://trip-pal.github.io/Trip-Pal-Website/",
    github: "https://github.com/Trip-Pal/Trip-Pal-Website",
    description: "Website that allows quickly to compare travel destinations based on commonly-rated preferences. API's used: Sygic Travel API, Google Maps API, Geoname API, Foursquare, Open Weather Map API",
    technologies: "Javascript, jQuery, Bootstrap, HTML, CSS"
},
{
    name: "Pusoy Dos Card Game",
    imgName: "pusoydos.jpg",
    link: "https://pusoydosbeta.herokuapp.com/",
    github: "https://github.com/Big2CardGame/Big2",
    description: "A beta app for users to learn and practice the card shedding game Pusoy Dos, a variant of Big 2.",
    technologies: "HTML, CSS, jQuery"
},
{
    name: "Puppy Clicky Game",
    imgName: "puppyClick.jpg",
    link: "https://guarded-inlet-92562.herokuapp.com/",
    github: "https://github.com/janellguzman/Clicky-Game",
    description: "Clicky Game is simple memory game.  Try not to click on the same puppy twice to build up your score.",
    technologies: "Javascript, HTML, CSS, MERN Stack"
},
{
    name: "EquipRENT",
    imgName: "equiprent.jpg",
    link: "https://equiprent.herokuapp.com/",
    github: "https://github.com/EquipRENTAL/Main",
    description: "Website that allows a community of users to borrow or rent out equipment to other users.",
    technologies: "Node.js, Express.js, Handlebars, MongoDB, Mongoose, Axios, Cheerio, Javascript, jQuery, HTML, CSS"
}
];



const skills = ["Javascript", "ReactJs" ,"Node.js", "Express.js", "Firebase", "MongoDB", "Ajax", "API's", "jQuery", "MySQL", "HTML", "CSS", "Bootstrap", "Git", "Mongoose.js", "Sequelize.js", "CSS Grid", "Prezi"];

const imageLocationWebsite = "./assets/img/websites/";


$(document).ready(function() {

$(window).scroll(function () {
    $(".info-section").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".links-section").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".headline").css("opacity", 1 - $(window).scrollTop() / 250);
  });

for (let i = 0; i <  websites.length ; i++) {

    let name = websites[i].name;
    let imgName = websites[i].imgName;
    let link = websites[i].link;
    let github = websites[i].github;
    let description = websites[i].description;
    let technologies = websites[i].technologies;

    let mainDiv = $("<div>");

    let imgDiv = $("<div>");
    let imgTag = $("<img>");
    let imgATag = $("<a>");
    imgTag.attr("src", imageLocationWebsite + imgName);
    imgATag.attr("href", link).attr("target", "_blank");
    imgATag.append(imgTag);
    imgDiv.append(imgATag);

    let nameDiv = $("<div>");
    let nameHTag = $("<h3>");
    nameHTag.text(name);
    nameDiv.append(nameHTag).addClass("webapp-name");

    let linksDiv = $("<div>");
    let linkATag = $("<a>");
    linkATag.attr("href", link).text(link).attr("target", "_blank");
    linksDiv.append(linkATag).addClass("link-div");

    let gitDiv = $("<div>");
    let gitATag = $("<a>");
    gitATag.attr("href", github).text(github).attr("target", "_blank");
    gitDiv.append(gitATag).addClass("link-div");

    let descriptionDiv = $("<div>");
    let descPTag = $("<p>");
    descPTag.text(description);
    descriptionDiv.append(descPTag).addClass("description-div");

    let techDiv = $("<div>");
    let techPTag = $("<p>");
    techPTag.text(technologies);
    techDiv.append(techPTag).addClass("description-div");


    $(mainDiv).append(imgDiv, nameDiv, linksDiv, gitDiv, descriptionDiv, techDiv).addClass("style_prevu_kit");
    $("#websites-area").append(mainDiv);

}

for (let i = 0; i < skills.length; i++){
    let ulTag = $("<ul>");
    let liTag = $("<li>");
    liTag.text(skills[i]);
    ulTag.append(liTag);
    $("#skills-area").append(ulTag);
}




});