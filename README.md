<h2>Фуллстек-приложение с рецептами блюд, которое будет использовать
Django Rest Framework, автодокументацию OpenAPI+Swagger и react-router</h2>
<h2>Пользователь не может создавать рецепты:
рецепты распределены по категориям и отображаются в клиенте и в API</h2>
<h2>У каждого блюда и каждой категории должна быть своя страница:
с главной страницы можно перейти на любую из категорий,
а из категории — на любой рецепт этой категории.</h2>

<h3>В папке - клиентская часть приложения</h3>
<hr>

<ol>
<li><h3>python3 -m venv venv</h3></li>
<li><h3>source venv/bin/activate</h3></li>
<li><h3>python -m pip install -r requirements.txt</h3></li>
<li><h3>создать файл в корневой директории с названием ".env"</h3></li>
<li><h3>в файл .env добавить переменную "SECRET_KEY" - См .env.example
(без этого ничего работать не будет)</h3></li>
<li><h3>python manage.py migrate</h3></li>
<li><h3>python manage.py createsuperuser</h3></li>
<ol>
<li><h3>Переходим в директорию "fontend". cd fontend</h3></li>
<li><h3>Выполняем поманду npm install</h3></li>
<li><h3>npm run start</h3></li>
</ol>



<li><h3>cd cookbook</h3></li>


</ol>


<h3>Документацию API: http://127.0.0.1:8000/openapi</h3>