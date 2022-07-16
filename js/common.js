function injectHeaderAndFooter(a) {
    $(function () {
        $(document).ready(function () {
            $("#header").load("/html/header.html", function () {
                $(".nav-link").eq(a).addClass("active");
                $(".nav-link").eq(a).attr("aria-current", "page")
                $("#header").attr("class", "sticky-top shadow-sm");
            });
            $("#footer").load("/html/footer.html");
        });
    })
}