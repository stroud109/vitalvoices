var users = [{
    name: "Maria Claudia Mendez, Bolivia",
    location: "Latin America and the Caribbean",
    interests: "Mentoring",
    avatar: 'brigitte_dzogbenuku.png',
    program: "2006 FORTUNE/U.S. State Department Global Women's Mentoring Partnership Alumna",
}, {
    name: "Phelicia Dell, Samoa",
    location: "Latin American and the Caribbean",
    avatar: 'doron_shaltiel.png',
}, {
    name: "Shatha Al-Harazi, Yemen",
    location: "Middle East and North Africa",
    avatar: 'maria_claudia_mendez.png',
}, {
    name: "Adimaimalaga (Adi) Tafuna'i, Samoa",
    location: "Latin American and the Caribbean",
    interests: "Economic Empowerment",
    avatar: 'phelicia_dell.png',
}, {
    name: "Sohini Chakraborty, India",
    location: "Asia and the Pacific Islands",
    interests: "Human Rights",
    avatar: 'roshaneh_zafar.png',
}, {
    name: "Wang Xingjuan, China",
    location: "Asia and the Pacific Islands",
    avatar: 'sohini_chakraborty.png',
}, {
    name: "Roshaneh Zafar, Pakistan",
    location: "Asia and the Pacific Islands",
    interests: "Economic Empowerment",
    avatar: 'wang_xingjuan.png',
}, {
    name: "Brigitte Dzogbenuku, Ghana",
    location: "Africa",
    program: "2008 FORTUNE/U.S. State Department Global Women's Mentoring Partnership Alumna",
    avatar: 'brigitte_dzogbenuku.png',
}, {
    name: "Doron Shaltiel",
    location: "Africa",
    program: "2009 Vital Voices Entrepreneurs in Handcrafts Training Program in Kenya Alumna",
    avatar: 'brigitte_dzogbenuku.png',
}, {
    name: 'Rebecca Lolosoli',
    category: 'Human Rights',
    region: 'Africa'
}];

var posts = [{
    author: 'Rebecca Lolosoli',
    category: 'Human Rights',
    region: 'Africa',
    standers: [1, 2, 3, 4],
    title_quote: 'Rebecca\'s Story',
    tags: ['inspirational'],
    thumbnails: [],
    comments: '(list of text)',
    related: '(other seed stories)',
    main_content: "Rebecca Lolosoli is the matriarch of Umoja Uaso Women’s Village, a safe haven for women and girls fleeing abuse, as well as a training center for those seeking to promote human rights and economic development.\nAs a child, Rebecca had witnessed occasional violence, and as a woman she came to see that some of the Samburu traditional practices were forcing women to endure abuse. She felt compelled to speak out on behalf of those who were marginalized and silenced — victims of rape, forced marriage, female genital cutting, as well as widows and orphans.\nWhen her advocacy was met with hostility and violence, Rebecca and 16 other survivors of violence came together for mutual protection, forging a new community on a patch of forgotten land. Umoja, which means ‘unity’, is now a thriving, self-sustained community.\nThe women of Umoja provide for their children and themselves through the sale of their beaded jewelry and crafts. Through a system of resource sharing, they have established a sickness and disability fund, a community center, and a school for their children and those in the surrounding area.\nDespite repeated threats and attacks, Rebecca continues to work for women’s rights. Her goal is to curb violence against women and the negative cultural practices that are harmful to women’s health, safety and well-being."
}, {


}];


if (Meteor.isServer) {
    Meteor.startup(function () {

        // Add all seeds
        this.Seeds.remove({});
        posts.forEach(function (fixture) {
            this.Seeds.insert(fixture);
        });

        // Add all users
        this.Users.remove({});
        users.forEach(function (fixture) {
            this.Users.insert(fixture);
        });

    });
}
