import React from "react";
import logo from "../../assets/img/p_.svg"
import { Logo, SloganText, SloganWrapper } from "../../styles/Slogan";
function Slogan(){
    return(
        <SloganWrapper>
            <Logo src={logo} alt="logo" />
            <SloganText className="">Сделаю красиво!</SloganText>
        </SloganWrapper>
    )
}

export default Slogan;