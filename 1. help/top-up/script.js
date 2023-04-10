// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
        name: "Cara TopUp",
        link: "/help/top-up/cara-top-up/",
        code: "",
        modal1: "#comingsoon"
    },
    {
        id: 2,
        name: "Metode TopUp",
        link: "/blog/mengapa-saya-tidak-bisa-login-di-aplikasi-myzuu/",
        code: "modal",
        modal1: "#comingsoon"
    },
    {
        id: 3,
        name: "TopUp Bermasalah",
        link: "/help/top-up/top-up-bermasalah/",
        code: "",
        modal1: "#comingsoon"
    },
];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("296935").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("296935").innerHTML += `
               <li class="nav-item">
               <a class="nav-link" href="${curarra[i].link}" data-bs-toggle="${curarra[i].code}" data-bs-target="${curarra[i].modal1}">
                   <div class="item-content-link">
                       <h3 class="link-title">${curarra[i].name}</h3>
                   </div>
                   <div class="other-cc">
                       <span class="badge-text"></span>
                       <div class="icon-arrow">
                           <i class="ri-arrow-drop-right-line"></i>
                       </div>
                   </div>
               </a>
           </li>
               `
    }

}

// For Live Searching Product

document.getElementById("myinput").addEventListener("keyup", function () {
    let text = document.getElementById("myinput").value;

    filterarray = galleryarray.filter(function (a) {
        if (a.name.includes(text)) {
            return a.name;
        }

    });
    if (this.value == "") {
        showgallery(galleryarray);
    }
    else {
        if (filterarray == "") {
            document.getElementById("para").style.display = 'block'
            document.getElementById("296935").innerHTML = "";
        }
        else {

            showgallery(filterarray);
            document.getElementById("para").style.display = 'none'
        }
    }

});