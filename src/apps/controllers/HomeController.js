const alunos = []; // Array para armazenar alunos em memória

class HomeController {
  // Página inicial com a lista de alunos
  async inicio(req, res) {
    res.render('home/index', { alunos });
  }

  // Exibe o formulário de cadastro de novo aluno
  async cadastrar(req, res) {
    res.render('home/form'); // Formulário vazio
  }

  // Método separado para salvar novo cadastro
  async salvarCadastro(req, res) {
    const { nome, email, matricula } = req.body;

    // Verifica se a matrícula já está cadastrada
    const matriculaExistente = alunos.find(aluno => aluno.matricula === matricula);
    if (matriculaExistente) {
      console.log("Erro: Matrícula já cadastrada!");
      req.flash('errorMessage', 'Matrícula já cadastrada!');
      return res.redirect('/home/form'); // Redireciona para o formulário de cadastro
    }

    // Adiciona um novo aluno
    alunos.push({ nome, email, matricula });
    res.redirect('/home/');
  }

  // Exibe o formulário de edição de aluno existente
  async editar(req, res) {
    const { id } = req.params; // Pega o id da rota
    const aluno = alunos[id]; // Busca o aluno pelo ID
    if (aluno) {
      // Adiciona o ID ao objeto do aluno
      const alunoComId = { ...aluno, id };
      res.render('home/form', { aluno: alunoComId }); // Renderiza o formulário de edição com os dados do aluno
    } else {
      res.status(404).send('Aluno não encontrado'); // Retorna erro se o aluno não for encontrado
    }
  }

  // Método separado para salvar edição de aluno existente
  async salvarEdicao(req, res) {
    const { id, nome, email, matricula } = req.body; // Pega os dados do corpo da requisição
    //console.log("Dados de edição recebidos:", req.body); // Log dos dados recebidos
    const index = parseInt(id, 10); // Converte para número
    const alunoExistente = alunos[index]; // Busca o aluno pelo índice

    if (!alunoExistente) {
      return res.status(404).send('Aluno não encontrado'); // Retorna erro se o aluno não for encontrado
    }

    // Verifica se a matrícula já está cadastrada, exceto para o aluno atual
    const matriculaExistente = alunos.find((aluno, idx) => aluno.matricula === matricula && idx !== index);
    if (matriculaExistente) {
      console.log("Erro: Matrícula já cadastrada!");
      req.flash('errorMessage', 'Matrícula já cadastrada!');
      return res.redirect(`/home/editar/${id}`); // Redireciona para o formulário de edição
    }

    // Atualiza os dados do aluno
    alunos[index] = { nome, email, matricula };
    res.redirect('/home/'); // Redireciona após a edição
  }

  async excluir(req, res) {
    const { id } = req.params; // Pega o id da rota
    const index = parseInt(id, 10); // Converte para número

    if (index >= 0 && index < alunos.length) {
      alunos.splice(index, 1); // Remove o aluno do array
      console.log(`Aluno com ID ${id} excluído com sucesso.`);
      res.redirect('/home/'); // Redireciona após a exclusão
    } else {
      res.status(404).send('Aluno não encontrado'); // Retorna erro se o aluno não for encontrado
    }
  }
}

module.exports = HomeController;
