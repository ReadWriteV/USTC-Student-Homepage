function injectHeaderAndFooter(a) {
    $(function () {
        $(document).ready(function () {
            $("#header").html("/html/header.html", function () {
                $("li").eq(a).attr("class", "active");
            });
            $("#footer").load("/html/footer.html", function () {

            });
        });
    })
}