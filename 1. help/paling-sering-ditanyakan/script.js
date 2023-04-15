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

];

showgallery(galleryarray);

// create function to show card
function showgallery(curarra) {
    document.getElementById("search").innerText = "";

    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("search").innerHTML += `
        <section class="help-search-support">
        <div class="content">
            <div class="head">
                <h2>Apa Yang Anda Cari?</h2>
                <p>Cari Dibawah Kata Kunci Dibawah Ini.</p>
            </div>
            <div class="form-group with_icon m-0">
                <div class="input_group">
                    <input id="myinput" onkeyup="myFunction()" class="form-control border-0" type="search" placeholder="Cari Kata Kunci">
                    <div class="icon">
                        <i class="ri-search-2-line"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
               `
    }

}


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myinput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("378962");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}