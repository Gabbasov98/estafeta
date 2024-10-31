$("._tab").click(function() {
    let parentBlock = $(this).parents("._tabs-parent")
    let tabId = $(this).attr("data-tab")
    $(parentBlock).find("._tab").removeClass("is-active")
    $(this).addClass("is-active")
    $(parentBlock).find(".tab-content").removeClass("is-active")
    $(parentBlock).find(`.${tabId}`).addClass("is-active")
})

$(".hero-card__btn").click(function (){
    $(this).parents(".hero-card").toggleClass("_open")
    $(this).parents(".hero-card").find(".hero-card__col2").slideToggle();
})