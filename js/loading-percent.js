<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    document.addEventListener("readystatechange", function() {
    const loadingBar = document.querySelector(".line");

    function updateLoadingProgress() {
        const total = document.getElementsByTagName("*").length;
        const loaded = document.querySelectorAll(":not(script):not(link)").length;
        const progress = Math.round((loaded / total) * 100);
        loadingBar.style.width = progress + "%";
    }

        document.onreadystatechange = completeLoading;
        function completeLoading() {
            if (document.readyState === "interactive") {
                        updateLoadingProgress();
                    }

        if (document.readyState == "complete") {
            setTimeout(function() {
                $("#loading").animate({
                    "opacity": "0"
                }, 500).hide(1000);
            }, 1000);
        }
    }

    });
