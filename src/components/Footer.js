/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Sateesh Varma</h1>
          <PText>
            I am a result-oriented software engineer from Rewa, India. I have 2+
            year’s of hands-on experience in different programming languages and
            client relationship management. Insightful Knowledge of JAVA and SQL
            technologies.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: "Home",
                link: "/",
                type: "Link",
              },
              {
                type: "Link",
                title: "About",
                link: "/about",
              },
              {
                type: "Link",
                title: "Projects",
                link: "/projects",
              },
              {
                type: "Link",
                title: "Contact",
                link: "/contact",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+919109576423",
                link: "tel:+919109576423",
              },
              {
                title: "sateeshvarma02@gmail.com",
                link: "mailto:sateeshvarma02@gmail.com",
              },
              {
                title: "Rani talab, REWA(M.P.), India",
                link:
                  "https://www.google.com/maps/place/Rani+Talab+Kalika+Mandir/@24.525686,81.2969467,16z/data=!4m22!1m16!4m15!1m6!1m2!1s0x39845a4d9bf5552d:0x27f4b583fbbfdf20!2sRani+Talab+Kalika+Mandir!2m2!1d81.2967189!2d24.5243197!1m6!1m2!1s0x39845a4d9bf5552d:0x27f4b583fbbfdf20!2sRani+Talab+Kalika+Mandir,+Pandan+Tola,+Rewa,+Madhya+Pradesh+486001!2m2!1d81.2967189!2d24.5243197!3e3!3m4!1s0x39845a4d9bf5552d:0x27f4b583fbbfdf20!8m2!3d24.5243197!4d81.2967189",
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: "Facebook",
                link: "http://www.facebook.com/sateesh.varma.18/",
              },
              {
                title: "Twitter",
                link: "http://twitter.com/sateesh18206522",
              },
              {
                title: "Instagram",
                link: "http://www.instagram.com/sateeshvarma73",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2021 - Sateesh Varma</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
