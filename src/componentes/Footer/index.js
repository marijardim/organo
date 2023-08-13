import './Footer.css'

const Footer = () => {
  return ( <footer className='footer'>
      <div>
        <ul>
          <li>
            <a href='facebook.com'>
              <img src='/imagens/fb.png'/>
            </a>
          </li>
          <li>
            <a href='twitter.com'>
              <img src='/imagens/tw.png'/>
            </a>
          </li>
          <li>
            <a href='instagram.com'>
              <img src='/imagens/ig.png'/>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img src='/imagens/logo.png' />
      </div>
      <div>
        <p>Desenvolvido por Mariane.</p>
      </div>
    </footer>
  )
}

export default Footer