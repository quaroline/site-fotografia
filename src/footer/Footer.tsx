import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        {new Date().getFullYear()} &copy; Carolynne Padilha Fotografia | Todos os direitos reservados | <a href={location.host}>{location.host}</a>
      </div>
    </footer>
  )
}

export default Footer