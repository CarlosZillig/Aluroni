import styles from './Filtros.module.scss';
import filtros from './filtros.json'
import classNames from 'classnames'

//'Interface' mais dinamica, sempre que o 1 item do json mudar seu tipo, o IOpcao muda tambem
type IOpcao = typeof filtros[0];

interface IFiltros {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}: IFiltros) {
    function selecionarFiltro(opcao: IOpcao) {
        if(filtro === opcao.id) return setFiltro(null)
        return setFiltro(opcao.id)
    }
    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button 
                    className={classNames({
                            [styles.filtros__filtro]: true,
                            [styles['filtros__filtro--ativo']]: filtro === opcao.id
                        }
                    )} 
                    key={opcao.id} 
                    onClick={() => selecionarFiltro(opcao)}>{opcao.label}
                </button>
            ))}
        </div>
    )
}