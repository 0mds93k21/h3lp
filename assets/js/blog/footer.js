// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
        name: "Kirim Laporan",
        subname: "Masih belum terjawab?",
        code: "modal",
        modal1: "#customer-serv"
    },
];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("footer").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("footer").innerHTML += `
        <div class="space-sticky-footer"></div>
        <div class="footer">
            <div class="content">
                <div class="links-item-pages">
                ${curarra[i].subname}
                </div>
                <a href="javascript: void(0)" data-bs-toggle="${curarra[i].code}" data-bs-target="${curarra[i].modal1}" class="btn btn-bid-items">
                    <p>${curarra[i].name}</p>
                </a>
            </div>
        </div>

        <!--  Coming Soon  -->
        <div class="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id="comingsoon" tabindex="-1"
        aria-labelledby="modalBioDetails" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="icon-socialNetworks">
                        <h2 class="size-16 weight-500 text-dark margin-b-10">Segera Hadir</h2>
                    </div>
                    <button type="button" class="btn btnClose" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ri-close-fill"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="content-upload-item">
                        <p>
                            Halo Kak, untuk artikel ini masih dalam masa pengembangan ya tunggu beberapa hari lagi agar
                            dapat kami publish
                        </p>

                    </div>

                </div>
                <div class="modal-footer border-0">
                    <div class="env-pb"></div>
                </div>
            </div>
        </div>
    </div>
    <!--  Coming Soon  -->

    <!-- Multi Modal -->
    <div class="modal transition-bottom screenFull defaultModal mdlladd__rate fade" id="customer-serv" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="title-modal">Laporkan Masalah</h1>
                    <button type="button" class="btn btnClose" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ri-close-fill"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="content-upload-item">
                        <p class="text-center">
                            Laporkan Masalah Ini Jika Belum Membantu
                        </p>
                        <div class="un-navMenu-default margin-t-30 p-0">
                            <ul class="nav flex-column">

                                <li class="nav-item mb-3">
                                    <a class="nav-link effect-click" href="https://go.crisp.chat/chat/embed/?website_id=5aa363c5-7d5a-4765-a85a-aef221332290">
                                        <div class="item-content-link">
                                            <div class="icon color-text w-auto">
                                                <i class="ri-chat-1-line"></i>
                                            </div>
                                            <h3 class="link-title">Live Chat Support</h3>
                                        </div>
                                        <div class="other-cc">
                                            <span class="badge-text"></span>
                                            <div class="icon-arrow">
                                                <i class="ri-arrow-drop-right-line"></i>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                
                            </ul>
                        </div>

                    </div>

                </div>
                <div class="modal-footer border-0">
                    <div class="env-pb"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- Multi Modal -->
               `
    }

}