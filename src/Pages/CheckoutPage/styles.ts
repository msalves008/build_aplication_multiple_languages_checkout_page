import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .modal {
    width: 100%;
    max-width: 1280px;
    height: 95%;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    .modal-title {
      margin: 1.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 150%;
      text-transform: uppercase;
      color: var(--text-body);
    }
    .items {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      width: 100%;
      height: auto;

      .item {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        align-items: center;

        img {
          width: 8rem;
          /* height: 10.3rem; */
        }
        .item-info {
          h3 {
            font-size: 1.2rem;
            line-height: 150%;
            font-weight: 300;
            color: var(--text-body);
          }
          span {
            font-size: 0.9rem;
            line-height: 150%;
            font-weight: normal;
            color: rgba(65, 65, 77, 0.6);
          }
        }
        .item-value {
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 150%;
          color: var(--text-body);
        }
      }
    }
    .divider {
      width: 100%;
      border-top: 1px solid #dce2e6;
      margin-bottom: 0.4rem;
    }
    .resume {
      width: 100%;
      height: auto;
      padding: 2rem;
      right: 10rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 0.4rem;
      .resume-itens {
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .resume-item {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 2fr 1fr;
          margin-bottom: 0.8rem;
          span {
            font-size: 0.9rem;
            line-height: 150%;
            font-weight: normal;
            color: var(--text-body);
          }
        }

        .amount {
          width: 100%;
          display: grid;
          grid-template-columns: 2fr 1fr;
          font-size: 0.9rem;
          line-height: 150%;
          font-weight: 600;
          color: var(--text-body);
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        button {
          width: 100%;
          height: 3rem;
          border-radius: 4px;
          mix-blend-mode: multiply;
          background-color: var(--primary);
          color: #fff;
          border: none;

          font-size: 1rem;
          font-weight: 500;
          line-height: 150%;
          text-transform: uppercase;
        }
      }
      h1 {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;
        color: var(--text-body);
      }
    }
  }
  @media(max-width: 1280px){
    .modal{
      width: 1140px;
      .items{
        .item{
          img{
            width: 5rem;
          }
        }
      }
      .resume{
        .resume-itens{
          button{
            height: 2.5rem;
            width:80%;
          }
        }
      }
    }
  }
  @media(max-width: 1024px){
    .modal{
      width: 960px;
    }
  }
  @media(max-width: 992px){
    .modal{
      width: 960px;
    }
  }
  @media(max-width: 768px){
    .modal{
      width: 720px;
      .items{
        .item{
          .item-info{
            h3{
              font-size: 1rem;
            }
            span{
              font-size: 0.7rem;
            }
          }
          .item-value{
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media(max-width: 576px){
    .modal{
      width: 540px;
      .resume{
        h1{
          font-size: 1rem;
        }
        .resume-itens{
          width: 50%;          
        }
      }
    }
  }
  @media(max-width: 480px){
    .modal{
      width: 460px;
    }
  }
  @media(max-width: 425px){
    .modal{
      width: 400px;
      .resume{
        flex-direction: column;
        .resume-itens{
          margin-top: 2rem;
          width: 100%;
        }
      }
    }
  }
  @media(max-width: 375px){
    .modal{
      width: 300px;
      .modal-title{
        font-size: 1.2rem;
        padding-bottom: 0;
        margin-bottom: 0;
      }
      .items{
        .item{
          img{
            width: 4rem;
          }
          .item-value{
            font-size: 0.8rem;
          }
          .item-info{
            h3{
              font-size: 0.8rem;  
            }
          }
        }
      }
      .resume{
        flex-direction: column;
        .resume-itens{
          margin-top: 2rem;
          width: 100%;
        }
      }
    }
  }
`;
