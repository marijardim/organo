import './CampoTexto.css'

const CampoTexto = (props) => {

  const aoDigitar = (e) => {
    props.aoAlterar(e.target.value)
  }

  return (
    <div className="campo-texto">
      <label>
        {props.label}
      </label>
      <input value={props.valor} onChange={aoDigitar}
      required={props.obrigatorio} placeholder={props.placeholder}
      />
    </div>
  )
}

export default CampoTexto