  $(function(){
// ПИШЕМ ФУНКЦИЮ СКРОЛЛА НАВ БАРА
// ДАТА СКРОЛЛ АТРИБУТ НА КОТОРОМ ЗАВЯЗАНЫ НАШИ АЙДИШНИКИ
$("[data-scroll]").on("click",function(event){
    // МЕТОДОМ ПРЕВЕНТ ДЕФОЛТ ОТМЕНЯЕМ ОСНОВНОЕ ПОВЕДЕНИЕ ССЫЛКИ И ПИШЕМ СВОЕ
event.preventDefault();
// СОЗДАЕМ ПЕРЕМЕННУЮ БЛОК АЙДИ в ней хранятся значения айди
blockid = $(this).data('scroll');
// создаем переменную смещения блока
blockoffset= $(blockid).offset().top;
// offset top это метод смещения мы в новую переменную кидаем наши айдишники и приписываем смещение от верха

// делаем селектор html и бади и вызываем метод анимейт для анимаций
    $("html,body").animate({
// так как анимация будет сверху страницы 
     scrollTop: blockoffset-50
      },700);
});

 });

    $(function(){
      // ПИШЕМ ФУНКЦИЮ СКРОЛЛА НАВ БАРА
    // ДАТА СКРОЛЛ АТРИБУТ НА КОТОРОМ ЗАВЯЗАНЫ НАШИ АЙДИШНИКИ
    $("[data-model]").on("click",function(event){
        // МЕТОДОМ ПРЕВЕНТ ДЕФОЛТ ОТМЕНЯЕМ ОСНОВНОЕ ПОВЕДЕНИЕ ССЫЛКИ И ПИШЕМ СВОЕ
    event.preventDefault();
    // НЕОБХОДИМО ОТОБРАЗИТЬ ОКНО ПРИСВОИМ ЕМУ КЛАСС
    // ВСЯ ЛОГИКА СОСТОИТ В ТОМ ЧТО МЫ ДОБАВЛЯЕМ КЛАСС К MODAL ПОД НАЗВАНИЕМ SHOW ЧТОБЫ ПОКАЗЫВАТЬ МОДАЛЬНОЕ ОКНО
    $(modal_resume).addClass('show');

    });

    $(modal_resume).on("click",function(){

        $(modal_resume).removeClass('show');
    })

 });