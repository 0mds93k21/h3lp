// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
        name: "Bagaimana cara melakukan top up ZuuPay?",
        link: "/blog/67556063/",
        code: "",
        modal1: "#comingsoon",
    },
    /* No /
    {
        id: 2,
        name: "Apakah top up dikenakan biaya?",
        link: "/blog/mengapa-saya-tidak-bisa-login-di-aplikasi-myzuu/",
        code: "modal",
        modal1: "#comingsoon",
    },
    /* No */
];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("923696").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("923696").innerHTML += `
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
            document.getElementById("923696").innerHTML = "";
        }
        else {

            showgallery(filterarray);
            document.getElementById("para").style.display = 'none'
        }
    }

});