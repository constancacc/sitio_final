import "../css/index.css";


function Index() {

  function click(){
    let pop_up = document.querySelector("#popup-zona");
    pop_up.classList.toggle("hide");

    let bot_zonas = document.querySelector(".botao_zonas");
    bot_zonas.classList.toggle("flip");
  }  
  return(
    
    <div className="body">
    <div className="container_index">
       
      <div className="row" id="logo-mapa">
       
        <svg width="60" height="21" viewBox="0 0 60 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="51.5161" cy="11.8797" rx="5.83661" ry="6.32572" transform="rotate(142.401 51.5161 11.8797)" fill="url(#paint0_radial_122_3014)"/>
        <ellipse cx="51.0296" cy="11.4121" rx="5.83661" ry="6.32572" fill="url(#paint1_radial_122_3014)"/>
        <path d="M50.9853 18.7332C49.6418 18.7332 48.4402 18.4209 47.3806 17.7965C46.3398 17.172 45.5262 16.3016 44.9396 15.1852C44.353 14.0688 44.0597 12.801 44.0597 11.3818C44.0597 9.96259 44.353 8.69479 44.9396 7.57836C45.5451 6.44301 46.3682 5.56312 47.409 4.93868C48.4686 4.29531 49.6702 3.97363 51.0137 3.97363C52.3383 3.97363 53.5209 4.29531 54.5617 4.93868C55.6213 5.56312 56.4444 6.43355 57.031 7.54998C57.6366 8.6664 57.9393 9.93421 57.9393 11.3534C57.9393 12.7726 57.6366 14.0404 57.031 15.1568C56.4444 16.2732 55.6213 17.1531 54.5617 17.7965C53.5209 18.4209 52.3288 18.7332 50.9853 18.7332ZM51.0137 17.2004C52.5843 17.2004 53.8426 16.6611 54.7887 15.5826C55.7538 14.504 56.2363 13.0943 56.2363 11.3534C56.2363 10.1991 56.0187 9.18677 55.5835 8.31634C55.1483 7.42698 54.5333 6.73631 53.7385 6.24433C52.9438 5.75234 52.0355 5.50635 51.0137 5.50635C49.973 5.50635 49.0552 5.75234 48.2605 6.24433C47.4657 6.73631 46.8508 7.43644 46.4155 8.34472C45.9803 9.23408 45.7627 10.2464 45.7627 11.3818C45.7627 12.5171 45.9803 13.5295 46.4155 14.4188C46.8508 15.2893 47.4657 15.9705 48.2605 16.4625C49.0552 16.9544 49.973 17.2004 51.0137 17.2004Z" fill="black"/>
        <path d="M51.0137 17.2004C52.5843 17.2004 53.8426 16.6611 54.7887 15.5826C55.7538 14.504 56.2363 13.0943 56.2363 11.3534C56.2363 10.1991 56.0187 9.18677 55.5835 8.31634C55.1483 7.42698 54.5333 6.73631 53.7385 6.24433C52.9438 5.75234 52.0355 5.50635 51.0137 5.50635C49.973 5.50635 49.0552 5.75234 48.2605 6.24433C47.4657 6.73631 46.8508 7.43644 46.4155 8.34472C45.9803 9.23408 45.7627 10.2464 45.7627 11.3818C45.7627 12.5171 45.9803 13.5295 46.4155 14.4188C46.8508 15.2893 47.4657 15.9705 48.2605 16.4625C49.0552 16.9544 49.973 17.2004 51.0137 17.2004Z" fill="url(#paint2_radial_122_3014)"/>
        <path d="M36.3754 4.22917H38.0784V18.4494H36.3754V4.22917ZM37.1701 2.41261C36.8485 2.41261 36.5646 2.29908 36.3186 2.07201C36.0916 1.82602 35.978 1.54218 35.978 1.2205C35.978 0.879895 36.0916 0.596058 36.3186 0.368988C36.5646 0.122996 36.8485 0 37.1701 0C37.5107 0 37.7946 0.122996 38.0217 0.368988C38.2676 0.596058 38.3906 0.879895 38.3906 1.2205C38.3906 1.54218 38.2676 1.82602 38.0217 2.07201C37.7946 2.29908 37.5107 2.41261 37.1701 2.41261Z" fill="black"/>
        <path d="M28.3704 18.8466C27.008 18.8466 25.9862 18.4871 25.305 17.7681C24.6427 17.049 24.3115 15.9137 24.3115 14.362V0.709473H26.0145V4.25743H30.4708V5.79015H26.0145V14.362C26.0145 15.5541 26.2322 16.3489 26.6674 16.7463C27.1215 17.1247 27.6797 17.3139 28.342 17.3139C28.7394 17.3139 29.0705 17.295 29.3354 17.2572C29.6003 17.2004 29.8936 17.0774 30.2153 16.8882L30.9817 18.1938C30.2816 18.629 29.4111 18.8466 28.3704 18.8466Z" fill="black"/>
        <path d="M15.8893 4.22917H17.5923V18.4494H15.8893V4.22917ZM16.6841 2.41261C16.3624 2.41261 16.0785 2.29908 15.8325 2.07201C15.6055 1.82602 15.4919 1.54218 15.4919 1.2205C15.4919 0.879895 15.6055 0.596058 15.8325 0.368988C16.0785 0.122996 16.3624 0 16.6841 0C17.0247 0 17.3085 0.122996 17.5356 0.368988C17.7816 0.596058 17.9046 0.879895 17.9046 1.2205C17.9046 1.54218 17.7816 1.82602 17.5356 2.07201C17.3085 2.29908 17.0247 2.41261 16.6841 2.41261Z" fill="black"/>
        <path d="M5.33613 18.7896C3.42496 18.7896 1.64625 18.0516 0 16.5757L0.936662 15.4403C1.65571 16.0269 2.36531 16.4811 3.06544 16.8028C3.78449 17.1055 4.55085 17.2569 5.36452 17.2569C6.38633 17.2569 7.18107 17.0204 7.74875 16.5473C8.33534 16.0553 8.62864 15.393 8.62864 14.5604C8.62864 14.0306 8.49618 13.6049 8.23127 13.2832C7.98528 12.9426 7.64467 12.6682 7.20946 12.4601C6.79316 12.2519 6.03626 11.9208 4.93876 11.4666C3.93587 11.0503 3.16005 10.6908 2.6113 10.388C2.06255 10.0853 1.62733 9.7163 1.30565 9.28108C0.983968 8.82695 0.823127 8.25927 0.823127 7.57806C0.823127 6.46164 1.2205 5.57228 2.01524 4.91C2.80998 4.22879 3.86964 3.88818 5.19421 3.88818C5.87542 3.88818 6.54717 3.9828 7.20946 4.17202C7.89067 4.36125 8.4678 4.63562 8.94086 4.99515L8.23127 6.21565C7.36084 5.68582 6.37687 5.4209 5.27937 5.4209C4.40893 5.4209 3.73719 5.5912 3.26412 5.93181C2.79106 6.27241 2.55453 6.75494 2.55453 7.37938C2.55453 7.85244 2.67753 8.24035 2.92352 8.54311C3.18843 8.84587 3.51958 9.10132 3.91695 9.30947C4.33324 9.49869 5.01445 9.78253 5.96057 10.161C7.03915 10.5962 7.87174 10.9936 8.45834 11.3531C9.06386 11.6937 9.52746 12.1195 9.84914 12.6304C10.1897 13.1223 10.36 13.7373 10.36 14.4753C10.36 15.7809 9.89645 16.8311 8.96924 17.6259C8.06097 18.4017 6.84993 18.7896 5.33613 18.7896Z" fill="black"/>
        <defs>
        <radialGradient id="paint0_radial_122_3014" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.9723 4.21715) rotate(114.775) scale(15.4063 14.2151)">
        <stop stop-color="#0D5370"/>
        <stop offset="0.828125" stop-color="#0D5370" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint1_radial_122_3014" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.4857 3.74955) rotate(116.698) scale(18.7965 17.3432)">
        <stop stop-color="#EE6C59"/>
        <stop offset="0.677083" stop-color="#EE6C59" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="paint2_radial_122_3014" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.3886 12.5209) rotate(41.8396) scale(7.52786 7.07908)">
        <stop stop-color="#CEE6C0"/>
        <stop offset="1" stop-color="#CEE6C0" stop-opacity="0"/>
        </radialGradient>
        </defs>
        </svg>
      
      </div>
      <div className="row desktop"></div>

      <div className="desktop">
      <div className="row">
       
        <div className="col-lg-1"></div>
        <div className="col-lg-2">
          
          <div className="zona_container"> 
          <p className="zonas">Zona Centro</p>
          
          <svg className="botao_zonas" onClick={click} width="23" height="15" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector 5" d="M28 19.5L15.5 5L3 19.5" stroke="black" stroke-width="4"/>
          </svg>
          <img id="ret_zona" width="40%" src="imagens/mapa/zona.svg" alt="zona" />
          </div>
          
          <div id="popup-zona" className="hide">
            <span className="zona"><i>centro</i></span>
            <span>|</span>
            <span className="zona">norte </span>
            <span>|</span>
            <p className="zona">área metropolitana de Lisboa</p>
            <span className="zona">alentejo </span>
            <span>|</span>
            <span className="zona">algarve</span>

          

        </div>


         <div className="zona_container">
          <p className = "artistas_index"> Artistas</p>
          <img id="ret_artista" width="40%" src="imagens/mapa/artista.svg"  alt="artista" />
        </div>
        </div>
        
      </div>
 
      <div className="row">
        <img className="distrito" id="aveiro" src="imagens/mapa/Aveiro.png" alt="Aveiro"/>
        <img className="dot av_text" id="dotaveiro" src="imagens/mapa/dot.svg"  alt="dot_aveiro" />
        <p className="titulo av_text"> Aveiro </p>

        <img className="distrito" id="viseu" src="imagens/mapa/Viseu.png"  alt="Viseu"/>
        <p className="titulo vs_text"> Viseu </p>
        <img className="dot vs_text" src="imagens/mapa/dot2.svg"  alt="dot_viseu"/>

        <img className="distrito" id="guarda"src="imagens/mapa/Guarda.png" alt="Guarda"/>
        <p className="titulo gd_text"> Guarda</p>
        <img className="dot gd_text" src="imagens/mapa/dot2.svg"  alt="dot_guarda"/>

      </div>
      <div className="row">

        <img className="distrito" id="coimbra" src="imagens/mapa/Coimbra.png" alt="Coimbra"/>
        <img className="dot co_text" id="dotcoimbra" src="imagens/mapa/dot.svg"  alt="dot_coimbra"/>
        <p className="titulo co_text"> Coimbra </p>

      </div>

      <div className="row" id="ultdist" >

        <img className="distrito" id="leiria" src="imagens/mapa/Leiria.png" alt="Leiria"/>
        <p className="titulo lr_text"> Leiria </p>
        <img className="dot lr_text" src="imagens/mapa/dot 3.svg"  alt="dot_leiria"/>

        <img className="distrito" id="castelobranco" src="imagens/mapa/CasteloBranco.png" alt="CasteloBranco"/>
        <p className="titulo cb_text"> Castelo Branco </p>
        <img className="dot cb_text" id="dotcastelo" src="imagens/mapa/dot 3.svg"  alt="dot_castelo"/>

      </div>
    </div>

      <div className="mobile">
        <div className="row">
        <p className="zonas">zona centro</p>
        </div>
        <div className="row" id="svg-scroll" >
          <img id="mapa" src="imagens/mapa/mapa_mobile2.svg"  alt="mapa_mobile"/>
        </div>
      </div>
  </div>

  {/* <script src="js/main.js"></script>*/}
    </div>
  
    );
}

export default Index;
