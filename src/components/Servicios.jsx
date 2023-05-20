import '../App.css'
import { Card, Grid} from "@nextui-org/react";
import Community from '../svg/community.svg'

const parrafoCM = "El Community Manager es el profesional responsable de construir y administrar la comunidad online y gestionar la identidad y la imagen de marca, creando y manteniendo relaciones estables y duraderas con sus clientes, sus fans en internet."

export default function Servicios() {    
    return (
    
    <>
    <h1 className="divisor">Servicios</h1>
    <Grid.Container gap={6}>
      <Grid sm={12} md={4} justify='center' css={{padding: "9"}}>
        <Card css={{padding: "0"}} justify='center' className='Card'>
          <Card.Header justify='center' css={{padding: "0", display:'block'}}>
          <h1 className='tituloCard'>Community Manager</h1>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{padding: "0", borderTop: "$borderWeights$light solid $gray800"}}>
            <p className='parrafoCard'>{parrafoCM}</p>
          </Card.Body>
          <Card.Divider />
        </Card>
      </Grid>
      <Grid sm={12} md={4}>
      <Card css={{padding: "0"}} justify='center' className='Card'>
          <Card.Header justify='center' css={{padding: "0", display:'block'}}>
          <h1 className='tituloCard'>Community Manager</h1>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{padding: "0", borderTop: "$borderWeights$light solid $gray800"}}>
            <p className='parrafoCard'>{parrafoCM}</p>
          </Card.Body>
          <Card.Divider />
        </Card>
      </Grid>
      <Grid sm={12} md={4}>
      <Card css={{padding: "0"}} justify='center' className='Card'>
          <Card.Header justify='center' css={{padding: "0", display:'block'}}>
          <h1 className='tituloCard'>Community Manager</h1>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{padding: "0", borderTop: "$borderWeights$light solid $gray800"}}>
            
            <p className='parrafoCard'>{parrafoCM}</p>
          </Card.Body>
          <Card.Divider />
        </Card>
      </Grid>
    </Grid.Container>
    </>
  
    )
  }
  