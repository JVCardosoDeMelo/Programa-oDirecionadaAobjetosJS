const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos : function (){
        console.log(this.nome,this.email)
    }


}

user.exibirInfos()

// const exibir =  user.exibirInfos
// exibir()

const admin = {
    nome: 'Marina',
    email : 'm@m.com',
    role : 'admin',
    criarCurso() {
        console.log('curso criado!')
    }

}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()