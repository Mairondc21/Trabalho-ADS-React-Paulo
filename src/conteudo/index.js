import './Conteudo.css'
import Botao from '../botao'

const Conteudo = ()=> {
    return(
        <main className='conteudo'>
            <div>
                <h2>Bem Vindo a P7 Eventos</h2>
                <h4>Selecione o tipo de Evento que deseja:</h4>
                <Botao/>
                <Botao/>
                <Botao/>
                <Botao/>
                <Botao/>
                <Botao/>

                <h4>Qual a quantidade de pessoas desejadas para seu evento:</h4>
                <Botao/>
                <Botao/>
                <Botao/>
                <Botao/>
                <Botao/>

                <h4>Selecione os servicos desejados:</h4>

            </div>
        </main>
    )
}

export default Conteudo