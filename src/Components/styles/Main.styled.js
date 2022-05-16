import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 0 1rem 7.5rem;
  & .img {
    margin-bottom: 1rem;
    
  }
  @media (min-width: 768px) {
    padding-left: 5vw;
    padding-right: 5vw;
    
      & .flex-container-1{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.43229vw;
      }
      & .text-1{
        order: -1;
        flex-basis: 31vw;
      }
      & .img1{
        width: 51.82vw;
      }
      // & .text-1 h2{
      //   padding-right: 3rem
      // }
      & .img{
        margin-bottom:0;
      }
      & .img1{
        flex-basis: 52vw;
      }
      & .flex-container-2{
        display: flex;
        justify-content: space-between;
        
      }
      
      & .img2{
        width: 52vw;
        margin-bottom:0;
        height: 100%;
        margin-right: 11px;
      }
      & .flex-container-2-inner{
        flex-basis: 41vw;
        display: flex;
        flex-direction: column;
        align-items: space-between;
        
      }
      & .img3{
        width: 100%;
      }
      & .text-2{
        padding: 11.0677vw 4.77604vw;
        margin-top: 5px
      }
`;
