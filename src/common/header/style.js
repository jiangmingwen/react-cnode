import styled from "styled-components";

export const HeaderNav = styled.div`
    width:100%;
    background:#444;
`

export const HeaderContainer = styled.div`
    width:90%;
    height:50px;
    padding: 5px;
    margin: 0 auto;
`

export const HeaderLeft = styled.div`
    height:40px;
   float: left;
   .logo {
       width:120px;
       height:40px;
       float:left;
   }
   form{
       float:left;
       margin-left:20px;
        input{
           height:24px;

           margin-top: 5px;
           outline:none;
           border-radius:24px;
           border:1px solid #d8d8d8;
           width:180px;
           padding: 1px 5px 1px 25px;
           background: #FFF url('http://static2.cnodejs.org/public/images/search.e53b380a.hashed.png') no-repeat 2px 3px;     
        } 
   }
`

export const HeaderRight = styled.div`
   float:right;
    height:40px;
    color:#FFF;
`

export const NavList = styled.ul`
   li{
       float:left;
       line-height:40px;
       padding: 0 .5em;
       color:#F3F3F3;
       font-size:14px;
       cursor: pointer;
       &:hover{
           background: #F3F3F3;
           border-radius:3px;
           color:#444;
           a{color:#444;}
       }
       a{
           color:#FFF;
           text-decoration:none;
       }
       position: relative;
       .badge{
           position:absolute;
           right: 0px;
           top: 0px;
           background: rgba(255,0,0,.6);
            padding:1px;
           line-height:18px;
           text-align:center;
           border-radius:50%;
           color:#F3F3F3;
       }
   }
`