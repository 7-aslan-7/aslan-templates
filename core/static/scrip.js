$(document).ready(function() {
    $('#profile-form').on('submit', function(event) {
        event.preventDefault();

        const formData = {
            username: $('#username').val(),
            email: $('#email').val(),
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val()
        };

        $.ajax({
            url: '/api/v1/auth/users/me/', // URL для обновления профиля
            type: 'PATCH', // Метод запроса
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('authToken') // Токен авторизации
            },
            data: formData,
            success: function(response) {
                $('#message').text('Profile updated successfully').css('color', 'green');
            },
            error: function(error) {
                $('#message').text('Error updating profile').css('color', 'red');
            }
        });
    });
});
