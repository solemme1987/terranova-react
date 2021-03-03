import  logoHome from '../assets/img/main/logo.png'

export const TextAndLogo = () => {
    // const [hour, sethour] = useState('');

    let date = new Date();

    let openClose="" ;

    if(date.getHours() >19 ){
        openClose='Abierto';
    }else{
        openClose='Cerrado';
    }

    return (
        <div className="tittleAndLogoBox">


            <div className="tittleBox" id="tittleBox">
                <h1 className="tittle">Bienvenido</h1>
                <p className="time">Horario: Lunes - Domingos</p>
                <p className="hours">6:30pm - 1:00am</p>
            </div>

            <div className="logoBox" id="logoBox">
                <img src={logoHome} alt="Logo Terranova" className="logo" />
                <p className="ranking">{openClose}</p>
            </div>

        </div>
    )
}
