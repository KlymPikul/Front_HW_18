// Выберите одну API из списка. Сделайте fetch запрос, разместите полученную от API информацию на странице html.
// IPfy
// IPify - это бесплатный API, который позволяет получить вам ваш текущий IP-адрес.
// Пример запроса:
// https://api.ipify.org?format=json



const ipAddressElement = document.querySelector('#ipAddress');

        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                const ipAddress = data.ip;
                ipAddressElement.textContent = `Your IP Address is: ${ipAddress}`;
            });
