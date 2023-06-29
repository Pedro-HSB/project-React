import styles from "./CSS/Pessoa.module.css"

function Pessoa({nome,sobrenome,profissao,idade}){
    return(
        <div className={styles.PessoaContent}>
            <dl className={styles.PessoaList}>
                <dt>nome</dt>
                <dd>{nome}</dd>
                <br />
                <dt>sobrenome</dt>
                <dd>{sobrenome}</dd>
                <br />
                <dt>profissao</dt>
                <dd>{profissao}</dd>
                <br />
                <dt>idade</dt>
                <dd>{idade}</dd>
            </dl>
        </div>
    )
}

export default Pessoa