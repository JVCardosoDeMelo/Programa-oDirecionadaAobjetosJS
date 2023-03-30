import User from "./User.js" ;

export default class Docente extends User{
    constructor (nome,email,nascimento , role = 'docente' ,ativo = true ){
    super( nome,email,nascimento,role,ativo)
    }

    aprovaestudante(estudante,curso){
        return `estudante ${estudante} aprovado em ${curso} `
    }
    
}

