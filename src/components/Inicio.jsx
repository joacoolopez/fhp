import '../App.css'
import Linkedin from '../svg/linkedin.svg'
import Instagram from '../svg/instagram.svg'
import Whatsapp from '../svg/whatsapp.svg'



export default function Inicio() {    
    return (
  
    <div>
    <h1 className="titulo">Franco Hernan Perrone</h1>
    <h1 className='subtitulo'>Community Manager</h1>
    <p className='parrafo'>En constante crecimiento e innovación. Nuestro objetivo principal, es impulsar la imagen de tu empresa en internet, mediante diferentes estrategias online que llevamos a cabo luego de exhaustivos análisis de tu marca y el targuet de tus potenciales clientes.</p>
    <div className='contenedorRedSocial'>
        <img src={Whatsapp} className='logoRedSocial'></img>
        <img src={Instagram} className='logoRedSocial'></img>
        <img src={Linkedin} className='logoRedSocial'></img>
    </div>
    </div>
  
    )
  }
  