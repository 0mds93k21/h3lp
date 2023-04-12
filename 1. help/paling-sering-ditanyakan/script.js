// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
        name: "Mengapa saya tidak bisa login di aplikasi Myzuu?",
        link: "/blog/38152674/",
        code: "",
        modal1: "#"
    },
    {
        id: 2,
        name: "Apa yang harus saya lakukan apabila salah memasukkan Security Code sbenayak 6 kali?",
        link: "/blog/15841438/",
        code: "",
        modal1: "#"
    },
    {
        id: 3,
        name: "Bagaimana jika transaksi pembelian tagihan berhasil dan saldo ZuuPay terpotong, tapi produk belum diterima?",
        link: "/blog/81224776/",
        code: "",
        modal1: "#"
    },
    {
        id: 4,
        name: "Apa yang harus saya lakukan ketika transaksi pembelian saya berhasil dan saldo ZuuPay saya sudah terpotong, tetapi belum diterima?",
        link: "/blog/82427683/",
        code: "",
        modal1: "#comingsoon"
    },
    /* Coming Soon /
    {
        id: 5,
        name: "Bagaimana cara transfer ke sesama member?",
        link: "/blog/66145327/",
        code: "!modal",
        modal1: "#comingsoon"
    },
    /* Coming Soon */
    {
        id: 6,
        name: "Bagaimana cara menutup akun Myzuu?",
        link: "/blog/",
        code: "modal",
        modal1: "#comingsoon"
    },
];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("378962").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("378962").innerHTML += `
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
            document.getElementById("378962").innerHTML = "";
        }
        else {

            showgallery(filterarray);
            document.getElementById("para").style.display = 'none'
        }
    }

});