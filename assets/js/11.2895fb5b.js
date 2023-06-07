(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{306:function(t,r,e){t.exports=e.p+"assets/img/11-2-1.ccc494c9.jpg"},307:function(t,r,e){t.exports=e.p+"assets/img/11-2-2.c9e2cfe0.jpg"},328:function(t,r,e){"use strict";e.r(r);var _=e(13),s=Object(_.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_11-часто-задаваемые-вопросы"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-часто-задаваемые-вопросы"}},[t._v("#")]),t._v(" 11. Часто задаваемые вопросы")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("Проблема с торговым подключением к бирже: робот не выставляет заявки/не видит сделки, но ситуация не позволяет остановить торговлю.")])])]),t._v(" "),r("ol",[r("li",[t._v("Напишите письмо в поддержку с описанием проблемы;")]),t._v(" "),r("li",[t._v("Выключите торговлю по всем портфелям, торгующим через данное транзакционное подключение, убедитесь, что не осталось активных заявок;")]),t._v(" "),r("li",[r("RouterLink",{attrs:{to:"/docs/03-getting-started.html#_3-4-3-сброс-статусов-заявок-робота"}},[t._v("Сбросьте статусы заявок")]),t._v(" по всем портфелям из пункта 2;")],1),t._v(" "),r("li",[t._v("Преподключите проблемное транзакционное подключение;")]),t._v(" "),r("li",[t._v("Включите торговлю по портфелям из пункта 2;")]),t._v(" "),r("li",[t._v("Если в течении пары часов проблема повторится, то выключите торговлю по всем портфелям, торгующим через данное транзакционное подключение, и больше не включайте, пока не получите ответ от поддержки.")])]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("Торговля включается и выключается самопроизвольно. С чем это связано?")]),r("br"),t._v("\nСкорее всего задано расписание для торговли.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Робот не торгует. Практически все подключения отключены. В чём может быть дело?")]),r("br"),t._v("\nСамая вероятная причина такого поведения - истёк срок лицензии. Проверьте сколько дней осталось до окончания лицензии.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Отсутствует нужный инструмент в списке инструментов биржи. Где его взять?")]),r("br"),t._v("\nСписок бумаг в роботе обновляется каждое утро в 9:25 по Москве, чтобы выгрузить список бумаг нажмите Reload security list from exchanges. Важно: время на серверах с крипто-роботами -3 часа от Москвы. Если вы не видите какой-то бумаги в списке бумаг (при этом вы обновили список), а эта бумага уже есть на бирже, то либо дождитесь указанного выше времени и бумага добавится сама, либо переподключите дата подключение и после этого обновите список бумаг.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v('Робот ставит заявки по второй ноге в "непонятном", неправильном объеме. Как это исправить?')]),r("br"),t._v("\nДанная ситуация может возникать после какого-либо сбоя на бирже, когда биржа не прислала необходимую информацию по заявкам робота и в роботе зависли внутренние статусы заявок. В данной ситуации необходимо остановить торговлю по проблемному портфелю, убедиться что по данному портфелю нет активных заявок в рынке и сбросить статусы заявок, нажав кнопку Reset statuses.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Добавил портфель, все подключения к биржам подключены, торговля включена, но заявки по первой ноге не выставляются. В чём дело?")]),r("br"),t._v('\nПри наведении на имя портфеля в списке портфелей появляется всплывающая подсказка. В ней отдельно для покупки и продажи первой ноги указывается, чего не хватает роботу для выставления заявки.\nНапример, строка всплывающей подсказки для продажи портфеля имеет такой вид: "sell: is signal=1, quantity=5, is valid market volume=1, is price check=0, is max not hedged=1, is orderbook valid=1". is_signal означает, есть ли сигнал на покупку (т.е. либо мы сейчас котируем, либо выполняется условие на Sell и Lim_sell). Если сигнал есть, то 1, иначе 0. Значения всех проверок могут быть только 0 или 1, если не указано иное. quantity показывает заявку какого объёма мы хотим выставить, исходя из заданных параметров портфеля. Заявка будет выставлена только при положительном значении объёма. Отрицательный объём не является ошибкой, это лишь результат расчётов. is valid market volume указывает прошла ли проверка на одноименный параметр. is price check указывает прошла ли проверка на одноименный параметр. is max not hedged указывает на выполнение или невыполнение условия max not hedged для заявок по второй ноге. is orderbook valid отвечает за внешние признаки валидности стакана. Если стороны стакана на покупку и продажу пересекаются, то стакан не считается валидным. Таким образом, заявка выставляется только когда все значения больше нуля.')])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Добавил портфель, изменял настройки, а они не применились и портфель исчез, что происходит?")]),r("br"),t._v("\nПроверьте, одни ли вы редактируете что-либо в роботе, возможно ваш коллега делает тоже самое и вы мешаете друг другу.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Почему по несколько раз выставляется объем на одинаковой раздвижке? Параметр К у меня равен 1.")]),r("br"),t._v("\nSell стал сильно больше Lim_sell. И при подвижке на К мы догоняли цену на бирже.\nПример: Вы хотите продать по 100, К=1. В какой то момент цена подскакивает и становится равна 105. И вы продаёте по 105, но при этом робот, по алгоритму продал по 100, затем подвинул на К, стал продавать по 101. Продал снова по 105, робот снова подвинул на К, стало 102 и снова продал по 105 и т.д.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Как уменьшить количество проскальзываний?")]),r("br"),t._v('\nУвеличьте параметр k (малое) для второй "ноги". Это действие уменьшит ваш Take profit, но увеличит вероятность хеджа.\nМожете поставить второй ногой биржу с меньшим Round trip\'ом.')])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("У меня часто выскакивает ошибка REASON_FLOOD, что делать чтобы её избежать?")]),r("br"),t._v("\nЕсли ошибка возникает при выставлении заявок по "),r("RouterLink",{attrs:{to:"/docs/05-params-description.html#_5-3-11-is-first"}},[t._v("Is first")]),t._v(" инструменту:\nРаз у вас возникает такая ошибка, значит вы используете режим котирования ("),r("RouterLink",{attrs:{to:"/docs/05-params-description.html#_5-2-6-quote"}},[t._v("Quote")]),t._v('). Можно попробовать торговать не в режиме котирования, тогда транзакции будут отправляться реже. Если без режима котирования не обойтись, то стоит обратить внимание на параметры группы "Anti-spam", в частности на параметр '),r("RouterLink",{attrs:{to:"/docs/05-params-description.html#_5-2-12-delta"}},[t._v("Delta")]),t._v(".\nDelta - это отклонение price_s/b от цены выставленной заявки, после которого заявка переставляется, то есть отправляется транзакция. Вам необходимо выставлять её таким образом, чтобы заявка не переставлялась от малейших колебаний. То есть, например, вы торгуете BTCUSD, и его стоимость 10 000. Вы ставите "),r("RouterLink",{attrs:{to:"/docs/05-params-description.html#_5-2-12-delta"}},[t._v("Delta")]),t._v(" равным единице. Какова вероятность изменения price_s/b на доллар в случае, когда инструмент стоит 10 000 долларов? Вероятность велика, за секунду может несколько раз измениться цена на этот доллар и каждый раз робот будет отправлять приказы на удаление старой заявки и установки новой. Так и происходит спам биржи. Если поставить Delta равным 5-10, то вероятность заспамить биржу уменьшится, так как должно произойти более весомое изменение, для отправления заявок.\nНастройте параметр "),r("RouterLink",{attrs:{to:"/docs/05-params-description.html#_5-2-14-market-volume"}},[t._v("Market volume")]),t._v(". Если перед вами будет стоять большой объем, значит смысла сейчас стоять особого нет и можно так же не спамить биржу переставлениями."),r("br"),t._v(" "),r("strong",[t._v("Важно:")]),t._v(' в режиме торговли bid/offer данный параметр "видит" только объемы бида и оффера. Это значит, что если за ними еще стоят объемы, то робот их не увидит и будет ставить заявки. Потому используйте данный параметр преимущественно в режиме orderbook и orderbook+filter.'),r("br"),t._v("\nПараметр "),r("RouterLink",{attrs:{to:"/docs/05-params-description.html#_5-2-15-price-check"}},[t._v("Price check")]),t._v(". Если price_s/b отличается от bid/offer больше чем на "),r("RouterLink",{attrs:{to:"/docs/05-params-description.html#_5-2-15-price-check"}},[t._v("Price check")]),t._v(" шагов цены, то не выставляемся и снова не спамим биржу. Естественно чем меньше значение, тем меньше спама.\nТакже можно установить большой TP, чтобы брать реже, но больше."),r("br"),t._v(" "),r("strong",[t._v("Если ошибка возникает при выставлении заявок по не Is first инструментам:")]),r("br"),t._v("\nВидимо, заявку по первой ноге разбирают маленькими порциями, и после каждой такой сделки происходит выставление заявок по инструментам второй ноги. Обратите внимание на параметр Overlay, он позволяет выставлять хеджирующие заявки не после каждой сделки по первой ноге.")],1)]),t._v(" "),r("li",[r("p",[r("strong",[t._v("На московской бирже задержки у подключения очень большие, с чем это может быть связано и как исправить?")]),r("br"),t._v("\nЭти задержки - индикатор загрузки биржевого шлюза в моменты бросания. Они отражают среднее время за весь день, требующееся МБ, чтобы обработать вашу заявку. Это значит, что вы часто бросаете заявки в моменты, когда торговый шлюз загружен. Задержки можно уменьшить, если работать одновременно через несколько фикс подключений к разным пром-серверам. Т.е. заказать еще дополнительно 2 фикс логина для фондового рынка к этому счету. Мы подключим их к резервным фикс серверам МБ. И объединим в группу - так называемый алгоритм бросания Round-robin, который меряет roundtrip для вкусных заявок и первую заявку всегда бросает в самый быстрый коннект.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Сегодня на бирже были добавлены новые бумаги, но в роботе я их не вижу. Что делать?")]),r("br"),t._v("\nНовые бумаги выгружаются рано утром и робот мог не успеть подгрузить их. Нужно переподключить дата подключение бирже. Затем обновите список бумаг и новые инструменты будут доступны вам.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Возможно ли как-то настроить робота, чтобы он перекрывал часть Is_first ноги, если по ней набрано меньше 5 контрактов? Условно 2 набрал по первой ноге, перекрыл 3 на второй ноге (При этом сохранив Count 5 к 8)?")]),r("br"),t._v("\nВводные данные: Curpos=19, Count=5"),r("br"),t._v("\nПо умолчанию позиция портфеля округляется вниз до целого значения Curpos деленный на Count (главная нога), соответственно и хедж будет происходить при изменении позиции портфеля."),r("br"),t._v("\nПри n_perc_fill=0, округление по модулю вниз, т.е. |19/5=3|;"),r("br"),t._v("\nПри n_perc_fill=80:"),r("br"),t._v("\nПредположим, позиция изменилась стала Curpos=18, целая часть от деления |18/5|=3 - не изменилась,\nостаток от деления =3. (100 - n_perc_fill)=100-80=20, 20% от count (т.е. от 5) =1, 80% от count =4."),r("br"),t._v("\nОстаток от деления 3 находится в диапазоне между 1 и 4, значит позиция по портфелю не меняется. Pos=3."),r("br"),t._v("\nТаким образом видно, что позиция изменится в меньшую сторону при Curpos<=15 и в большую сторону при Curpos>=20.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Какие системные требования?")]),r("br"),t._v("\nРабота сайта тестировалась в браузере Google Chrome. Сайт передает большое количество данных, поэтому на компьютере рекомендуется иметь минимум 4ГБ оперативной памяти и минимум 2 ядра процессора. Также необходимо открыть доступ к сайту "),r("a",{attrs:{href:"https://bot.fkviking.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("bot.fkviking.com"),r("OutboundLink")],1),t._v(" в фаерволе.")])])]),t._v(" "),r("h2",{attrs:{id:"_11-1-roundtrip-торговых-подключении"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-roundtrip-торговых-подключении"}},[t._v("#")]),t._v(" "),r("strong",[t._v("11.1. Roundtrip торговых подключений")])]),t._v(" "),r("p",[t._v("Раундтрип ваших заявок можно посмотреть в реальном времени для каждого торгового подключения в "),r("code",[t._v("Connections")]),t._v(" робота. Нужно навести мышь на поле "),r("code",[t._v("Trans count")]),t._v(" таблицы "),r("code",[t._v("Trade connections")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"_11-2-roudtrip-статистикa-серверов"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-roudtrip-статистикa-серверов"}},[t._v("#")]),t._v(" "),r("strong",[t._v("11.2. Roudtrip статистикa серверов")])]),t._v(" "),r("p",[t._v("На всех серверах, с которых производится торговля на криптобиржах, осуществляется измерение двух значений: "),r("code",[t._v("Average ping speed in milliseconds:")]),t._v(" и "),r("code",[t._v("Average HTTP reqest response speed in seconds:")]),t._v(".")]),t._v(" "),r("p",[r("code",[t._v("Average ping speed in milliseconds:")]),t._v(" это время из команды ping, является средним значением времени из 10 попыток. Время из пинга вынимается так:")]),t._v(" "),r("p",[r("code",[t._v("ping URL -c 1 | grep time= | awk -F\"time=\" '{print $2}' | awk '{ print $1; }'")])]),t._v(" "),r("p",[t._v("Данный запрос позволяет лишь судить о расстоянии от сервера до биржи, но не учитывает время обработки заявки на бирже.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(306),alt:"Alt text"}})]),t._v(" "),r("p",[r("strong",[t._v("Average HTTP reqest response speed in seconds")]),t._v(": %{time_total} из запроса отправленного с помощью "),r("a",{attrs:{href:"https://ru.wikipedia.org/wiki/CURL",target:"_blank",rel:"noopener noreferrer"}},[t._v("cURL"),r("OutboundLink")],1),t._v(", является средним из 10 попыток.")]),t._v(" "),r("p",[t._v("По сути своей показывает время, между отправкой запроса робота на получение необходимой ему информации и получением ответа от биржи.")]),t._v(" "),r("p",[r("img",{attrs:{src:e(307),alt:"Alt text"}})]),t._v(" "),r("p",[r("strong",[t._v("НЕ")]),t._v(" нужно сравнивать одну биржу с другой по этим данным, особенно по http запросам/ответам. Данные значения позволяют судить о текущей скорости доступа к одной бирже с разных серверов.")])])}),[],!1,null,null,null);r.default=s.exports}}]);