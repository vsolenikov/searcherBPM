<template>

<div>


  <header>
    <h1><a href="#">Данные по сотрудникам</a></h1>
  </header>

  <div class="content">
    <aside>
      <nav>
        <ul class="menu">
          <li><a href="#">Главная страница</a></li>
          <li><a href="#">Не главная</a></li>
        </ul>
      </nav>
    </aside>

    <article>
      <h3>Наши сотрудники</h3>
        <div>
          <Select2 v-model="myValue" :options="myOptions" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />

             <h4>Value: {{ myValue }}</h4>


        </div>

      <table>
        <tr>
          <th colspan="2">ФИО</th>
          <th>Отдел</th>
          <th>Почта</th>
          <th>Должность</th>
        </tr>
          <tr>
          <td><img src="https://ioztv.com/assets/img/mystation/member_empty.png"></td>
          <td>
            <div :class="{ former: myValue}">
              Вы можете добавить сотрудника:
                <button id="myBtn">Открыть окно</button>


                <div id="myModal" class="modal">


                    <div class="modal-content">
                        <div class="modal-header">
                            <span class="close">&times;</span>
                            <h2>Шапка модального окна</h2>
                        </div>
                        <div class="modal-body">
                            <p>Какой-то текст в теле модального окна</p>
                            <p>Ещё другой текст...</p>
                        </div>
                        <div class="modal-footer">
                            <h3>Футер модального окна</h3>
                        </div>
                    </div>

                </div>
            </div>
          {{ myValue }}</td>
          <td>{{ otdel }}</td>
          <td>{{ email }}</td>
          <td>{{ dolzh }}</td>
        </tr>


      </table>
    </article>
  </div>

  <footer>
    <div class="copyright">
      <p>Учебный материал от сайта</p>
    </div>
  </footer>
  <script type="application/javascript" src="main.js"></script>

</div>
</template>


<script>
  var modal = document.getElementById('myModal');


  var btn = document.getElementById("myBtn");


  var span = document.getElementsByClassName("close")[0];


  btn.onclick = function() {
    modal.style.display = 'block';
  }


  span.onclick = function() {
    modal.style.display = "none";
  }


  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
</script>
<script>
    import Select2 from 'v-select2-component';

    export default {
        // declare Select2Component
        components: {Select2},
        data() {

            return {
              href:"https://yandex.ru/search/?text=dom%20события%20список&lr=16&src=suggest_T",
                myValue: "",
                myOptions: ['Смирнова Наталия Алексеевна', 'Гудкова Анна Александровна', 'Абрамова Юлия Валерьевна'],// or [{id: key, text: value}, {id: key, text: value}]
                otdels: ['Бухгалтерия', 'Информатика', 'Закупки'],
                Sotruds: [
                    {
                        sotrId: 1,
                        fiosotr: 'Смирнова Наталия Алексеевна',
                        otdelsotr: 'Бухгалтерия',
                        emailsotr: 'smirnove@y.ru',
                        dolsotr: 'Преподаватель литературы'
                    },
                    {
                        sotrId: 2,
                        fiosotr: 'Гудкова Анна Леонидовна',
                        otdelsotr: 'Информатика',
                        emailsotr: 'gudok@y.ru',
                        dolsotr: 'Преподаватель информатики'
                    },
                    {
                        sotrId: 3,
                        fiosotr: 'Смирнова Надежда Геннадьевна',
                        otdelsotr: 'Бухгалтерия',
                        emailsotr: 'nadya@y.ru',
                        dolsotr: 'Преподаватель литературы'
                    },



                ],


                methods: {
                    myChangeEvent(val) {
                        console.log(val);
                    },
                    mySelectEvent({id, text}) {
                        console.log({id, text})
                    }

                },


            }


        }

    }

</script>

<style>

    body {font-family: Arial, Helvetica, sans-serif;}

    #myBtn {
        background-color: #9C27B0;
        color: white;
        padding: 12px 16px;
        font-size: 18px;
        font-weight: bold;
        border: none;
        cursor: pointer;
        width: 180px;
    }


    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }


    .modal-content {
        position: relative;
        background-color: #E1BEE7;
        margin: auto;
        padding: 0;
        border: 5px solid #7B1FA2;
        width: 50%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 0.4s;
        animation-name: animatetop;
        animation-duration: 0.4s
    }


    @-webkit-keyframes animatetop {
        from {top:-300px; opacity:0}
        to {top:0; opacity:1}
    }

    @keyframes animatetop {
        from {top:-300px; opacity:0}
        to {top:0; opacity:1}
    }


    .close {
        color: white;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

    .modal-header {
        padding: 2px 16px;
        background-color: #9C27B0;
        color: white;
    }

    .modal-body {padding: 2px 16px;}

    .modal-footer {
        padding: 2px 16px;
        background-color: #9C27B0;
        color: white;
    }

  .former{
    display:none;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
    .select2-container{
        width:80% !important;
    }
</style>
