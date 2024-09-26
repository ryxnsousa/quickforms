document.getElementById('adicionarPergunta').addEventListener('click', () => {
    const perguntasContainer = document.getElementById('perguntas');
    const perguntaDiv = document.createElement('div');
    perguntaDiv.classList.add('pergunta');

    const perguntaTipo = document.createElement('select');
    perguntaTipo.innerHTML = `
        <option value="resposta-curta">Resposta Curta</option>
        <option value="resposta-longa">Resposta Longa</option>
        <option value="multipla-escolha">Múltipla Escolha</option>
        <option value="caixa-selecao">Caixa de Seleção</option>
    `;

    const perguntaLabel = document.createElement('input');
    perguntaLabel.type = 'text';
    perguntaLabel.placeholder = 'Nova Pergunta';

    const alternativasContainer = document.createElement('div');
    alternativasContainer.classList.add('alternativas-container');

    perguntaTipo.addEventListener('change', () => {
        alternativasContainer.innerHTML = '';
        if (perguntaTipo.value === 'multipla-escolha' || perguntaTipo.value === 'caixa-selecao') {
            const alternativaInput = createAlternativeInput(perguntaTipo.value);
            alternativasContainer.appendChild(alternativaInput);
            alternativasContainer.appendChild(createAddAlternativeButton(perguntaTipo.value, alternativasContainer));
        }
    });

    perguntaDiv.appendChild(perguntaLabel);
    perguntaDiv.appendChild(perguntaTipo);
    perguntaDiv.appendChild(alternativasContainer);
    perguntaDiv.appendChild(createRemoveButton(perguntaDiv));

    perguntasContainer.appendChild(perguntaDiv);
});

function createAlternativeInput(tipo) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Alternativa';

    let opcao = null;
    if (tipo === 'multipla-escolha') {
        opcao = document.createElement('input');
        opcao.type = 'radio';
    } else if (tipo === 'caixa-selecao') {
        opcao = document.createElement('input');
        opcao.type = 'checkbox';
    }

    div.appendChild(opcao);
    div.appendChild(input);
    return div;
}

function createAddAlternativeButton(tipo, container) {
    const button = document.createElement('button');
    button.classList.add('add-alternativa');
    button.innerText = 'Adicionar Alternativa';

    button.addEventListener('click', () => {
        const alternativaInput = createAlternativeInput(tipo);
        container.insertBefore(alternativaInput, button);
    });

    return button;
}

function createRemoveButton(container) {
    const button = document.createElement('span');
    button.classList.add('remove-pergunta');
    button.innerText = 'Remover';

    button.addEventListener('click', () => {
        container.remove();
    });

    return button;
}

document.getElementById('enviar').addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const perguntas = document.getElementById('perguntas').children;

    console.log('Título:', titulo);
    console.log('Descrição:', descricao);

    Array.from(perguntas).forEach(p => {
        const perguntaTexto = p.querySelector('input[type="text"]').value;
        const perguntaTipo = p.querySelector('select').value;
        console.log('Pergunta:', perguntaTexto);
        console.log('Tipo:', perguntaTipo);

        if (perguntaTipo === 'multipla-escolha' || perguntaTipo === 'caixa-selecao') {
            const alternativas = Array.from(p.querySelectorAll('.alternativas-container input[type="text"]'));
            alternativas.forEach(alt => {
                console.log('Alternativa:', alt.value);
            });
        }
    });
});

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  document.getElementById('closeModal').addEventListener('click', closeModal);
  
  window.addEventListener('click', function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  document.getElementById('enviar').addEventListener('click', (e) => {
    e.preventDefault();
    
        console.log("Formulário enviado!");
  
        openModal();
  
        setTimeout(() => {
      closeModal();
      location.reload();
    }, 1500);
  });
  
