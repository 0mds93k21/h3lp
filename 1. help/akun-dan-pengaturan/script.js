// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
        name: "Tutup Akun",
        link: "",
        code: "modal",
        modal1: "#comingsoon"
    },
    {
        id: 2,
        name: "Daftar / Sign-up",
        link: "",
        code: "modal",
        modal1: "#comingsoon"
    },
    {
        id: 3,
        name: "Login / Sign-in",
        link: "",
        code: "modal",
        modal1: "#comingsoon"
    },
    {
        id: 4,
        name: "Ubah Profile",
        link: "",
        code: "modal",
        modal1: "#comingsoon"
    },
    {
        id: 5,
        name: "Security Code",
        link: "",
        code: "modal",
        modal1: "#comingsoon"
    },
    {
        id: 6,
        name: "Blokir Akun",
        link: "",
        code: "modal",
        modal1: "#comingsoon"
    },
    {
        id: 7,
        name: "Blokir Device",
        link: "",
        code: "modal",
        modal1: "#comingsoon"
    },
    {
        id: 8,
        name: "Keamanan Akun",
        link: "",
        code: "modal",
        modal1: "#comingsoon"
    },
];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("994579").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("994579").innerHTML += `
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
            document.getElementById("994579").innerHTML = "";
        }
        else {

            showgallery(filterarray);
            document.getElementById("para").style.display = 'none'
        }
    }

});