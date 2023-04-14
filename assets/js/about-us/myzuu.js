// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
        name: "Kirim Laporan",
        subname: "Masih belum terjawab?",
        code: "modal",
        modal1: "#comingsoon"
    },
];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("wrapper").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("wrapper").innerHTML += `
        <!-- ===================================
              START THE BRAND
            ==================================== -->
            <section class="un-brand-about margin-t-0">
                <img class="brand_img light-mode" src="images/logo_b.svg" alt="">
                <img class="brand_img dark-mode" src="images/logo-white.svg" alt="">
                <p>Version 8 - Copyright</p>
            </section>
            <!-- ===================================
              START THE DESCRIPTION
            ==================================== -->
            <section class="about-section">
                <div class="descriptio">
                    <h2>Apa itu Myzuu?</h2>
                    <p>
                        Myzuu adalah aplikasi top-up berbagai macam game, pulsa, token, dll dalam satu aplikasi saja. Kami juga akan memberikan promo setiap event yang ada dalam game yang anda mainkan tentunya.
                    </p>
                </div>
            </section>
            <!-- ===================================
              START THE COPYRIGHT MARK
            ==================================== -->
            <section class="copyright-mark margin-t-40">
                <div class="content">
                    <p class="margin-b-20">Copyright © Myzuu 2022</p>
                </div>
                <ul class="nav social-networks-footer">
                    <a class="nav-link instagram" href="https://www.instagram.com/myzuu.topup/">
                        <i class="ri-instagram-fill"></i>
                    </a>
                </ul>
            </section>
        </div>
               `
    }

}