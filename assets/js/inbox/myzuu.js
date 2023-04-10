// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
        img: "https://help-apk.myzuu.my.id/assets/img/help/bg.png",
        inbox: "Masih belum terjawab?",
        date: "Masih belum terjawab?"
    },

];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("inbox").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("inbox").innerHTML += `
        <section class="margin-t-20 un-activity-page">
                <div class="content-activity">
                    <!-- New -->
                    <div class="head">
                        <div class="title">New</div>
                    </div>
                    <div class="body">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a href="" class="nav-link">
                                    <div class="item-user-img">
                                        <div class="wrapper-image">
                                            <picture>
                                                <source srcset="${curarra[i].img}" type="image/webp">
                                                <img class="avt-img" src="${curarra[i].img}" alt="">
                                            </picture>
                                            <div class="icon"><i class="ri-checkbox-circle-fill"></i></div>
                                        </div>
                                        <div class="txt-user">
                                            <h5>${curarra[i].inbox}</h5>
                                            <p>${curarra[i].date}</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

            </section>
               `
    }

}