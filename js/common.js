function injectHeaderAndFooter(a) {
    $(function () {
        $(document).ready(function () {
            $("#header").load("/html/header.html", function () {
                $("li").eq(a).attr("class", "active");
                $("#header").attr("class", "sticky-top shadow-sm");

            });
            $("#footer").load("/html/footer.html");
        });
    })
}