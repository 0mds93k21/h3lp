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
    document.getElementById("profile").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("profile").innerHTML += `
        <section class="un-navMenu-default without-visit">
        <ul class="nav flex-column">
            <div class="sub-title-pkg">
                <h2>Akun dan Keamanan</h2>
            </div>

            <li class="nav-item">
                <a class="nav-link" href="https://myzuu.webtoko.net/digital/202202">
                    <div class="item-content-link">
                        <h3 class="link-title">Ajak teman</h3>
                    </div>
                    <div class="other-cc">
                        <span class="badge-text"></span>
                        <div class="icon-arrow">
                            <i class="ri-arrow-drop-right-line"></i>
                        </div>
                    </div>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="https://myzuu.webtoko.net/akun/?page=profil">
                    <div class="item-content-link">
                        <h3 class="link-title">Ubah data akun</h3>
                    </div>
                    <div class="other-cc">
                        <span class="badge-text"></span>
                        <div class="icon-arrow">
                            <i class="ri-arrow-drop-right-line"></i>
                        </div>
                    </div>
                </a>
            </li>

            <div class="sub-title-pkg">
                <h2>Keamanan</h2>
            </div>

            <li class="nav-item">
                <a class="nav-link" href="https://myzuu.webtoko.net/akun/?page=pin">
                    <div class="item-content-link">
                        <h3 class="link-title">Pengaturan PIN</h3>
                    </div>
                    <div class="other-cc">
                        <div class="icon-arrow">
                            <i class="ri-arrow-drop-right-line"></i>
                        </div>
                    </div>
                </a>
            </li>

            <div class="sub-title-pkg">
                <h2>Info Lainnya</h2>
            </div>

            <!-- About --
            <li class="nav-item">
                <a class="nav-link visited" href="https://myzuu.webtoko.net/digital/194780">
                    <div class="item-content-link">
                        <h3 class="link-title">Syarat dan Ketentuan</h3>
                    </div>
                    <div class="other-cc">
                        <span class="badge-text"></span>
                        <div class="icon-arrow">
                            <i class="ri-arrow-drop-right-line"></i>
                        </div>
                    </div>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link visited" href="">
                    <div class="item-content-link">
                        <h3 class="link-title">Kebijakan Privasi</h3>
                    </div>
                    <div class="other-cc">
                        <span class="badge-text"></span>
                        <div class="icon-arrow">
                            <i class="ri-arrow-drop-right-line"></i>
                        </div>
                    </div>
                </a>
            </li>
            <!-- About -->

            <li class="nav-item">
                <a class="nav-link visited" href="https://myzuu.webtoko.net/digital/194780">
                    <div class="item-content-link">
                        <h3 class="link-title">Help Center</h3>
                    </div>
                    <div class="other-cc">
                        <span class="badge-text"></span>
                        <div class="icon-arrow">
                            <i class="ri-arrow-drop-right-line"></i>
                        </div>
                    </div>
                </a>
            </li>

            <div class="sub-title-pkg">
                <h2>we'll miss you</h2>
            </div>

            <li class="nav-item">
                <a class="nav-link" href="https://myzuu.webtoko.net/akun/?page=logout">
                    <div class="item-content-link">
                        <div class="icon bg-snow text-dark">
                            <i class="ri-logout-box-r-line"></i>
                        </div>
                        <h3 class="link-title">Sign Out</h3>
                    </div>
                    <div class="other-cc">
                        <span class="badge-text size-18">😟</span>
                        <div class="icon-arrow">
                            <i class="ri-arrow-drop-right-line"></i>
                        </div>
                    </div>
                </a>
            </li>


        </ul>
    </section>
               `
    }

}