document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentName = document.getElementById('comment-name');
    const commentText = document.getElementById('comment-text');
    const commentsContainer = document.getElementById('comments-container');
    const commentsList = [];

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o comportamento padrão de envio do formulário

        const commentNameValue = commentName.value.trim();
        const commentContent = commentText.value.trim();
        if (commentNameValue !== '' && commentContent !== '') {
            const comment = {
                name: commentNameValue,
                content: commentContent
            };
            commentsList.push(comment); // Armazena o comentário na lista
            renderComments(); // Chama a função para renderizar os comentários
            commentName.value = ''; // Limpa o campo de nome após a publicação do comentário
            commentText.value = ''; // Limpa o campo de texto após a publicação do comentário
        }
    });

    function renderComments() {
        commentsContainer.innerHTML = ''; // Limpa o contêiner de comentários antes de renderizar

        commentsList.forEach(function (comment) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `<strong>${comment.name}:</strong> ${comment.content}`;
            commentsContainer.appendChild(commentElement);
        });
    }
});
