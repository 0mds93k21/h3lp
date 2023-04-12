// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        link: "https://myzuu.webtoko.net/digital/200540",
        img: "https://sc.myzuu.my.id/assets/img/produk/game/mobile-legend/myzuu.png",
        judul: "New Starlight Bulan April",
        date: "Rab, 12 Apr 2023",
        cssHide: "#style='display: none;'",
        button: "Click",
    },

];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("notifikasi").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("notifikasi").innerHTML += `

        <section class="margin-t-20 un-activity-page">
            <div class="content-activity">

                <div class="body">
                    <ul class="nav flex-column">
                    <li class="nav-item" onclick="location.href='${curarra[i].link}';">
                            <a href="javascript: void(0)" class="nav-link">
                                <div class="item-user-img">
                                    <div class="wrapper-image">
                                        <picture>
                                            <source srcset="${curarra[i].img}" type="image/webp">
                                            <img class="avt-img" src="${curarra[i].img}" alt="Myzuu">
                                        </picture>
                                    </div>
                                    <div class="txt-user">
                                        <h5>${curarra[i].judul}</h5>
                                        <p>${curarra[i].date}</p>
                                    </div>
                                </div>
                                <div class="other-option">
                                    <button onclick="location.href='${curarra[i].link}';" type="button" class="btn btn-sm-size border text-dark rounded-pill" ${curarra[i].cssHide}>${curarra[i].button}</button>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

        </section>
               `
    }

}