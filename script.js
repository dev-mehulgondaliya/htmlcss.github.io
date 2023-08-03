let obj = [
    {"name":"1.Responsive Card","imgCover":"images/1.png","path":"all-project/1/1.html"},
    {"name":"2.Vertical Split Layout Text","imgCover":"images/2.png","path":"all-project/2/2.html"},
    {"name":"3.Bounceing Text Animation","imgCover":"images/3.png","path":"all-project/3/3.html"},
    {"name":"4.Glowing Text Animation","imgCover":"images/4.png","path":"all-project/4/4.html"},
    {"name":"5.Loading Text Animation","imgCover":"images/5.png","path":"all-project/5/5.html"},
    {"name":"6.Text Clipping Mask","imgCover":"images/6.png","path":"all-project/6/6.html"},
    {"name":"7.Twitter Profile Card","imgCover":"images/7.png","path":"all-project/7/7.html"},
    {"name":"8.Profile Card Ui","imgCover":"images/8.png","path":"all-project/8/8.html"},
    {"name":"9.Progress Bar","imgCover":"images/9.png","path":"all-project/9/9.html"},
    {"name":"10.Social Media Icons Tooltip","imgCover":"images/10.png","path":"all-project/10/10.html"},
    {"name":"11.Responsive Profile Card Ui","imgCover":"images/11.png","path":"all-project/11/11.html"},
    {"name":"12.Fill Text Hover Effect","imgCover":"images/12.png","path":"all-project/12/12.html"},
    {"name":"13.Text Reveal Animation","imgCover":"images/13.png","path":"all-project/13/13.html"},
    {"name":"14.Awesome typewriter effect","imgCover":"images/14.png","path":"all-project/14/14.html"},
    {"name":"15.Text Hover Effect","imgCover":"images/15.png","path":"all-project/15/15.html"},
    {"name":"16.Moving Test Animation","imgCover":"images/16.png","path":"all-project/16/16.html"},
    {"name":"17.How To Make Glassmorphism","imgCover":"images/17.png","path":"all-project/17/17.html"},
    {"name":"18.Text Glitch Effect","imgCover":"images/18.png","path":"all-project/18/18.html"},
    {"name":"19.Social Media Button-1","imgCover":"images/19.png","path":"all-project/19/19.html"},
    {"name":"20.Social Media Button-2","imgCover":"images/20.png","path":"all-project/20/20.html"},
    {"name":"21.social Media Button-3","imgCover":"images/21.png","path":"all-project/21/21.html"},
    {"name":"22.Responsive Card Hover Effect-1","imgCover":"images/22.png","path":"all-project/22/22.html"},
    {"name":"23.Responsive Card Hover Effect-2","imgCover":"images/23.png","path":"all-project/23/23.html"}
];


let porject = document.querySelector(".projects");

for(let i in obj){
    let card = `<div class="card">
                    <img src=${obj[i]["imgCover"]} alt="">
                    <div class="card-text">
                        <h3>${obj[i]["name"]}</h3>
                        <a target="_blank" href=${obj[i]["path"]}>
                            Demo
                        </a>
                    </div>
                </div>`;

    porject.insertAdjacentHTML("beforeend",card);
}
