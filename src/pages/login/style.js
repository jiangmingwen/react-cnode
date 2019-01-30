import styled from 'styled-components';

export const LoginHeader = styled.div`
    line-height:50px;
    background: #F6F6F6;
    height:50px;
    span{
        padding: 0 10px;
        a {
            color: #80bd01;
            text-decoration:none;
        } 
    }
`;

export const LoginContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 350px;
`;



export const LoginLeft = styled.div`
    width: 75%;
    float:left;
    height:100%;
    background: #FFF;
`;

export const LoginRight = styled.div`
    width: 22%;
    float:right;
    height:100%;
    background: #FFF;
`;

export const LoginContent = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:300px;
    width:100%;
    .form-control {
        margin: 32px 0;
        width:100%;
        text-align:center;
        input{
            padding: 1px 10px;
            line-height:24px;
            margin-left:16px;
            box-shadow: 0 0 2px rgba(60,60,60,.5);
            border:0;
            border-radius:3px;
            outline:none;
        }

        button {
            padding:5px 24px;
            background-color: #008BC9;
            border:0;
            border-radius: 3px;
            color:#FFF;
            cursor:pointer;
            &:hover {
                background-color: #007ab8;
                transition: all .3s;
            }
        }
    }
`;

export const LoginAboutContent = styled.div`
    padding: 32px 16px 48px;
    ul{
        margin-left: 20px;
    }
    li{
        list-style: square;
        margin: 10px 0;
    }
`