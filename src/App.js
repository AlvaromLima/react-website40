import React, { Component } from "react";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            status: 2,
            bstatus: false
        };

        // Criar bind para o botão Entrar no sistema
        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair(){
        this.setState({bstatus: false});
    }

    entrar(){
        this.setState({bstatus: true});
    }

    render(){
        return(
            <div>
                {this.state.status === 1 &&
                    <h1>Bem-vindo ao sistema!</h1>
                }
                <div>
                    <h2>Curso React JS</h2>
                </div>
                {this.state.bstatus ?
                    <div> 
                        <h2>Bem-vindo ao sistema!</h2>
                        <button onClick={this.sair}>Sair</button>
                    </div> :
                    <div>
                        <h2>Olá visitante, faça o login!</h2>
                        <button onClick={this.entrar}>Entrar no sistema</button>
                    </div>  
                }
            </div>
        );
    }
}

export default App;
