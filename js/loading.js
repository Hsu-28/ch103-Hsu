<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    document.onreadystatechange = completeLoading;
    function completeLoading() {
    if (document.readyState == "complete") {
        setTimeout(function() {
            $("#loading").animate({
                "opacity": "0"
            }, 500).hide(1000);
        }, 1000);
    }
}
