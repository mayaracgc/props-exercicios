import React from "react" ;
import {InfosUsuario} from './infosUsuario'

export function CardVideo(props){
    // function reproduzVideo() {
    // alert("O vídeo está sendo reproduzido");
    // }
    return(
        <div className="box-pagina-principal" onClick={props.reproduzVideo}>
            <img src={props.video.imagem} alt="" />
            <h4>{props.video.titulo}</h4>
            <InfosUsuario/>
        </div>
    )
} 