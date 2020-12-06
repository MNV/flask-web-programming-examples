$(function () {
    $(".js-countdown")
        .countdown("2021/01/01", function(event) {
            $(this).text(
                event.strftime('До 2021 года: %D дней  %H:%M:%S')
            );
        });

    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip();

    $(".js-click").on("click", function () {
        let text = "Вы сделали клик!"
        let click_counts = $(this).data("click-counts")
        if (click_counts === undefined) {
            $(".js-click").data("click-counts", 1)
        }
        if (click_counts > 0) {
            click_counts++;
            text = "Вы сделали еще один клик!"
            if (click_counts > 2) {
                text = "Вы сделали кликов: " + click_counts;
                if (click_counts > 10 && click_counts <= 20) {
                    text += " 😦";
                } else if (click_counts > 20 && click_counts <= 30) {
                    text += " 😨";
                } else if (click_counts > 30 && click_counts <= 40) {
                    text += " 😱";
                } else if (click_counts > 40) {
                    text += " 🤯";
                }
            }
            $(this).data("click-counts", click_counts);
        }
        $(".js-click-text").text(text);
    });

    $(".js-new-blocks")
        .on("click", ".js-add-block", function () {
            let newBlockText = "🎉 Ура! Новый блок! Кликните, чтобы обновить его.";
            let newBlock = $(".js-block-copy").clone();
            newBlock.removeClass("hidden").removeClass("js-block-copy");
            newBlock.find(".content").text(newBlockText);
            $(".js-new-blocks").append(newBlock);
        })
        .on("click", ".js-change-block", function () {
            let texts = [
                "Новый текст! 👏 Кликните еще раз.",
                "Текст обновился! 🎊 Нажмите еще раз.",
                "Новая надпись! 🥳 Попробуйте клинуть еще раз.",
                "Изменение текста! 👍 Нажмите еще раз.",
                "Содержимое поменялось! 🎉 Попробуйте нажать еще раз.",
            ];
            $(this).text(texts[Math.floor(Math.random() * texts.length)]);
        });

    $(".js-ajax-blocks").on("click", ".js-ajax-block", function () {
        let $this = $(this);
        let address = $(".js-address-value").val();
        setRequestData(address, $this);

        $($this).parent().find($(".js-address-block")).removeClass("hidden")
    }).on("click", ".js-ajax-button", function () {
        let address = $(".js-address-value").val();
        let $this = $(this).parents(".js-ajax-blocks").find(".js-ajax-block");
        setRequestData(address, $this);
    });
});

function setRequestData(query, element) {
    if (!query) {
        return
    }
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather",
        data: {
            q: query,
            lang: "ru",
            units: "metric",
            appid: "357c6ac11b2a3242c68fb28b6b0f050f",
        },
        success: function (data) {
            $(element).html(parseAPIWeatherData(data));
        },
        fail: function (data) {
            console.error(data);
        },
    });
}

function parseAPIWeatherData(data) {
    let text = "<p class='lead'>Погода в городе " + data.name + "</p>";
    text += " <p>Сейчас " + data.weather[0].description + ".<br />";
    text += " Температура воздуха: " + data.main.temp + "&nbsp;°C.";
    text += " Ощущается как: " + data.main.feels_like + "&nbsp;°C.</p>";
    text += "<small class='text-muted'>Данные предоставлены сервисом www.openweathermap.org</small>";

    return text
}