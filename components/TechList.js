import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {

    state = {
        newTech: '',
        techs: [
            'Node JS',
            'React JS',
            'React Native'
        ]
    };

    //Executado assim que o componente aparece em tela
    componentDidMount() {

    }

    //Executado sempre que houver alterações nas props ou estado
    componentDidUpdate() {

    }

    //quando se quer ter acesso a variavel this, é necessario declarar o componente no formato de arrow function
    handleInputChange = e => {
        this.props.tech
        this.setState({ newTech: e.target.value });
    }

    handleSubmit = e => {
        //Evita que ao submeter o formulário a tela atualize
        e.preventDefault();

        //... -> spread operator, obtém os valores do array
        // o codigo abaixo pega todos os valores de techs, e o adiciona como última posição do array  
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        })
        console.log(this.state.newTech);
    }

    handleDelete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t != tech) })
        console.log(tech);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.state.newTech}</h1>
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem
                            key={tech}
                            tech={tech}
                            onDelete={() => this.handleDelete(tech)}
                        />))}
                <TechItem />
                </ul>
                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTech}
                />
                <button type="submit">Enviar</button>
            </form>
        )
    };
}

export default TechList;