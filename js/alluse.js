//  點擊黑色區塊關閉rwd 

    document.addEventListener("click", (event) => {
    const rwdmemberElement = document.getElementById("rwdmember");
    const articleElement = document.querySelector(".rwd"); 

    if (event.target === articleElement) {
    rwdmemberElement.style.display = "none";
    }
    });

    // <!-- rwd導覽  進入/退出  -->

    $(function(){
        $('.nav-bar').click(function(){
            $('nav').animate({ left: '0' }, 300);
            $(this).hide();
            $('.nav-barX').show()
            $('.nav-bgc').show()
        });
        $('.nav-bgc').click(function() {
            $('nav').animate({ left: '-100%' }, 200);
            $(this).hide();
            $('.nav-barX').hide();
            $('.nav-bar').show()
        });
        $('.nav-barX').click(function() {
            $('nav').animate({ left: '-100%' }, 200);
            $(this).hide();
            $('.nav-bar').show();
            $('.nav-bgc').hide()
        });
    });

    // <!-- 註冊登入密碼 、縮小時footer內容改變 -->

        const passwordInput = document.getElementById("passwordInput");
        const passwordInput2 = document.getElementById("passwordInput2");
        const passwordToggle = document.getElementById("passwordToggle");
        const passwordToggle2 = document.getElementById("passwordToggle2");
        const passwordInput3 = document.getElementById("passwordInput3");
        const passwordToggle3 = document.getElementById("passwordToggle3");
        const loginTab = document.getElementById("loginTab");
        const signupTab = document.getElementById("signupTab");
        const loginPanel = document.getElementById("loginPanel");
        const signupPanel = document.getElementById("signupPanel");
        const close = document.getElementById('close')
        const rwdmember = document.getElementById('rwdmember')
        
        passwordToggle.addEventListener("click", function () {
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                passwordToggle.innerHTML =   `<i class="fa-solid rwd fa-eye"></i>`;
            } else {
                passwordInput.type = "password";
                passwordToggle.innerHTML = `<i class="fa-solid  rwd fa-eye-slash"></i>`;
            }
        });

        passwordToggle2.addEventListener("click", function () {
            if (passwordInput2.type === "password") {
                passwordInput2.type = "text";
                passwordToggle2.innerHTML =   `<i class="fa-solid rwd fa-eye"></i>`;
            } else {
                passwordInput2.type = "password";
                passwordToggle2.innerHTML = `<i class="fa-solid  rwd fa-eye-slash"></i>`;
            }
        });
        passwordToggle3.addEventListener("click", function () {
            if (passwordInput3.type === "password") {
                passwordInput3.type = "text";
                passwordToggle3.innerHTML =   `<i class="fa-solid rwd fa-eye"></i>`;
            } else {
                passwordInput3.type = "password";
                passwordToggle2.innerHTML = `<i class="fa-solid  rwd fa-eye-slash"></i>`;
            }
        });

        
        loginTab.addEventListener("click", function () {
            loginPanel.classList.remove("hidden");
            signupPanel.classList.add("hidden");
            loginTab.classList.add("active");
            signupTab.classList.remove("active");
        });
        
        signupTab.addEventListener("click", function () {
            loginPanel.classList.add("hidden");
            signupPanel.classList.remove("hidden");
            loginTab.classList.remove("active");
            signupTab.classList.add("active");
        });
        
        close.addEventListener("click", function(){
            rwdmember.style.display = "none";
        });
        
            memberLog.addEventListener("click", function(){
            rwdmember.style.display = "grid"; 
        });
            firstN.addEventListener("click", function(){
            rwdmember.style.display = "grid"; 
            signupPanel.classList.remove("hidden");
            loginPanel.classList.add("hidden");
            signupTab.classList.add("active");
            loginTab.classList.remove("active")
        });
        
        let maxWidthThreshold = 768; 
        let liElement1 = document.getElementById("memA"); 
        let liElement2 = document.getElementById("memR");
        let liElement3 = document.getElementById("memN");
        let liElement4 = document.getElementById("memC");
        
        
        function updateLiContent() {
        let currentWidth = window.innerWidth;
        
        if (currentWidth < maxWidthThreshold) {
            liElement1.innerHTML = `<a>關於書旅</a>`;
            liElement2.innerHTML = `<a href="allnews.html">書旅消息</a>`; 
            liElement3.innerHTML = `<a href="allnews.html">書旅消息</a>`;
            liElement4.innerHTML = `<a href="contactUs.html">聯絡我們</a>`;
        } else {
            liElement1.innerHTML = `<a>關於書旅</a>`;
            liElement2.innerHTML = ` <a href="allnews.html">書旅消息</a>
                            <ul>
                                <li>書旅小報</li>
                                <li>媒體報導</li>
                                <li>全部消息</li>
                            </ul>`; 
            liElement3.innerHTML =` <a href="allnews.html">書旅消息</a>
                            <ul>
                                <li>書旅小報</li>
                                <li>媒體報導</li>
                                <li>全部消息</li>
                            </ul>`;
        
            liElement4.innerHTML = `<a href="contactUs.html">聯絡我們</a>
                            <ul>
                                <li>聯絡地址</li>
                                <li>聯絡表單</li>
                            </ul>`
        }
        }
        
        
        window.addEventListener("resize", updateLiContent);
        
        
        updateLiContent();

        
        
        

