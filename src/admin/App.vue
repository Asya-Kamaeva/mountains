<template lang="pug">
  .maincontent
    header.header
      .container
        .header__content
            .header__img
              img(src="../images/content/user.jpg").header__img_i
            .header__name Камаева Ася
            .header__admin Панель администрирования
            a(href="#").header__exit Выйти
    nav.nav
      .container
        .nav__content
          a(href="#").nav__item.nav__item_active
            .nav__link Обо мне
          a(href="#").nav__item
            .nav__link Работы
          a(href="#").nav__item
            .nav__link Отзывы
    section.about
      .container
        .about__content
          .about__header
            h2.about__title Блок "Обо мне"
            a(href="#").about__link
              .plus__small
              .about__link_name Добавить группу
          ul.about__block
            li.about__item
              .about__item_header
                input(type="text" placeholder="Название новой группы").about__item_new
                .about__item_control
                  a(href="#").about__item_link
                    svg(fill="#15951c" viewBox="0 0 342.357 342.357" width="15px" height="12px").about__item_svg
                      polygon(points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606")
                  a(href="#").about__item_link
                    svg(fill="#bf2929" viewBox="0 0 1000 1000" width="15px" height="12px").about__item_svg
                      path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")
              .about__item_content
              
              .about__item_footer
                input(type="text" placeholder="Новый навык").about__item_skill
                input(type="text" placeholder="100%").about__item_percent
                .about__item_add
                  .plus

            li.about__item
              .about__item_header
                input(type="text" placeholder="Workflow").about__item_input
                .about__item_control
                  a(href="#").about__item_link
                    svg(fill="#15951c" viewBox="0 0 342.357 342.357" width="15px" height="12px").about__item_svg
                      polygon(points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606")
                  a(href="#").about__item_link
                    svg(fill="#bf2929" viewBox="0 0 1000 1000" width="15px" height="12px").about__item_svg
                      path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")
              .about__item_content
                table.about__table
                  tr.about__table_row
                    td.about__table_name Git
                    td.about__table_percent 90 %
                    td.about__table_block
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="16px" height="15px" viewBox="0 0 528.899 528.899").about__table_svg
                          path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="13px" height="15px" viewBox="0 0 459 459").about__table_svg
                          path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
                  tr.about__table_row
                    td.about__table_name Terminal
                    td.about__table_percent 80 %
                    td.about__table_block
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="16px" height="15px" viewBox="0 0 528.899 528.899").about__table_svg
                          path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="13px" height="15px" viewBox="0 0 459 459").about__table_svg
                          path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
                  tr.about__table_row
                    td.about__table_name Gulp
                    td.about__table_percent 80 %
                    td.about__table_block
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="16px" height="15px" viewBox="0 0 528.899 528.899").about__table_svg
                          path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="13px" height="15px" viewBox="0 0 459 459").about__table_svg
                          path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
                  tr.about__table_row
                    td.about__table_name Webpack
                    td.about__table_percent 50 %
                    td.about__table_block
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="16px" height="15px" viewBox="0 0 528.899 528.899").about__table_svg
                          path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="13px" height="15px" viewBox="0 0 459 459").about__table_svg
                          path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
              
              .about__item_footer
                input(type="text" placeholder="Новый навык").about__item_skill
                input(type="text" placeholder="100%").about__item_percent
                .about__item_add
                  .plus


            li.about__item
              .about__item_header
                input(type="text" placeholder="Frontend").about__item_input
                .about__item_control
                  a(href="#").about__item_link
                    svg(fill="#15951c" viewBox="0 0 342.357 342.357" width="15px" height="12px").about__item_svg
                      polygon(points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606")
                  a(href="#").about__item_link
                    svg(fill="#bf2929" viewBox="0 0 1000 1000" width="15px" height="12px").about__item_svg
                      path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")
              .about__item_content
                table.about__table
                  tr.about__table_row
                    td.about__table_name Html5
                    td.about__table_percent 90 %
                    td.about__table_block
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="16px" height="15px" viewBox="0 0 528.899 528.899").about__table_svg
                          path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="13px" height="15px" viewBox="0 0 459 459").about__table_svg
                          path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
                  tr.about__table_row
                    td.about__table_name CSS3
                    td.about__table_percent 80 %
                    td.about__table_block
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="16px" height="15px" viewBox="0 0 528.899 528.899").about__table_svg
                          path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="13px" height="15px" viewBox="0 0 459 459").about__table_svg
                          path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
                  tr.about__table_row
                    td.about__table_name JavaScript
                    td.about__table_percent 60 %
                    td.about__table_block
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="16px" height="15px" viewBox="0 0 528.899 528.899").about__table_svg
                          path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="13px" height="15px" viewBox="0 0 459 459").about__table_svg
                          path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
                  tr.about__table_row
                    td.about__table_name Jquery и Vue.js
                    td.about__table_percent 50 %
                    td.about__table_block
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="16px" height="15px" viewBox="0 0 528.899 528.899").about__table_svg
                          path(d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z")
                      a(href="#").about__table_link
                        svg(fill="#414c63" width="13px" height="15px" viewBox="0 0 459 459").about__table_svg
                          path(d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5H51v51h357V25.5z")
              
              .about__item_footer
                input(type="text" placeholder="Новый навык").about__item_skill
                input(type="text" placeholder="100%").about__item_percent
                .about__item_add
                  .plus

    section.work  
      .container
        .work__content
          h2.work__title Блок "Работы"
          .work__edit
            .work__capture Редактирование работы
            .work__part
              .work__left
                .work__download
                  .work__download_text Перетащите или загрузите изображения
                  button.work__download_btn Загрузить
              .work__right
                .work__row
                  .work__name Название
                  input(type="text" placeholder="Дизайн сайта для автосалона Porshe" required).work__input
                .work__row
                  .work__name Ссылка
                  input(type="url" placeholder="https://www.porshe-pulkovo.ru").work__input
                .work__row
                  .work__name Описание
                  textarea(rows="4" cols="30" placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей" required).work__textarea
                .work__row
                  .work__name Добавление тега
                  input(type="text" placeholder="CSS, JavaScript, HTML5" required).work__input
                .work__tag
                  .work__tag_item
                    .work__tag_name CSS
                    button.work__tag_btn
                      .work__tag_del
                  .work__tag_item
                    .work__tag_name HTML
                    button.work__tag_btn
                      .work__tag_del
                  .work__tag_item
                    .work__tag_name JavaScript
                    button.work__tag_btn
                      .work__tag_del

                .work__btn
                  input(type="reset" value="Отмена").work__btn_reset
                  input(type="submit" value="Сохранить").work__btn_submit

          ul.work__list
            li.work__item
              a(href="").add-elem
                .add-elem__icon
                  .add-elem__plus
                .add-elem__text Добавить работу
            li.work__item
              .work__item_img
                img(src="../images/content/work-1.png")
              .work__item_content
                .work__item_title Cайт школы образования
                p.work__item_text Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").work__item_link http://loftschool.ru
                .work__item_btn
                  a(href="#").work__item_edit
                    .work__item_name Править
                    .work__item_icon
                      svg(fill="#383bcf" viewBox="0 0 342.357 342.357" width="17px" height="17px").work__item_svg
                        polygon(points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606")
                  a(href="#").work__item_edit
                    .work__item_name Удалить
                    .work__item_icon
                      svg(fill="#bf2929" viewBox="0 0 1000 1000" width="15px" height="12px").about__item_svg
                        path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")
            li.work__item
              .work__item_img
                img(src="../images/content/work-2.png")
              .work__item_content
                .work__item_title Cайт школы образования
                p.work__item_text Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").work__item_link http://loftschool.ru
                .work__item_btn
                  a(href="#").work__item_edit
                    .work__item_name Править
                    .work__item_icon
                      svg(fill="#383bcf" viewBox="0 0 342.357 342.357" width="17px" height="17px").work__item_svg
                        polygon(points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606")
                  a(href="#").work__item_edit
                    .work__item_name Удалить
                    .work__item_icon
                      svg(fill="#bf2929" viewBox="0 0 1000 1000" width="15px" height="12px").about__item_svg
                        path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")
            li.work__item
              .work__item_img
                img(src="../images/content/work-2.png")
              .work__item_content
                .work__item_title Cайт школы образования
                p.work__item_text Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href="#").work__item_link http://loftschool.ru
                .work__item_btn
                  a(href="#").work__item_edit
                    .work__item_name Править
                    .work__item_icon
                      svg(fill="#383bcf" viewBox="0 0 342.357 342.357" width="17px" height="17px").work__item_svg
                        polygon(points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606")
                  a(href="#").work__item_edit
                    .work__item_name Удалить
                    .work__item_icon
                      svg(fill="#bf2929" viewBox="0 0 1000 1000" width="15px" height="12px").about__item_svg
                        path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")
    section.reviews  
      .container
        .reviews__content
          h2.reviews__title Блок "Отзывы"
          .reviews__edit
            .reviews__capture Новый отзыв
            .reviews__part
              .reviews__left
                .reviews__newuser
                  .reviews__newuser_logo
                    svg(fill="#fff" viewBox="0 0 482.9 482.9").reviews__newuser_svg
                      path(d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z")
                      path(d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z")
                  button.reviews__newuser_btn Добавить фото
              .reviews__right
                .reviews__row.reviews__row_dbl
                  .reviews__each
                    .reviews__name Имя автора
                    input(type="text" placeholder="Ковальчук Дмитрий" required).reviews__input
                  .reviews__each
                    .reviews__name Титул автора
                    input(type="text" placeholder="Титул автора").reviews__input
                .reviews__row
                  .reviews__name Отзыв
                  textarea(rows="4" cols="30" placeholder="Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!" required).reviews__textarea

                .reviews__btn
                  input(type="reset" value="Отмена").reviews__btn_reset
                  input(type="submit" value="Сохранить").reviews__btn_submit

          ul.reviews__list
            li.reviews__item
              a(href="").add-elem
                .add-elem__icon
                  .add-elem__plus
                .add-elem__text Добавить отзыв
            li.reviews__item
              .reviews__user
                .reviews__user_photo
                  img(src="../images/content/user.jpg").reviews__user_img
                .reviews__user_block
                  .reviews__user_name Владимир Сабанцев
                  .reviews__user_job Преподователь
              .reviews__item_content
                p.reviews__item_text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .reviews__item_btn
                  a(href="#").reviews__item_edit
                    .reviews__item_name Править
                    .reviews__item_icon
                      svg(fill="#383bcf" viewBox="0 0 342.357 342.357" width="17px" height="17px").reviews__item_svg
                        polygon(points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606")
                  a(href="#").work__item_edit
                    .reviews__item_name Удалить
                    .reviews__item_icon
                      svg(fill="#bf2929" viewBox="0 0 1000 1000" width="15px" height="12px").reviews__item_svg
                        path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")
            li.reviews__item
              .reviews__user
                .reviews__user_photo
                  img(src="../images/content/user.jpg").reviews__user_img
                .reviews__user_block
                  .reviews__user_name Владимир Сабанцев
                  .reviews__user_job Преподователь
              .reviews__item_content
                p.reviews__item_text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .reviews__item_btn
                  a(href="#").reviews__item_edit
                    .reviews__item_name Править
                    .reviews__item_icon
                      svg(fill="#383bcf" viewBox="0 0 342.357 342.357" width="17px" height="17px").reviews__item_svg
                        polygon(points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606")
                  a(href="#").work__item_edit
                    .reviews__item_name Удалить
                    .reviews__item_icon
                      svg(fill="#bf2929" viewBox="0 0 1000 1000" width="15px" height="12px").reviews__item_svg
                        path(d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z")

    section.login   
      
      .login__content
        a(href="#").login__exit
          .login__exit_block
        .login__capture Авторизация
        .login__block
          span.login__title Логин
          .login__part
            svg(fill="#000" viewBox="0 0 482.9 482.9").login__icon
              path(d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z")
              path(d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z")
            input.login__input(type="text" placeholder="Terminator_01" name="name" required)
          .login__error
        .login__block
          span.login__title Пароль
          .login__part
            svg(fill="#000" viewBox="0 0 482.9 482.9").login__icon
              path(d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z")
              path(d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z")
            input.login__input(type='password' name="email" required)
          .login__error
        input.login__button(type='submit' value='Отправить' name='button')


</template>

<style lang="postcss">
  @import "normalize.css";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import url('../styles/layout/base.pcss');
  @import url('../styles/mixins.pcss');
  /* @import url('../styles/variables.json'); */

//base
  
    body,
    html {
      height: 100%;
    }

    body {
      font-family: 'Open Sans', Helvetica, sans-serif;
      font-size: 16px;
      line-height: 1.42;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: $text-color;
    }

    .wrapper {
      overflow: hidden;
      min-height: 100%;
      position: relative;
    }

    .container {
      margin: 0 auto;
      max-width: 1480px;
      width: 95%;
      // width: 1490px;

    }

    .fullscreen-section {
      height: 100vh;
      min-height: 650px;
    }

    button {
      border: 0;
      cursor: pointer;
    }

    * {
      box-sizing: border-box;
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: normal;
      margin: 0;
    }

    h2{
      font-family: "Open Sans";
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;


    }

    h3{
      font-family: "Open Sans";
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    }

    p {
      margin: 0;
      padding: 0;
    }

    button[type="button"] {
      cursor: pointer;
      background-color: transparent;
    }

    a {
      color: inherit;
      cursor: pointer;
      text-decoration: none;
    }

    button{
      color: inherit;
      cursor: pointer;
      text-decoration: none;
      background-color: transparent;
      padding: 0 0 0;
    }

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
      width: 100%;
    }

    input{
      background-color: transparent;
      border: none;
      text-decoration: none;
      outline: none;
    cursor: pointer;
      color: #464d62;

    }


    textarea{
      background-color: transparent;
      border: none;
      text-decoration: none;
      outline: none;
      resize: none;
      color: #464d62;
    }

//plus
  .plus{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #006aed, #3f35cb);
    position: relative;

    &:before{
        content: "";
        position: absolute;
        width: 15px;
        height: 3px;
        background-color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &:after{
        content: "";
        position: absolute;
        width: 3px;
        height: 15px;
        background-color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

    &__small{
      border-radius: 50%;
      background-image: linear-gradient(to top, #006aed, #3f35cb);
      width: 21px;
      height: 21px;
      position: relative;
      margin-right: 20px;

      &:before{
        content: "";
        position: absolute;
        width: 9px;
        height: 2px;
        background-color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &:after{
        content: "";
        position: absolute;
        width: 2px;
        height: 9px;
        background-color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      

    }

  }

//add-elem

  .add-elem{
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #006aed, #3f35cb);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__icon{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: solid 2px #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 6%;


    }

    &__plus{
      width: 34px;
      height: 2px;
      background-color: #fff;
      position: relative;
      

      &:before{
        content: "";
        width: 2px;
        height: 34px;
        background-color: #fff;
        position: absolute;
        left: 15px;
        top: -15px;
      }
    }

    &__text{
      width: 30%;
      font-size: 18px;
      font-weight: bold;
      line-height: 1.67;
      color: #ffffff;
      text-align: center;
    }

  }


//header

  .header{
    background-image: linear-gradient(to top, #3e3e59, #454573);
  

    &__content{
      width: 100%;
      height: 80px;
      display: inline-grid;
      grid-template-columns: 10% 15% 25% 50%;
      grid-template-rows: 1fr;
      color: #fff;
      align-items: center;
    }

    &__img{
      width: 50px;
      height: 50px;
      

      &_i{
        border-radius: 50%;
      }

    }

    &__name{
      font-size: 18px;
      font-weight: 600;
      text-align: left;
    }

    &__admin{
      font-size: 14px;
      opacity: 0.5;
      text-align: left;
    }

    &__exit{
      font-size: 16px;
      opacity: 0.7;
      text-align: right;
      margin-right: 10%;
      line-height: 1.5;
      text-decoration: underline;

    }

  }

//nav

  .nav{

    height:80px;
    width: 100%;

    &__content{
      width: 35%;
      height: 80px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    &__item{
      width: 25%;
      height:100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &_active{
        color: #383bcf;
        border-bottom: 2px solid #383bcf;
        font-weight: 600;
      }

    
    }

  }

//about

  .about{
    background-color: #fafbfe;
    padding-bottom: 10%;

    &__content{
      padding-top: 3%;
      
    }
    

    &__header{
      display: flex;
      align-items: center;
      padding-bottom: 2%;
      
    }

    &__title{
      margin-right: 5%;
      white-space: nowrap;
    }

    &__link{
      font-size: 16px;
      font-weight: 600;
      color: #383bcf;
      display: flex;
      width: 50%;

      &_name{
        white-space: nowrap;
      }
    }

    &__block{
      display: grid;
      grid-template-columns: 48% 48%;
      grid-template-rows: 387px 387px;
      grid-gap: 3% 3%;
    }

    &__item{
      background-color: #fff;
      padding: 2% 5%;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);

      &_header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 15%;
        border-bottom: 1px solid #b9b9ba;
        padding-bottom: 2%;
      }

      &_input{
        width: 60%;
        height: 40px;
      
        font-size: 18px;
        font-weight: 600;
        line-height: 1.89;
        border-bottom: 1px solid #000;
      }

       &_new{
        width: 60%;
        height: 40px;
       
        font-size: 18px;
        font-weight: 600;
        line-height: 1.89;
        opacity: 0.5;
        border-bottom: 1px solid #000;
      }

      &_control{
        width: 10%;
        display: flex;
        justify-content: space-between;
      }

      &_link{
        width: 20%;
      }

      &_content{
        height: 66%;
      }

      &_footer{
        height: 15%;
        display: flex;
        justify-content: flex-end;
        padding-bottom: 2%;
       

        
      }

      &_skill{
        width: 45%;
        height: 40px;
        padding-left: 4%;
        padding-right: 2%;
         font-size: 16px;
        line-height: 1.89;
         border-bottom: 1px solid #000;
         margin-right: 5%;

      }

      &_percent{
        width: 15%;
        height: 40px;
        font-size: 16px;
        line-height: 1.89;
        border-bottom: 1px solid #000;
         text-align: center;
         margin-right: 2%;
      }

      &_add{
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
       
      }

    }

    &__table{
      padding-top: 5%;
      padding-bottom: 5%;
      width: 100%;
      height: 100%;

      &_row{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 20%;
        width: 100%;
        font-size: 16px;
        border-bottom: 1px solid transparent;

        &:hover{
          color: #3f35cb;
          border-bottom: 1px solid #3f35cb;
        }

        &:hover .about__table_svg{
          fill: #3f35cb;
        }
      }

      &_name{
        width: 60%;
      }

      &_percent{
        width: 10%;
        text-align: left;
      }

      &_block{
        width: 8%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

//work

  .work{
    background-color: #fafbfe;
    padding-bottom: 10%;
    padding-top: 5%;

    &__title{
      padding-bottom: 2%;
    }

    &__edit{
      background-color: #fff;
      padding: 2% 5%;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);

    }

    &__capture{
      font-size: 18px;
      font-weight: bold;
      height: 10%;
      border-bottom: 1px solid #b9b9ba;
      padding-bottom: 2%;
      margin-bottom: 1%;

    }

    &__part{
      display: flex;
    }

    &__left{
      width: 50%;
      padding: 2% 1%;
    }


    &__right{
      width: 50%;
      padding: 2% 1%;
    }

    &__download{
      width: 100%;
      height: 40%;
      border: dashed 1px #a1a1a1;
      background-color: #dee4ed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &_text{
        font-size: 16px;
        font-weight: 600;
        line-height: 2.13;
        color: rgba(65, 76, 99, 0.5);
        width: 40%;
        margin-bottom: 3%;
        text-align: center;
      }

      &_btn{
        width: 30%;
        height: 50px;
        border-radius: 25px;
        background-image: linear-gradient(to top, #006aed, #3f35cb);
        font-size: 16px;
        font-weight: bold;
        line-height: 3;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
      }
    }

    &__row{
      width: 100%;
      margin-bottom: 3%;
      font-size: 16px;
      font-weight: 600;
    }

    &__name{
      line-height: 1.88;
      color: rgba(65, 76, 99, 0.5);
    }

    &__input{
      height: 50px;
      width: 100%;
      line-height: 1.5;
      border-bottom: 1px solid #000;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
    }

    &__textarea{
      margin-top: 2%;
      width: 100%;
      padding: 5% 3%;
      border: 1px solid rgba(65, 76, 99, 0.5);
      resize: none;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.9;
    }

    &__tag{
      display: flex;
      justify-content: space-between;
      width: 60%;

      &_item{
        display: flex;
        height: 32px;
        border-radius: 15px;
        background-color: #f4f4f4;
        padding-left: 5%;
        padding-right: 3%;

      }

      &_name{
        font-size: 13px;
        font-weight: 600;
        line-height: 2.5;
        color: rgba(40, 51, 64, 0.7);
        margin-right: 12px;
      }

      &_btn{
        width: 15px;
        position: relative;

      }

      &_del{
        position: absolute;
        width: 14px;
        height: 1px;
        border-radius: 30%;
        transform: rotate(45deg);
        background-color: #464d62;

        &:before{
          content: "";
          position: absolute;
          width: 14px;
          height: 1px;
          border-radius: 30%;
          transform: rotate(270deg);
          background-color: #464d62;
          top: 0;
          left: 0;

        }

      }

     

    }

     &__btn{
        width: 60%;
        display: flex;
        justify-content: space-between;
        margin-top: 8%;

        &_submit{
          height: 60px;
          border-radius: 30px;
          background-image: linear-gradient(to top, #006aed, #3f35cb);
          font-size: 16px;
          font-weight: bold;
          line-height: 3;
          color: #ffffff;
          padding-right: 10%;
          padding-left: 10%;
        }

        &_reset{
          height: 60px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 600;
          line-height: 3;
          color: #383bcf;
          padding-right: 10%;
          padding-left: 10%;

        }
      }

    &__list{
      display: grid;
      grid-template-columns: 30% 30% 30%;
      grid-template-rows: 1fr;
      grid-gap: 2% 5%;
      margin-top: 5%;
    }

    &__item{
      background-color: #fff;
       box-shadow: 0 0 10px rgba(0,0,0,0.2);
       height: 556px;

       &:hover{
         opacity: 0.7;
       }

       &_img{
         height: 40%;
       }

       &_content{
         height: 60%;
         padding: 5% 5%;
         font-size: 16px;
         line-height: 1.88;
       }

       &_title{
         font-weight: bold;
         margin-bottom: 5%;
       }

       &_text{
         margin-bottom: 5%;
         font-weight: 600;
         color: rgba(65, 76, 99, 0.7);

       }

       &_link{
         color: #383bcf;
         font-weight: 600;
         margin-bottom: 7%;
       }

       &_btn{
         display: flex;
         justify-content: space-around;
         margin-top: 5%;

       }

       &_edit{
         display: flex;
       }

       &_name{
         color: rgba(65, 76, 99, 0.5);
         margin-right: 10px;

       }


    }

  }

//reviews

  .reviews{
    background-color: #fafbfe;
    padding-bottom: 10%;
    padding-top: 5%;

    &__title{
      padding-bottom: 2%;
    }

    &__edit{
      background-color: #fff;
      padding: 2% 5%;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);

    }

    &__capture{
      font-size: 18px;
      font-weight: bold;
      height: 10%;
      border-bottom: 1px solid #b9b9ba;
      padding-bottom: 2%;
      margin-bottom: 1%;

    }

    &__part{
      display: flex;
    }

    &__left{
      width: 30%;
      padding: 2% 1%;
    }


    &__right{
      width: 70%;
      padding: 2% 1%;
    }

    &__newuser{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      &_logo{
        width:200px;
        height: 200px;
        border-radius: 50%;
        background-color: #dee4ed;
        position: relative;
        margin-bottom: 8%;

      }
      &_svg{
        position: absolute;
        width: 84px;
        height: 112px;
        top: 25%;
        left: 30%;

      }

      &_btn{
        font-size: 16px;
        font-weight: 600;
        color: #383bcf;
        text-align: center;
      }

    }

    &__row{
      width: 100%;
      margin-bottom: 3%;
      font-size: 16px;
      font-weight: 600;

      &_dbl{
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

    }

    &__each{
        width: 48%;
      }

    &__name{
      line-height: 1.88;
      color: rgba(65, 76, 99, 0.5);
    }

    &__input{
      height: 50px;
      width: 100%;
      line-height: 1.5;
      border-bottom: 1px solid #000;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
    }

    &__textarea{
      margin-top: 2%;
      width: 100%;
      padding: 5% 3%;
      border: 1px solid rgba(65, 76, 99, 0.5);
      resize: none;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.9;
    }

    &__tag{
      display: flex;
      justify-content: space-between;
      width: 60%;

      &_item{
        display: flex;
        height: 32px;
        border-radius: 15px;
        background-color: #f4f4f4;
        padding-left: 5%;
        padding-right: 3%;

      }

      &_name{
        font-size: 13px;
        font-weight: 600;
        line-height: 2.5;
        color: rgba(40, 51, 64, 0.7);
        margin-right: 12px;
      }

      &_btn{
        width: 15px;
        position: relative;

      }

      &_del{
        position: absolute;
        width: 14px;
        height: 1px;
        border-radius: 30%;
        transform: rotate(45deg);
        background-color: #464d62;

        &:before{
          content: "";
          position: absolute;
          width: 14px;
          height: 1px;
          border-radius: 30%;
          transform: rotate(270deg);
          background-color: #464d62;
          top: 0;
          left: 0;

        }

      }

     

    }

     &__btn{
        width: 60%;
        display: flex;
        justify-content: space-between;
        margin-top: 8%;

        &_submit{
          height: 60px;
          border-radius: 30px;
          background-image: linear-gradient(to top, #006aed, #3f35cb);
          font-size: 16px;
          font-weight: bold;
          line-height: 3;
          color: #ffffff;
          padding-right: 10%;
          padding-left: 10%;
        }

        &_reset{
          height: 60px;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 600;
          line-height: 3;
          color: #383bcf;
          padding-right: 10%;
          padding-left: 10%;

        }
      }

    &__list{
      display: grid;
      grid-template-columns: 30% 30% 30%;
      grid-template-rows: 1fr;
      grid-gap: 2% 5%;
      margin-top: 5%;
    }

    &__item{
      background-color: #fff;
       box-shadow: 0 0 10px rgba(0,0,0,0.2);
       height: 380px;
      

       &:hover{
         opacity: 0.7;
       }


       &_content{
         padding: 5% 5%;
         font-size: 16px;
         line-height: 1.88;
         height: 75%;
       }

       &_title{
         font-weight: bold;
         margin-bottom: 5%;
       }

       &_text{
         margin-bottom: 5%;
         font-weight: 600;
         color: rgba(65, 76, 99, 0.7);
         height: 60%;

       }

       &_link{
         color: #383bcf;
         font-weight: 600;
         margin-bottom: 7%;
       }

       &_btn{
         display: flex;
         justify-content: space-around;
         margin-top: 10%;

       }

       &_edit{
         display: flex;
       }

       &_name{
         color: rgba(65, 76, 99, 0.5);
         margin-right: 10px;

       }


    }

    &__user{

      display: flex;
      
      height: 25%;
      align-items: center;
      
      padding: 3% 5%;
       border-bottom: 1px solid #dedee0;

      &_photo{
        width: 50px;
        height: 50px;
       
        margin-right: 5%;
        margin-left: 5%;

      }
      &_img{
        background-size: cover;
        border-radius: 50%;
      }
      

      &_name{
        font-size: 18px;
        font-weight: bold;
        
      }

      &_job{
        font-size: 16px;
        font-weight: 600;
        line-height: 1.88;
        color: rgba(65, 76, 99, 0.5);
      }
    }

  }

//login

  .login{

    background-image: url('../images/content/mountain.png');
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: -2;

    &:before{
      content: "";
      background-color: rgba(66, 79, 95, 0.7);
      position: absolute;
      height: 100vh;
      width: 100%;
      z-index: -1;
    }


  

   &__content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
        width: 30%;
        height: 45%;
        background-color: #fff;
         box-shadow: 0 0 10px rgba(0,0,0,0.2);
         padding: 2% 3%;

    }

    &__block{
      width: 95%;
    }

    &__capture{
      font-size: 36px;
      font-weight: 600;
      line-height: 1.67;
      text-align: center;
    }

    &__title{
       opacity: 0.3;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
        margin-left: 47px;
        margin-bottom: 15px;

    }

    &__part{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #464d62;
        padding-bottom: 3px;

        

        &:hover{
            border-bottom-color: #9300e8;
           
        }

        &:hover .form__icon{
            fill: #9300e8;
            opacity: 0.8
        }
        

    }

    &__icon{
        width: 30px;
        height: 30px;
        opacity: 0.3;

        
    }

    &__input{
        margin-left: 17px;
        font-size: 18px;
        font-weight: 700;
        line-height: 48px;
        width: 100%;

        &:checked~.form__icon{
            fill: #9300e8;
            
           
        }

        &_last{
            width: 100%;
            height: 60px;
            line-height: 22px;
           padding-top: 15px;
        }
    }

    &__button{
      
        width:60%;
        border-radius: 40px 5px;
        padding-bottom: 10px;
        padding-top: 10px;
        background-color: #ffffff;
        background-image: linear-gradient(to right, #9300e8 0%, #4a00ed 100%);
        color: #ffffff;
        font-family: "Open Sans";
        font-size: 18px;
        font-weight: 700;
        line-height: 48px;
        text-transform: uppercase;
        margin-top: 3%;
        cursor: pointer;

        
    }

     &__error {
        color: #9300e8;
        font-size: 14px;
        padding-top: 5px;
        padding-left: 47px;
        width: 100%;
    }

    &__exit{
        position: absolute;
        width: 19px;
        height: 19px;
        left: 62%;
        

        &_block{
          width: 19px;
        height: 1px;
        border-radius: 30%;
        transform: rotate(45deg);
        background-color: #464d62;
        

        &:before{
          content: "";
          position: absolute;
          width: 19px;
          height: 1px;
          border-radius: 30%;
          transform: rotate(270deg);
          background-color: #464d62;
          top: 0;
          left: 0;

        }
        }

      
    }

  }




</style>