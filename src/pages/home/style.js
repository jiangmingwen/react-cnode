import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 0 auto;
    min-height: 400px;
    zoom: 1;
    &::after{
        content:"";
        clear:both;
        visibility:hidden;
        display:block;
        height:0;
    }
`

export const HomeLeft = styled.div`
    width: 75%;
    float:left;
`

export const HomeRight = styled.div`
    width: 22%;
    float: left;
    margin-left:16px;
`

export const RightCnodeGuide = styled.div`
    height: 130px;
    width: 100%;
    padding: 10px;
    background:#fff;
    margin-bottom: 16px;
    .content{
        margin: 10px;
    }
    .button {
        text-align:center;
    }
`

export const HomeContentHeader = styled.div`
    width: 100%;
    background: #F3F3F3;
    padding: 10px;
    
    span{
        padding: 0 24px;
        a{
            color: #80bd01;
            height:30px;
            line-height: 30px;
            text-decoration: none;
            display: inline-block;
            padding: 0 10px;
            border-radius: 3px;
            &.active {
                background: #80bd01;
                color: #FFF;

            }
        }
    }
`


export const HomeList = styled.div`
    width: 100%;
    padding: 10px ;
    background: #fff;
    line-height:30px;
    border-bottom: 1px solid #d8d8d8;
    display:flex;
    &:hover {
        background:#99df99;
        .title{
            span{
                border-bottom:1px solid #555;
                cursor: pointer;
            }
        }
    }
    img {
        width: 30px;
        height:30px;
        vertical-align:middle;
    }

    .count{
        width: 100px;
        text-align:center;
        font-size:13px;
        .count-reply{
            color: #444;
            font-size:15px;
        }
        .count-divider{
            color: #999;
        }
        .count-visit {
            color: #888;
        }
    }

    .topic {
        font-size: 14px;
        span{
            padding: 0 5px;
            margin-right: 16px;
            background: #e5e5e5;
            color: #999;
            border-radius: 3px;
            &.topic-good{
                background-color: #eb2f96;
                color: #fff;
            }

            &.topic-top {
                background-color: #80bd01;
                color: #fff;
            }
        }
    }
    .title{
        flex:auto;
        color: #555;
    }

    .time {
        color: #999;
        font-size: 12px;
    }
`;

export const PaginationContainer = styled.div`
    width:100%;
    height: 50px;
    background: #fff;
    text-align:right;
    padding: 9px 16px;
`